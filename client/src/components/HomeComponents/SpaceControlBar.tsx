import React from 'react'
import { Grid, Button, IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({
    controlBarStyle: {
        padding: theme.spacing(2),
        minHeight: "90px"
    }
}))

function HomeControlBar() {
    const styles = useStyles()

    return (
        <Grid
            item
            container
            md={12}
            justify="flex-end"
            alignItems="center"
            className={styles.controlBarStyle}
        >
            <Grid item>
                <Button color="primary" startIcon={<Add />}>
                    New Space
                </Button>
            </Grid>
        </Grid>
    )
}

export default HomeControlBar