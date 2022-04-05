// console.log('Frosty.')
// console.log('Jeg har en kæmpe pik, og den hænger og dingler nede ved mit knæ.')
// console.log('Det havde været sjovt hvis den var normalt stor, men den har ødelagt mit sofabord.')
// console.log('Jeg lagde den bare for jeg havde brug for en pause.')
// console.log('Efter en formiddag i Bauhaus.')
const express = require('express')
const app = express()




app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)



const mqtt = require('mqtt')
const client  = mqtt.connect('wss://mqtt.nextservices.dk')

client.on('connect', function () {
  console.log('Connected to next services: ')
  console.log('Subscribing to topic: programmering')
  client.subscribe('programmering')
  console.log('succesfully subscribed to topic: programmering');
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  // client.end()
})