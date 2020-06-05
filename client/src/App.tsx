import React from 'react';
import { Container, Grid } from '@material-ui/core'
import './styles/App.css';
import { DocView } from './components/'

function App() {
  return (
    <Container className="App" maxWidth="md">
      {/* Instead of the below, we will have a funcitonal header component.
          This is just a placeholder. I think the material-ui "App Bar" component
          could look really nice here.
      */}
      <Grid className="header">
        <h1>home</h1>
      </Grid>
      <Grid>
        <DocView />
        {/* here, we'll have 2 components: 
          one for navigation between docs (left)
          one for viewing the doc and editing it.
         */}
      </Grid>
    </Container>
  );
}

export default App;
