import React from 'react';
import { Routes as ReactRoutes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {Routes.map((item, i) => (
          // <Route key={i} path={item.path} exact element={item.renderer({ isAuthenticated, isAdmin })} />
          // eslint-disable-next-line
          <Route key={i} path={item.path} exact element={item.renderer()} />
        ))}
        {/* <Route path="*" element={<Navigate replace to="/not-found-cover" />} /> */}
      </ReactRoutes>
    </BrowserRouter>
  );
}

export default App;
