import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, surname, email, message } = await request.json();

    // Send the email using Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Your verified Resend sending address
      to: 'emsaguilera99@gmail.com',         // Your personal Gmail where you want to receive messages
      subject: `New Message from ${name} ${surname}`,
      replyTo: email, // Set the visitor's email as the reply-to address

      // The body of the email you will receive
      html: `
        <p>You received a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
  }
}