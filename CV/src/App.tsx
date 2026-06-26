import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Menu from './components/Menu'
import HomePage from './pages/Homepage'

function App() {
  return (
    <Router>
      <Menu /> 
      <main style={{ marginLeft: '60px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
