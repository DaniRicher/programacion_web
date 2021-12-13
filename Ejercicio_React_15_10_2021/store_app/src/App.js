import './App.css';
import Container from 'react-bootstrap/Container'; 
import {BrowserRouter as Router} from 'react-router-dom';
import MisRoutes from './MisRutas';
import Header from './componentes/Header';
import CartContextProvider from './contexts/CartContext';
import PlaceListTable from './componentes/PlaceListTable'

function App() {
  return (
    <CartContextProvider>
    <Container fluid>
      <Router>
        <Header/>
        <MisRoutes/>
        <PlaceListTable/>
      </Router>
    </Container>
    </CartContextProvider>
  );
}

export default App;
