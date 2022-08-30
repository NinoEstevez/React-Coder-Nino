import './App.css';
import ItemListContainer from './components/ilc/ItemListContainer';
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
      <ItemListContainer saludo="¡50% de dcto. en Temporada INVIERNO - OTOÑO!"/>
    </div>
  );
}

export default App;
