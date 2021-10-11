
let person = {
    id: '42069',
    name: 'Bjarke',
    age: 18,
    hobbies: ['klaver',' jump king',' league of legends',' fittnes'],
    favoriteColor: 'hotpink'
}

console.log ('This persons name is ' + person.name)
console.log ('This persons id is ' + person.id)
console.log ('This persons age is ' + person.age)
console.log ('This persons first hobby is ' + person.hobbies[0])

let people = [person, {
    id: '69420',
    name: 'Freja',
    age: 16,
    hobbies: ['Drawing',' Karate',' Animals'],
    favoriteColor: 'blue'
},
{
    id: '2772',
    name: 'Anna',
    age: 18,
    hobbies: ['Drawing',' Paintball',' Being ugly'],
    favoriteColor: 'red'
},
{
    id: '4321',
    name: 'Sofus',
    age: 18,
    hobbies: ['Breaking',' Jump King',' Fittnes',' Having Mononukleose'],
    favoriteColor: 'lightgray'
}]

console.log ('Sofus hobby is ' + people[3].hobbies[3])

people.map(person =>{
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.style.backgroundColor = person.favoriteColor
    newCard.innerHTML = person.name +'<br>'
    newCard.innerHTML += person.age +'<br>'
    newCard.innerHTML += 'id: '+ person.id + '<br>'
    newCard.innerHTML += 'hobbies: '+ person.hobbies
    document.querySelector('main').append(newCard)
})