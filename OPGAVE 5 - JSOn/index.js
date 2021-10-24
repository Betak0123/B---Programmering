

let person = [{

    name: 'Camille',
    title: 'The steel shadow',
    damage: 'Physical',
    difficulty: 3,
    hobbies: ['High burst',' mobile']
},
{
    name: 'Darius',
    title: 'The hand of noxus',
    damage: 'Physical',
    difficulty: 2,
    hobbies: ['Snowbally',' punish melee']
},
{
    name: 'Fiora',
    title: 'The grand duelist',
    damage: 'Physical',
    difficulty: 3,
    hobbies: ['Cancel CC',' Splitpushing']
},
{
    name: 'Veigar',
    title: 'The tiny master of evil',
    damage: 'Magic',
    difficulty: 2,
    hobbies: ['AOE burst',' Zoning']
},
{
    name: 'Jax',
    title: 'Grandmaster at arms',
    damage: 'Mixed',
    difficulty: 2,
    hobbies: ['Splitpushing',' AA evashion']
},
{
    name: 'Cho´gath',
    title: 'The terror of the void',
    damage: 'Magic',
    difficulty: 1,
    hobbies: ['Tanky',' Good CC and burst']
},
{
    name: 'Sett',
    title: 'The boss',
    damage: 'Physical',
    difficulty: 2,
    hobbies: ['Versitile']
},
{
    name: 'Yorick',
    title: 'Shepherd of souls',
    damage: 'Mixed',
    difficulty: 2,
    hobbies: ['Splitpushing']
},
{
    name: 'Gangplank',
    title: 'The saltwater scourge',
    damage: 'Physical',
    difficulty: 3,
    hobbies: ['Zoning barrels',' good scaling']
}]

person.map (person => {
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    
    if (person.difficulty==3){
    newCard.style.backgroundColor = 'red'
    } else if (person.difficulty==2){
    newCard.style.backgroundColor = 'rgb(208, 211, 77)'
    }else {
    newCard.style.backgroundColor = 'green'
    }
    newCard.innerHTML = '<h1>'+ person.name +'<br>'+ '- ' + person.title + '<h1>' +'<br>'
    newCard.innerHTML += 'Damage: '+ person.damage + '<br>'
    newCard.innerHTML += 'Strengths: '+ person.hobbies
    document.querySelector('main').append(newCard)
})

