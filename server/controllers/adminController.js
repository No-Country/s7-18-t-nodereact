import Admin from "../models/Admin.js"
import generateJWT from "../helpers/generateJWT.js";
import generateId from "../helpers/generateId.js";
import registerEmailAdmin from "../helpers/emailRegisterAdmin";
import emailNewPasswordAdmin from "../helpers/forgottenPasswordEmailAdmin.js";

const registerAdmin = async(req, res) => {
    const {email, name } = req.body;
    const existAdmin = await Admin.findOne({email});

    if(existAdmin){
        const error = new Error("Administrador ya registrado");
        return res.status(400).json({msg: error.message});
    }

    try {
        const admin = new Admin(req.body);
        const savedAdmin = await admin.save();

        registerEmailAdmin({
            email, 
            name,
            token: savedAdmin.token
        });
        res.json(savedAdmin);
        
    } catch (error) {
        console.log(error)
    }
        
    }

const adminProfile = async (req, res) => {
    try {
        const profile = await Admin.findbyIdI(req.params.id).lean();
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const confirmAdmin= async (req, res) => {
    const {token} = req.params;
    const adminConfirm = await Admin.findOne({token});

    if(!adminConfirm){
        const error = new Error("Token no válido");
        return res.status(400).json({msg: error.message});
    }

    try {
        adminConfirm.token = null;
        adminConfirm.confirmed = true;
        await adminConfirm.save();
        res.json({msg: "Usuario confirmado correctamente"})
    } catch (error) {
        console.log(error)
    }
}

const authenticateAdmin = async (req, res) => {
    const {email, password} = req.body;
    const user = await Admin.findOne({email});
    if(!user){
        const error = new Error("El administrador no existe");
        return res.status(403).json({msg: error.message});
    }
    if(await admin.checkAdminPassword(password)){
        res.json({token: generateJWT(user.id)});
    }else{
        const error = new Error("La contraseña es incorrecta");
        return res.status(403).json({msg: error.message});
    }
}

const forgottenPassword = async (req, res) => {
    const {email} = req.body;
    const existAdmin = await Admin.findOne({email});
    if(!existAdmin){
        const error = new Error("El administrador no existe");
        return res.status(400).json({ msg: error.message });
    }
    try {
        existAdmin.token = generateId();
        await existAdmin.save();
        emailNewPasswordAdmin({
            email,
            name: existAdmin.name,
            token: existAdmin.token
        })
        res.json({
            msg: "Se ha enviado un email con las instrucciones para cambiar la contraseña"
        });
    } catch (error) {
        console.log(error);
    }
}

const checkAdminToken = async (req, res) => {
    const {token} = req.params;
    const validToken = await Admin.findOne({token});
    if(validToken){
        res.json({msg: "Token válido, el administrador existe"});
    }else{
        const error = new Error("Token no válido");
        return res.status(400).json({msg: error.message});
    }
}

const newAdminPassword = async (req, res) => {
    const {token} = req.params;
    const {password} = req.body;
    const admin = await Admin.findOne({token});
    if(!admin){
        const error = new Error("Hubo un error");
        res.status(400).json({ msg: error.message });
    }
    try {
        admin.token = null;
        admin.password = password;
        await admin.save();
        res.json({msg: "Password modificado correctamente"});
    } catch (error) {
        console.log(error)
    }
}

export {
    registerAdmin,
    adminProfile,
    confirmAdmin,
    authenticateAdmin,
    forgottenPassword,
    checkAdminToken,
    newAdminPassword,
}