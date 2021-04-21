// import React from 'react' (sólo hace falta en el index.js)
import {Fragment} from 'react' //Fragment es un componente de React que podemos utilizar para englobar un componente nuestro si no queremos usar un elemento HTML
import PropTypes from "prop-types"

export default function FirstComponent(props) {
    console.log(props, typeof props);
    console.log(props.title);

    const myFunction = function (bookID) {
        return (e) => console.log(bookID, e.target);
    }

    const mySimpleFunction = function (e) {
        console.log(e);
    }

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad laborum, accusantium sapiente amet, nobis ut vitae ipsam, est mollitia corporis sit. Vitae minus officiis cumque veniam ab, sunt sint?</p>
            <button onClick={myFunction(1)}>Click me!</button>
            <button onClick={myFunction(2)}>Click me!</button>
            <button onClick={mySimpleFunction}>Click me!</button>
        </Fragment>
    )
}
// export default FirstComponent; (Alternativa)
// Solo se puede un 'export default' por archivo/módulo

FirstComponent.defaultProps = { //son lo que se imprimira si se llama una prop y no tiene un valor definido o no existe
    title: "Sin título",
    date: "Sin fecha",
    products: []
}

FirstComponent.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    products: PropTypes.array
}


function SecondComponent() {
    return (
        <> 
            <h1>soy otro componente</h1>
        </>
        // es otra forma de utilizar Fragment sin tener que importarlo.
    )
}

export {SecondComponent};


function ThirdComponent() {
    return (
        <div>
            <h2>soy otro componente más</h2>
        </div>
    )
}

export {ThirdComponent};