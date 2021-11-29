let door = document.querySelector('.door')
door.style.transform = 'rotateY(180deg)'
let doorway = document.querySelector('.doorway')



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
doorway.style.width = '110vw'
    console.log('hello world')
}

door.addEventListener('click',rotate)

doorway.addEventListener('click',expand)