

const getImagen = async() => {
    
    try {
        const apiKey = 'F28XWE4TOFri4s4cwlSJ07mj16DjxCWK';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error)
    }

    // console.log(data)
}

getImagen();

// const  peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion
//     .then( resp => resp.json() )
//     .then( ({ data }) => {
//         const { url } = data.images.original;
        
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );

//     })
// .catch( console.warn );