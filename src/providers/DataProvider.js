import React, { createContext, useState, useCallback } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};