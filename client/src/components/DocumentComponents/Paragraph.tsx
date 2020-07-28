import React, { useState } from 'react'
import { Grid, TextareaAutosize, Button } from '@material-ui/core'
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
    content: string;
}

function Paragraph(props: ParagraphProps) {
    const [showOptions, setShowOptions] = useState(false)

    const styles = useStyles()

    return (
        <Grid item>
            <Grid item>
                <TextareaAutosize
                    className={styles.paragraphStyle}
                    value={props.content}
                    onChange={(event) => event.target.value}
                    onMouseEnter={() => setShowOptions(true)}
                    onMouseLeave={() => setTimeout(() => setShowOptions(false), 2000)}
                />
            </Grid>
            <Grid item >
                {
                    showOptions ?
                        <Button
                            fullWidth={true}
                        >
                            Add new section here
                        </Button>
                        : null
                }
            </Grid>
        </Grid>
    )
}

export default Paragraph