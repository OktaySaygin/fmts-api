import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const DELETION_INBOX = 'codeversoft53@gmail.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { account, email, reason } = body;

    if (!account) {
      return NextResponse.json(
        { success: false, error: 'Please provide your username or the email used in the game.' },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    if (!gmailUser || !gmailPass) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email service is not configured. Please email us directly at ' + DELETION_INBOX,
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    });

    const submittedAt = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #b91c1c; margin: 0 0 16px;">Pikoo - Account Deletion Request</h2>
        <p style="color: #333;">A player has requested deletion of their account and associated data.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 160px;">Username / Email</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${account}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Contact email</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${email || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Reason</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${reason || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Submitted at</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${submittedAt}</td>
          </tr>
        </table>
        <p style="color: #666; font-size: 13px; margin-top: 20px;">
          Action required: locate this account and delete the user record and all associated data
          (score, diamonds, inventory) within 30 days.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: gmailUser,
      to: DELETION_INBOX,
      subject: `Pikoo - Account Deletion Request: ${account}`,
      html: htmlContent,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true, message: 'Deletion request received.' }, { status: 200 });
  } catch (error) {
    console.error('Account deletion request error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit request. Please email us directly at ' + DELETION_INBOX },
      { status: 500 }
    );
  }
}
