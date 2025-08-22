// Pricing card
const pricingCards = document.querySelectorAll('.pricing-card');
const featuresPanel = document.querySelector('.features-panel');

const tierDescriptions = {
    popular: {
        title: "Perfect for small teams getting started",
        features: [
            "AI-powered energy-based task scheduling",
            "Mood-aware task recommendations",
            "Real-time collaboration and team chat",
            "Basic analytics and productivity insights",
            "Core workflow automation",
            "Integrations with 20+ popular tools"
        ]
    },
    pro: {
        title: "Advanced features for growing teams",
        features: [
            "Advanced AI scheduling with custom algorithms",
            "Team mood tracking and insights",
            "Advanced collaboration with file sharing",
            "Detailed performance analytics and reports",
            "Custom workflow automation rules",
            "Integrations with 50+ popular tools",
            "Priority customer support"
        ]
    },
    enterprise: {
        title: "Enterprise-grade solution for large organizations",
        features: [
            "Custom AI training for your organization",
            "Advanced team collaboration and project management",
            "Enterprise-grade security and compliance",
            "Custom analytics and reporting dashboard",
            "Advanced workflow automation with AI",
            "Unlimited integrations and custom connectors",
            "Dedicated account manager and 24/7 support",
            "Custom onboarding and training programs"
        ]
    }
};

function updateFeaturesPanel(tier) {
    const description = tierDescriptions[tier];
    const titleElement = featuresPanel.querySelector('h3');
    const featuresList = featuresPanel.querySelector('.features-list');
    
    titleElement.textContent = description.title;
    
    featuresList.innerHTML = '';
    description.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
}

pricingCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove active class from all cards
        pricingCards.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked card
        card.classList.add('active');
        
        // Update features panel
        const tier = card.dataset.tier;
        updateFeaturesPanel(tier);
    });
});

updateFeaturesPanel('popular');

// Product Carousel 
const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
const totalSlides = slides.length;

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const offset = -slideIndex * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;
    

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

let autoPlayInterval = setInterval(nextSlide, 5000);

const carouselWrapper = document.querySelector('.carousel-wrapper');
carouselWrapper.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

carouselWrapper.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextSlide, 5000);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {

    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    // Mobile hamburger toggle
    const hamburgerBtn = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    if (hamburgerBtn && menu) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('is-open');
            hamburgerBtn.classList.toggle('is-active', isOpen);
            hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }
});
