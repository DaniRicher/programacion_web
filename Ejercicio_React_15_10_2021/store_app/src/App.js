import './App.css';
import Container from 'react-bootstrap/Container'; 
import {BrowserRouter as Router} from 'react-router-dom';
import MisRoutes from './MisRutas';
import Header from './componentes/Header';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <CartContextProvider>
    <Container fluid>
      <Router>
        <Header/>
        <MisRoutes/>
      </Router>
    </Container>
    </CartContextProvider>
  );
}

export default App;
