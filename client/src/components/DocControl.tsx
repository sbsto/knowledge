import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { DocNav, Document } from './'

interface Doc {
    title: string;
    body: string[];
    selected: boolean;
}

function DocControl() {
    const [state, setState] = useState({
        documents: [
            {
                title: 'Title 1',
                body: ['This is the body of my first document.', 'I hope this works.'],
                selected: true
            },
            {
                title: 'Title 2',
                body: ['This is the body of my second document.', 'This might work.'],
                selected: false
            }
        ]
    })
    return (
        <Grid container>
            <DocNav
                titles={state.documents.map((doc: Doc) => doc.title)}
                onSelect={
                    (index) => {
                        const newState = state
                        newState.documents.forEach((doc) => {
                            if (doc.selected) {
                                doc.selected = false
                            }
                        })
                        newState.documents[index].selected = true
                        setState({ ...newState })
                    }
                }
                onAddDoc={
                    () => {
                        const newState = state
                        newState.documents.forEach((doc) => {
                            if (doc.selected) {
                                doc.selected = false
                            }
                        })
                        newState.documents.push({
                            title: 'new document',
                            body: [''],
                            selected: true
                        })
                        setState({ ...newState })
                    }
                }
            />
            <Document
                title={state.documents.find((doc: Doc) => doc.selected)!.title}
                body={state.documents.find((doc: Doc) => doc.selected)!.body}
                onBodyChange={
                    (value, index) => {
                        const newState = state
                        newState.documents.forEach((doc: Doc) => {
                            if (doc.selected) {
                                doc.body[index] = value
                            }
                        })
                        setState({ ...newState })
                    }}
                onTitleChange={
                    (value) => {
                        const newState = state
                        newState.documents.forEach((doc: Doc) => {
                            if (doc.selected) {
                                doc.title = value
                            }
                        })
                        setState({ ...newState })
                    }
                }
                onEnter={
                    (index) => {
                        const newState = state
                        newState.documents.forEach((doc: Doc) => {
                            if (doc.selected) {
                                doc.body.splice(index + 1, 0, '')
                            }
                        })
                        setState({ ...newState })
                    }
                }
                onBackspace={
                    (index) => {
                        const newState = state
                        newState.documents.forEach((doc: Doc) => {
                            if (doc.selected && doc.body[index].length === 0) {
                                doc.body.splice(index, 1)
                            }
                        })
                        setState({ ...newState })
                    }
                }
            />
        </Grid>
    )
}

export default DocControl