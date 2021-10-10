
let bingelist=[
    './Assets/1.png',
    './Assets/2.png',
    './Assets/3.png',
    './Assets/4.png',
    './Assets/5.png',
    './Assets/6.png',
    './Assets/7.png',
    './Assets/8.png'
]

bingelist.map((movie, index) => {
    let newImage = document.createElement('img')
    newImage.src = movie
    document.querySelector('#bingelist').append(newImage)
})