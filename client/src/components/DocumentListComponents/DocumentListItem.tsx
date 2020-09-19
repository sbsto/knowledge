import React from 'react'
import { Grid, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        item: {
            padding: theme.spacing(2),
            borderBottom: '0.5px #cccccc solid'
        },
        title: {
            cursor: 'pointer'
        }
    })
)

interface DocumentListItemProps {
    title: string,
    created: string,
    description: string
}

function DocumentListItem(props: DocumentListItemProps) {
    const styles = useStyles()

    return (
        <Grid
            container
            className={styles.item}
            justify="space-between"
            direction="row"
            alignItems="flex-end"
        >
            <Grid
                item container
                direction="column"
                spacing={1}
                md={6}
            >
                <Grid item>
                    <Typography variant="h4" className={styles.title}>{props.title}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2">Created {props.created}</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="body1">{props.description}</Typography>
            </Grid>
        </Grid>
    )

}

export default DocumentListItem