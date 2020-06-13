import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { DocNav, Document } from './'

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
        <Grid container>
            <Typography variant="h1">home</Typography>
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