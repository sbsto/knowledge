import React, { useState } from 'react'
import { Grid, TextareaAutosize } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DocParagraph } from './'

const useStyles = makeStyles({
    titleStyle: {
        border: "0px",
        fontSize: "42px",
        fontWeight: 500,
        color: "#333333",
        backgroundColor: "whitesmoke",
        resize: "none",
        outline: "none",
        width: "100%",
        textAlign: "justify"
    }
})

interface DocViewProps {
    title: string;
    body: string[];
    onBodyChange(value: string, index: number): void;
    onTitleChange(value: string): void;
    onEnter(index: number): void;
    onBackspace(index: number): void;
}

function DocView(props: DocViewProps) {
    const classes = useStyles()
    const [selectedParagraph, setSelectedParagraph] = useState(0)

    const selectPreviousParagraph = (index: number): void => {
        if (index) {
            setSelectedParagraph(index - 1)
        }
    }

    const selectNextParagraph = (index: number): void => {
        if (index !== props.body.length - 1) {
            setSelectedParagraph(index + 1)
        }
    }

    const titleKeyPressed = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault()
            props.onEnter(-1)
        }
    }

    const fullBody = props.body.map((paragraph, index) => {
        return (
            <DocParagraph
                key={index}
                bodyText={paragraph}
                onChange={(value) => props.onBodyChange(value, index)}
                onEnter={() => props.onEnter(index)}
                onBackspace={() => props.onBackspace(index)}
                isSelected={index === selectedParagraph}
                selectPreviousParagraph={() => selectPreviousParagraph(index)}
                selectNextParagraph={() => selectNextParagraph(index)}
            />
        )
    })

    return (
        <Grid
            container
            item
            direction="column"
            sm={8}
            alignItems="stretch"
            spacing={2}
        >
            <Grid item >
                <TextareaAutosize
                    className={classes.titleStyle}
                    placeholder="title"
                    value={props.title}
                    onChange={(event) => props.onTitleChange(event.target.value)}
                    onKeyDown={titleKeyPressed}
                />
            </Grid>
            <Grid container item direction="column" spacing={1}>
                {fullBody}
            </Grid>
        </Grid>
    )
}

export default DocView