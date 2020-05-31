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
                bodyText={state.body[index]}
                onChange={
                    value => setState(() => {
                        state.body[index] = value
                        return {
                            ...state
                        }
                    })
                }
                onEnter={
                    () => setState(() => {
                        state.body.splice(index + 1, 0, '')
                        return {
                            ...state
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