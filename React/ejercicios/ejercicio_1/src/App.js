import './App.css';
import Card from "./components/Card";


function App() {
  return (
    <div className="App">
      <Card 
        image="https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg" 
        title="Diario Motor" 
        p="Me acabo de sacar el carnet A2: ¿qué moto me compro?" 
        href="https://www.diariomotor.com/noticia/comprar-tu-primera-moto-carnet-a2/" 
        button="Pincha aquí!" 
      />
    </div>
  );
}

export default App;
