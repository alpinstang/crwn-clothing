import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
