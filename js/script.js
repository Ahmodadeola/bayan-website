window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', function () {
    // Toggle active class on hamburger button
    hamburgerMenu.classList.toggle('active');

    // Toggle active class on navigation menu
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        hamburgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('nav') && navMenu.classList.contains('active')) {
        hamburgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections and main elements for fade in
document.querySelectorAll('section, main > section').forEach(section => {
    observer.observe(section);
});

// Testimonials carousel
let currentTestimonialIndex = 0;
const testimonyCards = document.querySelectorAll('.testimony-card');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

// Add navigation buttons
prevBtn.textContent = '<';
prevBtn.className = 'testimonial-nav prev';
nextBtn.textContent = '>';
nextBtn.className = 'testimonial-nav next';

testimonyCards[0].insertAdjacentElement('afterend', prevBtn);
prevBtn.insertAdjacentElement('afterend', nextBtn);
nextBtn.style.marginLeft = '10px';

function showTestimonial(index) {
    testimonyCards.forEach((card, i) => {
        card.style.opacity = i === index ? '1' : '0';
    });
}

prevBtn.addEventListener('click', function () {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonyCards.length) % testimonyCards.length;
    showTestimonial(currentTestimonialIndex);
});

nextBtn.addEventListener('click', function () {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonyCards.length;
    showTestimonial(currentTestimonialIndex);
});

// Initialize first testimonial
showTestimonial(0);
