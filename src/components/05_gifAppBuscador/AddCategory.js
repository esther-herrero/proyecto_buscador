
// nuevo componente: AddCategory
// input para agregar la categoría al array que ya está de base que es Aloy
// se va agregando cada elemento a la lista

// cada componente puede tener su propio estado y sus hooks

import React, {useState} from "react";
import PropTypes from 'prop-types';

// aquí se recibe el setCategories
// setCategories: se utiliza abajo en Proptypes
const AddCategory = ({ onNewCategoy }) => {

    // estado inicial: string vacío --> ('') --> para que no de error
    const [inputValue, setInputValue] = useState('');

    // función para onChange
    // tenemos un evento y lo recibimos como argumento
    // e.target.value: es el valor que se está escribiendo en el input
    // es el evento que se le manda a la función
    const handelInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    // función para onSubmit
    // e.preventDefault: para que no se recargue la página
    // función cuando se envía el formulario
    const handleSubmit = ( e ) => {
        e.preventDefault(); // prevenir comportamiento por defecto

        // validación
        // .trim() --> se borran los espacios en blanco que pueda tener antes y después
        // length > 2 -->  si es mayor a 2 caracteres, sino no deja insertar
        if ( inputValue.trim().length > 2 ) {

            // se recibe como argumento: setCategories
            // se llama a: setCategories y desestructura el valor, y se le pasa el inputValue
            // primero aparece la última búsqueda, y por debajo, las búsquedas anteriores
            // onNewCategoy( cats => [ inputValue, ...cats] );

            onNewCategoy( inputValue.trim() );

            // para que no haga un doble posteo:
            // es igual a un string vacío
            setInputValue('');
        }
    }


    // se retorna el formulario
    return (
        <>
            <div className="app-container">
                <p className="app-text"> Vas a buscar a: {inputValue} ! </p>
            </div>

            <form onSubmit={handleSubmit}>
                {/*  input
                  atributos/propiedades: type, value, onChange
                  value: para que se vea lo que se está escribiendo
                  value={ inputValue } --> se le pasa el estado inicial, que es un string vacío
                  tenemos que manejar lo que se va escribiendo en el input
                  onChange: se dispara cada vez que la caja de texto cambia. se le pasa la función
                  se llama la función:   handelInputChange
                  */}
                <input type="text"
                       value={ inputValue }
                       onChange={ handelInputChange }
                       placeholder={'Busca algún personaje... :)'}
                />
            </form>
        </>
    );

};
export default AddCategory;

// func: función
// func.isRequired: es obligatorio
AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}







