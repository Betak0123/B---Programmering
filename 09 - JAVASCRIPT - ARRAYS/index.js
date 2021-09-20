
// // Vi kan lade være med at lave parenteser i funktionen hvis der kun er 1 parametre.
// // Derudover behøves tuborg parenteser heller ikke at være med, hvis der kun er 1 linje kode i funktionen  
// const sayHi = name => console.log('hi '+name)

// sayHi('per')


// document.querySelector('body').addEventListener('click',e=>console.log(e))

let main = document.querySelector('main')
let input = document.querySelector('#search')


const addCard = name => {
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    let newH = document.createElement('h1')
    newH.innerHTML = name
    newCard.append(newH)
    main.append(newCard)
}

addCard('Gertrud')

// Vi vil gerne lave en array med tekst variable
let names = ['Bjarke','Sofus','Emil','Marius','Nagib','Bjørn']

// .push sætter en ting ind i slutningen af listen
names.push('Simon')


// .map kører alle listens elementer igennem.
names.map(name => addCard(name))

input.addEventListener('input',()=>{
    console.log(input.value)
    let results = names.filter( name => name.toLowerCase().includes(input.value.toLowerCase()))
    main.innerHTML=''
    results.map( name=> addCard(name))
})





// // Dette er et for loop der kan kører en liste igennem
// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }