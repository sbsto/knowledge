import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Section } from '..'

const useStyles = makeStyles((theme: Theme) => createStyles({
    docContainer: {
        marginTop: theme.spacing(9)
    }
}))

function Document() {
    const styles = useStyles()

    return (
        <Grid
            className={styles.docContainer}
            container
            md={12}
            alignItems="center"
            justify="center"
        >
            <Grid item md={8}>
                <Section
                    title="New Document"
                    content={[
                        {
                            title: "Introduction",
                            content: [
                                { content: "But who can say what's best? That's why you need to grab whatever chance you have of happiness where you find it, and not worry about other people too much. My experience tells me that we get no more than two or three such chances in a life time, and if we let them go, we regret it for the rest of our lives." },
                                { content: "I think you still love me, but we can’t escape the fact that I’m not enough for you. I knew this was going to happen. So I’m not blaming you for falling in love with another woman. I’m not angry, either. I should be, but I’m not. I just feel pain. A lot of pain. I thought I could imagine how much this would hurt, but I was wrong." }
                            ],
                            degree: 1
                        },
                        {
                            title: "This is another section",
                            content: [{ content: "No truth can cure the sorrow we feel from losing a loved one. No truth, no sincerity, no strength, no kindness can cure that sorrow. All we can do is see it through to the end and learn something from it, but what we learn will be no help in facing the next sorrow that comes to us without warning." }],
                            degree: 1
                        }
                    ]}
                    degree={0}
                />
            </Grid>
        </Grid>
    )
}

export default Document