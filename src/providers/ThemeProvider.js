import React, { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const initialState = {
    theme: 'dentist-app-container--white',
  };

  const themeReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          theme: state.theme === 'dentist-app-container--white' ? 'dentist-app-container--black' : 'dentist-app-container--white',
        };
      default:
        throw new Error(`Error: ${action.type}`);
    }
  }
  
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};