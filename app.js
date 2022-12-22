console.log(123)
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

const host = 'ws://34.143.225.243:9001/mqtt'

const options = {
    keepalive: 60,
    clientId: clientId,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
    },
    username: "test",
    password: "Test1234",
}
console.log('Connecting mqtt client')
const mqtt = require('mqtt')
const client = mqtt.connect(host, options)
var timer;

timer = setInterval(function () {
    // console.log(5)
    console.log('---')
    client.publish('rover1/status', 'on', {
        qos: 0,
        retain: false
    })
    console.log('**')
}, 1000);



client.on('error', (err) => {
    console.log('Connection error: ', err)
    client.end()
})

client.on('reconnect', () => {
    console.log('Reconnecting...')
})