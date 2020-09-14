import React, { useState } from 'react'
import { Grid, IconButton } from '@material-ui/core'
import { Create, CreateOutlined } from '@material-ui/icons'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({
    controlBarStyle: {
        padding: theme.spacing(2)
    }
}))

function ControlBar() {
    const [isEditing, setIsEditing] = useState(false)

    const styles = useStyles()

    return (
        <Grid
            item
            container
            md={12}
            justify="flex-end"
            className={styles.controlBarStyle}
        >
            <Grid item>
                <IconButton
                    color="primary"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? <Create /> : <CreateOutlined />}
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default ControlBar