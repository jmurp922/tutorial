//OS MODULE - Interacting with Operating System / Servers
const os = require('os');

//Info about the current user 
const user = os.userInfo();
console.log(user);

const uptime = os.uptime();
console.log(`Uptime in seconds : ${uptime} \nUptime in minutes : ${uptime / 60} \nUptime in Hours ${uptime / 60 / 60} \nUptime in days ${uptime /60 / 60 / 24}`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);