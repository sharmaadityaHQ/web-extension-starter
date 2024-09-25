import { GlobalStyles } from '@src/styles/GlobalStyles';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

const CustomApp = () => {
    return (
      <MemoryRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );
};

export default CustomApp;
