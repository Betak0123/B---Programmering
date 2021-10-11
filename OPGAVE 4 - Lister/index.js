let main = document.querySelector('main')
let input = document.querySelector('#search')


const addCard = (name,i) => {
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    let newH = document.createElement('h1')
    newH.innerHTML = name
    newCard.append(newH)
    newCard.style.animation= 'anim'
    newCard.style.animationDuration= '.3s'
    newCard.style.animationDelay= i/37 + 's'
    main.append(newCard)

}

// addCard('<img src="./assets/Aatrox.png" alt="">')

// Vi vil gerne lave en array med tekst variable
let names = ['<img src="./assets/Aatrox.png" alt="">',
'<img src="./assets/Ahri.png" alt="">',
'<img src="./assets/Akshan.png" alt="">',
'<img src="./assets/Akali.png" alt="">',
'<img src="./assets/Alistar.png" alt="">',
'<img src="./assets/Amumu.png" alt="">',
'<img src="./assets/Anivia.png" alt="">',
'<img src="./assets/Annie.png" alt="">',
'<img src="./assets/Aphelios.png" alt="">',
'<img src="./assets/Ashe.png" alt="">',
'<img src="./assets/AurelionSol.png" alt="">',
'<img src="./assets/Azir.png" alt="">',
'<img src="./assets/Bard.png" alt="">',
'<img src="./assets/Blitzcrank.png" alt="">',
'<img src="./assets/Brand.png" alt="">',
'<img src="./assets/Braum.png" alt="">',
'<img src="./assets/Caitlyn.png" alt="">',
'<img src="./assets/Camille.png" alt="">',
'<img src="./assets/Cassiopeia.png" alt="">',
'<img src="./assets/Chogath.png" alt="">',
'<img src="./assets/Corki.png" alt="">',
'<img src="./assets/Darius.png" alt="">',
'<img src="./assets/Diana.png" alt="">',
'<img src="./assets/Draven.png" alt="">',
'<img src="./assets/DrMundo.png" alt="">',
'<img src="./assets/Ekko.png" alt="">',
'<img src="./assets/Elise.png" alt="">',
'<img src="./assets/Evelynn.png" alt="">',
'<img src="./assets/Ezreal.png" alt="">',
'<img src="./assets/Fiddlesticks.png" alt="">',
'<img src="./assets/Fiora.png" alt="">',
'<img src="./assets/Fizz.png" alt="">',
'<img src="./assets/Galio.png" alt="">',
'<img src="./assets/Garen.png" alt="">',
'<img src="./assets/Braum.png" alt="">',
]

// .push sætter en ting ind i slutningen af listen
names.push()


// .map kører alle listens elementer igennem.
names.map(name => addCard(name))

input.addEventListener('input',()=>{
    console.log(input.value)
    let results = names.filter( name => name.toLowerCase().includes(input.value.toLowerCase()))
    main.innerHTML=''
    results.map( (name, i)=> addCard(name, i))
})





