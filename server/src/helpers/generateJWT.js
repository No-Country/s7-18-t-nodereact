import jwt from "jsonwebtoken";

const generateJWT = (id) => {
    //.sing para crear un nuevo jwt, y le paso un objeto({name, la secretkey, cuando expira})
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}

export default generateJWT;