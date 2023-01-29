import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const id = req.query.id;
  try {
    if (!id.startsWith('cs_')) {
      throw new Error('Invalid Checkout Session ID');
    };
    const checkout_session = await stripe.checkout.sessions.retrieve(id);
    res.status(200).json(checkout_session);
  } catch (er) {
    res.status(500).json({ statusCode: 500, message: er.message });
    console.log(er.message);
  }
}