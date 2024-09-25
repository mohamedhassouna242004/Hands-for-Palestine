document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("donationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert("Merci pour votre don !");
            window.open("donation.webp", "_blank");
        }
    });
});

function validateForm() {
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();
    const amount = document.getElementById('amount').value.trim();

    if (!isAlpha(nom)) {
        alert("Veuillez entrer un nom valide.");
        return false;
    }

    if (!isAlpha(prenom)) {
        alert("Veuillez entrer un prénom valide.");
        return false;
    }

    if (!isEmailValid(email)) {
        alert("Adresse email invalide !");
        return false;
    }

    if (!isAmountValid(amount)) {
        alert("Veuillez entrer un montant valide.");
        return false;
    }

    return true;
}

function isAlpha(str) {
    return /^[a-zA-Z\s]+$/.test(str);
}

function isEmailValid(email) {
    const a = email.indexOf('@');
    const b = email.lastIndexOf('.');
    return (a > 0 && b > a + 1 && b < email.length - 1);
}

function isAmountValid(amount) {
    return !isNaN(amount) && parseFloat(amount) > 0;
}
