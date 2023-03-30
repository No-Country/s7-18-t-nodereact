import User from "../models/User.js"
import generateJWT from "../helpers/generateJWT.js";
import generateId from "../helpers/generateId.js";
import registerEmail from "../helpers/emailRegister.js";
import emailNewPassword from "../helpers/forgottenPasswordEmail.js";

const registerUser = async(req, res) => {
    const {email, name } = req.body;
    const existUser = await User.findOne({email});

    if(existUser){
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({msg: error.message});
    }

    try {
        const user = new User(req.body);
        const savedUser = await user.save();

        registerEmail({
            email, 
            name,
            token: savedUser.token
        });
        res.json(savedUser);
        
    } catch (error) {
        console.log(error)
    }
        
    }

const userProfile = async (req, res) => {
    try {
        const profile = await User.findbyIdI(req.params.id).lean();
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const confirmUser = async (req, res) => {
    const {token} = req.params;
    const userConfirm = await User.findOne({token});

    if(!userConfirm){
        const error = new Error("Token no válido");
        return res.status(400).json({msg: error.message});
    }

    try {
        userConfirm.token = null;
        userConfirm.confirmed = true;
        await userConfirm.save();
        res.json({msg: "Usuario confirmado correctamente"})
    } catch (error) {
        console.log(error)
    }
}

const authenticateUser = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        const error = new Error("El usuario no existe");
        return res.status(403).json({msg: error.message});
    }
    if(await user.checkUserPassword(password)){
        res.json({token: generateJWT(user.id)});
    }else{
        const error = new Error("La contraseña es incorrecta");
        return res.status(403).json({msg: error.message});
    }
}

const forgottenPassword = async (req, res) => {
    const {email} = req.body;
    const existUser = await User.findOne({email});
    if(!existUser){
        const error = new Error("El usuario no existe");
        return res.status(400).json({ msg: error.message });
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

const checkUserToken = async (req, res) => {
    const {token} = req.params;
    const validToken = await User.findOne({token});
    if(validToken){
        res.json({msg: "Token válido, el usuario existe"});
    }else{
        const error = new Error("Token no válido");
        return res.status(400).json({msg: error.message});
    }
}

const newUserPassword = async (req, res) => {
    const {token} = req.params;
    const {password} = req.body;
    const user = await User.findOne({token});
    if(!user){
        const error = new Error("Hubo un error");
        res.status(400).json({ msg: error.message });
    }
    try {
        user.token = null;
        user.password = password;
        await user.save();
        res.json({msg: "Password modificado correctamente"});
    } catch (error) {
        console.log(error)
    }
}

export {
    registerUser,
    userProfile,
    confirmUser,
    authenticateUser,
    forgottenPassword,
    checkUserToken,
    newUserPassword,
}