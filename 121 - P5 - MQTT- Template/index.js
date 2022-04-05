let client
let info
console.log('hej')

function setup(){
    info = select('#info')
    console.log('hej')
    client = mqtt.connect('wss://mqtt.nextservices.dk')
    client.on('connect', () => {
        info.html('connected to nextServices!')

        client.subscribe('programmering')

        client.on('message', (topic, message)=>{
            info.html('modtog besked: '+ message + ' på emnet: ' + topic)
        })
    })
}
