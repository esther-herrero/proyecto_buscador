
// helpers getGifs

// helpers:
// son funciones que van a hacer un trabajo específico
// reciben argumentos, los procesan y hacen un return

// se pasa la categoría como argumento en async
// se coloca await porque es una promesa
// más abajo el await
export const getGifs = async( category ) => {

    // se copia la url de Postman

    // necesitamos recibir la categoría y hacer una petición http
    // delante se coloca el protocolo: https://______
    // const url = 'https://api.giphy.com/v1/gifs/search?q=aloy&limit=10&api_key=QOHo5pdgc4r9KlBkpjsKmAYTnTBc5WcE';

    // se coloca un límite de 10
    // lo mismo pero reemplazando Aloy por "category"
    // se sustituye: ``
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=5&api_key=QOHo5pdgc4r9KlBkpjsKmAYTnTBc5WcE`;
    const respuesta = await fetch( url ); // aquí se hace la petición http
    const { data } = await respuesta.json(); // .json porque lo recibimos en formato json

    // de la data queremos retornar un nuevo objeto con estas propiedades: id, title, url
    const gifs = data.map ( img  => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }})
    return ( gifs );
}












