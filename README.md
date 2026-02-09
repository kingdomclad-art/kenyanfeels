# 🎨 Kenyan Feels - E-Commerce Website

A modern, futuristic e-commerce website for Kenyan Feels - premium enamel cups with positive, inspirational messages. Designed in Nairobi, made for the soul.

![Kenyan Feels](https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=1200&h=400&fit=crop)

## ✨ Features

- **Futuristic Dark Design** - Modern, clean aesthetic with smooth animations
- **Valentine's Special Section** - Dedicated section for limited edition Valentine's products
- **WhatsApp Integration** - Direct ordering through WhatsApp Business
- **Mobile Responsive** - Fully optimized for all devices
- **Product Filtering** - Easy category-based product browsing
- **Smooth Animations** - Engaging user experience with scroll animations
- **Fast Loading** - Optimized performance with lazy loading images

## 🚀 Quick Start

### 1. Clone or Download

Download these files to your computer:
- `index.html`
- `styles.css`
- `script.js`

### 2. Customize Your Information

**IMPORTANT**: Before deploying, update these details in the files:

#### In `index.html`:
- Line 177-178: Replace `254700000000` with your actual WhatsApp number
- Add your actual product images (replace placeholder Unsplash URLs)
- Update Instagram handle: `@kenyanfeels` → your actual handle

#### In `script.js`:
- Line 51: Replace `254700000000` with your WhatsApp number (format: country code + number, no spaces)

### 3. Deploy to GitHub Pages

#### Option A: Using GitHub Desktop (Easiest for Beginners)

1. **Create GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Download GitHub Desktop**
   - Download from [desktop.github.com](https://desktop.github.com)
   - Install and sign in

3. **Create New Repository**
   - Open GitHub Desktop
   - Click "File" → "New Repository"
   - Name: `kenyan-feels` (or your preferred name)
   - Local Path: Choose where to save
   - Click "Create Repository"

4. **Add Your Files**
   - Copy `index.html`, `styles.css`, `script.js` into the repository folder
   - Files will appear in GitHub Desktop

5. **Commit and Publish**
   - Write commit message: "Initial website launch"
   - Click "Commit to main"
   - Click "Publish repository"
   - Uncheck "Keep this code private" if you want it public
   - Click "Publish Repository"

6. **Enable GitHub Pages**
   - Go to github.com and find your repository
   - Click "Settings" tab
   - Scroll to "Pages" in left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://yourusername.github.io/kenyan-feels`

#### Option B: Using Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial website launch"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/kenyan-feels.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

## 📱 Adding Your Products

### Replace Placeholder Images

Current placeholders use Unsplash URLs. Replace them with your actual product photos:

**Method 1: Use Image Hosting**
1. Upload your product photos to [Imgur](https://imgur.com) or [Cloudinary](https://cloudinary.com)
2. Copy the image URL
3. Replace Unsplash URLs in `index.html`

**Method 2: Use Local Images**
1. Create an `images` folder in your repository
2. Add your product photos: `images/product1.jpg`, etc.
3. Update image paths in HTML:
   ```html
   <img src="images/my-nairobi-valentine.jpg" alt="My Nairobi Valentine">
   ```

### Add More Products

Copy this template and customize:

```html
<!-- Valentine Product Template -->
<div class="valentine-card">
    <div class="valentine-image">
        <span class="badge">New</span>
        <img src="YOUR_IMAGE_URL" alt="Product Name">
        <div class="quick-view">Quick View</div>
    </div>
    <div class="valentine-info">
        <h3>Your Product Name</h3>
        <p>Your product description</p>
        <div class="price-row">
            <span class="price">KES 1,200</span>
            <button class="btn-cart" onclick="orderWhatsApp('Your Product Name')">Order Now</button>
        </div>
    </div>
</div>
```

## 🎨 Customization Guide

### Change Brand Colors

In `styles.css`, update the `:root` variables:

```css
:root {
    --accent-primary: #ff3366;  /* Main brand color */
    --accent-secondary: #6366f1; /* Secondary accent */
    /* Change these to your brand colors */
}
```

### Update Contact Information

**WhatsApp Number:**
- Format: Country code + number (no + or spaces)
- Example: `254712345678` for Kenya (+254)

**Social Media Links:**
- Instagram: Update all `@kenyanfeels` references
- Add other social platforms in footer section

### Modify Sections

**Hide/Show Sections:**
- Comment out or delete unwanted sections in `index.html`
- Each section is clearly labeled with comments

**Reorder Sections:**
- Cut and paste entire `<section>` blocks to reorder

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID (format: `G-XXXXXXXXXX`)
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel (for Ads)

1. Get pixel ID from [facebook.com/business](https://business.facebook.com)
2. Uncomment Facebook Pixel code in `script.js`
3. Replace `YOUR-PIXEL-ID` with actual ID

## 🛒 E-Commerce Next Steps

This site uses WhatsApp for orders (perfect for MVP). To add full e-commerce:

### Month 2: Payment Integration

**Option 1: Pesapal** (Kenya-focused)
- Supports M-Pesa, Cards, Bank transfers
- Visit: [pesapal.com](https://www.pesapal.com)

**Option 2: Flutterwave** (Pan-African)
- Multiple payment methods
- Visit: [flutterwave.com](https://flutterwave.com)

**Option 3: Shopify**
- Full e-commerce platform
- Monthly fee: ~$29
- Visit: [shopify.com](https://www.shopify.com)

### Email Collection

Use [EmailJS](https://www.emailjs.com) (free tier) to capture newsletter signups:

1. Create EmailJS account
2. Set up email service
3. Update newsletter form in `script.js`

## 📈 SEO Optimization

### Add Meta Tags

Already included in `<head>`, but customize:

```html
<meta name="description" content="Your custom description">
<meta property="og:image" content="URL to your share image">
```

### Create `robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://yourusername.github.io/kenyan-feels/sitemap.xml
```

### Create `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourusername.github.io/kenyan-feels/</loc>
    <lastmod>2026-02-09</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🔧 Troubleshooting

### Site Not Loading on GitHub Pages
- Wait 5-10 minutes after enabling Pages
- Check repository is public
- Verify files are in root directory

### Images Not Showing
- Check image URLs are correct
- Use absolute URLs for external images
- Ensure image files are uploaded to repository

### WhatsApp Button Not Working
- Verify phone number format (no + or spaces)
- Test on mobile device
- Check WhatsApp Business is installed

### Mobile Menu Not Working
- Clear browser cache
- Check `script.js` is loaded
- Open browser console (F12) for errors

## 📞 Support

Need help deploying or customizing? Reach out:
- **WhatsApp**: +254 700 000 000
- **Email**: hello@kenyanfeels.com
- **Instagram**: [@kenyanfeels](https://instagram.com/kenyanfeels)

## 📝 License

This website is for Kenyan Feels. All rights reserved.

---

**Built with ❤️ in Nairobi, Kenya**

🚀 Ready to launch? Update your info and deploy!

## 🎯 Launch Checklist

Before going live, complete this checklist:

- [ ] Replace all placeholder images with actual product photos
- [ ] Update WhatsApp number in both HTML and JS files
- [ ] Add your actual Instagram handle
- [ ] Test all "Order Now" buttons
- [ ] Check mobile responsiveness
- [ ] Update prices to match your actual pricing
- [ ] Add your logo (if you have one)
- [ ] Test newsletter form
- [ ] Verify all links work
- [ ] Add Google Analytics (optional)
- [ ] Review all text for typos
- [ ] Test website on different devices
- [ ] Share with friends for feedback
- [ ] Launch! 🎉