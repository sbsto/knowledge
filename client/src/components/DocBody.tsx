import React from 'react'
import { Grid, TextareaAutosize } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface DocBodyProps {
    bodyText: string;
    onChange(value: string): void;
    onEnter(): void;
    onBackspace(): void;
}

const useStyles = makeStyles({
    paragraphStyle: {
        border: "0px",
        fontSize: "20px",
        backgroundColor: "whitesmoke",
        resize: "none",
        outline: "none",
        width: "100%"
    }
})

function DocBody(props: DocBodyProps) {
    const classes = useStyles()

    const keyPressed = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault()
            props.onEnter()
        } else if (event.key === "Backspace") {
            props.onBackspace()
        }
    }

    return (
        <Grid item>
            <TextareaAutosize
                className={classes.paragraphStyle}
                placeholder="start writing here..."
                value={props.bodyText}
                onChange={event => props.onChange(event.target.value)}
                onKeyDown={keyPressed}
                autoFocus
            />
        </Grid>
    )
}

export default DocBody