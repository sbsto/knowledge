import React, { useState } from 'react'
import { Grid, TextareaAutosize } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DocBody } from './'

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

function DocView() {
    const classes = useStyles()

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
                deleteParagraph={
                    () => {
                        const newState = { ...state }
                        newState.body.splice(index, 1)
                        setState({ ...newState })
                    }
                }
            />
        )
    })

    return (
        <Grid
            container
            item
            spacing={2}
            direction="column"
            sm={9}
        >
            <Grid item >
                <TextareaAutosize
                    className={classes.titleStyle}
                    placeholder="title"
                    value={state.title}
                    onChange={event => setState({
                        title: event.target.value,
                        body: state.body
                    })}
                />
            </Grid>
            <Grid container item direction="column">
                {fullBody}
            </Grid>
        </Grid>
    )
}

export default DocView