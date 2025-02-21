import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Get emails from env and split into array
const notificationEmails = process.env.NOTIFICATION_EMAILS?.split(',') || [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company } = body;

    const result = await resend.emails.send({
      from: 'hello@caltechlongevity.com',
      to: notificationEmails,
      subject: '💸 👀 [Action Required] Caltech Longevity New Sponsor Inquiry',
      html: `
        <h2>New Sponsor Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
      `
    });

    console.log(result);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
} 