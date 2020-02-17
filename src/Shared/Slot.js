import React from 'react';

//export const Context = React.createContext({});

const Slot = (props)=>{

  const {
    content,
    children,
    ...attributes
  } = props;

  return content?content:children?children:'';
  
}

export default Slot;
