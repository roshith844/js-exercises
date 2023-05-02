const button = document.querySelector('#button')
button.addEventListener('click', () => {
    document.getElementById('box').style.backgroundColor = 'red'
})

button.addEventListener('mouseover', () => {
    document.getElementById('box').style.backgroundColor = 'yellow'
})
