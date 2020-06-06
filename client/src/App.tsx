import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core'
import { DocView, DocNav } from './components/'

function App() {
  return (
    <Container className="App" maxWidth="lg">
      {/* Instead of the below, we will have a funcitonal header component.
          This is just a placeholder. I think the material-ui "App Bar" component
          could look really nice here.
      */}
      <Typography variant="h1">home</Typography>
      <Grid container spacing={6}>
        {/* here, we'll have 2 components: 
          one for navigation between docs (left)
          one for viewing the doc and editing it.
         */}
        <DocNav />
        <DocView />
      </Grid>
    </Container>
  );
}

export default App;
