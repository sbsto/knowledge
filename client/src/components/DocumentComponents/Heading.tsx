import React from 'react'
import { Grid, TextareaAutosize } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

interface HeadingProps {
    value: string;
    degree: number;
    onChange: (value: string) => void
}

function Heading(props: HeadingProps) {
    const fontSize = String(38 - 5 * props.degree) + "px"

    const useStyles = makeStyles((theme: Theme) => createStyles({
        titleStyle: {
            border: "0px",
            fontSize,
            fontFamily: "serif",
            fontWeight: 550,
            color: "#333333",
            backgroundColor: "whitesmoke",
            resize: "none",
            outline: "none",
            width: "100%",
            textAlign: "justify",
            marginTop: theme.spacing(2)
        }
    }))

    const styles = useStyles()

    return (
        <Grid item>
            <TextareaAutosize
                className={styles.titleStyle}
                value={props.value}
                onChange={(event) => props.onChange(event.target.value)}
            />
        </Grid>
    )

}

export default Heading
