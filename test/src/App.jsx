import React, { useState } from 'react';
import SignupPage from './Components/SignupPage';
import ChatApp from './Components/ChatApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? <ChatApp /> : <SignupPage onLogin={() => setIsLoggedIn(true)} />}
    </>
  );
}

export default App;
