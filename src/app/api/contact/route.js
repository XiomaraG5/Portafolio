
import { NextResponse } from 'next/server';

const nodemailer = require('nodemailer');

export async function POST(req, res) {

  if (req.method == 'POST') {
    // Aquí procesas la solicitud POST
    const { name, email, message } = await req.body,
      er = await req.json()
    console.log('====================================');
    console.log(er);
    console.log('====================================');
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // const tasks = await prisma.task.create({
    //   data 
    // })
    console.log('====================================');
    // console.log(tasks);
    console.log('====================================');
    // Aquí podrías configurar Nodemailer con los datos recibidos
    // y enviar un correo electrónico.
    // await transporter.sendMail({
    //     from: `Tu Portafolio ${email}`,
    //     to: email,
    //     subject: 'Nuevo contacto desde el portafolio',
    //     html: `<p>Tienes un nuevo mensaje de ${name} (${email}):</p><p>${message}</p>`,
    // });

    // Enviar correo de agradecimiento al remitente
    let info = await transporter.sendMail({
      from: `${process.env.EMAIL_USER}`,
      to: er.email, // Email del remitente
      subject: 'Gracias por contactarme',
      html: `<div style="padding:2%;">
                            <h1 style="font-family:Bradley Hand ;color:#FDBF50;font-size:25px">Hola ${er.name},</h1>
                            <p style="font-family:Tahoma;width:70%;text-align: justify;">Gracias por comunicarte conmigo. He recibido tu mensaje y te aseguro que le daré pronta atención.
                                Próximamente me pondré en contacto contigo para discutir tus necesidades e ideas en detalle. Aprecio tu interés y espero poder colaborar contigo pronto..</p>
                            <p style="font-family:Tahoma;">Saludos cordiales</p>
                            <img style="width:300px;margin-top:3%;" src="https://res.cloudinary.com/duzh7meuo/image/upload/v1704936029/lv7ylfj8gersrt4tmu9b.png" alt="Xiomara Garcia"/>
                        </div>`,
    });
    if (info.messageId) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Nuevo contacto desde el portafolio',
        html: `<p>Tienes un nuevo mensaje de ${er.name} (${er.email}):</p><p>${er.message}</p>`,
      });
      // res.status(200).json({ status: 'Ok', message: 'Mensaje enviado con éxito' });
      return NextResponse.json({ message: 'Mensaje enviado con éxito' })
    } else {
      // res.status(404).end(`Error: invalid email`);
      return NextResponse.json({ message: "Error: correo invalido" })
    }



  } else {
    // Manejar cualquier otra solicitud que no sea POST
    // res.setHeader('Allow', ['POST']);
    // res.status(405).end(`Method ${req.method} Not Allowed`);
    return NextResponse.json({ message: "Error: metodo no permitido" })
  }
}