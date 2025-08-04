import Header from './component/Header';
import './App.css';
import Dashboard from './component/Dashboard';
import DashboardItem from './component/DashboardItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/item/:id" element={<DashboardItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;