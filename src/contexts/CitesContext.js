import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const CitiesContext = createContext();

const CitiesContextProvider = (props) => {
  const [cities, setCities] = useState([
    {name: 'Wrocław', id: uuid, bridges: '100'},
    {name: 'Gdynia', id: uuid, bridges: '0'},
    {name: 'Konin', id: uuid, bridges: '6'},
    {name: 'Pcim', id: uuid, bridges: '2'}
  ]);
  return (
    <CitiesContext.Provider value={{cities}}>
      {props.children}
    </CitiesContext.Provider>
  )
}

export default CitiesContextProvider;
