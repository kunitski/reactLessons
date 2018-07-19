import React from 'react';

const ServiceBlock = (props) => {
  return (
    <div>
      <img src={props.pathToImg} alt={props.alt} width='100'/>
      <p>{props.text}</p>
    </div>
  )
}

export default ServiceBlock;
