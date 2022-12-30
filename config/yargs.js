const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            demandOption: false,
            default: false,
            type: 'boolean',
            describe: 'Muestra la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            demandOption: false,
            default: 10,
            type: 'number',
            describe: 'Define el numero hasta donde llegara la tabla de multiplicar'
        },
        'c': {
            alias: 'colores',
            demandOption: false,
            default: false,
            type: 'boolean',
            describe: 'Muestra colores para la tabla en consola'
        }
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        else if(isNaN(argv.h)){
            throw 'El limite tiene que ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv;