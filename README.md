# 🌿 Kenyan Feels - E-Commerce Website

A warm, inviting e-commerce website for **Kenyan Feels** - enamel mugs with messages that inspire, encourage, and comfort. Designed in Nairobi, made for moments that matter.

![Kenyan Feels](https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=1200&h=400&fit=crop)

## ✨ Features

- **Warm Earth Tone Design** - Calming beiges, creams, and terracotta colors
- **6 Dynamic Collections** - Seasonal, Faith, Destination Kenya, Love, Inspiration, Culture
- **Auto-Updating Seasonal Section** - Changes based on current month
- **WhatsApp Ordering** - Direct integration for seamless ordering
- **Mobile Responsive** - Beautiful on all devices
- **Collection Filtering** - Easy navigation through product categories
- **Smooth Animations** - Professional scroll effects and transitions

## 🎨 Design Philosophy

This website is designed to feel like **home** - warm, calm, and welcoming. The color palette draws from Kenya's earth tones:
- Cream backgrounds (#F5F3EF)
- Terracotta accents (#B5836F)
- Warm browns (#8B6F47)
- Soft sage (#9CAF88)

The goal: visitors should want to "hang out" on your site.

## 🚀 Quick Deploy to GitHub Pages

### Step 1: Download Files

Download these 3 files:
- `index.html`
- `styles.css`
- `script.js`

### Step 2: Update Your Information

**CRITICAL - Update these before deploying:**

#### In `script.js` (Line 54):
```javascript
const whatsappNumber = '254XXXXXXXXX'; // Replace with YOUR number
```
**Format:** `254712345678` (country code + number, no + or spaces)

#### In `index.html`:
- Search for `254XXXXXXXXX` and replace ALL instances with your WhatsApp number
- Search for `kenyanfeels` and replace with your Instagram handle (if different)
- Replace `hello@kenyanfeels.com` with your actual email

### Step 3: Add Your Product Images

Currently using placeholder images. Replace with your actual product photos:

**Method 1: Direct replacement in HTML**
1. Take photos of your mugs (good lighting, clean background)
2. Upload to [Imgur](https://imgur.com) or [Cloudinary](https://cloudinary.com)
3. Copy image URL
4. In `index.html`, find placeholder URLs like:
   ```html
   <img src="https://images.unsplash.com/photo-..." alt="Product">
   ```
5. Replace with your image URL:
   ```html
   <img src="https://i.imgur.com/YOUR-IMAGE.jpg" alt="Product">
   ```

**Method 2: Local images folder** (recommended)
1. Create `images` folder in your repository
2. Add your photos: `images/he-is-risen.jpg`, `images/nairobi-hustle.jpg`, etc.
3. Update HTML:
   ```html
   <img src="images/he-is-risen.jpg" alt="He Is Risen">
   ```

### Step 4: Deploy to GitHub

#### Using GitHub Desktop (Easiest):

1. **Create GitHub Account** 
   - Go to [github.com](https://github.com) and sign up

2. **Download GitHub Desktop**
   - Download from [desktop.github.com](https://desktop.github.com)
   - Install and sign in

3. **Create Repository**
   - Open GitHub Desktop
   - Click "File" → "New Repository"
   - Name: `kenyan-feels` (or your preferred name)
   - Local Path: Choose where to save
   - Click "Create Repository"

4. **Add Your Files**
   - Copy `index.html`, `styles.css`, `script.js` into the repository folder
   - If using local images, also copy the `images` folder
   - Files will appear in GitHub Desktop

5. **Publish**
   - Write commit message: "Initial website launch"
   - Click "Commit to main"
   - Click "Publish repository"
   - Choose "Public" or "Private"
   - Click "Publish Repository"

6. **Enable GitHub Pages**
   - Go to github.com → your repository
   - Click "Settings" tab
   - Click "Pages" in left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 2-3 minutes
   - Your site will be live at: `https://yourusername.github.io/kenyan-feels`

#### Using Git Command Line:

```bash
# Navigate to your project folder
cd kenyan-feels

# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial website launch"

# Create repository on github.com, then:
git remote add origin https://github.com/yourusername/kenyan-feels.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## 📝 Customizing Your Website

### Update Product Designs

Each product is a "product-card" block. Find and update:

```html
<div class="product-card">
    <div class="product-image">
        <img src="YOUR-IMAGE-URL" alt="YOUR DESIGN NAME">
        <span class="badge">Category</span> <!-- Optional -->
    </div>
    <div class="product-info">
        <h4>YOUR DESIGN NAME</h4>
        <p class="product-desc">Perfect for: YOUR TARGET CUSTOMER</p>
        <div class="product-meta">
            <span class="price">KES 1,500</span>
            <button class="btn-order" onclick="orderWhatsApp('YOUR DESIGN NAME')">Order Now</button>
        </div>
    </div>
</div>
```

### Change Your Brand Colors

In `styles.css`, find the `:root` section and update:

```css
:root {
    --accent-terracotta: #B5836F;  /* Your primary accent */
    --accent-brown: #8B6F47;       /* Secondary accent */
    --accent-sage: #9CAF88;        /* Success/check color */
}
```

### Add/Remove Collections

To add a new collection:

1. Add tab button in the collection-tabs section:
```html
<button class="tab-btn" data-collection="yourcollection">Your Collection</button>
```

2. Add collection group:
```html
<div class="collection-group" data-collection="yourcollection">
    <div class="collection-intro">
        <h3>Your Collection Title</h3>
        <p>Your description</p>
    </div>
    <div class="products-grid">
        <!-- Add product cards here -->
    </div>
</div>
```

### Update Pricing

Search for `KES 1,500` in `index.html` and replace all instances with your actual price.

## 🗓️ Seasonal Updates (Auto-Magic!)

The seasonal section **automatically updates** based on the current month:

- **March-April:** Easter Collection
- **May:** Mother's Day Collection
- **June:** Father's Day Collection
- **August:** Kenyan Heritage Month
- **November-December:** Holiday Collection
- **January:** New Year Collection

The JavaScript handles this automatically! You just need to:

1. **Update product images** in the Seasonal section to match the current season
2. **Keep 4 products** in the seasonal section (or adjust the grid)

## 📸 Taking Great Product Photos

**Setup:**
- Natural light (near window, golden hour)
- Plain background (white wall, wooden table, beige fabric)
- Multiple angles per design

**What to shoot:**
- Front view of mug with design clearly visible
- Lifestyle shot (mug on desk, in hand, with coffee)
- Close-up of design details
- Multiple mugs together (for variety)

**Photo specs:**
- Minimum 1000px wide
- JPG format
- Keep file size under 500KB (use [TinyPNG](https://tinypng.com) to compress)

## 🔧 Adding Features

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID (format: `G-XXXXXXXXXX`)
3. Add before `</head>` in `index.html`:

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

### Email Newsletter Integration

Use [EmailJS](https://www.emailjs.com) (free tier):

1. Create EmailJS account
2. Set up email service
3. In `script.js`, uncomment and update the newsletter integration code
4. Follow EmailJS documentation for setup

## 📱 Mobile Testing

Test your site on:
- iPhone (Safari)
- Android (Chrome)
- iPad/Tablet
- Desktop (Chrome, Firefox, Safari)

Use Chrome DevTools (F12) to test responsive design.

## 🎯 Launch Checklist

Before going live:

- [ ] Replace ALL placeholder images with actual product photos
- [ ] Update WhatsApp number in `script.js` AND `index.html`
- [ ] Update email address
- [ ] Update Instagram handle
- [ ] Test all "Order Now" buttons
- [ ] Check seasonal section is current
- [ ] Test mobile responsiveness
- [ ] Verify all links work
- [ ] Proofread all text
- [ ] Test on different browsers
- [ ] Get 2-3 friends to test the site
- [ ] Set up Google Analytics (optional)
- [ ] Launch! 🎉

## 🔄 Updating Your Site

After initial launch, to update:

**Using GitHub Desktop:**
1. Make changes to your local files
2. Open GitHub Desktop
3. Write commit message (e.g., "Added new Easter designs")
4. Click "Commit to main"
5. Click "Push origin"
6. Changes go live in 2-3 minutes

**Using Git Command Line:**
```bash
git add .
git commit -m "Your update description"
git push
```

## 💡 Tips for Success

**Keep it Updated:**
- Add new designs monthly
- Update seasonal section every season
- Share customer photos (with permission)
- Post your site link on Instagram bio

**Performance:**
- Compress images before uploading
- Don't use too many high-res photos
- Keep page load under 3 seconds

**Marketing:**
- Share site link everywhere (Instagram, WhatsApp Status, Facebook)
- Use site URL in business cards
- Add to email signatures
- QR code for physical marketing

## 🆘 Troubleshooting

**Site not loading:**
- Wait 5-10 minutes after enabling Pages
- Check repository is public
- Verify files are in root directory (not in a subfolder)

**Images not showing:**
- Check image URLs are correct
- If using local images, verify folder name matches
- Test image URLs in browser

**WhatsApp button not working:**
- Verify phone number format (254XXXXXXXXX)
- Test on mobile device
- Check number doesn't have + or spaces

**Mobile menu not working:**
- Clear browser cache
- Check `script.js` loaded properly
- Open browser console (F12) for errors

## 📞 Support

Questions? Reach out:
- **Email:** hello@kenyanfeels.com
- **WhatsApp:** Your number here
- **Instagram:** [@kenyanfeels](https://instagram.com/kenyanfeels)

## 📄 License

This website is for Kenyan Feels. All rights reserved.

---

**Built with ❤️ in Nairobi, Kenya**

Ready to launch? Update your info and go live! 🚀

---

## Quick Reference

**Your Website Structure:**
```
kenyan-feels/
├── index.html          (Main website file)
├── styles.css          (Design & colors)
├── script.js           (Interactive features)
├── images/            (Your product photos - create this folder)
│   ├── product1.jpg
│   ├── product2.jpg
│   └── ...
└── README.md          (This file)
```

**Key Files to Customize:**
1. `script.js` → Line 54 (WhatsApp number)
2. `index.html` → Search "254XXXXXXXXX" (replace all)
3. `index.html` → Search "kenyanfeels" (replace with your Instagram)
4. `index.html` → Replace all placeholder image URLs

**Collections in Order:**
1. Seasonal (auto-updates based on month)
2. Faith & Spirituality
3. Destination Kenya
4. Love & Relationships  
5. Inspiration & Affirmations
6. Kenyan Culture & Humor

Good luck with your launch! 🌿✨