import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Typography, Grid, TextField, Button, Container } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { Header } from '..'

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            height: '70%'
        }
    })
)

function Login() {
    const history = useHistory()

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
            history.push('/home')
        }).catch(() => {
            localStorage.removeItem('token')
        })
    }

    return (
        <Container className={styles.container}>
            <Header title="Knowledge" subtitle="Changing the way you store information." />
            <Grid
                container
                alignItems="center"
                justify="center"
                className={styles.container}
            >
                <Grid item md={6}>
                    <Typography variant="h3">Thanks for coming back.</Typography>
                </Grid>
                <Grid
                    item
                    container
                    md={4}
                    direction="column"
                    spacing={2}
                >
                    <Grid item>
                        <Typography variant="h3">Log in.</Typography>
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