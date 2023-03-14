// desestructuracion
// asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45, 
    clave: 'Ironman'
};

//const { nombre, edad, clave } = persona;

//console.log( persona );
//console.log( persona );
//console.log( persona );


const useContext = ( clave, nombre, edad, rango = 'capitan' ) => {

    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.123123,
            lng: -10.123123
        }
    }
    
}

const { nombreClave, anios, latlng: { lat, lng} } = useContext(persona);

console.log(nombre, clave);
console.log(lat, lng);
