let door = document.querySelector('.door')
let doorway = document.querySelector('.doorway')
let body = document.querySelector('body')
let main = document.querySelector('main')
let billede = document.querySelector('.billede')
let tid = new Date()

// door.style.transform = 'rotateY(180deg)'




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
    WholeDoor.classList.add('wholedoor')
    newDoorgrp.classList.add('doorgroup')
    newDoorway.classList.add('doorway')
    newDoor.classList.add('door')
    lågenummer.classList.add('lågenummer')
    
    billede.src = låge.billede
    lågenummer.innerHTML = låge.nummer
    // newDoor.style.transform = 'rotateY(180deg)'
    
    if(låge.date <= new Date().getDate()){
        newDoor.addEventListener('click', rot = () => {
            if (newDoor.style.transform == 'rotateY(180deg)'){
                document.querySelector('#doorsound').play()
                newDoor.style.transform = 'rotateY(340deg)' 
                if(låge.date == new Date().getDate()){
                    document.querySelector('#godsound').play()
                    newDoor.classList.remove('dagensL')

                } 
            }else{  
                newDoor.style.transform = 'rotateY(180deg)'  
                document.querySelector('#doorclose').play()
            }
        })
        // newDoorway.addEventListener('click', exp = () => {
        //     newDoorway.style.height = '100vh'
        //     newDoorway.style.width = '100vw'
        //     billede.style.height = '100vh'
        //     billede.style.width = '100vw'
        //     console.log('hello world')
        // })
        
    }else{
        newDoor.addEventListener('click', nope = () => {
        newDoor.classList.add('nope')
        setTimeout(() => {
            newDoor.classList.remove('nope')    
            alert('Du kan ikke åbne denne låge endnu!')
        }, 1000);
    })  
}

if(låge.date < new Date().getDate()){
    // console.log('succes')
    newDoor.style.transform = 'rotateY(340deg)'
}else{
    newDoor.style.transform = 'rotateY(180deg)'
}

// setInterval(() => {
//     console.log(document.querySelector('#input').value)
// }, 5000);

if(låge.date == new Date().getDate()){
    newDoor.classList.add('dagensL')
}

if(låge.date == 2){
    newDoorway.addEventListener('click', ()=>{
    document.querySelector('#riddle').classList.add('show')
    document.querySelector('#darkmaker').style.backgroundColor = 'rgba(65, 65, 65, 0.678)'
    document.querySelector('#darkmaker').style.zIndex = 3
    console.log('hello world')
    })
}

console.log(newDoor.classList.value)

newDoor.append(lågenummer)
newDoorway.append(billede)
newDoorgrp.append(newDoorway, newDoor)
WholeDoor.append(newDoorgrp)
main.append(WholeDoor)



}
document.querySelector('#closeicon').addEventListener('click', ()=>{
    document.querySelector('#riddle').classList.remove('show')
    document.querySelector('#darkmaker').style.backgroundColor = 'rgba(0, 0, 0, 0)'
    document.querySelector('#darkmaker').style.zIndex = 0
})

document.querySelector('#button').addEventListener('click', ()=>{
   if(document.querySelector('#input').value == 'it was and it was beautiful'){
       console.log('godt gået!')
       document.querySelector('#nicesound').play()
       document.querySelector('#riddle2').classList.add('show2')
       console.log(document.querySelector('#riddle2').classList.value)
       body.style.overflow = 'hidden'
   }else{
    console.log('fuck')
    document.querySelector('#haha').play()
   }
})

// door.addEventListener('click', ()=>{
//     document.querySelector('#riddle').classList.add('show')
// })

// document.querySelector('#closeicon').addEventListener('click', ()=>{
//     document.querySelector('#riddle').classList.remove('show')
//     console.log('hello world')
// })

// const rotate = () =>{

//     if (door.style.transform == 'rotateY(180deg)'){
//         document.querySelector('#doorsound').play()
//         door.style.transform = 'rotateY(340deg)'  
//     }else{  
//         door.style.transform = 'rotateY(180deg)'  
//         document.querySelector('#doorclose').play()
//     }
//     console.log(door.style.transform)
// }

// const expand = () =>{
// // doorway.style.position = 'absolute'
// // doorway.style.left = '50vw'    
// doorway.style.height = '100vh'
// doorway.style.width = '100vw'
// billede.style.height = '100vh'
// billede.style.width = '100vw'
//     console.log('hello world')
// }

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