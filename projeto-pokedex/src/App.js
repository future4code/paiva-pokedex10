import React from 'react'
import GlobalState from './global/GlobalState';
import Router from './Route/Router'


const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
