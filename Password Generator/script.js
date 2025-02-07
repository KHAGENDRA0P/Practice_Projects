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
    updatePasswordIndicator();
}

generateBtn.addEventListener('click', () => {
    generatePassword();
});

function updatePasswordIndicator() { 
    const passwordStrength = passwordStrength(passBox.value);
    passIndicator.className = "pass-indicator"+ passwordStrength;

}
function passwordStrength(password) { 
    if (password.length <= 6) {
        return "Password is too weak.";
    } 
    else if (password.length <= 12) {
        return "Password is medium.";
    }
    else {
        return "Password is strong.";
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updatePasswordIndicator();
})