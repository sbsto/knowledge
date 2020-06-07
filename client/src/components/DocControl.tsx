import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { DocNav, DocView } from './'

function DocControl() {
    const [titles, setTitles] = useState(['Title 1', 'Title 2'])
    return (
        <Grid container>
            <DocNav titles={titles} />
            <DocView />
        </Grid>
    )
}

export default DocControl