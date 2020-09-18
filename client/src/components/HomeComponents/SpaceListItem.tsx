import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

interface SpaceListItemProps {
    title: string,
    createdDate: string,
    description: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        item: {
            padding: theme.spacing(2),
            borderRadius: "12px",
            border: '1px #aaaaaa solid',
            cursor: 'pointer'
        }
    })
)

function SpaceListItem(props: SpaceListItemProps) {
    const styles = useStyles()

    return (
        <Grid
            item
            container
            className={styles.item}
        >
            <Grid
                item container
                direction="column"
                spacing={2}
            >
                <Grid item>
                    <Typography variant="h4">{props.title}</Typography>
                    <Typography variant="body2">Created {props.createdDate}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1">{props.description}</Typography>
                </Grid>
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
    )
}

export default SpaceListItem