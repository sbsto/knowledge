import React from 'react'
import { Grid } from '@material-ui/core'
import { Document, DocumentControlBar } from '..'

function DocumentView() {
    return (
        <Grid container direction="column">
            <Grid item>
                <DocumentControlBar />
            </Grid>
            <Grid item>
                <Document />
            </Grid>
        </Grid>
    )
}

export default DocumentView