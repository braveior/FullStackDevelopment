import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
export default function TaskList ({tasks }) {
  return (
        <Box p={2}>
          <Paper>
          <Typography variant="h6" component="h2">Task List</Typography>
        <List component="nav" >
        {tasks.map(task => (
            <ListItem button divider key={task.taskItemId}>
                <ListItemText primary={task.taskName} />
            </ListItem>
          ))}
        </List>
        </Paper>
        </Box>
  );
}
 
