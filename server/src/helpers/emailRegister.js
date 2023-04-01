//pidanme el archivo .env
import nodemailer from "nodemailer";

const registerEmail = async (datos) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
        }
    });
    
    const {email, name, token} = datos;
   
    const info = await transport.sendMail({
        from: '"Red Social Comida"<correo@redsocialcomida.com',
        to: `${email}`,
        subject: "Valida tu cuenta en Red Social Comida",
        text: "Valida tu cuenta en Red Social Comida",
        html:`<p> Hola ${name}, valida tu cuenta en Red Social Comida. </p>
        <p> Tu cuenta está lista, sólo debes validarla en el siguiente enlace:
        <a href="${process.env.BACKEND_URL}/api/user/confirm/${token}">Comprobar cuenta</a> </p>
        <p> Si tu no creaste esta cuenta, ignora este mensaje.</p>
        
        `
    });
    console.log("Mensaje enviado: %s", info.messageId)
};

export default registerEmail;