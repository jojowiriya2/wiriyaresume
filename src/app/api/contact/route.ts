import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // For now, we'll use a simple email forwarding service like EmailJS or similar
    // Since we can't use server-side email sending without additional setup,
    // we'll simulate the API response and log the data
    
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      recipient: 'wiriya.workth@gmail.com'
    });

    // In a real implementation, you would integrate with:
    // - EmailJS for client-side email sending
    // - Nodemailer with SMTP
    // - SendGrid, Mailgun, or similar email services
    // - Or use a contact form service like Formspree

    // For now, we'll return success to demonstrate the UI
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}