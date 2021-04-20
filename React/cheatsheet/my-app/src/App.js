import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <h1>Hola, Mundo</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <FirstComponent date="16 de Agosto de 2025"></FirstComponent>
      <FirstComponent title="título enviado desde el padre" date="16 de Agosto de 2025"/>
      <FirstComponent title="otro titulo" otherAttr={21} />
      <SecondComponent array={[23, 65]}/>
      <ThirdComponent />
    </div>
  );
}

export default App;
