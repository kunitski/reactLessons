import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home.js';
import Price from '../price/Price.js';
import Error from '../error/Error.js';

const Main = () => <div>
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/price' component={Price}/>
    <Route path='*' component={Error}/>
  </Switch>
</div>;

export default Main;
