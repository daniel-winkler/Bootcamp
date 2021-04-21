export default function Form() {
    return (
        <>
            <h1 className="my-4">Nuevo contacto</h1>
            <form className="container mb-5">
                <div className="form-group"><input type="text" className="form-control" placeholder="Introduce un nombre"/></div>
                <div className="form-group"><input type="text" className="form-control" placeholder="Introduce los apellidos"/></div>
                <div className="form-group"><input type="text" className="form-control" placeholder="Introduce la dirección"/></div>
                <div className="form-group"><input type="text" className="form-control" placeholder="Introduce la provincia"/></div>
                <div className="form-group"><input type="text" className="form-control" placeholder="Introduce el código postal"/></div>
                <div className="form-group"><input type="text" className="form-control" placeholder="Introduce el número de teléfono"/></div>
                <button type="submit" className="btn btn-success">Registrar</button>
            </form>
        </>
    )
}
