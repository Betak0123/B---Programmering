
let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')
let thomas = document.querySelector('#thomas')
 


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

thomas.addEventListener('click',skiftBillede)