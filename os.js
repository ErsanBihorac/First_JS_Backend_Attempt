//os stands for operating system
let os = require('os'); //Die Methode required wird immer verwendet um auf die Verschiedenen Module zu zugreifen

let memoryRounded = Math.round(((os.totalmem() / 1000) / 1000) / 1000);

let bytes = os.freemem();
let kbytes = bytes / 1000;
let mbytes = kbytes / 1000;
let gbytes = mbytes / 1000;
let gbytesRounded = Math.round(gbytes);

console.log('Verfügbarer Speicherplatz: ' + gbytesRounded + ' GB out of ' + memoryRounded + " GB available.");