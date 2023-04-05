const jwt = require("jsonwebtoken");
require("dotenv").config();

export const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  if (token) {
    token = token.replace("Bearer ", "");
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      { algorithms: "HS512" },
      (err, decoded) => {
        if (err) {
          res.status(498).json({ error: "Invalid token", message: "Token inválido, por favor enviar un token válido" });
        } else {
          console.log(decoded);
          next();
        }
      })
  } else {
    res.status(400).json({ error: "No token provided", message: "No se proporcionó token de autenticación" });
  }
};