const counter = document.getElementById('counting-number')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const resetBtn = document.getElementById('reset')

let count = 0;

incrementBtn.addEventListener('click', () => {
    count++
    counter.innerHTML = count
    colorIndicator()
    backgroundIndicator()
})

decrementBtn.addEventListener('click', () => {
    count--
    counter.innerHTML = count
    colorIndicator()
    backgroundIndicator()
})

resetBtn.addEventListener('click', () => {
    count = 0
    counter.innerHTML = count
    colorIndicator()
    backgroundIndicator()
})


const colorIndicator = () => {
    if (counter.innerHTML == 0) {
        counter.style.color = 'yellow'
    }
    else if (counter.innerHTML > 0) {
        counter.style.color = 'green'
    }
    else {
        counter.style.color = 'red'
    }
}

const colors = [
    'linear-gradient(to right, blue, green)',
    'linear-gradient(to right, orange, red)',
    'linear-gradient(to right, purple, pink)',
    'linear-gradient(to left, green, blue)',
    'linear-gradient(to left, fuchsia, blue)'
]

const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

const bodySelector = document.querySelector('body')

const backgroundIndicator = () => {
    if (counter.innerHTML == 0) {
        bodySelector.style.background = randomColor()
    }
    else if (counter.innerHTML > 0) {
        bodySelector.style.background = randomColor()
    }
    else {
        bodySelector.style.background = randomColor()
    }
}

counter.addEventListener('change', colorIndicator)
