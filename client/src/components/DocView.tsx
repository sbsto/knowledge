import React, { useState } from 'react'
import '../styles/DocView.css'
import DocBody from './DocBody'
import { stat } from 'fs'

function DocView() {
    const [state, setState] = useState(
        {
            title: '',
            body: ['THIS IS PARA 1', 'THIS IS PARA 2']
        }
    )

    const fullBody = state.body.map((paragraph, index) => {
        return (
            <DocBody
                key={index}
                bodyText={state.body[index]}
                onChange={
                    value => setState(() => {
                        const newState = state
                        newState.body[index] = value
                        return {
                            ...newState
                        }
                    })
                }
                onEnter={
                    () => setState(() => {
                        const newState = state
                        newState.body.splice(index + 1, 0, '')
                        return {
                            ...newState
                        }
                    })
                }
            />
        )
    })

    return (
        <div className="DocView">
            <input
                className="DocView-title"
                type="text"
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