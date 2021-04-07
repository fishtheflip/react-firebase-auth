import Singup from './singup';
import {Container} from 'react-bootstrap';
import { AuthProvider } from '../context/auth-context';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './dash';
import Login from './login';
import { connect } from 'react-redux';

function App({state, addItem}) {
  console.log(state.quote)
  return (
    <AuthProvider>
        <Container>
          <Router >
            <Switch>
              <Route path="/" exact>
                <Dashboard onAdd={addItem} quotes={state.quote}/>
              </Route>
              <Route path="/singup">
                <Singup/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
            </Switch>
          
          </Router>
          
        </Container>
    </AuthProvider>
      
  );
}


const mapStateTOProps = (state) => {
  return {
      state: state
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
      addItem: (name, message) => {
          
          
          const payload = [name, message];
          console.log(payload)
          dispatch({type: 'ADD', payload})
      }

  }
};

export default connect(mapStateTOProps, mapDispatchToProps)(App);
