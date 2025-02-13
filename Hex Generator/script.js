var container = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('colorBox');

    const colorHexEl = document.createElement('span');
    colorHexEl.classList.add('color'); 
    colorContainerEl.appendChild(colorHexEl);

    const buttonEl = document.createElement('button');
    buttonEl.innerText = "Copy";
    colorContainerEl.appendChild(buttonEl);

    container.appendChild(colorContainerEl);
}

function randomColor() {
    
    const chars = '0123456789ABCDEF';
    const length = 6;
    let colorHex = '';

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        colorHex += chars.substring(randomNumber, randomNumber+1);
    }
    
    return '#'+colorHex;
}

const mainColorBoxEls = document.querySelectorAll('.colorBox');
generateColors();

function generateColors() {
    for (let i = 0; i < mainColorBoxEls.length; i++){
        const colorBoxEl = mainColorBoxEls[i];
        const newColorHex = randomColor();
        const colorHexEl = colorBoxEl.querySelector('.color');

        colorBoxEl.style.backgroundColor = newColorHex;
        colorHexEl.innerText = newColorHex;
    }
}

mainColorBoxEls.forEach((colorBoxEl) => {
    // colorBoxEl.addEventListener('click', () => {
    //     navigator.clipboard.writeText(colorBoxEl.querySelector('.color').innerText);
    //     alert('Color copied to clipboard!');
    // });
    const copyEl = colorBoxEl.querySelector('button');
    const colorHexEl = colorBoxEl.querySelector('.color');

    copyEl.addEventListener('click', () => {
        const colorHex = colorHexEl.innerText;
        copy(colorHex);
    }); 
});
 

function copy(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
             alert('Color copied to clipboard!');
        })
    .catch((error) => {
             console.error('Failed to copy text:', error);
        });
 }