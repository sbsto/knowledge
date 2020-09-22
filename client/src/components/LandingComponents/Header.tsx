import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerContainer: {
            paddingBottom: theme.spacing(2),
            borderBottom: '0.5px #aaaaaa solid',
            minHeight: "115px"
        }
    })
)

interface HeaderProps {
    title: string;
    subtitle?: string;
}

function HomeHeader(props: HeaderProps) {
    const styles = useStyles()
    return (
        <Grid
            item container
            className={styles.headerContainer}
            direction="column"
        >
            <Typography variant="h2">{props.title}</Typography>
            <Typography variant="subtitle2">{props.subtitle}</Typography>
        </Grid>
    )
}

export default HomeHeader