import React from 'react'
import '../styles/DocBody.css'

interface DocBodyProps {
    bodyText: string;
    onChange(value: string): void;
    onEnter(): void;
}

function DocBody(props: DocBodyProps) {

    const keyPressed = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            props.onEnter()
        }
    }

    return (
        <div className="DocBody">
            <textarea
                className="DocBody-textbox"
                rows={10}
                placeholder="start writing here..."
                value={props.bodyText}
                onChange={event => props.onChange(event.target.value)}
                onKeyUp={keyPressed}
            ></textarea>
        </div>
    )
}

export default DocBody