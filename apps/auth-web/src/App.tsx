import { Route, Router } from '@solidjs/router';

import { Login, Register, Success } from './pages/auth';
import { Tokens } from './pages/view';

export const App = () => (
  <Router base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
    <Route path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/success" component={Success} />
    <Route path="/tokens" component={Tokens} />
  </Router>
);
