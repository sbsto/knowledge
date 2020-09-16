import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerContainer: {
            paddingBottom: theme.spacing(2),
            marginBottom: theme.spacing(2),
            borderBottom: '0.5px #aaaaaa solid'
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
        <Grid item container md={12} className={styles.headerContainer}>
            <Grid item container md={6}>
                <Grid item>
                    <Typography variant="h2">{props.title}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2">
                        {props.subtitle}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomeHeader