import React, { useState } from 'react'
import { TextareaAutosize } from '@material-ui/core'
import '../styles/DocView.css'
import { DocBody } from './'

function DocView() {
    const [state, setState] = useState(
        {
            title: '',
            body: ['']
        }
    )

    const fullBody = state.body.map((paragraph, index) => {
        return (
            <DocBody
                key={index}
                bodyText={state.body[index]}
                onChange={
                    (value) => {
                        const newState = { ...state }
                        newState.body[index] = value
                        setState({
                            ...newState
                        })
                    }}
                onEnter={
                    () => {
                        const newState = { ...state }
                        newState.body.splice(index + 1, 0, '')
                        setState({ ...newState })
                    }
                }
                onBackspace={
                    () => {
                        const newState = { ...state }
                        if (paragraph.length === 0) {
                            newState.body.splice(index, 1)
                        }
                        setState({ ...newState })
                    }
                }
            />
        )
    })

    return (
        <div className="DocView">
            <TextareaAutosize
                className="DocView-title"
                placeholder="title"
                value={state.title}
                onChange={event => setState({
                    title: event.target.value,
                    body: state.body
                })}
            />
            {fullBody}
        </div>
    )
}

export default DocView