import React from 'react'
import '../styles/DocBody.css'

interface DocBodyProps {
    bodyText: string;
    onChange(value: string): void;
    onEnter(): void;
    onBackspace(): void;
}

function DocBody(props: DocBodyProps) {

    const keyPressed = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            props.onEnter()
        }

        if (event.key === "Backspace") {
            props.onBackspace()
        }
    }

    return (
        <div className="DocBody">
            <textarea
                className="DocBody-textbox"
                rows={2}
                placeholder="start writing here..."
                value={props.bodyText}
                onChange={event => props.onChange(event.target.value)}
                onKeyDown={keyPressed}
            ></textarea>
        </div>
    )
}

export default DocBody