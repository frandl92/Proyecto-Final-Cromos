
import './App.scss';
import LoginComponent from './components/LoginComponent/LoginComponent';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import Inicio from './pages/Inicio/Inicio';

function App() {
  return (
    <div className="App">
    <Inicio/>
      <RegisterComponent/>
    </div>
  );
}

export default App;
