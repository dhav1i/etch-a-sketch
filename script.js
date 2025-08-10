const containerElement = document.querySelector('div')

for(let i = 0; i < 256; i++) {
 const square = document.createElement('div')
  square.classList.add('square')
  containerElement.appendChild(square)
  let opacity = 0.1
  square.addEventListener('mouseenter', () => {
    opacity += 0.1
   square.setAttribute('style', `background-color: rgba(0, 0, 0, ${opacity})`)
  })
}