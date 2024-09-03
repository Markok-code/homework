const textElement = document.getElementById('text')
const button = document.getElementById('textColor')

const newTextCollor = "red"
const TextCollor = textElement.style.color

let isColorChanged = false
button.addEventListener("click", ()=>{
    if (isColorChanged) {
        textElement.style.color = TextCollor
    } else {
        textElement.style.color = newTextCollor
    }
    isColorChanged = !isColorChanged
})