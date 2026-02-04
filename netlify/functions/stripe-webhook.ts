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
          <p>Thank you for joining UANCO.</p>
          <p>Your onboarding has now begun.</p>
          <p>Please complete the clinical intake form below so we can configure your setup accurately:</p>
          <p><a href="${process.env.TALLY_INTAKE_URL}">Complete intake form</a></p>
          <p>Once submitted, a member of the UANCO team will be in touch.</p>
          <p>— UANCO</p>
        `,
      });
    }
  }

  return {
    statusCode: 200,
    body: "ok",
  };
};