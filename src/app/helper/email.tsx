import { render } from "@react-email/render";
import { EmailTemplate } from '../components/EmailTemplate';
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface SendEmailProps {
  name: string,
  email: string,
  message: string,
}

export const sendEmail = async ({name, email, message}: SendEmailProps) => {

  const template = <EmailTemplate name={name} email={email} message={message}/>

  const emailHtml = await render(template);

  const info = await transporter.sendMail({
    from: `"Contact form" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "Message from a client",
    html: emailHtml,
  });
  console.log('INFO', info);
}