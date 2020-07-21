import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { DocControl, Home, Login } from './components/'

const useStyles = makeStyles(() =>
  createStyles({
    containerStyles: {
      height: "100vh"
    }
  }),
)

function App() {
  const styles = useStyles()
  return (
    <Container className={styles.containerStyles} maxWidth="lg">
      <Router>
        <Switch>
          <Route path='/document'>
            <DocControl />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
