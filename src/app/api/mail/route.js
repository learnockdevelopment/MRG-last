
import nodemailer from "nodemailer";

// Validate environment variables at startup
const validateEnvVars = () => {
  const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required SMTP environment variables: ${missingVars.join(', ')}`);
  }
};

// Validate environment variables when the module loads
validateEnvVars();

export async function POST(req) {
  console.log("📨 Incoming contact form request...");

  try {
    // Validate request method
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405 }
      );
    }

    console.log("📥 Reading request body...");
    const body = await req.json();
    console.log("✅ Request body received:", body);

    // Validate required fields
    const { name, email, message, phone, title } = body;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400 }
      );
    }

    console.log("🛠 Configuring Nodemailer transporter...");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Additional security settings
      tls: {
        rejectUnauthorized: true, // Always verify SSL certificate
        minVersion: "TLSv1.2" // Enforce minimum TLS version
      }
    });
    console.log("✅ Transporter configured successfully");

    // Test the SMTP connection
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified");
    } catch (verifyError) {
      console.error("❌ SMTP connection verification failed:", verifyError);
      throw new Error("SMTP server connection failed");
    }

    console.log("✍ Preparing email content...");
    const sanitizedMessage = message.replace(/<[^>]*>?/gm, ''); // Basic HTML sanitization
    const emailContent = {
      from: `${name || 'No Title'} <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_FORM_RECIPIENT || email, // Use configured recipient or fallback to sender
      replyTo: email, // Set reply-to to the sender's email
      subject: `📩 New Contact Form Submission: ${title || 'No Subject'}`.substring(0, 78), // Limit subject length
      html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 20px; color: white;">
    <h1 style="margin: 0; font-size: 24px; font-weight: 600;">New Contact Message</h1>
    <p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px;">You've received a new message from your website</p>
  </div>
  
  <div style="padding: 25px; background-color: #ffffff;">
    <div style="display: grid; grid-template-columns: 120px 1fr; gap: 12px; margin-bottom: 16px; align-items: center;">
      <span style="font-weight: 600; color: #4f46e5;">Name:</span>
      <span>${name}</span>
      
      <span style="font-weight: 600; color: #4f46e5;">Email:</span>
      <span><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></span>
      
      <span style="font-weight: 600; color: #4f46e5;">Phone:</span>
      <span>${phone || "<span style='color: #999;'>N/A</span>"}</span>
      
      <span style="font-weight: 600; color: #4f46e5;">Subject:</span>
      <span>${title || "<span style='color: #999;'>N/A</span>"}</span>
    </div>
    
    <div style="margin-top: 24px; border-top: 1px solid #eee; padding-top: 16px;">
      <h3 style="margin: 0 0 12px 0; color: #4f46e5; font-size: 18px;">Message Content</h3>
      <div style="background-color: #f9f9f9; padding: 16px; border-radius: 6px; line-height: 1.6; border-left: 3px solid #4f46e5;">
        ${message}
      </div>
    </div>
  </div>
  
  <div style="background-color: #f5f5f5; padding: 16px 25px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e0e0e0;">
    <p style="margin: 0;">This message was sent from your website contact form. Please respond within 24-48 hours.</p>
    <p style="margin: 8px 0 0;">© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
  </div>
</div>
`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${title || 'N/A'}\n\nMessage:\n${sanitizedMessage}`,
    };
    console.log("✅ Email content prepared");

    console.log("🚀 Sending email...");
    const info = await transporter.sendMail(emailContent);
    console.log("✅ Email sent successfully!", info.messageId);

    return new Response(
      JSON.stringify({ 
        message: "Email sent successfully",
        messageId: info.messageId 
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send email",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
      { status: 500 }
    );
  }
}