import './App.css';
import Counter from './components/Counter';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/UseContextComponent';
import { useState, createContext } from "react";
import Router from './Router';

export const GlobalContext = createContext()


function App() {

  // const [show, setShow] = useState(false);

  return (
    <div className="App">

      {/* <GlobalContext.Provider value="Soy un string guardado en un contexto">
        <UseContextComponent />
      </GlobalContext.Provider>

      <h1>useEffect Component</h1>
      {show && <UseEffectComponent />}
      <button onClick={() => setShow(!show)}>Show</button>

      <h1>Counter</h1>
      <Counter />

      <h1>First Component</h1>
      <FirstComponent date="16 de Agosto de 2025"></FirstComponent>
      <FirstComponent title="título enviado desde el padre" date="16 de Agosto de 2025"/>
      <FirstComponent title="otro titulo" otherAttr={21} />
      <SecondComponent array={[23, 65]}/>
      <ThirdComponent /> */}

      <Router />

    </div>
  );
}

export default App;
