import React from 'react';
import { Link } from 'react-router-dom';

import Info from './Info';
import Service from './services/Service';

const Home = () => <div>
  <Link to='/price'>
    Price
  </ Link>
  <Info />
  <Service />
</div>


export default Home;
