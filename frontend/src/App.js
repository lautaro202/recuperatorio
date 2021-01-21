import  Main  from './container/Main'
import Header from './container/Header'
import {  Route } from 'react-router-dom'
import ProductDetail from './container/ProductDetail'
import DetailsxId from './container/DetailsxId';
import ProductCard from './container/ProductCard';
function App() {
  return (
    <div className="App">
      <Route path = '/'component={Header} />
      <Route exact={true} path = '/' component={Main} />
      <Route
        exact={true}
        path="/products/details/:id" 
        component={DetailsxId}
        />

    </div>
  );
}

export default App;