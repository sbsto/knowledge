import React from 'react'
import { Grid, TextareaAutosize } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

interface TitleProps {
    title: string,
    description: string,
    onTitleChange: (value: string) => void,
    onDescriptionChange: (value: string) => void
}

function Title(props: TitleProps) {

    const useStyles = makeStyles((theme: Theme) => createStyles({
        title: {
            border: "0px",
            fontSize: "48px",
            fontFamily: "serif",
            fontWeight: 600,
            color: "#333333",
            backgroundColor: "whitesmoke",
            resize: "none",
            outline: "none",
            width: "100%",
            textAlign: "justify",
            padding: "0px",
            margin: "0px"
        },
        description: {
            border: "0px",
            fontSize: "24px",
            fontFamily: "sans-serif",
            fontWeight: 400,
            color: "#333333",
            backgroundColor: "whitesmoke",
            resize: "none",
            outline: "none",
            width: "100%",
            textAlign: "justify",
            padding: "0px",
            margin: "0px"
        },
        container: {
            paddingBottom: theme.spacing(2),
            borderBottom: '0.5px #aaaaaa solid',
            minHeight: "115px"
        }
    }))

    const styles = useStyles()

    return (
        <Grid item className={styles.container}>
            <TextareaAutosize
                className={styles.title}
                value={props.title}
                onChange={(event) => props.onTitleChange(event.target.value)}
            />
            <TextareaAutosize
                className={styles.description}
                value={props.description}
                onChange={(event) => props.onDescriptionChange(event.target.value)}
            />
        </Grid>
    )

}

export default Title