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
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Title:</strong> ${title || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
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
