import React, { useState } from 'react'
import { Typography, Grid, TextField, Button } from '@material-ui/core'

function CreateAccount() {
    const [signupCredentials, setSignupCredentials] = useState({
        username: '',
        email: '',
        password: ''
    })

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
                    onChange={(event) => {
                        setSignupCredentials({
                            ...signupCredentials, username: event.target.value
                        })
                    }}
                />
            </Grid>
            <Grid item>
                <TextField
                    variant="outlined"
                    label="email"
                    size="small"
                    fullWidth={true}
                    onChange={(event) => {
                        setSignupCredentials({
                            ...signupCredentials, email: event.target.value
                        })
                    }}
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
                    onChange={(event) => {
                        setSignupCredentials({
                            ...signupCredentials, password: event.target.value
                        })
                    }}
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