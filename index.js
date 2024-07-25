
document.addEventListener("DOMContentLoaded", function() {
    try {
        // Smooth Scroll for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Handle contact button click
        document.querySelector('.btn-primary').addEventListener('click', function() {
            document.querySelector('.contact-section').scrollIntoView({
                behavior: 'smooth'
            });
        });

        // Handle contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            try {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                if (!name || !email || !message) {
                    throw
