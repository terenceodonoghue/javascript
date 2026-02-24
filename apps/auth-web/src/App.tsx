import { Route, Router } from '@solidjs/router';

import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Success } from './pages/Success/Success';
import { Verify } from './pages/Verify/Verify';

export const App = () => (
  <Router base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
    <Route path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/register/verify" component={Verify} />
    <Route path="/success" component={Success} />
  </Router>
);
