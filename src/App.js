import React from 'react';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';


function App() {

  return (
    <Router>
      <Menu secondary>
        <Menu.Item
          name='home'
          href='/'
        />
        <Menu.Item
          name='scans'
          href='/scans'
        />
      </Menu>
      <Switch>
        <Route path='/scans'>
          <Dashboard />
        </Route>
        <Route path='/'>
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
