import { NextResponse } from "next/server";

// Handles the plain HTML form POST from /contact.
// Right now it just reads the fields and redirects back with ?sent=true.
// TODO: plug in real email delivery here (e.g. Resend, SendGrid, Nodemailer)
// using the values below, then keep the redirect at the end.
export async function POST(request) {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const company = formData.get("company");
  const phone = formData.get("phone");
  const message = formData.get("message");

  // Simple log for now so you can see submissions in the server console.
  console.log("New contact form submission:", { name, email, company, phone, message });

  return NextResponse.redirect(new URL("/contact?sent=true", request.url), 303);
}
