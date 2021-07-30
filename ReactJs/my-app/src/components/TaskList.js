import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const TaskList = ({ tasks }) => {
    const classes = useStyles();
  return (
     <div className={classes.root}>

        <List component="nav" aria-label="main mailbox folders"  >
        {tasks.map(task => (
            <ListItem button key={task.taskItemId}>
                <ListItemText primary={task.taskName} />
            </ListItem>
    
          ))}
        </List>

    </div>
  );
}
 
export default TaskList;