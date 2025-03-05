// import { useState } from 'react'
// import './App.css'

// import provider
import { GlobalProvider } from "./contexts/GlobalContext";
import Header from "./components/sections/Header";
import Main from "./components/sections/Main";

function App() {
  return (
    <div className='wrapper min-h-screen bg-black text-white'>
      <GlobalProvider>
        <Header></Header>
        <Main></Main>
      </GlobalProvider>
    </div>
  );
}

export default App;

// start code
