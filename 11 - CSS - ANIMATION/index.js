document.querySelector('main').innerHTML = ''


for(let i = 0; i<20; i++){
    let card = document.createElement('div')
    card.classList.add('card')
    card.style.animation = 'anim'
    card.style.animationDelay = i/37 + 's'
    card.style.animationDuration = '1.5s'

    document.querySelector('main').append(card)
}