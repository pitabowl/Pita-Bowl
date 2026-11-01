import { NextResponse } from "next/server";
import { TO_EMAIL, escapeHtml, getTransporter, str } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = str(body.name);
    const email = str(body.email);
    const message = str(body.message);

    if (!name || !email || !message) {
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
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[Contact form]", e);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
