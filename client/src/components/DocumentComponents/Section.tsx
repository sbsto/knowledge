import React from 'react'
import { Grid } from '@material-ui/core'
import { Paragraph, Title } from '..'

interface Paragraph {
    content: string;
}

interface Section {
    title: string;
    content: (Paragraph | Section)[];
    degree: number;
}

interface SectionProps extends Section { }

function Section(props: SectionProps) {
    const body = props.content.map((content) => {
        if ((content as Section).title) {
            return (
                <Section
                    title={(content as Section).title}
                    content={(content as Section).content}
                    degree={(content as Section).degree}
                />
            )
        } else {
            return (
                <Paragraph
                    content={(content as Paragraph).content}
                />
            )
        }
    })

    return (
        <Grid item container direction="column">
            <Title degree={props.degree} content={props.title} />
            {body}
        </Grid>
    )
}

export default Section