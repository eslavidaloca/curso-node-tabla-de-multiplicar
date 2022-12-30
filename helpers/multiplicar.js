const fs = require('fs');
const colors = require('colors');

/*
//Version sin el async o sin promises
const crearArchivo = (base = 5) => {
    console.log('=============================');
    console.log('        Tabla del:', base);
    console.log('=============================');
    
    let salida = '';
    for(let i = 1; i <= 10; i++){
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if(err) throw err;
    //     console.log(`tabla-${base}.txt creado`);
    // })

    try{
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    } catch (error){
        throw error;
    }

    console.log(`tabla-${base}.txt creado`);
}
*/

const multiplicarBase = (base = 5, hasta) => {
    return new Promise((resolve, reject) => {
        let salida = '';
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            // salida += `${colors.green(base)} ${'x'.brightCyan} ${colors.inverse(i)} ${'='.brightCyan} ${colors.brightMagenta(base * i)}\n`;
            // salida += colors.brightCyan(`${base} `);
            // salida += colors.inverse(`x`);
            // salida += colors.brightRed(` ${i} `);
            // salida += colors.random(` = ${base * i}\n`);
        }
        
        try{
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            resolve(salida)
        } catch (error){
            reject(`Hubo un error inesperado\n\n${error}`);
        }
    }) 
}

const crearArchivo = async(base = 5, listar = false, hasta = 10, colores = false) => {
    
    try {
        const tablaMultiplicar = await multiplicarBase(base, hasta);
        if(listar){
            if(colores){
                console.log(colors.zebra('============================='));
                console.log(colors.america(`        Tabla del: ${base}`));
                console.log(colors.zebra('============================='));
                
                console.log(colors.rainbow(tablaMultiplicar));
            } else{
                console.log('=============================');
                console.log(`        Tabla del: ${base}`);
                console.log('=============================');
                
                console.log(tablaMultiplicar);
            }
            // console.log(tablaMultiplicar);
        }

        return `tabla-${base}.txt`;
    } catch(error){
        throw error;
    }
}

module.exports = {
    //crearArchivo: crearArchivo // Es redundante y se puede usar como abajo
    crearArchivo
}

/*
//Version del fernando herrera T-T Me humillo
const crearArchivo = (base = 5) => {
    try{
        console.log('=============================');
        console.log('        Tabla del:', base);
        console.log('=============================');
        
        let salida = '';
        for(let i = 1; i <= 10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // })

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        

        return `tabla-${base}.txt`;
    } catch(err){
        throw err;
    }
}

*/