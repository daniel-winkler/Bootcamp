import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <h1>Hola, Mundo</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <FirstComponent></FirstComponent>
      <FirstComponent />
      <FirstComponent />
    </div>
  );
}

export default App;
