import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string | null;
    const email = formData.get('email') as string | null;
    const message = formData.get('message') as string | null;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const to = process.env.MY_EMAIL;
    const from =
      process.env.CONTACT_FROM_EMAIL ?? 'Kannan Portfolio <contact@kannan.dev>';

    if (!process.env.RESEND_API_KEY) {
      console.error('[contact] RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    if (!to) {
      console.error('[contact] MY_EMAIL is not set');
      return NextResponse.json({ error: 'Recipient email not configured' }, { status: 500 });
    }


    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });


    if (error) {
      return NextResponse.json(
        { error: error.message ?? 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('[contact] unexpected error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
