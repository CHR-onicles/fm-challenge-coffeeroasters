import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './scss/index.scss';

import initializeMockAdapter from './utils/api';
import { AppContextProvider } from './context/AppContext';

import App from './App';
import { BasePage, BaseRouteGuard } from './components/layout';
import { Home, AboutUs, CreatePlan, Checkout, DesignSystem, NotFound } from './views';

import reportWebVitals from './reportWebVitals';

initializeMockAdapter();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App /> }>
            <Route index element={ <Home /> } />
            <Route path="about-us" element={ <AboutUs /> } />
            <Route path="create-plan" element={ <CreatePlan /> } />
            <Route path="checkout" element={
              <BaseRouteGuard redirectPath="/create-plan">
                <Checkout />
              </BaseRouteGuard>
            } />
            <Route path="*" element={ <NotFound /> } />
          </Route>

          <Route path="design-system" element={ <BasePage /> }>
            <Route index element={ <DesignSystem /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
