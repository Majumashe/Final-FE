import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DentistPage from './pages/DentistPage';
import ContactPage from './pages/ContactPage';
import FavouritesPage from './pages/FavouritesPage';

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import { ThemeContext } from './providers/ThemeProvider';
import { DataProvider } from './providers/DataProvider';


import './App.css';

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <DataProvider>
        <div className={`${theme} dentist-app-container`} >
          <Router>
            <Header></Header>
            <Routes>
              <Route element={<HomePage />} exact path="/home" />
              <Route path="/dentist/:id" element={<DentistPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/favs" element={<FavouritesPage />} />
              <Route path="*" red>
              </Route>
            </Routes>
          </Router>
          <Footer></Footer>
        </div>
    </DataProvider >
  );
}

export default App;
