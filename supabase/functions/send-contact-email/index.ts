const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

async function sendEmail(to: string[], subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Sri Sri Interiors <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to send email: ${error}`);
  }

  return res.json();
}

Deno.serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactEmailRequest = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, subject: !!subject, message: !!message });
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to the business
    const businessEmailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #d4af37; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>
        <div style="background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 12px 12px;">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 600;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 600;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${email}" style="color: #d4af37;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 600;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;"><a href="tel:${phone}" style="color: #d4af37;">${phone}</a></td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 600;">Subject:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${subject}</td>
            </tr>
          </table>
          <h3 style="color: #333; margin-top: 20px;">Message:</h3>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; color: #555; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      </div>
    `;

    const businessEmailResponse = await sendEmail(
      ["info@srisriinteriors.com"],
      `New Contact Form Submission: ${subject}`,
      businessEmailHtml
    );

    console.log("Business notification email sent:", businessEmailResponse);

    // Send confirmation email to the customer
    const customerEmailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: #d4af37; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
          <p style="color: #ffffff; margin: 10px 0 0; opacity: 0.9;">We've received your message</p>
        </div>
        <div style="background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 12px 12px;">
          <p style="color: #555; line-height: 1.6; margin-top: 0;">
            Thank you for reaching out to Sri Sri Interiors. We're excited to hear from you and learn about your project!
          </p>
          <p style="color: #555; line-height: 1.6;">
            Our team will review your inquiry and get back to you within <strong>24-48 hours</strong>. 
            In the meantime, feel free to browse our portfolio for more inspiration.
          </p>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0; font-size: 16px;">Your Message Summary:</h3>
            <p style="color: #666; margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="color: #666; margin: 5px 0;"><strong>Message:</strong> ${message.substring(0, 150)}${message.length > 150 ? '...' : ''}</p>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #888; font-size: 14px; margin-bottom: 20px;">
              Need immediate assistance? Call us at:
            </p>
            <a href="tel:+919876543210" style="color: #d4af37; font-size: 18px; font-weight: bold; text-decoration: none;">
              +91 98765 43210
            </a>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #888; font-size: 12px; text-align: center; margin: 0;">
            Sri Sri Interiors | 123 Design Street, Hyderabad, Telangana 500001<br>
            <a href="mailto:info@srisriinteriors.com" style="color: #d4af37;">info@srisriinteriors.com</a>
          </p>
        </div>
      </div>
    `;

    const customerEmailResponse = await sendEmail(
      [email],
      "Thank you for contacting Sri Sri Interiors!",
      customerEmailHtml
    );

    console.log("Customer confirmation email sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully",
        businessEmail: businessEmailResponse,
        customerEmail: customerEmailResponse 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
