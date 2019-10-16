const os = require('os');

// platform
console.log('platform -->', os.platform());

// arhitecture
console.log('arhitecture -->', os.arch());

// cpus
console.log('cpus -->', os.cpus());

// free memory
console.log('free memory -->', os.freemem());

// total memory
console.log('total memory -->', os.totalmem);

// home directory
console.log('home directory -->', os.homedir);

// how long system working
console.log('time working -->', os.uptime);