
const bg = document.querySelector('body')

let intervalId

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i=0; i<6; i++)
        {
            color += hex[Math.floor(Math.random()*16)]
        }
        console.log(color)
        return color
}

const startColorChange = function(){
    if (!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor() {
        bg.style.backgroundColor = randomColor()
    }
}
const stopColorChange = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.getElementById('start').addEventListener('click', startColorChange)
document.getElementById('stop').addEventListener('click', stopColorChange)