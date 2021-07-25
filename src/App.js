import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import ProyectoState from './context/proyectos/proyectoState';
import Proyectos from './components/proyectos/Proyectos';
import React from 'react';
import RutaPrivada from './components/rutas/RutaPrivada';
import TareaState from './context/tareas/tareaState';
import tokenAuth from './config/token';

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                    <RutaPrivada exact path="/proyectos" component={Proyectos} />
                </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
