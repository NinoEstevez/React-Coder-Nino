import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
 
function App() {

  return (
    
      <BrowserRouter>
      <div className="App">
      <NavBar 
        seccion1="Home" 
        seccion2="Ropa" 
        seccion3="Accesorios" 
        seccion4="Electronica" 
        seccion5="Newsletter"
      />
      <Main />
      </div>
      </BrowserRouter>
    
  );
}

export default App;
