import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './routes/Home';
import { AgregarPaciente } from './routes/AgregarPaciente';
import { Login } from './routes/Login';
import { Register } from './routes/Register';

import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agregar-paciente' element={<AgregarPaciente />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<p>Not found</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
