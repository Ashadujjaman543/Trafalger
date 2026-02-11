const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

hamburger.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 767) {
            toggleMenu();
        }
    });
});

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 767) {
        const isClickInsideNav = navMenu.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

const testimonials = [
    {
        name: "Edward Newgate",
        title: "Founder Circle",
        image: "assets/images/user.png",
        text: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely"
    },
];

let currentTestimonial = 0;

function updateTestimonial(index) {
    const testimonial = testimonials[index];
    const testimonialCard = document.querySelector('.testimonial-card');
    
    testimonialCard.style.opacity = '0';
    
    setTimeout(() => {
        testimonialCard.querySelector('.testimonial-avatar img').src = testimonial.image;
        testimonialCard.querySelector('.testimonial-info h4').textContent = testimonial.name;
        testimonialCard.querySelector('.testimonial-info p').textContent = testimonial.title;
        testimonialCard.querySelector('.testimonial-right p').textContent = `"${testimonial.text}"`;
        
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        testimonialCard.style.opacity = '1';
    }, 300);
}

document.querySelector('.control-btn.prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonial);
});

document.querySelector('.control-btn.next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
});

document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        updateTestimonial(currentTestimonial);
    });
});

let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(currentTestimonial);
    }, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

startAutoPlay();

document.querySelector('.testimonials').addEventListener('mouseenter', stopAutoPlay);
document.querySelector('.testimonials').addEventListener('mouseleave', startAutoPlay);

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

document.querySelectorAll('.service-card, .article-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

let resizeTimer;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 767 && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    }, 250);
});

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('%c👋 Welcome to Trafalgar!', 'color: #458FF6; font-size: 20px; font-weight: bold;');
console.log('%cYour Solutions For Healthy Life', 'color: #7D7987; font-size: 14px;');