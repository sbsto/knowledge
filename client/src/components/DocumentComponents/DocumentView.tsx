import React from 'react'
import { Grid } from '@material-ui/core'
import { Document, ControlBar } from '..'

function DocumentView() {
    return (
        <Grid container direction="column">
            <Grid item>
                <ControlBar />
            </Grid>
            <Grid item>
                <Document />
            </Grid>
        </Grid>
    )
}

export default DocumentView