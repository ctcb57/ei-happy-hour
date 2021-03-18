import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
