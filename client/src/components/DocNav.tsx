import React from 'react'
import { Typography, Grid, Button, ButtonProps } from '@material-ui/core'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Description, Add } from '@material-ui/icons'
import { TreeItem, TreeView } from '@material-ui/lab'
import { TreeItemProps } from '@material-ui/lab/TreeItem'

const StyledTreeItem = withStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(5),
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(4)
        },
        treeView: {
            marginRight: theme.spacing(5),
            paddingBottom: theme.spacing(1),
            borderBottom: '0.5px solid #aaaaaa'
        }
    }),
)

interface DocNavProps {
    titles: String[];
    onSelect(index: number): void;
    onAddDoc(): void
}

function DocNav(props: DocNavProps) {
    const classes = useStyles()

    const documents = props.titles.map((title, index) => {
        return (
            <StyledTreeItem
                key={index}
                nodeId={String(index)}
                label={title}
                icon={<Description />}
                onClick={() => props.onSelect(index)}
            />
        )
    })

    return (
        <Grid
            item container
            sm={3}
            direction="column"
            className={classes.root}
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
                        onClick={props.onAddDoc}
                    >
                        <Add />
                    </StyledButton>
                </Grid>
            </Grid>
            <Grid item>
                <TreeView className={classes.treeView}>
                    {documents}
                </TreeView>
            </Grid>
        </Grid>
    )
}

export default DocNav