
import './App.css';
import AppRoutes from './AppRoutes';
import NavBar from './components/NavBar';
import Logo from './assets/Logo.svg'

function App() {
  return (
    <div className="App">
     <img src={Logo} alt='logo' className='app-logo' />
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
