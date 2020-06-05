import React from 'react'
import { Container, TextareaAutosize } from '@material-ui/core'
import '../styles/DocBody.css'

interface DocBodyProps {
    bodyText: string;
    onChange(value: string): void;
    onEnter(): void;
    onBackspace(): void;
}

function DocBody(props: DocBodyProps) {

    const keyPressed = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault()
            props.onEnter()
        } else if (event.key === "Backspace") {
            props.onBackspace()
        }
    }

    return (
        <TextareaAutosize
            className="DocBody-textbox"
            placeholder="start writing here..."
            value={props.bodyText}
            onChange={event => props.onChange(event.target.value)}
            onKeyDown={keyPressed}
            autoFocus
        />
    )
}

export default DocBody