import Agenda from '../components/ejercicio3/Agenda';
import Form from '../components/ejercicio3/Form';

export default function Ejercicio3() {
      
      return (
        <div className="container">
    
          <h1 className="my-4">Lista de contactos</h1> {/* dejamos el titulo fuera del componente para dejarlo mas genérico por si lo queremos utlizar varias veces sin ceseidad de título */}
          <Agenda />
          
          <h1 className="my-4">Nuevo contacto</h1>
          <Form />
        </div>
      );
}
