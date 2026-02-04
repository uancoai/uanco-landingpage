
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16', // Or latest
});

export const handler = async (event: any) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.PRICE_ID_ONBOARDING,
          quantity: 1,
        },
        {
          price: process.env.PRICE_ID_SUBSCRIPTION,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.CANCEL_URL,
      subscription_data: {
        metadata: {
          commitment: '3_months',
          product: 'uanco_clinical_suitability_suite'
        },
      },
      metadata: {
        positioning: 'structured_screening_and_documentation'
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error: any) {
    console.error('Stripe Session Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
