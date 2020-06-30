import React, { useState, useRef, useEffect } from 'react'
import { Grid, TextareaAutosize } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    paragraphStyle: {
        border: "0px",
        fontSize: "24px",
        color: "#333333",
        backgroundColor: "whitesmoke",
        resize: "none",
        outline: "none",
        width: "100%",
        textAlign: "justify"
    }
})

interface DocParagraphProps {
    bodyText: string;
    isSelected: boolean;
    onChange(value: string): void;
    onEnter(): void;
    onBackspace(): void;
    selectPreviousParagraph(): void;
    selectNextParagraph(): void;
}

function DocParagraph(props: DocParagraphProps) {
    const [placeholder, setPlaceholder] = useState('start writing here...')

    const paragraphRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (paragraphRef.current) {
            if (props.isSelected) {
                paragraphRef.current.focus()
            }
        }
    }, [props.isSelected])

    const classes = useStyles()

    const keyPressed = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const endSelected = paragraphRef.current!.selectionEnd === props.bodyText.length
        const startSelected = paragraphRef.current!.selectionEnd === 0

        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault()
            props.onEnter()
        } else if (event.key === "Backspace" && props.bodyText.length === 0) {
            event.preventDefault()
            props.onBackspace()
        } else if ((event.key === "ArrowUp" || event.key === "ArrowLeft") && startSelected) {
            event.preventDefault()
            props.selectPreviousParagraph()
        } else if ((event.key === "ArrowDown" || event.key === "ArrowRight") && endSelected) {
            event.preventDefault()
            props.selectNextParagraph()
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
                ref={paragraphRef}
                autoFocus
            />
        </Grid>
    )
}

export default DocParagraph