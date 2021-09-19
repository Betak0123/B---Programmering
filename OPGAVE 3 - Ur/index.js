
let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')
let thomas = document.querySelector('#thomas')
let ur = document.querySelector ('#ur')
let header = document.querySelector ('header')
let main = document.querySelector ('main')
let footer = document.querySelector ('footer')
 

ur.style.marginBottom = 0 + 'px'
footer.style.backgroundColor == 'rgb(36, 33, 33)'


const settid = () => {
    let tid = new Date()
    
    thomas.style.marginLeft = 1.6 * tid.getSeconds() + '%'
    
    let nul = ''
    if(tid.getHours() < 10) nul = '0'
    timer.innerHTML = nul + tid.getHours()
    nul = ''
    if(tid.getMinutes() < 10) nul = '0'
    min.innerHTML = nul + tid.getMinutes()
    nul = ''
    if(tid.getSeconds() < 10) nul = '0'
    sek.innerHTML = nul + tid.getSeconds()
    
}

thomas.style.backgroundImage = 'url("./Assets/glad.PNG")'
const skifthaack = () => {
    let tid = new Date()
    if(tid.getSeconds() < 30){
        thomas.style.backgroundImage = 'url("./Assets/glad.PNG")'
    }else{
        thomas.style.backgroundImage = 'url("./Assets/sad.PNG")'
    }
}

setInterval(settid, 1000)
setInterval(skifthaack, 5000)

const skiftBillede = () => {
    thomas.style.backgroundImage = 'url("./Assets/normal.PNG")'
}

const hop = () => {
    if(ur.style.marginBottom == 0 + 'px')    
    ur.style.marginBottom = 50 + 'px'
    else if(ur.style.marginBottom == 50 + 'px')    
    ur.style.marginBottom = 0 + 'px'

        footer.style.backgroundColor = 'rgb(255, 163, 249)'
}

const mainC = () => {
    if(footer.style.backgroundColor == 'rgb(255, 163, 249)')
    main.style.backgroundColor = 'rgb(214, 88, 206)'
    
}

const headerC = () => {
    if(main.style.backgroundColor == 'rgb(214, 88, 206)')    
    header.style.backgroundColor = 'rgb(158, 14, 149)'
    }

const allC =()=>{
    if(header.style.backgroundColor == 'rgb(158, 14, 149)'){
    header.style.backgroundColor = 'rgb(36, 33, 33)'  
    main.style.backgroundColor = 'rgb(71, 71, 71)'  
    footer.style.backgroundColor = 'rgb(163, 163, 163)'
    }
}


    setInterval(mainC, 1000)
    setInterval(headerC, 4000)
    setInterval(allC, 7000)

    // console.log('hej')


thomas.addEventListener('click',skiftBillede)
ur.addEventListener('click',hop)