
// https://giphy.com/channel/esther_herrero_

// https://developers.giphy.com/dashboard/?

// Consumo de una API
// Primero se crea una API key ( en Giphy )
// Se utiliza Postman para hacer pruebas
// App en react: buscador de imágenes
// Apy key: QOHo5pdgc4r9KlBkpjsKmAYTnTBc5WcE
// se crea el componente de Gif
// a la apykey se le concatena la q:  &q=Arya
// q es la query que es el término de búsqueda: arya
// queda: api.giphy.com/v1/gifs/search?api_key=9Q73Oacjcg9B0Cs6RpTtTSWTeMuyqS1k&q=Arya

// qué necesitamos para hacer la app:
// 1) input para agregar categorías ( un formulario ) AddCategory
// 2) lista de categorías ( un array, una lista ordenada ) GifGrid
// 3) componente que se encargue de hacer la petición http y mostrar las imágenes: GifGridItem

// exportar el componente: GifApp --> se importa en app.js

import React, {useState} from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifApp = () => {

    // useState para almacenar las categorías
    // cuando se cambie, se tiene que actualizar el html
    // cuando se quiere almacenar info, y esa info tiene que cambiar el html, se usa un hook


    // crear una lista de categorías y mostralas:
    // valor inicial ( en useState ) --> por ejemplo: un array
    // const [categories, setCategories] = useState( ['Wanda', 'Thor', 'Dr. Strange'] );

    const [categories, setCategories] = useState( ['Aloy'] );

    // agregar nuevo elemento al array al darle al botón
    // el estado cambio y se hace una nueva renderización
    // const handleAdd = () => {
    //     setCategories ( cats => [...cats, 'Thor'] );
    // }


    const onAddCategory = (newCategory) => {
        setCategories ( [ newCategory, ...categories ] );
    }

    return (
        <>
            <div className="app-container">
                <p className="app-text">Gif App!</p>
            </div>


            {/*
            Agregar una nueva categoría
            - Comunicación entre Componentes: AddCategory.js
            - componente con un input para escribir y agregar una nueva categoría:
            - se le puede ir pasando propiedades al componente
            - en este caso se le pasa una función: setCategories
            - y se le pasa la referencia a setCategories
            */}
            <AddCategory
                // setCategories={ setCategories }

                // se le pasa la referencia a setCategories
                // esta opción es mejor porque no se pierde la referencia
                // cuando lleva un on delante es que está emitiendo algo
                // onNewCategoy es una propiedad del componente
                onNewCategoy={ event => onAddCategory(event) }
            />

            {/*<button onClick={ handleAdd }> Agregar </button>*/}


            {/* 1) lista ordenada --> con números */}
            <ol style={{textAlign: "left"}}>
                {/*
                recorrer el array y regresar el que necesite
                categories.map donde category es el array de categorías
                y .map es la expresión que regresa algo. recorre todos los elementos del array y los regresa -->  método
                key: para que react sepa qué elemento es el que se está renderizando. es obligatorio cuando se itera elementos
                return: devuelve todo el array en una lista ordenada -->  <li> </li>
                Resultado: 1. Arya 2. Sansa 3. Bran
                */}
                {categories.map( category => {
                    return <li key={ category }> { category } </li>
                })}
            </ol>


            {/* 2) lista ordenada con Grid
            se importa el componente de GifGrid
            se crea un nuevo componente para mostrar las imágenes
            así se agrupan todos los elementos de la misma categoría
            va a ser un array de categorías
            este componente se encarga de hacer la petición http y mostrar las imágenes
            está en otro js, es un componente nuevo
            es necesario colocar el key
            */}
            {categories.map( category => (
                <GifGrid key={category}
                         category={category}
                />
            ))}

        </>

    )
}

export default GifApp;








