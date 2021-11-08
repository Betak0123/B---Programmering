
let data


fetch('./data/birds.json')
// Når vi arbejder med asynkron kode, bruger vi generelt .then for først at gøre noget efter det er blevet hentet. Det vi får tilbage er dog ikke selve json filen endnu, men et responsobjekt. Vi skal først aktivt bede om det på responseopbjektet, ved at lave det til en json. 
    .then(res => res.json())
    // Nu kan vi så gøre hvad vi gerne vil med json filen. 
        .then(json => {
            console.log(json)
            data = json.birds
            document.querySelector('#title').innerHTML = json.description   
            json.birds.map(bird =>{
                newCard(bird)    
            })
        })

        document.querySelector('#input').addEventListener('input', ()=>{
            let result = data.filter( bird => bird.family.includes(document.querySelector('#input').value))
            document.querySelector('main').innerHTML = ''
            result.map(bird => newCard(bird))
        })

        document.querySelector('#searchicon').addEventListener('click', ()=>{
            document.querySelector('#searchbar').classList.add('show')
        })
        document.querySelector('#closeicon').addEventListener('click', ()=>{
            document.querySelector('#searchbar').classList.remove('show')
        })

        const newCard = (bird) => {
            let card = document.createElement('div')
            let heading = document.createElement('h2')
            let members = document.createElement('div')
            card.classList.add('card')
            members.classList.add('members')
            card.append(heading)
            card.append(members)
            document.querySelector('main').append(card)
            heading.innerHTML = bird.family
            let list = ''
            bird.members.map(member => list += '<li>' + member + '</li>')
            members.innerHTML = list
            document.querySelector('main').append(card)
        }