import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "orders@thepitabowl.com";

function getTransporter() {
  const user = process.env.GOOGLE_EMAIL;
  const pass = process.env.GOOGLE_APP_PASSWORD;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name : "";
    const email = typeof body.email === "string" ? body.email : "";
    const message = typeof body.message === "string" ? body.message : "";

    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    const transporter = getTransporter();
    if (!transporter) {
      console.error("[Contact form] Google email not configured. Set GOOGLE_EMAIL and GOOGLE_APP_PASSWORD in .env.local");
      return NextResponse.json({ error: "Email is not configured" }, { status: 500 });
    }

    const from = process.env.GOOGLE_EMAIL ?? TO_EMAIL;
    await transporter.sendMail({
      from: `Pita Bowl Website <${from}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Contact form: ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[Contact form]", e);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
