
// CUSTOM HOOKS

// useFetchGifs --> el use de delante indica que es un hook
// todos los hooks empiezan con use

// es un hook que se crea de cero
// se puede reutilizar

// los hooks son funciones

// cómo hacer un custom hooks
// es extraer lógica de algún componente
// o lógica que queremos reutilizar de forma sencilla

// funcionan como si fueran functional components

// se extrae una pequeña lógica que vamos a implementar para realizar una carga automática
// y cuando tengamos la data vamos a renderizarla en pantalla
// useFetchGifs --> se encarga de hacer esa petición automática cuando se cargue el componente la primera vez

import {useEffect, useState} from "react";
import {getGifs} from "../helpers/aaagetGifs";


// este va a ser un custom hook
// permite que cuando el componente carga --> realizar la petición Fecth
// y cuándo terminó la carga

export const useFetchGifs = ( category ) => {

    // estado inicial: objeto
    // data: array vacío
    // de primeras loading es true

    const [state, setState] = useState ({
        data: [],
        loading: true
    });


    // useEffect --> se ejecuta cuando el componente se renderiza por primera vez
    // es un hook de react que sirve para disparar efectos secundarios
    // es un proceso que se quiere ejecutar cuando algo suceda en el componente
    // por ejemplo: si el counter cambia, se dispara un efecto secundario
    // como cualquier otro hook, recibe una función

    // con useEffect se va a disparar la petición,
    // cada vez que hay un cambio en el estado se vuelve a disparar
    // con useEffect esto no pasa

    // se le pasan dos argumentos
    // se le pasa un segundo argumento: un array de dependencias
    useEffect( () => {
        // en esta parte está el código que se va a ejecutar
        // aquí se va a ejecutar la petición http
        // hacer la petición y traer las imágenes
        // esto es una promesa
        // se recibe la categoría como argumento
        getGifs( category )
            .then( imgs => {
                setTimeout(() => {
                    setState({
                        // se manda la info:
                        data: imgs,
                        loading: false
                    });
                }, 3000);
            })

        // es opcional pero se recomienda
        // dependencias: cuando se dispara el useEffect
        // son las CONDICIONES por las que se ejecuta el callback
    }, [category])


    // a los 3 segundos se ejecuta lo que está dentro
    // setTimeout ( () => {
    //     setState ({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // }, 3000 );

    // se retorna el stare
    return state; // { data:[], loading: true }
}

// después se importa en GifGrid







