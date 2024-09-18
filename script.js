document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Show loader
        document.getElementById('loader').style.display = 'block';

        // Simulate form submission with a timeout
        setTimeout(function() {
            // Hide loader after form submission
            document.getElementById('loader').style.display = 'none';
            alert('Form submitted successfully!');
            // Here you would normally handle form submission, e.g., with an AJAX request
        }, 2000); // Simulate a 2-second delay
    });

    // Function to toggle the navigation menu
    function toggleMenu() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('active'); // Toggle 'active' class to show or hide menu
    }

    // Function to close the menu
    function closeMenu() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('active'); // Remove 'active' class to hide menu
    }

    // Add event listener to the menu icon for toggling the menu
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

    // Add event listener to nav links for hiding the menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Optional: Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const navLinks = document.getElementById('navLinks');
        const menuIcon = document.querySelector('.menu-icon');

        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.classList.remove('active'); // Hide the menu if clicking outside
        }
    });

    // Intersection Observer for revealing sections on scroll
    const section = document.querySelector('.section-container');
    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the section is in view
    };
    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to make section visible
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); // Unobserve once animation is triggered
            }
        });
    }, observerOptions);
    sectionObserver.observe(section);

    // Autoplay video on hover
    const video = document.getElementById('autoplay-video');
    video.addEventListener('mouseover', function() {
        video.muted = false; // Unmute the video
        video.play(); // Play the video
    });
    video.addEventListener('mouseout', function() {
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset video to the beginning
        video.muted = true; // Mute the video when hover ends
    });

    // Scroll-to section on "Learn More" button click
    const learnMoreBtn = document.querySelector('.learn-more-btn');
    learnMoreBtn.addEventListener('click', () => {
        const mainSection = document.getElementById('main-section');
        mainSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Show/Hide WhatsApp button on scroll
    const whatsappButton = document.querySelector('.whatsapp-btn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Adjust the scroll value as needed
            whatsappButton.style.animation = 'fadeOut 1s forwards';
        } else {
            whatsappButton.style.animation = 'fadeIn 1s forwards';
        }
    });

    // Initialize GSAP for smooth scroll effects and animations
    gsap.fromTo('.section-container', 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // GSAP for WhatsApp button visibility
    const showBtn = () => gsap.to(whatsappButton, { opacity: 1, y: 0, duration: 0.5 });
    const hideBtn = () => gsap.to(whatsappButton, { opacity: 0, y: 100, duration: 0.5 });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            showBtn();
        } else {
            hideBtn();
        }
    });

    // Handle touch controls for mobile
    document.querySelectorAll('.section-container, .whatsapp-btn').forEach(element => {
        element.addEventListener('touchstart', function() {
            gsap.to(this, { scale: 1.1, duration: 0.2 });
        });

        element.addEventListener('touchend', function() {
            gsap.to(this, { scale: 1, duration: 0.2 });
        });
    });
});
// script.js
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active'); // Toggle 'active' class on the navigation menu
  }
  