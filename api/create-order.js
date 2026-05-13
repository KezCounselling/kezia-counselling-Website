// api/create-order.js
// Vercel Serverless Function — Razorpay order creation (optional, for order verification)
// Note: For basic Razorpay integration, the frontend handles payment directly.
// This file is for advanced use with order verification.

const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { amount, currency = 'INR', notes = {} } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const order = await razorpay.orders.create({
      amount: amount, // already in paise
      currency,
      notes,
    });

    res.status(200).json({ orderId: order.id });
  } catch (err) {
    console.error('Razorpay error:', err);
    res.status(500).json({ error: err.message });
  }
};
