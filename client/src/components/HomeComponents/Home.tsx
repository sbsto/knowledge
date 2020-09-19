import React, { useState } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Add } from '@material-ui/icons'
import { SpaceListItem } from '..'
import { useHistory } from 'react-router-dom'

interface Space {
    title: string,
    created: string,
    description: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerContainer: {
            paddingBottom: theme.spacing(2),
            borderBottom: '1px #aaaaaa solid'
        },
        itemContainer: {
            marginTop: theme.spacing(1)
        },
        item: {
            width: '100%'
        },
        emptyState: {
            width: '100%',
            marginTop: theme.spacing(6)
        }
    })
)


function Home() {
    const styles = useStyles()
    const history = useHistory()

    const [spaces, setSpaces] = useState(
        [
            {
                title: "Once Upon a Time in Hollywood",
                created: "on 01/01/2020",
                description: "A twist on an infamous murder case."
            },
            {
                title: "West Facing Windows",
                created: "on 15/09/2020",
                description: "A story about university and life."
            },
            {
                title: "Blog Posts",
                created: "yesterday",
                description: "A collection of blog posts."
            },
            {
                title: "Startup Ideas",
                created: "on 4/09/2020",
                description: "Rough ideas for companies."
            },
            {
                title: "Project Comet",
                created: "on 1/08/2020",
                description: "A new kind of task manager."
            }

        ]
    )

    const spacesList = spaces.map((space: Space, index: number) => {
        return (
            <Grid
                item
                md={6}
                className={styles.item}
                key={index}
                onClick={() => history.push('/documentlist')}
            >
                <SpaceListItem
                    title={space.title}
                    created={space.created}
                    description={space.description}
                />
            </Grid>
        )
    })

    const spacesContainer = (
        <Grid
            item container
            direction="row"
            justify="space-between"
            spacing={2}
            className={styles.itemContainer}
        >
            {spacesList}
        </Grid>
    )

    const emptyState = (
        <Grid
            item container
            className={styles.emptyState}
            justify="center"
        >
            <Typography variant="h3">Don't be shy, create your first space.</Typography>
            <Typography variant="subtitle2">Spaces help keep your information organised.</Typography>
        </Grid>
    )

    return (
        <Grid
            container
            alignItems="center"
            justify="center"
        >
            <Grid item md={8}>
                <Grid
                    item
                    container
                    className={styles.headerContainer}
                    justify="space-between"
                    alignItems="flex-end"
                >
                    <Grid item>
                        <Typography variant="h2">Spaces</Typography>
                        <Typography variant="subtitle2">All your work, organised.</Typography>
                    </Grid>
                    <Grid item>
                        <Button color="primary">
                            <Add fontSize="small" />
                            New Space
                        </Button>
                    </Grid>
                </Grid>
                {spaces.length ? spacesContainer : emptyState}
            </Grid>
        </Grid>
    )
}

export default Home