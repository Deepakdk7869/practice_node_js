const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('customeEvent', (data)=>{
    console.log('customeEvent triggering');
});

eventEmitter.emit('customeEvent');

eventEmitter.on('customeEventWithParam', (address = '', pincode = '' )=>{
    console.log('address :- ' + ""+ address + " and " + "pincode :- " + pincode);
});

eventEmitter.emit('customeEventWithParam', 'New Delhi', '763421');