import React from 'react';
import './App.css';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
