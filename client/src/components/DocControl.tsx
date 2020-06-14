import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { DocNav, Document } from './'

const useStyles = makeStyles((theme: Theme) => createStyles({
    headerStyle: {
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderBottom: "0.5px #aaaaaa solid"
    }
}))

interface Doc {
    title: string;
    body: string[];
}

function DocControl() {
    const [documents, setDocuments] = useState<Doc[]>([
        {
            title: 'Title 1',
            body: ['This is the body of my first document.', 'I hope this works.']
        },
        {
            title: 'Title 2',
            body: ['This is the body of my second document.', 'This might work.']
        }
    ]
    )

    const [selectedDocIndex, setSelectedDocIndex] = useState(0)

    const styles = useStyles()

    const addDoc = () => {
        const updatedSelectedDocIndex = documents.length
        setDocuments([...documents, { title: 'new document', body: [''] }])
        setSelectedDocIndex(updatedSelectedDocIndex)
    }

    const updateParagraph = (value: string, paragraphIndex: number): void => {
        const newDocuments = [...documents]
        newDocuments[selectedDocIndex].body[paragraphIndex] = value
        setDocuments(newDocuments)
    }

    const updateTitle = (value: string): void => {
        const newDocuments = [...documents]
        newDocuments[selectedDocIndex].title = value
        setDocuments(newDocuments)
    }

    const createNewParagraph = (paragraphIndex: number) => {
        const newDocuments = [...documents]
        newDocuments[selectedDocIndex].body.splice(paragraphIndex + 1, 0, '')
        setDocuments(newDocuments)
    }

    const deleteParagraph = (paragraphIndex: number) => {
        const newDocuments = [...documents]
        newDocuments[selectedDocIndex].body.splice(paragraphIndex, 1)
        setDocuments(newDocuments)
    }

    return (
        <Grid
            container
            spacing={3}
        >
            <Grid item
                xs={12}
                className={styles.headerStyle}
            >
                <Typography variant="h1">
                    home
                </Typography>
            </Grid>
            <Grid item container>
                <DocNav
                    titles={documents.map((doc) => doc.title)}
                    onSelect={setSelectedDocIndex}
                    onAddDoc={addDoc}
                />
                <Document
                    title={documents[selectedDocIndex].title}
                    body={documents[selectedDocIndex].body}
                    onBodyChange={updateParagraph}
                    onTitleChange={updateTitle}
                    onEnter={createNewParagraph}
                    onBackspace={deleteParagraph}
                />
            </Grid>
        </Grid>

    )
}

export default DocControl