import React, { useState } from 'react'
import { Typography, Grid, TextField, Button, Container } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { HomeHeader } from '.'

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            height: '70%'
        }
    })
)

function Login() {
    const [signupCredentials, setSignupCredentials] = useState({
        username: '',
        password: ''
    })

    const styles = useStyles()

    const login = () => {
        axios.post('/api/users/login', {
            username: signupCredentials.username,
            password: signupCredentials.password
        }).then((res) => {
            const token = res.data.token
            localStorage.setItem('token', token)
        }).catch(() => {
            localStorage.removeItem('token')
        })
    }

    return (
        <Container className={styles.container}>
            <HomeHeader />
            <Grid
                container
                alignItems="center"
                justify="center"
                className={styles.container}
            >
                <Grid item md={6}>
                    <Typography variant="h2">Thanks for coming back.</Typography>
                </Grid>
                <Grid
                    item
                    container
                    md={4}
                    direction="column"
                    spacing={2}
                >
                    <Grid item>
                        <Typography variant="h2">Log in.</Typography>
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
                            onClick={login}
                        >
                            Log in
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login