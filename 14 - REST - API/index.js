let loader = document.querySelector('.loader')

const getActivity = () => {
    document.querySelector('#title').innerHTML = ''
    document.querySelector('#participants').innerHTML = ''
    document.querySelector('#acc').innerHTML = ''
    document.querySelector('#price').innerHTML = ''
    document.querySelector('#cat').innerHTML =''
    loader.style.visibility = 'visible' 
    
    fetch('https://www.boredapi.com/api/activity'
    +document.querySelector('#pet-select').value
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
