
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export const handler = async (event: any) => {
  const sig = event.headers['stripe-signature'];

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }

  // Handle clinical payment events
  switch (stripeEvent.type) {
    case 'checkout.session.completed':
      const session = stripeEvent.data.object as Stripe.Checkout.Session;
      console.log('✅ Checkout successful for customer:', session.customer_email);
      // Logic for v1: 
      // 1. Log the customer ID and subscription ID
      // 2. Trigger an automated onboarding email via your CRM (e.g. Mailchimp/SendGrid)
      // 3. Update your database if applicable
      break;

    case 'invoice.paid':
      const invoice = stripeEvent.data.object as Stripe.Invoice;
      console.log('💰 Recurring payment confirmed:', invoice.customer_email);
      break;

    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      const subscription = stripeEvent.data.object as Stripe.Subscription;
      console.log('🔄 Subscription state changed:', subscription.status);
      break;

    default:
      console.log(`Unhandled event type ${stripeEvent.type}`);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};
