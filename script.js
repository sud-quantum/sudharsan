// Theme Toggle Functionality
function initThemeToggle() {
    const buttons = document.querySelectorAll('button');
    let themeToggle;
    
    // Find the theme toggle button
    buttons.forEach(btn => {
        if (btn.innerHTML.includes('light_mode')) {
            themeToggle = btn;
        }
    });
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            document.body.classList.toggle('dark');
        });
    }
}

// Carousel Navigation Functionality
function initCarousel() {
    const carousel = document.getElementById('projects-carousel');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (carousel && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            carousel.scrollBy({ left: -350, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            carousel.scrollBy({ left: 350, behavior: 'smooth' });
        });
    }
}

// Mobile Navigation Functionality
function initMobileNav() {
    const mobileNavButtons = document.querySelectorAll('.mobile-nav button');
    const leftPanel = document.querySelector('.left-panel');
    const rightPanel = document.querySelector('.right-panel');
    
    if (mobileNavButtons.length > 0) {
        mobileNavButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                mobileNavButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show/hide panels based on button clicked
                if (index === 0) {
                    // Home button
                    leftPanel.classList.remove('hidden');
                    rightPanel.classList.remove('active');
                } else if (index === 1) {
                    // Work button (show experience panel on mobile)
                    leftPanel.classList.add('hidden');
                    rightPanel.classList.add('active');
                }
            });
        });
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initCarousel();
    initMobileNav();
});
