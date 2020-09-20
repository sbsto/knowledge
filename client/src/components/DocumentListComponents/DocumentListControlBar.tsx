import React from 'react'
import { Grid, Button, IconButton } from '@material-ui/core'
import { CreateOutlined, ArrowBack, Add } from '@material-ui/icons'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => createStyles({
    controlBarStyle: {
        padding: theme.spacing(2),
        minHeight: "90px"
    }
}))

function DocumentListControlBar() {
    const styles = useStyles()
    const history = useHistory()

    return (
        <Grid
            item
            container
            md={12}
            direction="row"
            justify="space-between"
            alignItems="center"
            className={styles.controlBarStyle}
        >
            <Grid item>
                <IconButton
                    color="primary"
                    onClick={() => history.push('/home')}
                >
                    <ArrowBack />
                </IconButton>
            </Grid>
            <Grid item>
                <Grid item container spacing={2}>
                    <Grid item>
                        <Button color="primary" startIcon={<Add />}>
                            New Document
                    </Button>
                    </Grid>
                    <Grid item>
                        <Button color="primary" startIcon={<CreateOutlined />}>
                            Edit Space
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DocumentListControlBar