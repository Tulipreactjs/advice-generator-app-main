const button = document.getElementById('button')
const text = document.getElementById('advice')
const container = document.getElementById('container')

const getAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    console.log(data)
    document.getElementById('advice-number').innerHTML = `advice #${data.slip.id}`
    document.getElementById('advice').innerHTML = data.slip.advice
    button.classList.add('rotate')
    if (text.style.height >= 100) {
        container.style.height = '500px'
    }
}
getAdvice()

button.addEventListener('click', () => getAdvice())
function rotate() {
    button.classList.remove('rotate')
    
}