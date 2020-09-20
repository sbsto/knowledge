import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Landing, Login, DocumentView, Spaces, DocumentList } from './components/'

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
            <DocumentView />
          </Route>
          <Route path='/documentlist'>
            <DocumentList />
          </Route>
          <Route path='/spaces'>
            <Spaces />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
