// var navn = 'bob'
// console.log(navn)
// navn = 'bo'
// console.log(navn)

// // console.log skriver beskeder ude i consollen (Åbner med F12)
// console.log('hej med dig')
// console.log('du er meget smuk')
 
// // document.querySelector referer til en ting i vores html. Dette kan være <body> men også id'er og classes
// document.querySelector('#tid')



// let sekunder = 0

// let farveCounter = 0

// // Dette er måden du laver en funktion på:
// // const Indsæt navn = (variabel) => {}

// const changeColor = (color) => {
//     document.querySelector('main').style.backgroundColor = color
// }

// changeColor('pink')

let sekunder = 0

let tid = document.querySelector('#tid')
let footer = document.querySelector('footer') 
let main = document.querySelector('main')
let knap = document.querySelector('#button')



const restart = () => {
    sekunder = 0
}
knap.addEventListener('click', restart)

main.style.backgroundColor = 'green'

// En måde bare at lægge 1 til, er at skriv ++ efter en variabel. 
// setInterval kalder en funktion, eksempelvis hver 1000 milisekund her 
setInterval(()=>{
    document.querySelector('#tid').innerHTML = sekunder
    document.querySelector('footer').style.width = 100/60*sekunder+'%'
    sekunder++

    if (sekunder==60){
            sekunder = 0
        }

    if(tid.style.borderRadius == '0px'){
        tid.style.borderRadius = '50%'
        footer.style.borderBottomRightRadius = '0'
        footer.style.borderTopRightRadius = '0'
    }else{
        footer.style.borderBottomRightRadius = '1rem'
        footer.style.borderTopRightRadius = '1rem'
        tid.style.borderRadius = '0px'
    }

    if(tid.style.borderRadius=='0px'){
        tid.style.borderRadius='50%'
    }else{
        tid.style.borderRadius='0'
    }



},1000)

setInterval(() => {

    if (sekunder < 10){
        main.style.backgroundColor = 'green'
    }
    if (sekunder >= 10){
        main.style.backgroundColor = 'orange'
    }
    if (sekunder >= 20){
        main.style.backgroundColor = 'blue'
    }
});