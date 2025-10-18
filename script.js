// ==================== Smooth Scroll for Navigation Links ====================
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Reveal Sections on Scroll ====================
const sections = document.querySelectorAll('section');
const observerOptions = { threshold: 0.15 };

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

// ==================== "Learn More" Button Scroll ====================
const learnMoreBtn = document.getElementById('learnMoreBtn');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
}

// ==================== Testimonial Carousel ====================
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

// Helper function to show specific testimonial
function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

// Initialize carousel position
showTestimonial(currentTestimonial);

// Auto-slide every 6 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}, 6000);

// ==================== Form Submission Feedback ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! Your message has been sent successfully.');
        contactForm.reset();
    });
}

// ==================== Optional: Highlight Active Navigation Link ====================
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    document.querySelectorAll('section').forEach(section => {
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`nav a[href="#${id}"]`);
        if (navLink) {
            if (
                section.offsetTop <= scrollPos &&
                section.offsetTop + section.offsetHeight > scrollPos
            ) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
});
