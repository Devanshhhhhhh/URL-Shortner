import './App.css'
import Actions from "./components/Action"
import {useState} from 'react'
import InputURL from "./components/InputURL"
import QRGenerator from "./components/QRGenerator"

function App() {

  const [currentView, setCurrentView] = useState('shorten');

  const handleTabChange = (newTab) => {
    setCurrentView(newTab);
  }

  return (
    <>
      <Actions onTabChange={handleTabChange}/>
      <h1> URL SQUEEZER </h1>

      {currentView === 'shorten' && <InputURL/>}
      {currentView === 'QR Generator' && <InputURL/>}
      {currentView === 'Analytics' && <InputURL/>}

    </>
  )
}

export default App
