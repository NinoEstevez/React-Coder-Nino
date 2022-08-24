import './App.css';
import Body from './components/body/Body';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar 
        seccion1="Home" 
        seccion2="Nosotros" 
        seccion3="Catalogo" 
        seccion4="Personalización" 
        seccion5="Mayorista"
      />
      <Body saludo="Bienvenidos a la Tienda Online"/>
    </div>
  );
}

export default App;
