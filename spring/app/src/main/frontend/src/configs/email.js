import nodemailer from "nodemailer";
import "dotenv/config";

export const smtpTransport = nodemailer.createTransport({
  pool: true,
  maxConnections: 1,
  service: "naver",
  host: "smtp.naver.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  requireTLS: true,
  auth: {
    user: process.env.Email_User,
    pass: process.env.Email_Pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
