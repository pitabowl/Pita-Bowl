import { NextResponse } from "next/server";
import { FROM_EMAIL, TO_EMAIL, escapeHtml, getTransporter, str } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = str(body.name);
    const email = str(body.email);

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const fields: [string, string][] = [
      ["Name", name],
      ["Email", email],
      ["Phone", str(body.phone)],
      ["Event date", str(body.date)],
      ["Guests", str(body.guests)],
      ["Notes", str(body.notes)],
    ];

    const transporter = getTransporter();
    await transporter.sendMail({
      from: `Pita Bowl Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Catering request: ${name}${fields[3][1] ? ` (${fields[3][1]})` : ""}`,
      text: fields.map(([label, value]) => `${label}: ${value || "—"}`).join("\n"),
      html: fields
        .map(
          ([label, value]) =>
            `<p><strong>${label}:</strong> ${value ? escapeHtml(value).replace(/\n/g, "<br>") : "—"}</p>`
        )
        .join(""),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[Catering request]", e);
    return NextResponse.json({ error: "Failed to send request. Please try again." }, { status: 500 });
  }
}
