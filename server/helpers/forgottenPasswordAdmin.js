import nodemailer from "nodemailer";

const emailNewPasswordAdmin = async (data) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
        }
    });
    const {email, name, token} = data;
    //enviar email
    const info = await transport.sendMail({
        from: '"Red Social Comida"<correo@redsocialcomida.com',
        to: `${email}`,
        subject: "Restablece tu contraseña en Red Social Comida",
        text: "Restablece tu contraseña en Red Social Comida",
        html:`<p> Hola ${name}, has solicitado restablecer tu contraseña en Red Social Comida. </p>
        <p> Accede al siguiente enlace para generar una nueva contraseña.
        <a href="${process.env.BACKEND_URL}/api/admin/forgotten-password/${token}">Restablecer contraseña</a> </p>
        <p> Si no solicitaste restablecer tu contraseña, ignora este mensaje.</p>
        `
    });
    console.log("Mensaje enviado: %s", info.messageId)
};

export default emailNewPasswordAdmin;