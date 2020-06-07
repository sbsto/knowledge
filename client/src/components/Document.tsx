import React from 'react'
import { Grid, TextareaAutosize } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DocParagraph } from './'

const useStyles = makeStyles({
    titleStyle: {
        border: "0px",
        fontSize: "30px",
        fontWeight: 500,
        color: "#333333",
        backgroundColor: "whitesmoke",
        resize: "none",
        outline: "none",
        width: "100%"
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

    const fullBody = props.body.map((paragraph, index) => {
        return (
            <DocParagraph
                key={index}
                bodyText={props.body[index]}
                onChange={(value) => props.onBodyChange(value, index)}
                onEnter={() => props.onEnter(index)}
                onBackspace={() => props.onBackspace(index)}
            />
        )
    })

    return (
        <Grid
            container
            item
            direction="column"
            sm={9}
            alignItems="stretch"
        >
            <Grid item >
                <TextareaAutosize
                    className={classes.titleStyle}
                    placeholder="title"
                    value={props.title}
                    onChange={(event) => props.onTitleChange(event.target.value)}
                />
            </Grid>
            <Grid container item direction="column">
                {fullBody}
            </Grid>
        </Grid>
    )
}

export default DocView