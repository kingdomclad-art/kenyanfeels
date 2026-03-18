// ==========================================
// KENYAN FEELS - INTERACTIVE JAVASCRIPT
// ==========================================

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ==========================================
// Collection Filtering
// ==========================================

const tabBtns = document.querySelectorAll('.tab-btn');
const collectionGroups = document.querySelectorAll('.collection-group');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const collection = btn.getAttribute('data-collection');
        
        collectionGroups.forEach(group => {
            if (collection === 'all') {
                group.style.display = 'block';
            } else {
                const groupCollection = group.getAttribute('data-collection');
                if (groupCollection === collection) {
                    group.style.display = 'block';
                } else {
                    group.style.display = 'none';
                }
            }
        });

        // Smooth scroll to shop section after filtering
        document.querySelector('#shop').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ==========================================
// WhatsApp Order Integration
// ==========================================

function orderWhatsApp(productName) {
    // IMPORTANT: Replace with your actual WhatsApp number
    // Format: country code + number (no + or spaces)
    // Example: 254712345678 for Kenya (+254 712 345678)
    const whatsappNumber = '254XXXXXXXXX'; // REPLACE THIS
    
    const message = encodeURIComponent(
        `Hi Kenyan Feels! 👋\n\nI'm interested in ordering:\n📦 ${productName}\n\nCould you please share:\n- Available colors/variations\n- Delivery timeline\n- Payment options\n\nThank you!`
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
        const submitBtn = newsletterForm.querySelector('button');
        
        // Visual feedback
        submitBtn.innerHTML = '✓ Joined!';
        submitBtn.style.background = var(--accent-sage);
        
        // Here you would integrate with your email service
        // For now, just showing success message
        
        setTimeout(() => {
            alert(`Welcome to the Kenyan Feels circle! 🎉\n\nWe'll send updates to: ${email}`);
            emailInput.value = '';
            submitBtn.innerHTML = 'Join Now';
            submitBtn.style.background = '';
        }, 1000);
        
        // TODO: Integrate with EmailJS, Mailchimp, or your email service
        // Example with EmailJS:
        // emailjs.send("service_id", "template_id", {
        //     to_email: email
        // }).then(() => {
        //     // Success handling
        // });
    });
}

// ==========================================
// Smooth Scroll with Offset
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Scroll Animations
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards for fade-in
document.querySelectorAll('.product-card, .contact-card, .step').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(card);
});

// ==========================================
// Navbar Scroll Effect
// ==========================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        navbar.style.background = 'rgba(245, 243, 239, 0.98)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(245, 243, 239, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// Order Button Feedback
// ==========================================

document.querySelectorAll('.btn-order').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '✓ Opening WhatsApp...';
        this.style.background = '#9CAF88';
        
        setTimeout(() => {
            this.innerHTML = originalText;
            this.style.background = '';
        }, 2000);
    });
});

// ==========================================
// Update Seasonal Collection Dynamically
// ==========================================

