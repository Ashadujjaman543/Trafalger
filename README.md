Trafalgar Landing Page

A fully responsive healthcare landing page built with HTML, CSS, and vanilla JavaScript based on the Figma design specifications.

🎯 Project Overview

Trafalgar is a modern healthcare landing page that provides information about virtual healthcare services. The page is designed to be fully responsive across all devices and includes interactive elements for enhanced user experience.

✨ Features

Design & Layout
- **Fully Responsive**: Adapts seamlessly to desktop (≥1024px), tablet (768px-1023px), and mobile (≤767px) devices
- **Semantic HTML5**: Uses proper semantic elements for better SEO and accessibility
- **Modern UI/UX**: Clean, professional design with smooth transitions and animations
- **Brand Consistency**: Matches Figma design with exact colors, typography, and spacing

Sections Implemented
1. **Header Section** - Fixed navigation bar with logo and menu
2. **Hero Section** - Eye-catching introduction with call-to-action
3. **Services Section** - Grid layout showcasing 6 healthcare services
4. **About Section** - Information about leading healthcare providers
5. **Download Apps Section** - Mobile app download promotion
6. **Testimonials Section** - Interactive customer reviews carousel
7. **Articles Section** - Latest healthcare articles and blog posts
8. **Footer Section** - Company information, links, and copyright

Interactive Features
- Responsive Navigation Bar
  - Hamburger menu for mobile devices
  - Smooth toggle animation
  - Auto-close on link click or outside click
  - Active link highlighting based on scroll position
  
- Testimonial Slider
  - Manual navigation (prev/next buttons)
  - Dot navigation for direct access
  - Auto-play functionality (pauses on hover)
  - Smooth fade transitions
  
- Smooth Scrolling
  - Animated scroll to sections
  - Active navigation link tracking
  
- Scroll Animations
  - Fade-in effects for cards and sections
  - Intersection Observer API for performance

🚀 Technologies Used

- HTML5- Semantic markup
- CSS3- Modern styling with CSS Grid, Flexbox, and custom properties
- JavaScript (ES6+)- Vanilla JavaScript for interactivity
- No frameworks or libraries - Pure, lightweight code

📁 Project Structure

```
trafalgar-landing-page/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
│
└── assets/
    ├── icons/          # Service icons (6 PNG files)
    ├── images/         # Section images and article covers
    └── logo/           # Navbar and footer logos
```

🎨 Design Specifications

Color Palette
- Primary Color: #458FF6
- Secondary Color: #5A98F2
- Text Dark: #000000
- Text Gray: #7D7987
- Background: #FFFFFF
- Gradient: linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)

Typography
- Font Family: Mulish (with system fallbacks)
- H1: 48px (32px mobile)
- H2: 36px (28px mobile)
- H3: 24px (20px mobile)
- Body: 18px (16px mobile)

Breakpoints
- Desktop: ≥1024px
- Tablet: 768px - 1023px
- Mobile: ≤767px

🔧 Setup & Installation

1. Clone or Download the project files
2. Ensure folder structure matches the project structure above
3. Place assets in the `assets/` directory with proper subfolders
4. Open `index.html`** in a modern web browser

No Build Process Required
This is a static website with no dependencies or build tools needed. Simply open the HTML file in your browser.

📱 Responsive Features

Desktop (≥1024px)
- Full navigation menu displayed inline
- Two-column layouts for hero, about, and apps sections
- Three-column grid for services and articles
- Optimal spacing and large typography

Tablet (768px-1023px)
- Slightly reduced font sizes
- Two-column grids for services and articles
- Maintained two-column layouts for main sections
- Adjusted spacing for better fit

Mobile (≤767px)
- Hamburger menu navigation
- Single-column layouts throughout
- Stacked content sections
- Optimized button sizes and spacing
- Touch-friendly interactive elements
- Centered content alignment

🎯 JavaScript Functionality

Mobile Navigation
```javascript
// Toggle hamburger menu
hamburger.addEventListener('click', toggleMenu);

// Close menu on link click
navLinks.forEach(link => link.addEventListener('click', closeMenu));

// Close menu on outside click
document.addEventListener('click', handleOutsideClick);
```

Testimonial Slider
```javascript
// Manual navigation
prevBtn.addEventListener('click', showPrevTestimonial);
nextBtn.addEventListener('click', showNextTestimonial);

// Auto-play with pause on hover
startAutoPlay();
testimonialSection.addEventListener('mouseenter', stopAutoPlay);
testimonialSection.addEventListener('mouseleave', startAutoPlay);
```

Scroll Effects
```javascript
// Active nav link tracking
window.addEventListener('scroll', updateActiveNavLink);

// Smooth scrolling
anchorLinks.forEach(anchor => anchor.addEventListener('click', smoothScroll));

// Scroll animations
IntersectionObserver for fade-in effects
```

♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators for all interactive elements
- Alt text for all images
- Reduced motion support for users with motion sensitivity
- Proper heading hierarchy

🔍 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

📈 Performance Optimizations

- Minimal JavaScript footprint
- CSS animations using GPU acceleration
- Intersection Observer for scroll animations
- Debounced resize handlers
- Efficient event delegation
- Optimized image loading

🐛 Known Issues & Future Improvements

Potential Enhancements
- Add lazy loading for images
- Implement a backend for form submissions
- Add more testimonials with actual data
- Include animation timing customization
- Add dark mode toggle
- Implement search functionality for articles

📄 License

This project is created for educational purposes based on the Trafalgar Landing Page Figma design.

👨‍💻 Development Notes

CSS Architecture
- Mobile-first approach with min-width media queries
- CSS custom properties for easy theme customization
- BEM-inspired naming conventions
- Modular section-based organization

JavaScript Patterns
- Event delegation where appropriate
- Separation of concerns
- Pure functions for testability
- Modern ES6+ features

🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

📞 Support

For questions or issues, please refer to the documentation or create an issue in the repository.

---

**Built with ❤️ for better healthcare accessibility**
