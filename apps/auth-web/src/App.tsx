import { Route, Router } from '@solidjs/router';

import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Success } from './pages/Success/Success';
import { Tokens } from './pages/Tokens/Tokens';

export const App = () => (
  <Router base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
    <Route path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/success" component={Success} />
    <Route path="/tokens" component={Tokens} />
  </Router>
);
