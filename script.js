
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', expanded);
});

const contactForm = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
        messageDiv.textContent = 'Please fill out all fields.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = 'Thank you for your message!';
        messageDiv.style.color = 'green';
        contactForm.reset();
    }
});
