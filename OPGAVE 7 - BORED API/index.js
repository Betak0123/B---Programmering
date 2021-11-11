let loader = document.querySelector('.loader')
document.querySelector('#pet-select').style.visibility = 'hidden'

const getActivity = () => {
    document.querySelector('#title').innerHTML = ''
    document.querySelector('#participants').innerHTML = ''
    document.querySelector('#acc').innerHTML = ''
    document.querySelector('#price').innerHTML = ''
    document.querySelector('#cat').innerHTML =''
    loader.style.visibility = 'visible' 
    console.log(document.querySelector('#kategori-select').value)
    console.log(document.querySelector('#pet-select').value)

    fetch('https://www.boredapi.com/api/activity'
    +document.querySelector('#pet-select').value
    +document.querySelector('#participant-select').value
    +document.querySelector('#price-select').value
    +document.querySelector('#acc-select').value
    )
    // Når man kalder noget på nettet, får vi et response ojbekt.
        .then(response => response.json())
        .then(json => {
            console.log(document.querySelector('#pet-select').value)
            console.log(json)
            createCard(json)
            loader.style.visibility = 'hidden'
        })
}

const createCard = a => {
    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#participants').innerHTML = 'Participants: ' + a.participants
    document.querySelector('#acc').innerHTML = 'Accessibility: ' + a.accessibility
    document.querySelector('#price').innerHTML = 'Price: ' + a.price
    document.querySelector('#cat').innerHTML ='Type: ' + a.type
}
getActivity()
document.querySelector('#fetch').addEventListener('click',getActivity)




const outlook =()=>{
    if(document.querySelector('#kategori-select').value == 'type'){
        document.querySelector('#pet-select').style.visibility = 'visible'
        document.querySelector('#pet-select').style.top = '92vh'
        }else{
        document.querySelector('#pet-select').style.visibility = 'hidden'
        document.querySelector('#pet-select').value = ''  
        document.querySelector('#pet-select').style.top = '120vh'  
        }
    
    if(document.querySelector('#kategori-select').value == 'participants'){
        document.querySelector('#participant-select').style.visibility = 'visible'
        document.querySelector('#participant-select').style.top = '92vh'
        }else{
        document.querySelector('#participant-select').style.visibility = 'hidden'
        document.querySelector('#participant-select').value = ''   
        document.querySelector('#participant-select').style.top = '120vh'
        }

    if(document.querySelector('#kategori-select').value == 'price'){
        document.querySelector('#price-select').style.visibility = 'visible'
        document.querySelector('#price-select').style.top = '92vh'
        }else{
        document.querySelector('#price-select').style.visibility = 'hidden'
        document.querySelector('#price-select').value = ''   
        document.querySelector('#price-select').style.top = '120vh' 
        }

    if(document.querySelector('#kategori-select').value == 'acc'){
        document.querySelector('#acc-select').style.visibility = 'visible'
        document.querySelector('#acc-select').style.top = '92vh'
        }else{
        document.querySelector('#acc-select').style.visibility = 'hidden'
        document.querySelector('#acc-select').value = ''    
        document.querySelector('#acc-select').style.top = '120vh'
        }

}
    setInterval(outlook, 0)