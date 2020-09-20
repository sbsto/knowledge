import React, { useState } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Add, ArrowBack } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { DocumentListItem, DocumentListControlBar } from '..'

interface Document {
    title: string,
    created: string,
    description: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contentContainer: {
            marginTop: theme.spacing(2)
        },
        headerContainer: {
            paddingBottom: theme.spacing(2),
            borderBottom: '1px #aaaaaa solid'
        },
        item: {
            width: "100%"
        },
        emptyState: {
            width: '100%',
            marginTop: theme.spacing(6)
        }
    })
)

function DocumentList() {
    const styles = useStyles()
    const history = useHistory()

    const [space, setSpace] = useState({
        title: "Once Upon a Time in Hollywood",
        description: "A twist on an infamous murder case."
    })

    const [documents, setDocuments] = useState(
        [
            {
                title: "Outline",
                created: "on 4/09/2020",
                description: "Outline of the plot."
            },
            {
                title: "Notes",
                created: "on 14/08/2020",
                description: "Things to keep in mind."
            },
            {
                title: "Script",
                created: "on 20/01/2020",
                description: "The story in script form."
            },
            {
                title: "Characters",
                created: "on 31/10/2019",
                description: "Character descriptions."
            }
        ]
    )

    const header = (
        <Grid
            item
            container
            className={styles.headerContainer}
            justify="space-between"
            alignItems="flex-end"
        >
            <Grid item>
                <Typography variant="h2">{space.title}</Typography>
                <Typography variant="subtitle2">{space.description}</Typography>
            </Grid>
        </Grid>
    )

    const documentListItems = documents.map((document: Document, index) => {
        return (
            <Grid
                item
                className={styles.item}
                key={index}
            >
                <DocumentListItem
                    title={document.title}
                    created={document.created}
                    description={document.description}
                />
            </Grid>
        )
    })

    const documentListContainer = (
        <Grid item container>{documentListItems}</Grid>
    )

    const emptyState = (
        <Grid
            item container
            className={styles.emptyState}
            justify="center"
        >
            <Typography variant="h3">Don't be shy, create your first document.</Typography>
            <Typography variant="subtitle2">All your documentation lives here.</Typography>
        </Grid>
    )

    return (
        <Grid
            container
            justify="center"
        >
            <DocumentListControlBar />
            <Grid item md={8}>
                {header}
                {documents.length ? documentListContainer : emptyState}
            </Grid>
        </Grid>
    )
}

export default DocumentList
