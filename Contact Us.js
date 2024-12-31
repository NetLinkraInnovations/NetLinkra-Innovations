document.addEventListener('DOMContentLoaded', function () {
    // Handle Send Message Button
    const sendMessageButton = document.querySelector('#contact .contact-us-button button');
    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent form submission
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all the fields.');
                return;
            }

            const mailtoLink = `mailto:netlikrainnovations@gmail.com?subject=Message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
            window.location.href = mailtoLink;
        });
    }

    // Handle Request Quote Button
    const requestQuoteButton = document.querySelector('#quote .contact-us-button button');
    if (requestQuoteButton) {
        requestQuoteButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent form submission
            const name = document.getElementById('quote-name').value.trim();
            const email = document.getElementById('quote-email').value.trim();
            const projectDetails = document.getElementById('project-details').value.trim();
            const budget = document.getElementById('budget').value.trim();

            if (!name || !email || !projectDetails || !budget) {
                alert('Please fill in all the fields.');
                return;
            }

            const mailtoLink = `mailto:netlikrainnovations@gmail.com?subject=Quote%20Request%20from%20${encodeURIComponent(name)}&body=Project%20Details:%20${encodeURIComponent(projectDetails)}%0A%0ABudget:%20${encodeURIComponent(budget)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
            window.location.href = mailtoLink;
        });
    }
});