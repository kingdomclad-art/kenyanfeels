// ==========================================
// KENYAN FEELS - INTERACTIVE JAVASCRIPT
// ==========================================

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==========================================
// Product Category Filtering
// ==========================================

const filterBtns = document.querySelectorAll('.filter-btn');
const collectionCards = document.querySelectorAll('.collection-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        collectionCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                const category = card.getAttribute('data-category');
                if (category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// ==========================================
// WhatsApp Order Integration
// ==========================================

function orderWhatsApp(productName) {
    // Replace with your actual WhatsApp number (format: country code + number, no + or spaces)
    const whatsappNumber = '254700000000'; // REPLACE THIS WITH YOUR ACTUAL NUMBER
    
    const message = encodeURIComponent(
        `Hi Kenyan Feels! 👋\n\nI'm interested in ordering:\n📦 ${productName}\n\nCould you please provide more details about:\n- Available designs/colors\n- Delivery timeline\n- Payment options\n\nThank you!`
    );
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
}

// ==========================================
// Newsletter Form Submission
// ==========================================

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Here you would typically send this to your backend/email service
        // For now, we'll show a success message
        
        alert(`Thank you for subscribing! 🎉\n\nWe'll send updates to: ${email}`);
        emailInput.value = '';
        
        // Optional: Send to Google Sheets or email service
        // You can integrate with services like EmailJS, Mailchimp API, or Google Sheets
    });
}

// ==========================================
// Smooth Scroll with Offset for Fixed Nav
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // 80px offset for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Intersection Observer for Animations
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.valentine-card, .collection-card, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ==========================================
// Navbar Background on Scroll
// ==========================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// Add to Cart Animation Feedback
// ==========================================

document.querySelectorAll('.btn-cart').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Visual feedback
        this.innerHTML = '✓ Opening WhatsApp...';
        this.style.background = '#10b981';
        
        setTimeout(() => {
            this.innerHTML = 'Order Now';
            this.style.background = '';
        }, 2000);
    });
});

// ==========================================
// Product Image Lazy Loading Enhancement
// ==========================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==========================================
// Quick View Modal (Optional Enhancement)
// ==========================================

const quickViewButtons = document.querySelectorAll('.quick-view');

quickViewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Get product info
        const card = btn.closest('.valentine-card') || btn.closest('.collection-card');
        const productName = card.querySelector('h3').textContent;
        const productPrice = card.querySelector('.price').textContent;
        const productImage = card.querySelector('img').src;
        
        // Open WhatsApp directly with product details
        orderWhatsApp(productName);
    });
});

// ==========================================
// Social Share Functionality (Optional)
// ==========================================

function shareProduct(productName, productUrl) {
    if (navigator.share) {
        navigator.share({
            title: `Check out ${productName} from Kenyan Feels`,
            text: `I found this amazing enamel cup: ${productName}`,
            url: productUrl || window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy link to clipboard
        const tempInput = document.createElement('input');
        tempInput.value = window.location.href;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        alert('Link copied to clipboard! 📋');
    }
}

// ==========================================
// Initialize Analytics (Optional - Add your tracking code)
// ==========================================

// Google Analytics Example (uncomment and add your tracking ID)
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR-GA-TRACKING-ID');
*/

// Facebook Pixel Example (uncomment and add your pixel ID)
/*
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR-PIXEL-ID');
fbq('track', 'PageView');
*/

// ==========================================
// Performance Optimization - Debounce Scroll
// ==========================================

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll event
window.addEventListener('scroll', debounce(() => {
    // Your scroll-dependent code here
}, 15));

// ==========================================
// Loading Screen (Optional)
// ==========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger entry animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease forwards';
    }
});

// Add CSS for fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// Console Easter Egg (Optional Fun Touch)
// ==========================================

console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #ff3366;');
console.log('%cInterested in how this site was built?', 'font-size: 14px; color: #667eea;');
console.log('%cReach out to Kenyan Feels - we love connecting with curious minds!', 'font-size: 12px; color: #a0a0a0;');

console.log('%c✨ Designed with love in Nairobi ✨', 'font-size: 12px; font-style: italic; color: #764ba2;');