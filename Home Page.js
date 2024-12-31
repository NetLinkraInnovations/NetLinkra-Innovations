document.getElementById('sendMessageButton').addEventListener('click', function () {
    // Get the form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate the form
    if (!name || !email || !message) {
        alert('Please fill in all the fields.');
        return;
    }

    // Prepare the mailto link
    const mailtoLink = `mailto:netlinkrainnovations@gmail.com?subject=Message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;

    // Open the mailto link
    window.location.href = mailtoLink;
});