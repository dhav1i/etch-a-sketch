const containerElement = document.querySelector('.container');
const slider = document.querySelector('.grids-slider');
const rangeValue = document.querySelector('.range-value');
const classicBtn = document.querySelector('.classic');
const modernBtn = document.querySelector('.modern');
const eraseBtn = document.querySelector('.erase');
const squares = document.querySelectorAll('.square');


rangeValue.textContent = slider.value;

slider.oninput = function() {
  rangeValue.textContent = this.value;
   let squares = document.querySelectorAll('.square')
   squares.forEach((square)  => {
       square.remove()
   } )
    createGrid(slider.value)
};

let currentMode = "classic";

function createGrid(num) {
    let squareDimension = 480 / num;
    
    for(let i = 0; i < num * num; i++) {
        const square = document.createElement('div')
        square.classList.add('square');
        containerElement.appendChild(square);
        
        let opacity = 0;
        
        square.addEventListener('mouseenter', () => {
            if(currentMode === "classic") {
                opacity += 0.1
                square.setAttribute('style', `background-color: rgba(0, 0, 0, ${opacity}); height: ${squareDimension}px; width: ${squareDimension}px`)
            } else if(currentMode === "modern") {
                const randomR = Math.floor(Math.random() * 255);
                const randomG = Math.floor(Math.random() * 255);
                const randomB = Math.floor(Math.random() * 255);
                square.setAttribute('style', `background-color: rgb(${randomR},${randomG},${randomB}); height: ${squareDimension}px; width: ${squareDimension}px`)
            }
        });
        eraseBtn.addEventListener('click', () => {
            opacity = 0;
            square.style.backgroundColor = "white";
        });
        square.style.height = `${squareDimension}px`;
        square.style.width = `${squareDimension}px`;
    }
}

modernBtn.addEventListener('click', () => {currentMode = "modern"});
classicBtn.addEventListener('click', () => {currentMode = "classic"});

window.onload = createGrid(16)