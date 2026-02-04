import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event: any) => {
  const sig = event.headers["stripe-signature"];

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }

  if (stripeEvent.type === "checkout.session.completed") {
    const session = stripeEvent.data.object as Stripe.Checkout.Session;

    const email = session.customer_details?.email;

    if (email) {
      await resend.emails.send({
        from: "UANCO <onboarding@uanco.co.uk>",
        to: email,
        subject: "Your UANCO onboarding has started",
        html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Inter,Arial,sans-serif;background:#ffffff;color:#1A1A1A;padding:40px 24px;">
  <div style="max-width:520px;margin:0 auto;">

    <div style="margin-bottom:32px;">
      <span style="font-size:24px;font-weight:700;font-style:italic;letter-spacing:-0.02em;">
        uanco<span style="display:inline-block;width:6px;height:6px;background:#1A1A1A;border-radius:50%;margin-left:4px;vertical-align:middle;"></span>
      </span>
    </div>

    <h1 style="font-size:20px;line-height:1.4;margin:0 0 16px 0;">
      Onboarding initiated
    </h1>

    <p style="font-size:15px;line-height:1.6;color:#444;margin:0 0 16px 0;">
      Thank you for joining UANCO. We’ve started setting up your clinic profile so the platform reflects your treatments, policies, and suitability rules accurately.
    </p>

    <p style="font-size:15px;line-height:1.6;color:#444;margin:0 0 24px 0;">
      To continue, please complete the clinical intake form below.
    </p>

    <a href="${process.env.TALLY_INTAKE_URL}"
       style="display:inline-block;padding:14px 22px;background:#1A1A1A;color:#ffffff;text-decoration:none;border-radius:999px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
      Complete intake form
    </a>

    <hr style="border:none;border-top:1px solid #eee;margin:32px 0;">

    <p style="font-size:13px;line-height:1.6;color:#666;margin:0;">
      Once submitted, a member of the UANCO team will review your details and be in touch to complete onboarding.
    </p>

    <p style="font-size:12px;line-height:1.6;color:#999;margin-top:24px;">
      Clinical decisions are never automated. Practitioner judgement remains in control.
    </p>

  </div>
</div>
        `,
      });
    }
  }

  return {
    statusCode: 200,
    body: "ok",
  };
};