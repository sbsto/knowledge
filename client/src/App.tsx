import React from 'react';
import { Container, Grid, Paper, Slider, Typography, makeStyles, TextField, FormGroup, Checkbox, FormControlLabel, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header: {
    padding: theme.spacing(2),
  }
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const [valueChicken, setValueChicken] = React.useState(false);
  const [valueShrimp, setValueShrimp] = React.useState(false);
  const [valueVeggie, setValueVeggie] = React.useState(false);
  const [valueSubmitted, setValueSubmitted] = React.useState(false);

  const handleSliderChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleChicken = () => {
    valueChicken ? setValueChicken(false) : setValueChicken(true)
  }

  const handleShrimp = () => {
    valueShrimp ? setValueShrimp(false) : setValueShrimp(true)
  }

  const handleVeggie = () => {
    valueVeggie ? setValueVeggie(false) : setValueVeggie(true)
  }

  const handleValueSubmitted = () => {
    setValueSubmitted(true)
  }

  const submitted = () => {
    return valueSubmitted ? <Typography className={classes.header} variant="h6">Thanks for your submission!</Typography> : null
  }

  return (
    <Container className="App" maxWidth="lg">
      <div className={classes.root}>
        <Typography className={classes.header} variant="h1">Bao not Bao</Typography>
        <Typography className={classes.header} variant="h6">Welcome to the debut of Bao not Bao! It's great to see you.</Typography>
        <Typography className={classes.header} variant="h6" id="continuous-slider" gutterBottom>Please input your current level of anticipation:</Typography>
        <Grid className={classes.header} container spacing={3}>
          <Grid item xs={12}>
            <Slider value={value} onChange={handleSliderChange} aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.header} variant="h6">Guest Name:</Typography>
            <TextField></TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.header} variant="h6">Please select up to 2 (TWO) Bao options:</Typography>
          </Grid>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={valueChicken} onChange={handleChicken} name="gilad" />}
              label="Chicken"
            />
            <FormControlLabel
              control={<Checkbox checked={valueShrimp} onChange={handleShrimp} name="jason" />}
              label="Tofu"
            />
            <FormControlLabel
              control={<Checkbox checked={valueVeggie} onChange={handleVeggie} name="antoine" />}
              label="Veggie"
            />
          </FormGroup>
        </Grid>
        <Button variant="contained" color="primary" onClick={handleValueSubmitted}>Submit</Button>
        {submitted()}
      </div>
    </Container>
  );
}

export default App;
