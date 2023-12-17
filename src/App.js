import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import './bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path=''element={<Mainpage/>}/>
        </Routes>
    </div>
  );
}

export default App;
