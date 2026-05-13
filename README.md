# Kezia Babu — Counselling Website

## Files
- `index.html` — Full website with booking modal
- `api/create-payment-intent.js` — Stripe serverless function
- `vercel.json` — Vercel deployment config
- `package.json` — Dependencies (Stripe SDK)

---

## Deploy to Vercel (Free)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/kezia-counselling.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to https://vercel.com → Sign up with GitHub
2. Click "Add New Project" → Import the repo
3. Click Deploy — done!

### Step 3 — Add Stripe Keys (IMPORTANT)
In Vercel dashboard → Settings → Environment Variables:
| Name | Value |
|------|-------|
| `STRIPE_SECRET_KEY` | sk_live_... (from Stripe dashboard) |

In `index.html`, replace line:
```js
const STRIPE_KEY = 'pk_test_REPLACE_WITH_KEZIA_STRIPE_KEY';
```
With Kezia's real publishable key:
```js
const STRIPE_KEY = 'pk_live_...';
```

### Step 4 — Go Live!
- Switch Stripe from Test → Live mode
- Website is live at: yourname.vercel.app

---

## Stripe Setup
1. Go to https://stripe.com → Create account
2. Dashboard → Developers → API Keys
3. Copy Publishable Key → paste into index.html
4. Copy Secret Key → paste into Vercel Environment Variables
5. Test with card: 4242 4242 4242 4242 | Any future date | Any CVC

---

## Pricing (update in index.html booking modal)
- Free Consultation: ₹0
- Individual Session (50 min): ₹1,200
- 4-Session Package: ₹3,000
- 8-Session Package: ₹5,500

Update prices in the `<div class="pricing-box">` section of index.html.
