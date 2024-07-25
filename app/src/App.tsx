import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Create from './pages/Create';
import Tasks from './pages/Tasks';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
