import './App.css';
import Counter from './components/Counter';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
import UseEffectComponent from './components/UseEffectComponent';
import { useState } from "react";

function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1>useEffect Component</h1>
      {show && <UseEffectComponent />}
      <button onClick={() => setShow(!show)}>Show</button>
      {/* <h1>Counter</h1>
      <Counter />
      <h1>First Component</h1>
      <FirstComponent date="16 de Agosto de 2025"></FirstComponent>
      <FirstComponent title="título enviado desde el padre" date="16 de Agosto de 2025"/>
      <FirstComponent title="otro titulo" otherAttr={21} />
      <SecondComponent array={[23, 65]}/>
      <ThirdComponent /> */}
    </div>
  );
}

export default App;
