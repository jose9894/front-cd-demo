import reactLogo from './assets/react.svg' // ændrer logo
import viteLogo from '/vite.svg' //ændrer logo
import './App.css'
import HomePage from "./pages/HomePage"
import SettingsPage from "./pages/SettingsPage"
import {Routes, Route} from "react-router-dom"



function App() {

  return (
    <main className="main-content">
      <h1>App is running HEHE!</h1>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/settings" element={<SettingsPage />}/>
      </Routes>
    </main>
  )
}

export default App
