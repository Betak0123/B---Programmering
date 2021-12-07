let door = document.querySelector('.door')
let doorway = document.querySelector('.doorway')
let body = document.querySelector('body')
let main = document.querySelector('main')
let billede = document.querySelector('.billede')

// door.style.transform = 'rotateY(180deg)'


const rotate = () =>{

    if (door.style.transform == 'rotateY(180deg)'){
        document.querySelector('#doorsound').play()
        door.style.transform = 'rotateY(340deg)'  
    }else{  
        door.style.transform = 'rotateY(180deg)'  
        document.querySelector('#doorclose').play()
    }
    console.log(door.style.transform)
}

const expand = () =>{
// doorway.style.position = 'absolute'
// doorway.style.left = '50vw'    
doorway.style.height = '100vh'
doorway.style.width = '100vw'
billede.style.height = '100vh'
billede.style.width = '100vw'
    console.log('hello world')
}


fetch('./kalender.json')
    .then(res => res.json())
    .then(json => {
        console.log(json) 
        json.låger.map(låge =>{
            låger(låge)    
        })
})
const låger = (låge) => {
    let newContain = document.createElement('div')
    let WholeDoor = document.createElement('div')
    let newDoorgrp = document.createElement('div')
    let newDoorway = document.createElement('div')
    let newDoor = document.createElement('div')
    let billede = document.createElement('img')
    let lågenummer = document.createElement('div')


    billede.classList.add('billede')
    newContain.classList.add('container')
    newDoorgrp.classList.add('doorgroup')
    newDoorway.classList.add('doorway')
    newDoor.classList.add('door')
    lågenummer.classList.add('lågenummer')

    console.log(billede.classList.value )
    billede.src = "./assets/julemand.gif"
    lågenummer.innerHTML = låge.nummer
    newDoor.style.transform = 'rotateY(180deg)'

    newDoor.addEventListener('click', rot = () => {
        if (newDoor.style.transform == 'rotateY(180deg)'){
            document.querySelector('#doorsound').play()
            newDoor.style.transform = 'rotateY(340deg)'  
        }else{  
            newDoor.style.transform = 'rotateY(180deg)'  
            document.querySelector('#doorclose').play()
        }
        console.log(door.style.transform)
    })

    newDoor.append(lågenummer)
    newContain.append(newDoorgrp)
    newDoorgrp.append(newDoor, newDoorway)
    WholeDoor.append(newDoorgrp)
    main.append(WholeDoor)
}

{/* <div class="doorgroup">
    <div class="doorway">
        <img class='billede' src="./assets/julemand.gif" alt="">
    </div>
    <div class="door">
        <div class="lågenummer">q</div>
        <audio id="doorsound"src="./assets/open_door.mp3"></audio>
        <audio id="doorclose"src="./assets/doorclose.wav"></audio>
    </div>
</div> */}

// const newCard = (låge) => {
//     let card = document.createElement('div')
//     let heading = document.createElement('h2')
//     let members = document.createElement('div')
//     let lågenumer = document.createElement('div')
//     card.classList.add('card')
//     members.classList.add('members')
//     card.append(heading)
//     card.append(members)
//     document.querySelector('main').append(card)
//     heading.innerHTML = låge.family
//     let list = ''
//     låge.members.map(member => list += '<li>' + member + '</li>')
//     members.innerHTML = list
//     document.querySelector('main').append(card)
// }

// document.querySelector('#door2').addEventListener('click',rotate)
// document.querySelector('#door2').style.transform = 'rotateY(180deg)'
// door.addEventListener('click',rotate)
// doorway.addEventListener('click',expand)