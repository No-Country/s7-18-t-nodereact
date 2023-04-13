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
        res.json({ id: savedUser.id, name: savedUser.name, email: savedUser.email });
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
        res.status(403).json({ msg: error.message });
    }
    if (result.isValid) {
        const { username, id, email } = result.user;
        const userData = { username, email, id };
        const token = generateJWT(userData);
        userData.token = token;
        res.json(userData);
    } else {
        const error = new Error("La contraseña es incorrecta");
        res.status(403).json({ msg: error.message });
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

export {
    registerUser,
    userProfile,
    confirmUser,
    authenticateUser,
    forgottenPassword,
    newUserPassword,
    addSavedPost,
    addFavoritePost,
    followUser
}