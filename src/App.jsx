import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login  from './login/pages/Login'
import HomePage from './homepage/pages/HomePage'
import SignUp from './signup/pages/SignUp'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/homepage' element={ <HomePage />} />
      </Routes>
    </div>
  )
}

export default App
