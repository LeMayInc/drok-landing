import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, org } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  // Send confirmation email to the user
  const { error: userError } = await resend.emails.send({
    from: "Drok <noreply@drok.us>",
    to: email,
    subject: "You're on the Drok waitlist",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; color: #e5e5e5; background: #0A0A0A; padding: 40px 32px; border-radius: 12px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #ffffff; margin: 0 0 16px;">Welcome to Drok, ${name}.</h1>
        <p style="font-size: 15px; line-height: 1.6; color: #a3a3a3; margin: 0 0 24px;">
          You're on the early access list for the sovereign code platform. We'll notify you at <strong style="color: #e5e5e5;">${email}</strong> when invitations open.
        </p>
        <p style="font-size: 15px; line-height: 1.6; color: #a3a3a3; margin: 0 0 24px;">
          In the meantime, explore the documentation at <a href="https://docs.drok.us" style="color: #C8A87C; text-decoration: none;">docs.drok.us</a>.
        </p>
        <hr style="border: none; border-top: 1px solid #262626; margin: 32px 0;" />
        <p style="font-size: 12px; color: #525252; margin: 0;">
          Drok — The Sovereign Code Platform<br />
          Built by LeMay Inc. &middot; Beacon Hill, Boston
        </p>
      </div>
    `,
  });

  if (userError) {
    return NextResponse.json({ error: userError.message }, { status: 500 });
  }

  // Send internal notification
  await resend.emails.send({
    from: "Drok Waitlist <noreply@drok.us>",
    to: "travis@lemayinc.com",
    subject: `New waitlist signup: ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organization:</strong> ${org || "—"}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
