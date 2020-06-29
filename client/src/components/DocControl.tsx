import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { DocNav, Document } from './'

const useStyles = makeStyles((theme: Theme) => createStyles({
    headerStyle: {
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderBottom: "0.5px #aaaaaa solid"
    },
    containerStyle: {
        height: "100%"
    }
}))

interface Doc {
    title: string;
    body: string[];
}

function DocControl() {
    const [documents, setDocuments] = useState<Doc[]>([
        {
            title: 'What I Talk About When I Talk About Running',
            body: [
                "The most important thing we learn at school is the fact that the most important things can't be learned at school.",
                "So the fact that I’m me and no one else is one of my greatest assets. Emotional hurt is the price a person has to pay in order to be independent.",
                "I’m the kind of person who likes to be by himself. To put a finer point on it, I’m the type of person who doesn’t find it painful to be alone. I find spending an hour or two every day running alone, not speaking to anyone, as well as four or five hours alone at my desk, to be neither difficult nor boring. I’ve had this tendency ever since I was young, when, given a choice, I much preferred reading books on my own or concentrating on listening to music over being with someone else. I could always think of things to do by myself.",
                "People sometimes sneer at those who run every day, claiming they’ll go to any length to live longer. But I don’t think that’s the reason most people run. Most runners run not because they want to live longer, but because they want to live life to the fullest. If you’re going to while away the years, it’s far better to live them with clear goals and fully alive than in a fog, and I believe running helps you do that. Exerting yourself to the fullest within your individual limits: that’s the essence of running, and a metaphor for life—and for me, for writing as well. I believe many runners would agree."
            ]
        },
        {
            title: 'Title 2',
            body: ['This is the body of my second document.', 'This might work.']
        }
    ]
    )

    const [selectedDocIndex, setSelectedDocIndex] = useState(0)

    const styles = useStyles()

    const addDoc = (): void => {
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
            className={styles.containerStyle}
        >
            <Grid item
                xs={12}
                className={styles.headerStyle}
            >
                <Typography variant="h1">
                    home
                </Typography>
            </Grid>
            <Grid
                item container
                className={styles.containerStyle}
            >
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