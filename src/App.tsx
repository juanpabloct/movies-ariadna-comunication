import { Header } from './components/header/header.component'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { HomePage } from './pages/home'
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={HomePage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
