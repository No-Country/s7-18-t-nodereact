//pidanme el archivo .env
import transport from "./mailer";
import "dotenv/config.js";

export const emailRegister = async (datos) => {

    const { email, name, token } = datos;

    const info = await transport.sendMail({
        from: '"Red Social Comida"<correo@redsocialcomida.com',
        to: `${email}`,
        subject: "Valida tu cuenta en Red Social Comida",
        text: "Valida tu cuenta en Red Social Comida",
        html: `<p> Hola ${name}, valida tu cuenta en Red Social Comida. </p>
        <p> Tu cuenta está lista, sólo debes validarla en el siguiente enlace:
        <a href="${process.env.BACKEND_URL}/api/user/confirm/${token}">Comprobar cuenta</a> </p>
        <p> Si tu no creaste esta cuenta, ignora este mensaje.</p>
        
        `
    });
    console.log("Mensaje enviado: %s", info.messageId)
};