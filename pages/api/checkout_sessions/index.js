import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // const items = req.body.items;
      // let lineItems = [];
      // items.forEach((items) => {
      //   lineItems.push({
      //     price: items.id,
      //     quantity: items.count
      //   })
      // });
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: req?.body?.items,
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
      });
      res.status(200).json(session);
    } catch (er) {
      res.status(500).json({ statusCode: 500, message: er.message });
      console.log(er.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}