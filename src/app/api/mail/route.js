import nodemailer from "nodemailer";

export async function POST(req) {
  console.log("📨 Incoming contact form request...");

  try {
    console.log("📥 Reading request body...");
    const body = await req.json();
    console.log("✅ Request body received:", body);

    const { name, email, message, phone, title } = body;

    console.log("🛠 Configuring Nodemailer transporter...");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log("✅ Transporter configured successfully");

    console.log("✍ Preparing email content...");
    const emailContent = {
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `📩 New Contact Form Submission from ${name}`,
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
    };
    console.log("✅ Email content prepared:", emailContent);

    console.log("🚀 Sending email...");
    await transporter.sendMail(emailContent);
    console.log("✅ Email sent successfully!");

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
