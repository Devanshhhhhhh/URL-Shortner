import './App.css'
import Actions from "./components/Action"
import {useState} from 'react'
import InputURL from "./components/InputURL"

function App() {

  const [currentView, setCurrentView] = useState('shorten');

  const handleTabChange = (newTab) => {
    setCurrentView(newTab);
  }

  return (
    <>
      <Actions onTabChange={handleTabChange}/>
      <h1> URL SQUEEZER </h1>
      <InputURL/>
    </>
  )
}

export default App
