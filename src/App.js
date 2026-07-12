
import './App.css';
import PortafolioV2 from './componentes/PortafolioV2';
// Si quieres volver al diseño anterior (el de las pestañas), comenta la línea de arriba
// y descomenta estas dos:
// import SignInSide from './componentes/SignInSide';

function App() {
  return (
    <div className="App">
      <PortafolioV2 />
      {/* <SignInSide/> */}
    </div>
  );
}

export default App;
