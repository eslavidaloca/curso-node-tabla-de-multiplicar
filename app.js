const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log(process.argv);
//Manera arcaica de conseguir banderas, ej. node app --base=2
// const [ , , arg3 = 'base=5'] = process.argv;
// const [, base = 5 ] = arg3.split('=');

//const base = 4;
if(argv.c){
    crearArchivo(argv.b, argv.l, argv.h, argv.c)
        .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
        .catch(err => console.log(err));
    } else{
    crearArchivo(argv.b, argv.l, argv.h, argv.c)
        .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
        .catch(err => console.log(err));
}