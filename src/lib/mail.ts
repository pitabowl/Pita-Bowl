import nodemailer from "nodemailer";

export const TO_EMAIL = "orders@thepitabowl.com";

/** Gmail SMTP via Google Workspace. Returns null when env vars are missing. */
export function getTransporter() {
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

/** Escape user input before putting it in an HTML email. */
export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function str(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
