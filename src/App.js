import Header from './component/Header';
import './App.css';
import ExtensionBar from './component/ExtensionBar';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
     <Header/>
     <ExtensionBar/>
     <Dashboard/>
    </div>
  );
}

export default App;
