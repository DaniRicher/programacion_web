import './App.css';
import Container from 'react-bootstrap/Container'; 
import React from 'react';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import MisRoutes from './MisRutas';
import Header from './componentes/Header';
import CartContextProvider from './contexts/CartContext';
import PublicRoute from './routes/PublicRoute';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';
import AdminProduct from './pages/AdminProduct';
import {AuthContext} from './contexts/AuthContext'
//import PlaceListTable from './componentes/PlaceListTable'

function App() {

  const {isAuthenticated} = React.useContext(AuthContext)   
  const isAuth = isAuthenticated();
  return (
    <CartContextProvider>
    <Container fluid>
      <Router>
        <Header/>
        <Switch>

          <PublicRoute
          path="/login"
          isAuthenticated={isAuth}
          >
            <Login/>
          </PublicRoute>

          {/*<PublicRoute 
          path="/login"
          isAuthenticated={isAuth}
          >
            <MisRoutes/>
          </PublicRoute>*/}
          
          <PrivateRoute
          path="/"
          isAuthenticated={isAuth}
          >
            <AdminProduct/>            
          </PrivateRoute>
          </Switch>
      </Router>
    </Container>
    </CartContextProvider>
  );
}

export default App;
