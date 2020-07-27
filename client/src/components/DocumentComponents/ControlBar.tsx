import React, { useState } from 'react'
import { Grid, Switch, FormControlLabel, IconButton } from '@material-ui/core'
import { Create } from '@material-ui/icons'

function ControlBar() {
    return (
        <Grid item container>
            <Grid item>
                <IconButton color="primary">
                    <Create />
                </IconButton>
            </Grid>
            <Grid item>
                <FormControlLabel
                    control={
                        <Switch color="primary" />}
                    label="Edit Mode"
                />
            </Grid>
        </Grid>
    )
}

export default ControlBar