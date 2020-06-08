import React from 'react';
import { Container, Typography } from '@material-ui/core'
import { DocControl } from './components/'

function App() {
  return (
    <Container className="App" maxWidth="lg">
      {/* Instead of the below, we will have a funcitonal header component.
          This is just a placeholder. I think the material-ui "App Bar" component
          could look really nice here.
      */}
      <Typography variant="h1">home</Typography>
      <DocControl />
    </Container>
  );
}

export default App;
