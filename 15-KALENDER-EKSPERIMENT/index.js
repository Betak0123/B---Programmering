
fetch('./kalender.json')
    .then( res => res.json() )
    .then( json => {
        console.log(json)
        json.days.map( door => {
            let div = document.createElement('div')
            div.id = door.date + '-day'
            div.classList.add('door')
            div.style.width = door.width
            div.style.height = door.height
            
            let lock = document.createElement('div')
            lock.classList.add('lock')
            lock.innerHTML = door.date
            
            lock.addEventListener('click', ()=>{
                switch(door.animation){
                    case 'lock':
                        lock.innerHTML=''
                        lock.classList.add('open')
                        break
                    case 'duFlot':
                        lock.classList.add('openD')
                        console.log('32')
                        break
                    case 'PIK':
                        lock.classList.add('openP')
                        console.log('42')
                        break
                    default:
                        lock.innerHTML=''
                        lock.classList.add('open')
                }
            })
            
            switch(door.content){
                case 'image': 
                setImage(div, door)
                break
                case 'youtube':
                    setYoutube(div, door)
                    break
                    default:
                        break
                    }
                    
                    
            div.append(lock)
            document.querySelector('main').append(div)
        })
    })


const setImage = (div, obj) => {
    div.style.backgroundImage = `url('${obj.url}')`
}
const setYoutube = (div, obj) => {
    div.innerHTML = obj.embed
}
const setBoredApi = (div, obj) => {

}