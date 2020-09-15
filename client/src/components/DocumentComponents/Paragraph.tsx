import React from 'react'
import { Grid, TextareaAutosize } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    paragraphStyle: {
        border: "0px",
        fontSize: "24px",
        fontFamily: "serif",
        fontWeight: 500,
        color: "#333333",
        backgroundColor: "whitesmoke",
        resize: "none",
        outline: "none",
        width: "100%",
        textAlign: "justify"
    }
})

interface ParagraphProps {
    value: string;
    onChange: (value: string) => void
}

function Paragraph(props: ParagraphProps) {

    const styles = useStyles()

    return (
        <Grid item>
            <TextareaAutosize
                className={styles.paragraphStyle}
                value={props.value}
                onChange={(event) => props.onChange(event.target.value)}
            />
        </Grid>
    )
}

export default Paragraph