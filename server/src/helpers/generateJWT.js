import jwt from "jsonwebtoken";
import "dotenv/config.js";

export const generateJWT = (id) => {
    //.sign para crear un nuevo jwt, y le paso un objeto({name, la secretkey, cuando expira})
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        algorithm: "HS512",
        expiresIn: "30d",
    })
}