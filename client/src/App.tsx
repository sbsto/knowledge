import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { DocControl, Home } from './components/'

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* Instead of the below, we will have a funcitonal header component.
            This is just a placeholder. I think the material-ui "App Bar" component
            could look really nice here.
        */}
    </Container>
  );
}

export default App;
