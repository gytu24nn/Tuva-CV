import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Menu from './components/Menu'
import HomePage from './pages/Homepage'
import KontaktPage from "./pages/KontaktPage";
import OmMigPage from "./pages/OmMigPage";
import ProjektPage from "./pages/ProjektPage";
import TechStackPage from "./pages/TechStackPage";

function App() {
  return (
    <Router>
      <Menu /> 
      <main style={{ marginLeft: '60px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/om-mig" element={<OmMigPage />} />
          <Route path="/projekt" element={<ProjektPage />} />
          <Route path="/tech-stack" element={<TechStackPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
