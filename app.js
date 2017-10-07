console.log('Starting app');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile(`greetings.text`, `Hello ${user.username}` , (error, response) => {

} );