function updateSeasonalCollection() {
    const currentMonth = new Date().getMonth(); // 0-11
    const seasonalIntro = document.querySelector('[data-collection="seasonal"] .collection-intro');
    
    if (!seasonalIntro) return;
    
    let seasonalContent = {
        title: '',
        description: '',
        note: ''
    };
    
    // March-April: Easter
    if (currentMonth >= 2 && currentMonth <= 3) {
        seasonalContent = {
            title: '🌸 Seasonal Collection - Easter',
            description: 'Hope. Renewal. New beginnings. Celebrate the season with mugs that carry messages of resurrection, rebirth, and rising again—no matter how many times life knocks you down.',
            note: 'Limited availability through April'
        };
    }
    // May: Mother's Day
    else if (currentMonth === 4) {
        seasonalContent = {
            title: '💐 Seasonal Collection - Mother\'s Day',
            description: 'Celebrate the women who shaped us. These mugs carry gratitude, love, and appreciation for the mothers, grandmothers, and mother figures in our lives.',
            note: 'Limited availability through May'
        };
    }
    // June: Father's Day
    else if (currentMonth === 5) {
        seasonalContent = {
            title: '👔 Seasonal Collection - Father\'s Day',
            description: 'For the dads, father figures, and men who showed up. Coffee-fueled mornings deserve mugs with messages of appreciation and respect.',
            note: 'Limited availability through June'
        };
    }
    // August: Kenyan Heritage Month
    else if (currentMonth === 7) {
        seasonalContent = {
            title: '🇰🇪 Seasonal Collection - Heritage Month',
            description: 'Celebrating Kenya in all its glory. Patriotic designs, cultural pride, and messages that honor our heritage and independence.',
            note: 'Limited availability through August'
        };
    }
    // November-December: Christmas & New Year
    else if (currentMonth >= 10 && currentMonth <= 11) {
        seasonalContent = {
            title: '🎄 Seasonal Collection - Holidays',
            description: 'Peace, joy, and new beginnings. Perfect for gift-giving season, these designs celebrate hope, gratitude, and fresh starts.',
            note: 'Limited availability through December'
        };
    }
    // January: New Year
    else if (currentMonth === 0) {
        seasonalContent = {
            title: '✨ Seasonal Collection - New Year',
            description: 'Fresh starts. Bold intentions. This year is yours. Mugs that inspire goal-setting, motivation, and becoming the person you want to be.',
            note: 'Limited availability through January'
        };
    }
    // Default: Seasonal Specials
    else {
        seasonalContent = {
            title: '🌟 Seasonal Collection',
            description: 'Limited edition designs for this season. Fresh messages, new vibes, and pieces that mark this moment in time.',
            note: 'Check back often for new seasonal drops'
        };
    }
    
    // Update the HTML
    seasonalIntro.querySelector('h3').textContent = seasonalContent.title;
    seasonalIntro.querySelector('p').textContent = seasonalContent.description;
    seasonalIntro.querySelector('.collection-note').textContent = seasonalContent.note;
}

// Run on page load
updateSeasonalCollection();

// ==========================================
// Seasonal Badge Auto-Update
// ==========================================

function updateSeasonalBadges() {
    const currentMonth = new Date().getMonth();
    const seasonalBadges = document.querySelectorAll('.badge');
    
    let badgeText = 'Seasonal';
    
    if (currentMonth >= 2 && currentMonth <= 3) badgeText = 'Easter';
    else if (currentMonth === 4) badgeText = 'Mother\'s Day';
    else if (currentMonth === 5) badgeText = 'Father\'s Day';
    else if (currentMonth === 7) badgeText = 'Heritage';
    else if (currentMonth >= 10 && currentMonth <= 11) badgeText = 'Holiday';
    else if (currentMonth === 0) badgeText = 'New Year';
    
    seasonalBadges.forEach(badge => {
        if (badge.textContent === 'Easter' || badge.textContent === 'Seasonal') {
            badge.textContent = badgeText;
        }
    });
}

updateSeasonalBadges();

// ==========================================
// Loading Animation
// ==========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// Instagram Grid Hover Effect
// ==========================================

document.querySelectorAll('.instagram-post').forEach(post => {
    post.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
    
    post.addEventListener('click', function() {
        window.open('https://instagram.com/kenyanfeels', '_blank');
    });
});

// ==========================================
// Back to Top (Optional - appears on scroll)
// ==========================================

// Create back to top button
const backToTop = document.createElement('button');
backToTop.innerHTML = '↑';
backToTop.className = 'back-to-top';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--accent-terracotta);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(181, 131, 111, 0.3);
`;

document.body.appendChild(backToTop);

// Show/hide on scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
});

// Scroll to top on click
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTop.addEventListener('mouseenter', () => {
    backToTop.style.transform = 'scale(1.1)';
});

backToTop.addEventListener('mouseleave', () => {
    backToTop.style.transform = 'scale(1)';
});

// ==========================================
// Console Message (Fun Easter Egg)
// ==========================================

console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #B5836F;');
console.log('%cInterested in how this site was built?', 'font-size: 14px; color: #8B6F47;');
console.log('%cReach out to hello@kenyanfeels.com', 'font-size: 12px; color: #6B5D4F;');
console.log('%c✨ Made with love in Nairobi ✨', 'font-size: 12px; font-style: italic; color: #C9A684;');