const score = document.querySelector('.score span')
const holes = document.querySelectorAll('.hole')
const start_btn = document.querySelector('.buttons .start')
const stop_btn = document.querySelector('.buttons .stop')
const cursor = document.querySelector('.hammer img')

window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"
})

window.addEventListener('click', () => {
    cursor.style.animation = 'none'
    setTimeout(() => {
        cursor.style.animation = ''
    }, 101)
})

start_btn.addEventListener('click', () => {
    start_btn.style.display = 'none'
    stop_btn.style.display = 'inline-block'

    let holee
    let points = 0

    const game = setInterval(() => {

        let ran = Math.floor(Math.random() * 5)
        holee = holes[ran]

        let set_img = document.createElement('img')
        set_img.setAttribute('src', 'https://media.geeksforgeeks.org/wp-content/uploads/20210303135621/rat.png')
        set_img.setAttribute('class', 'rat')
        holee.appendChild(set_img)

        setTimeout(() => {
            holee.removeChild(set_img)
        }, 700);
    }, 800)

    window.addEventListener('click', (e) => {
        if (e.target === holee) 
            score.innerText = ++points;
    })

    stop_btn.addEventListener('click', () => {
        clearInterval(game)
        stop_btn.style.display = 'none'
        start_btn.style.display = 'inline-block'
        score.innerHTML = '0'
    })
})