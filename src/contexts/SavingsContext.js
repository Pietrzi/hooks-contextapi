import React, { createContext, useState } from 'react';

export const SavingsContext = createContext();

const SavingsContextProvider = (props) => {
  const [savings, setSavings] = useState(50000);
  return (
    <SavingsContext.Provider value={{savings}}>
      {props.children}
    </SavingsContext.Provider>
  )
}

export default SavingsContextProvider;