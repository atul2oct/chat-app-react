import React, { createContext, useState, useEffect } from 'react';

// Create a context with a default value of true
export const RefreshContext = createContext(true);

// Create a provider component for the RefreshContext
export const RefreshProvider = ({ children }) => {
  const [isRefreshed, setIsRefreshed] = useState(() => {
    const storedValue = localStorage.getItem('isRefreshed');
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  useEffect(() => {
    setIsRefreshed(true);
    localStorage.setItem('isRefreshed', JSON.stringify(true));
  }, []);

  return (
    <RefreshContext.Provider value={{isRefreshed,setIsRefreshed}}>
      {children}
    </RefreshContext.Provider>
  );
};