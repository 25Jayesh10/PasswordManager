const passwordInput = document.getElementById('passwordInput');
const strengthText = document.getElementById('strengthText');

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);
    updateStrengthText(strength);
});

function calculatePasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) {
        strength += 1;
    }
    if (password.match(/[a-z]/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]/)) {
        strength += 1;
    }
    if (password.match(/[0-9]/)) {
        strength += 1;
    }
    if (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
        strength += 1;
    }

    return strength;
}

function updateStrengthText(strength) {
    let text = '';
    switch (strength) {
        case 0:
            text = 'Weak';
            break;
        case 1:
            text = 'Moderate';
            break;
        case 2:
            text = 'Strong';
            break;
        case 3:
            text = 'Very Strong';
            break;
        case 4:
            text = 'Extremely Strong';
            break;
        default:
            text = '';
    }
    strengthText.textContent = `Password Strength: ${text}`;
}

