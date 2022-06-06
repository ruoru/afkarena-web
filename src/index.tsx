import './index.scss';
import './generic.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';

import Resources from './pages/Resources';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav className="nav-module">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/resources">RESOURCES</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/resources"
          element={<Resources />}
        />
        <Route
          path="/"
          element={<></>}
        />
      </Routes>
    </BrowserRouter>
    <Resources />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
