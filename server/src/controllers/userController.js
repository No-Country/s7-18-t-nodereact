import User from "../models/User.js"
import generateJWT from "../helpers/generateJWT.js";
import generateId from "../helpers/generateId.js";
import emailRegister from "../helpers/emailRegister.js";
import emailNewPassword from "../helpers/forgottenPasswordEmail.js";
import comparePassword from "../helpers/comparePassword.js";

const registerUser = async (req, res) => {
    const { email, name } = req.body;
    const existUser = await User.findOne({ email });

    if (existUser) {
        const error = new Error("Usuario ya registrado");
        res.status(400).json({ msg: error.message });
    }

    try {
        const user = new User(req.body);
        const savedUser = await user.save();

        emailRegister({
            email,
            name,
            token: savedUser.token
        });
        res.status(201).json({ id: savedUser.id, name: savedUser.name, email: savedUser.email });
    } catch (error) {
        console.log(error)
    }

}

const userProfile = async (req, res) => {
    try {
        const profile = await User.findById(req.params.id).lean();
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const confirmUser = async (req, res) => {
    const { token } = req.params;
    const userConfirm = await User.findOne({ token });

    if (!userConfirm) {
        const error = new Error("Token no válido");
        res.status(400).json({ msg: error.message });
    }
    try {
        userConfirm.token = null;
        userConfirm.confirmed = true;
        await userConfirm.save();
        res.json({ msg: "Usuario confirmado correctamente" })
    } catch (error) {
        console.log(error)
    }
}

const authenticateUser = async (req, res) => {
    const { email, password } = req.body;
    const result = await comparePassword({ email, password })
    if (!result) {
        const error = new Error("El usuario no existe");
        res.status(404).json({ msg: error.message });
    }
    if (result.isValid) {
        const { id, email, name, img_avatar: imgAvatar } = result.user;
        const userData = { email, id, name, imgAvatar };
        const token = generateJWT(userData);
        userData.token = token;
        res.json(userData);
    } else {
        const error = new Error("La contraseña es incorrecta");
        res.status(401).json({ msg: error.message });
    }
}

const forgottenPassword = async (req, res) => {
    const { email } = req.body;
    const existUser = await User.findOne({ email });
    if (!existUser) {
        const error = new Error("El usuario no existe");
        res.status(400).json({ msg: error.message });
    }
    try {
        existUser.token = generateId();
        await existUser.save();
        emailNewPassword({
            email,
            name: existUser.name,
            token: existUser.token
        })
        res.json({
            msg: "Se ha enviado un email con las instrucciones para cambiar la contraseña"
        });
    } catch (error) {
        console.log(error);
    }
}

const newUserPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    const user = await User.findOne({ token });
    if (!user) {
        const error = new Error("Hubo un error");
        res.status(400).json({ msg: error.message });
    }
    try {
        user.token = null;
        user.password = password;
        await user.save();
        res.json({ msg: "Password modificado correctamente" });
    } catch (error) {
        console.log(error)
    }
}

const addSavedPost = async (req, res) => {
    const { postId } = req.body;
    const userId = req.user.id;

    try {
        await User.findByIdAndUpdate(userId, { $addToSet: { savedPosts: postId } });
        res.json({ msg: "Post guardado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
}

const addFavoritePost = async (req, res) => {
    const { postId } = req.body;
    const userId = req.user.id;

    try {
        await User.findByIdAndUpdate(userId, { $addToSet: { favorites: postId } });
        res.json({ msg: "Post añadido a favoritos correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
}

const followUser = async (req, res) => {
    try {
        const { userId, userToFollowId } = req.body;

        if (!userId || !userToFollowId) {
            return res
                .status(400)
                .json({ message: "Debe proporcionar los IDs de usuario" });
        }

        if (userId === userToFollowId) {
            return res
                .status(400)
                .json({ message: "No puedes seguirte a ti mismo" });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        if (user.following.includes(userToFollowId)) {
            return res.status(400).json({ message: "Ya sigues a este usuario" });
        }

        user.following.push(userToFollowId);
        await user.save();
        return res
            .status(200)
            .json({ message: "Has comenzado a seguir a este usuario" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

const unfollowUser = async (req, res) => {
    try {
        const { userId, userToUnfollowId } = req.body;

        if (!userId || !userToUnfollowId) {
            return res
                .status(400)
                .json({ message: "Debe proporcionar los IDs de usuario" });
        }

        if (userId === userToUnfollowId) {
            return res
                .status(400)
                .json({ message: "No puedes dejar de seguirte a ti mismo" });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        if (!user.following.includes(userToUnfollowId)) {
            return res.status(400).json({ message: "No sigues a este usuario" });
        }

        user.following = user.following.filter(
            (followedUserId) => followedUserId !== userToUnfollowId
        );

        await user.save();

        return res
            .status(200)
            .json({ message: "Has dejado de seguir a este usuario" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
};


const getFollowing = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId).populate(
            "following",
            "name email"
        );

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        return res.status(200).json(user.following);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

const addFavoriteUser = async (req, res) => {
    try {
        const { userId, userToAddId } = req.body;

        if (!userId || !userToAddId) {
            return res
                .status(400)
                .json({ message: "Debe proporcionar los IDs de usuario" });
        }

        if (userId === userToAddId) {
            return res
                .status(400)
                .json({ message: "No puedes agregarte a ti mismo a favoritos" });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        if (user.favoriteUsers.includes(userToAddId)) {
            return res
                .status(400)
                .json({ message: "Este usuario ya está en tus favoritos" });
        }

        user.favoriteUsers.push(userToAddId);

        await user.save();

        return res
            .status(200)
            .json({ message: "Usuario agregado a favoritos correctamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

const removeFavoriteUser = async (req, res) => {
    try {
        const { userId, userToRemoveId } = req.body;

        if (!userId || !userToRemoveId) {
            return res
                .status(400)
                .json({ message: "Debe proporcionar los IDs de usuario" });
        }

        if (userId === userToRemoveId) {
            return res
                .status(400)
                .json({ message: "No puedes eliminarte a ti mismo de favoritos" });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        if (!user.favoriteUsers.includes(userToRemoveId)) {
            return res
                .status(400)
                .json({ message: "Este usuario no está en tus favoritos" });
        }

        user.favoriteUsers = user.favoriteUsers.filter(
            (id) => id.toString() !== userToRemoveId.toString()
        );

        await user.save();

        return res
            .status(200)
            .json({ message: "Usuario eliminado de favoritos correctamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

export {
    registerUser,
    userProfile,
    confirmUser,
    authenticateUser,
    forgottenPassword,
    newUserPassword,
    addSavedPost,
    addFavoritePost,
    followUser,
    unfollowUser,
    getFollowing,
    addFavoriteUser,
    removeFavoriteUser
}