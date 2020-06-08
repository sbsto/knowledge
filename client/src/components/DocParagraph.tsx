import React, { useState } from 'react'
import { Grid, TextareaAutosize } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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

interface DocParagraphProps {
    bodyText: string;
    onChange(value: string): void;
    onEnter(): void;
    onBackspace(): void;
}

function DocParagraph(props: DocParagraphProps) {
    const [placeholder, setPlaceholder] = useState('start writing here...')

    const classes = useStyles()

    const keyPressed = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault()
            props.onEnter()
        } else if (event.key === "Backspace" && props.bodyText.length === 0) {
            event.preventDefault()
            props.onBackspace()
        }
    }

    return (
        <Grid item>
            <TextareaAutosize
                className={classes.paragraphStyle}
                placeholder={placeholder}
                value={props.bodyText}
                onChange={event => props.onChange(event.target.value)}
                onKeyDown={keyPressed}
                onFocus={() => setPlaceholder('start writing here...')}
                onBlur={() => setPlaceholder('')}
                autoFocus
            />
        </Grid>
    )
}

export default DocParagraph