let api_key = 'bZtpERwaxr8KjBTC3STQKMTPpxrGIkYl'


fetch('http://api.giphy.com/v1/gifs/trending?api_key='
+ api_key + '&limit=20&rating=g')
    .then(resp => resp.json() )
        .then(json => {
            console.log(json.data[0].images.fixed_height.url)
            json.data.map(image => InsertImage(image.images.fixed_height.url))
        })

const InsertImage = (url) => {
    let img = document.createElement('img')
    img.src = url
    document.querySelector('body').append(img)
}