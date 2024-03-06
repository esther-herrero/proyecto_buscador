
// Fetch API
// obtener las imágenes que queremos

// Intro a useEffect

// en este componente: cuando note que hay un nuevo elemento, hace la petición http
// y traiga las imgs correspondientes a la categoría

// abrir Postman:
// get: api.giphy.com/v1/gifs/search
// key: api_key
// value: QOHo5pdgc4r9KlBkpjsKmAYTnTBc5WcE
// click en Send
// aparece la info

// búsqueda: aloy
// límite: 10

import React, {useState, useEffect} from "react";
import GifGridItem from "./GifGridItem";
import './GifStyle.css'
// import {getGifs} from "my-app/src/helpers/aaagetGifs.js"; // se importa de helpers
import {useFetchGifs} from "../../hooks/useFetchGifs"; // se importa de helpers


// se le pasa como parámetro la categoría ( como prop )
const GifGrid = ({ category }) => {

    // estado inicial: array vacío
    // const [images, setImages] = useState([]);
    // visto esto, hagamos un custom hook personalizado:

    // useFetchGifs --> es un custom hook
    // importación del custom hook:
    // se desestructura un objeto: { data, loading }
    // se coloca delante un use
    // se coloca el loading más abajo
    // se hace una petición http, para traer la info del API
    // componente: useFetchGifs
    // regresa las imágenes
    const { data:images, loading } = useFetchGifs( category );


    // la función se ejecuta solo una vez
    // cuando se carga el componente por primera vez
    // lanza la petición para obtener los gifs -->  getGifs( category )
    // y los coloca en las imágenes -->  .then( imgs => setImages( imgs ) );
    // se implementa el useEffect porque cada vez que cambiáramos el estado en el componente
    // el GifGrid se renderiza y se vuelve a ejecutar
    // esto mismo va a suceder con el useFetchGifs
    // queremos que se dispare la petición SOLO si la categoría cambia
    // useEffect( () => {
    // recibe la función que queremos ejecutar
    // se le pasa la categoría (category)
    // se colocan .then porque retorna una promesa
    // getGifs( category )
    //     .then( imgs => setImages( imgs ) );
    // }, [ category ] )
    // deps: [] --> el segundo argumento es un array de dependencias
    // deps: [category] --> si la categoría cambia, se tendría que volver a ejecutar



    // va a regresar título, imagen, etc
    return (
        <>
            {/* se imprime la categoría */}
            <h5> { category } </h5>

            {/*ternario
             si loading está en true: cargando
             Aparece "cargando" durante 3 segundos
             y luego data cargada
             */}
            {/*{ loading ? 'Cargando...' : 'Data cargada'}*/}

            {/* array vacío */}
            { loading ? 'Cargando...' : '' }

            {/*es otra forma de ternario*/}
            {/*{ loading && 'Cargando...'}*/}

            <div className="card-grid">

                {/*   título:
                {  images.map(({ id, title }) => (
                        <li key={ id }> { title } </li>
                    ) )
                }  */}

                {/*  Aquí se cargan las CARDs: GifGridItem es el componente
                  { ...img } --> todas las propiedades que vienen de img, se colocan aquí
                  recibe las propiedades de la img compo props:
                  en nuestro caso: id, title, url
                 */}
                {images.map( img => (
                    <GifGridItem
                        key={ img.id }
                        { ...img }
                    />
                ))}
            </div>
        </>
    )
}
export default GifGrid;


