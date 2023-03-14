import { getHeroeById } from './bases/08-imp-exp'

// // const promesa = new Promise( (resolve, reject) => {
    
// //     setTimeout( () => {
// //         // TAREA
// //         // IMPORTEN EL
// //         const p1 = getHeroeById(2);
// //         resolve( p1 );
// //     }, 2000 )
// // });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })

// .catch( err => console.log( err) );

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {
    
        setTimeout( () => {
            // TAREA
            // IMPORTEN EL
            const p1 = getHeroeById( id );
            console.log(p1);

            if ( p1 ) {
                resolve        
            } else {
                reject( 'No se puedo encontrar el Héroe :c' );
            }
            // resolve( p1 );
        }, 2000 )

    });
}


getHeroeByIdAsync(2)
    .then( console.log )
    .catch( console.warn );