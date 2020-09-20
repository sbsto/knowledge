import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { CreateAccount, Header } from '..'

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            height: '70%'
        }
    })
)

function Landing() {
    const styles = useStyles()

    return (
        <Container className={styles.container}>
            <Header title="Knowledge" subtitle="Changing the way you store information." />
            <Grid
                container
                spacing={3}
                alignItems="center"
                className={styles.container}
            >
                <Grid item md={7}>
                    <Typography
                        variant="h1"
                    >
                        Docs are broken.
                    </Typography>
                    <Typography
                        variant="subtitle1"
                    >
                        Here's why, and how we fixed them.
                    </Typography>
                </Grid>
                <Grid container item md={4}>
                    <CreateAccount />
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>
        </Container>
    )
}

export default Landing