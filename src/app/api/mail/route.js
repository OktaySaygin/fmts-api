import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Request body'yi parse et
    const body = await request.json();
    const { name, email, phone, company, subject, message, budget, timeline } = body;

    // Zorunlu alanları kontrol et
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    // Email doğrulaması
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Nodemailer transporter'ı oluştur
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'your-email@gmail.com',
        pass: process.env.GMAIL_PASS || 'your-app-password'
      }
    });

    // Email içeriğini hazırla
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">From Codever Website</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h2>
          
          <table style="width: 100%; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <strong style="color: #667eea; display: inline-block; width: 120px;">Name:</strong>
                <span style="color: #333;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <strong style="color: #667eea; display: inline-block; width: 120px;">Email:</strong>
                <span style="color: #333;">${email}</span>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <strong style="color: #667eea; display: inline-block; width: 120px;">Phone:</strong>
                <span style="color: #333;">${phone}</span>
              </td>
            </tr>
            ` : ''}
            ${company ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <strong style="color: #667eea; display: inline-block; width: 120px;">Company:</strong>
                <span style="color: #333;">${company}</span>
              </td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <strong style="color: #667eea; display: inline-block; width: 120px;">Subject:</strong>
                <span style="color: #333;">${subject}</span>
              </td>
            </tr>
            ${budget ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <strong style="color: #667eea; display: inline-block; width: 120px;">Budget:</strong>
                <span style="color: #333;">${budget}</span>
              </td>
            </tr>
            ` : ''}
            ${timeline ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <strong style="color: #667eea; display: inline-block; width: 120px;">Timeline:</strong>
                <span style="color: #333;">${timeline}</span>
              </td>
            </tr>
            ` : ''}
          </table>

          <h3 style="color: #333; margin-top: 30px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h3>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0;">
            <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="background: #e8f0fe; padding: 20px; border-radius: 8px; margin-top: 30px; text-align: center;">
            <p style="margin: 0; color: #1a73e8; font-weight: 500;">
              📧 Please respond to this inquiry within 24 hours
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 14px;">
          <p style="margin: 0;">This email was sent from your Codever website contact form</p>
          <p style="margin: 5px 0 0; font-size: 12px; color: #999;">
            Sent at: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}
          </p>
        </div>
      </div>
    `;

    // Admin'e gönderilecek mail
    const adminMailOptions = {
      from: process.env.GMAIL_USER || 'your-email@gmail.com',
      to: 'osaygin@codever.com',
      subject: `New Contact Form: ${subject}`,
      html: htmlContent,
      replyTo: email
    };

    // Kullanıcıya gönderilecek otomatik yanıt
    const autoReplyContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Thank You for Contacting Us!</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">We've received your message</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 0;">
            Hi <strong>${name}</strong>,
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to us! We have received your message regarding "<strong>${subject}</strong>" and our team will review it shortly.
          </p>
          
          <div style="background: #e8f0fe; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
            <h3 style="color: #1a73e8; margin-top: 0;">What happens next?</h3>
            <ul style="color: #333; margin: 10px 0; padding-left: 20px;">
              <li style="margin: 8px 0;">Our team will review your inquiry within 24 hours</li>
              <li style="margin: 8px 0;">We'll prepare a detailed response based on your requirements</li>
              <li style="margin: 8px 0;">You'll receive a personalized reply from our experts</li>
            </ul>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary:</h3>
            <p style="color: #666; margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            ${budget ? `<p style="color: #666; margin: 5px 0;"><strong>Budget:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p style="color: #666; margin: 5px 0;"><strong>Timeline:</strong> ${timeline}</p>` : ''}
          </div>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            If you have any urgent questions, feel free to call us at <strong>+90 (536) 945-2083</strong> or email us directly at <strong>osaygin@codever.com</strong>.
          </p>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #667eea; font-size: 18px; font-weight: 500;">
              Best regards,<br>
              The Codever Team
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 14px;">
          <p style="margin: 0;">Follow us on social media for updates and tech insights</p>
          <div style="margin-top: 10px;">
            <a href="https://github.com/codever" style="color: #667eea; text-decoration: none; margin: 0 10px;">GitHub</a>
            <a href="https://linkedin.com/company/codever" style="color: #667eea; text-decoration: none; margin: 0 10px;">LinkedIn</a>
            <a href="https://twitter.com/codever" style="color: #667eea; text-decoration: none; margin: 0 10px;">Twitter</a>
          </div>
        </div>
      </div>
    `;

    const userMailOptions = {
      from: process.env.GMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: `Thank you for contacting Codever - Re: ${subject}`,
      html: autoReplyContent
    };

    // Mail gönderim işlemleri
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        success: true,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        message: error.message,
        success: false 
      },
      { status: 500 }
    );
  }
}