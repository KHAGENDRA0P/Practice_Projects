const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const passBox = document.getElementById('passBox');

const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');   
const symbolsEl = document.getElementById('symbols');

const generateBtn = document.getElementById('getBtn');
const copyBtn = document.getElementById('copyIcon');
const passIndicator = document.getElementById('passIndicator');

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()-_+={}[]|\\;':\"<>,./?";
const numbers = "0123456789";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
    generatePassword();
});

function generatePassword() { 
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numbersEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    passBox.value = password;

    copyBtn.innerHTML = 'content_copy'; // Reset copy icon
    updatePasswordIndicator(); // Ensure indicator updates
}

generateBtn.addEventListener('click', generatePassword);

function updatePasswordIndicator(){
    const passwordStrength = getPasswordStrength(passBox.value);
    passIndicator.className = "pass-indicator " + passwordStrength;
}

function getPasswordStrength(password) { 
    if (password.length <= 6) return "weak";
    if (password.length <= 12) return "medium";
    return "strong";
}

window.addEventListener('DOMContentLoaded', updatePasswordIndicator);

copyBtn.addEventListener('click', () => {
    if (passBox.value.length > 0) {
        navigator.clipboard.writeText(passBox.value);
        alert('Password copied to clipboard!');
        copyBtn.innerText = "✔";
        setTimeout(() => {
            copyBtn.innerHTML = 'content_copy';
        }, 3000);
    }
});
