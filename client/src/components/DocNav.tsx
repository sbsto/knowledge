import React from 'react'
import { Typography, Grid, Button, ButtonProps } from '@material-ui/core'
import { withStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Description, Add } from '@material-ui/icons'
import { TreeItem, TreeView } from '@material-ui/lab'
import { TreeItemProps } from '@material-ui/lab/TreeItem'

const StyledTreeItem = withStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(5),
            // borderBottom: "0.5px solid #aaaaaa"
        },
    }),
)((props: TreeItemProps) => <TreeItem {...props} />)

const StyledButton = withStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: 0,
            borderRadius: 8,
            minWidth: 0,
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2)
        }
    }),
)((props: ButtonProps) => <Button {...props} />)

interface DocNavProps {
    titles: String[]
}

function DocNav(props: DocNavProps) {

    const documents = props.titles.map((title, index) => {
        const id = String(index)
        return (
            <StyledTreeItem
                key={index}
                nodeId={id}
                label={title}
                icon={<Description />}
            />
        )
    })

    return (
        <Grid item container sm={3}
            direction="column"
        >
            <Grid
                item container
                justify="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <Typography variant="h2">documents</Typography>
                </Grid>
                <Grid item>
                    <StyledButton
                        color="primary"
                        aria-label="add"
                        size="small"
                    // className={classes.root}
                    >
                        <Add />
                    </StyledButton>
                </Grid>
            </Grid>
            <Grid item>
                <TreeView>
                    {documents}
                </TreeView>
            </Grid>
        </Grid>
    )
}

export default DocNav