import nodemailer from "nodemailer";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

export const TO_EMAIL = "orders@thepitabowl.com";
export const FROM_EMAIL = "website@thepitabowl.com";

/**
 * Amazon SES (us-west-2). On Amplify, credentials come from the app's compute
 * role (PitaBowlAmplifyCompute); locally, from your AWS CLI login.
 */
export function getTransporter() {
  const sesClient = new SESv2Client({ region: "us-west-2" });
  return nodemailer.createTransport({ SES: { sesClient, SendEmailCommand } });
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
