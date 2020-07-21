import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { CreateAccount, HomeHeader } from '.'

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            height: '70%'
        }
    })
)

function Home() {
    const styles = useStyles()

    return (
        <Container className={styles.container}>
            <HomeHeader />
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
                        variant="h2"
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

export default Home