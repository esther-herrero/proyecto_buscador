
import React from "react";
import './GifStyle.css';
// import 'animate.css';
import PropTypes from "prop-types";


// un componente especializado para mostrar las tarjetas
// se crean las CARDs de los GIFs
// mostrar imágenes y título
const GifGridItem = ( {title, url} ) => {
    return (
        <div className="card animate__animated animate__bounce">
            {/*a la img se le pasa el url*/}
            <img src={ url } alt={ title } />
            <div>
                <p> {title} </p>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default GifGridItem;