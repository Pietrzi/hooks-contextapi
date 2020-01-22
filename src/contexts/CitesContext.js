import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const CitiesContext = createContext();

const CitiesContextProvider = (props) => {
  const [cities, setCities] = useState([
    {name: 'name of the wind', id: uuid, bridges: ''},
    {name: 'the way of kings', id: uuid, bridges: ''},
    {name: 'the final empire', id: uuid, bridges: ''},
    {name: 'the hero of ages', id: uuid, bridges: ''}
  ]);
  return (
    <CitiesContext.Provider value={{cities}}>
      {props.children}
    </CitiesContext.Provider>
  )
}

export default CitiesContextProvider;
