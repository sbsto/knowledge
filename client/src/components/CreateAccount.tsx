import React from 'react'
import { Typography, Grid, TextField, Button } from '@material-ui/core'

function CreateAccount() {
    return (
        <Grid item container
            direction="column"
            spacing={2}
        >
            <Grid item>
                <Typography variant="h2">create an account</Typography>
            </Grid>
            <Grid item>
                <TextField
                    variant="outlined"
                    label="username"
                    size="small"
                    fullWidth={true}
                />
            </Grid>
            <Grid item>
                <TextField
                    variant="outlined"
                    label="email"
                    size="small"
                    fullWidth={true}
                />
            </Grid>
            <Grid item>
                <TextField
                    variant="outlined"
                    label="password"
                    type="password"
                    autoComplete="current-password"
                    size="small"
                    fullWidth={true}
                />
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth={true}
                >
                    sign up
                    </Button>
            </Grid>
        </Grid>
    )
}

export default CreateAccount