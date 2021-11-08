
let data


fetch('./Data/characters.json')
// Når vi arbejder med asynkron kode, bruger vi generelt .then for først at gøre noget efter det er blevet hentet. Det vi får tilbage er dog ikke selve json filen endnu, men et responsobjekt. Vi skal først aktivt bede om det på responseopbjektet, ved at lave det til en json. 
    .then(res => res.json())
    // Nu kan vi så gøre hvad vi gerne vil med json filen. 
        .then(json => {
            console.log(json)
            data = json.characters
            document.querySelector('#title').innerHTML = json.description   
            json.characters.map(character =>{
                newCard(character)    
            })
        })

        document.querySelector('#input').addEventListener('input', ()=>{
            let result = data.filter( character => character.name.includes(document.querySelector('#input').value))
            document.querySelector('main').innerHTML = ''
            result.map(character => newCard(character))
        })

        document.querySelector('#searchicon').addEventListener('click', ()=>{
            document.querySelector('#searchbar').classList.add('show')
        })
        document.querySelector('#closeicon').addEventListener('click', ()=>{
            document.querySelector('#searchbar').classList.remove('show')
        })

        document.querySelector('#pilhøjre').addEventListener('click', ()=>{
            document.querySelector('body').classList.add('rykhøjre')
            document.querySelector('header').classList.add('rykhøjre')
        })

        const newCard = (character) => {
            let card = document.createElement('div')
            let heading = document.createElement('h2')
            let members = document.createElement('div')
            card.classList.add('card')
            members.classList.add('members')
            card.append(heading)
            card.append(members)
            document.querySelector('main').append(card)
            heading.innerHTML = character.name
            let list = ''
            character.qualities.map(member => list += '<li>' + member + '</li>')
            members.innerHTML = list
            if (character.nature == 'good'){
                card.style.background = 'linear-gradient(green,lightgreen)'
                members.style.background = 'radial-gradient(lightgray, lightgreen)'
                } else if (character.nature=='neutral'){
                card.style.background = 'linear-gradient(yellow,rgb(255, 254, 173))'
                members.style.background = 'radial-gradient(lightgray, rgb(250, 247, 82))'
                }else {
                card.style.background = 'linear-gradient(red,hotpink)'
                members.style.background = 'radial-gradient(lightgray, rgb(253, 110, 110))'
                }
            document.querySelector('main').append(card)
        }