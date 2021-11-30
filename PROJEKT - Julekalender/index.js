let door = document.querySelector('.door')
let doorway = document.querySelector('.doorway')
let body = document.querySelector('body')
let main = document.querySelector('main')
let billede = document.querySelector('.billede')

door.style.transform = 'rotateY(180deg)'


const rotate = a =>{

    if (door.style.transform == 'rotateY(180deg)'){
        document.querySelector('#doorsound').play()
        door.style.transform = 'rotateY(340deg)'  
    }else{  
        door.style.transform = 'rotateY(180deg)'  
        document.querySelector('#doorclose').play()
    }
    console.log(door.style.transform)
}

const expand = a =>{

doorway.style.height = '100vh'
doorway.style.width = '100vw'
billede.style.height = '100vh'
billede.style.width = '100vw'
    console.log('hello world')
}

const låger = () => {
    let newContain = document.createElement('div')
    let newDoorgrp = document.createElement('div')
    let newDoorway = document.createElement('div')
    let newDoor = document.createElement('div')
    let link = document.createElement('a')
    newContain.classList.add('container')
    newDoorgrp.classList.add('doorgroup')
    newDoorway.classList.add('doorway')
    newDoor.classList.add('door')
    newContain.append(newDoorgrp)
    newDoorgrp.append(newDoor, newDoorway)

}
{/* >
    <div class="doorgroup">
            <div class="doorway">Klik her</div>
        <div class="door">
            <img class= nummer src="./assets/nummer1.svg" alt="">
            <audio id="doorsound"src="./assets/open_door.mp3"></audio>
            <audio id="doorclose"src="./assets/doorclose.wav"></audio>
        </div>
    </div>
*/}
door.addEventListener('click',rotate)
doorway.addEventListener('click',expand)