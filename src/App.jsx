// import { useState } from 'react'
// import './App.css'

// import provider
import { GlobalProvider } from "./contexts/GlobalContext";
import Header from "./components/sections/Header";
import Main from "./components/sections/Main";

function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <Main></Main>
    </GlobalProvider>
  );
}

export default App;

// start code
