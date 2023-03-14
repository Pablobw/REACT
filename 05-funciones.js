// Funciones en JS

// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;

// console.log( saludar('goku'));

console.log( saludar2('vegeta') );
console.log( saludar3('goku') );
console.log( saludar4() );

const getUser = () => ({
        uid: '1000',
        username: 'Pablobw1'
});


const user = getUser();
console.log( user )


// Tarea



const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre  
});



const UsuarioActivo = getUsuarioActivo( 'Fernando' );
console.log( UsuarioActivo );

