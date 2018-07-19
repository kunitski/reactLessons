import React from 'react';

import ServiceBlock from './ServiceBlock';

import {BLOCKS_INFO} from './blocksInfo';

import './Service.css';

const Service = () => {
  const serviceBlocks = BLOCKS_INFO.map(elem => <ServiceBlock
    pathToImg={elem.path}
    text={elem.text}
    alt={elem.alt}
  />);

  return (
    <div className='services'>
      {serviceBlocks}
    </div>
  )
}

export default Service;
