let shown = false;

function showhideEmail() {
    const emailDiv = document.getElementById('email');
    const span = emailDiv.querySelector('span');

    if (shown) {
        span.textContent = 'Show my email';
    } else {
        const email = "zimmead" + "@" + "mail.uc.edu";
        span.innerHTML = `<a href='mailto:${email}' class="text-link">${email}</a>`;
    }

    shown = !shown;
}
