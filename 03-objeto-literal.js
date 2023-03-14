const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'ciudad',
        lat: 14.0000,
        lng: 34.1231,
    }
};


const persona2 = { ...persona };
persona2.nombre = 'Peter';


console.log( persona );
console.log( persona2 );
