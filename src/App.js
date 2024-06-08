import React from 'react';
import { Outlet } from 'react-router-dom';
import HeadingComponent from './components/HeadingComponent';

function App() {
  return (
    <div>
      <HeadingComponent />
      <Outlet />
    </div>
  );
}

export default App;
