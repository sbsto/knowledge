import React, { useState } from 'react'
import { Grid, IconButton } from '@material-ui/core'
import { Create, CreateOutlined, ArrowBack } from '@material-ui/icons'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => createStyles({
    controlBarStyle: {
        padding: theme.spacing(2),
        minHeight: "90px"
    }
}))

function ControlBar() {
    const styles = useStyles()
    const history = useHistory()

    const [isEditing, setIsEditing] = useState(false)

    return (
        <Grid
            item
            container
            md={12}
            justify="space-between"
            alignItems="center"
            className={styles.controlBarStyle}
        >
            <Grid item>
                <IconButton
                    color="primary"
                    onClick={() => history.push('/documentlist')}
                >
                    <ArrowBack />
                </IconButton>
            </Grid>
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