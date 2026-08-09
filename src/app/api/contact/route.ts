import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  ContactNotificationEmail,
  contactNotificationText,
} from "@/emails/contact-notification";

const CONTACT_EMAIL = "aliraza.r10@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  const { name, email, message } = (await request.json()) as ContactPayload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Contact form is not configured. Please email directly instead." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "ArFolio Contact <onboarding@resend.dev>",
    to: [CONTACT_EMAIL],
    replyTo: email,
    subject: `New message from ${name} via ArFolio`,
    react: ContactNotificationEmail({ name, email, message }),
    text: contactNotificationText({ name, email, message }),
  });

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or email directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
