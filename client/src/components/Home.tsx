import React, { useState } from 'react'
import { Typography, Grid, TextField, Button, Container } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import axios from 'axios'
import { CreateAccount } from '.'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerContainer: {
            paddingBottom: theme.spacing(2),
            marginBottom: theme.spacing(2),
            borderBottom: '0.5px #aaaaaa solid'
        },
        container: {
            height: '70%'
        }
    })
)

function Home() {
    const styles = useStyles()

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const login = async () => {
        const user = await axios.post('/api/users/login', {
            username: credentials.username,
            password: credentials.password
        })
        return user
    }

    return (
        <Container className={styles.container}>
            <Grid item container className={styles.headerContainer}>
                <Grid item container md={6}>
                    <Grid item>
                        <Typography variant="h1">knowledge</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            changing how you store information.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container
                    md={6}
                    spacing={2}
                    alignItems="center"
                >
                    <Grid item xs={5}>
                        <TextField
                            label="username"
                            size="small"
                            value={credentials.username}
                            onChange={(event) => {
                                setCredentials({
                                    ...credentials, username: event.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            label="password"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            value={credentials.password}
                            onChange={(event) => {
                                setCredentials({
                                    ...credentials, password: event.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={login}
                        >
                            log in
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={3}
                alignItems="center"
                className={styles.container}
            >
                <Grid item md={6}>
                    <Typography variant="h1">
                        convention over configuration in documentation.
                    </Typography>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid container item md={4}>
                    <CreateAccount />
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>
        </Container>
    )
}

export default Home