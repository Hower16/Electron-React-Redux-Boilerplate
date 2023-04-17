import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Electron, React, and Redux App</h1>
        <p>Welcome to our Electron, React, and Redux application.</p>
      </div>
    </Provider>
  );
}

export default App;
