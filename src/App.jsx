import React from 'react';
import SignUp from './components/SignUp/SignUp';
import './App.css';

function App() {

  return (
    <>
      <div className="container">
        <div className="spacer layer1"></div>

        <div className='title'>
          <h1>Feel Reviewed</h1>
        </div>

        <div className='card-area'>
            <SignUp />
        </div>
      </div>
    </>
  );
}

export default App;
