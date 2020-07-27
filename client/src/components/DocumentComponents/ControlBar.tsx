import React, { useState } from 'react'
import { Grid, Switch, FormControlLabel, IconButton } from '@material-ui/core'
import { Create, CreateOutlined } from '@material-ui/icons'

function ControlBar() {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <Grid
            item
            container
            md={12}
            justify="flex-end"
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