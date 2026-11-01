import { NextResponse } from "next/server";
import { FROM_EMAIL, TO_EMAIL, escapeHtml, getTransporter, str } from "@/lib/mail";

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
    await transporter.sendMail({
      from: `Pita Bowl Website <${FROM_EMAIL}>`,
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
