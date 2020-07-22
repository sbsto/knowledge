import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerContainer: {
            paddingBottom: theme.spacing(2),
            marginBottom: theme.spacing(2),
            borderBottom: '0.5px #aaaaaa solid'
        }
    })
)

function HomeHeader() {
    const styles = useStyles()
    return (
        <Grid item container md={12} className={styles.headerContainer}>
            <Grid item container md={6}>
                <Grid item>
                    <Typography variant="h1">Knowledge</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">
                        Changing the way you store information.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomeHeader