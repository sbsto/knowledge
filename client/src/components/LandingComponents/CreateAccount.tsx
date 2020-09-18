import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Typography, Grid, TextField, Button } from '@material-ui/core'
import axios from 'axios'

function CreateAccount() {
    const history = useHistory()

    const [signupCredentials, setSignupCredentials] = useState({
        username: '',
        email: '',
        password: ''
    })

    const signup = () => {
        axios.post('/api/users/create', {
            username: signupCredentials.username,
            email: signupCredentials.email,
            password: signupCredentials.password,
        }).then((res) => {
            const token = res.data.token
            localStorage.setItem('token', token)
            history.push('/home')
        }).catch(() => {
            localStorage.removeItem('token')
        })
    }

    return (
        <Grid item container
            direction="column"
            spacing={2}
        >
            <Grid item>
                <Typography variant="h3">Create an account.</Typography>
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
                    onClick={signup}
                >
                    Sign up
                </Button>
            </Grid>
            <Grid item>
                <Button
                    color="primary"
                    fullWidth={true}
                    onClick={() => history.push('/login')}
                >
                    Already have an account? Log in.
                </Button>
            </Grid>
        </Grid>
    )
}

export default CreateAccount