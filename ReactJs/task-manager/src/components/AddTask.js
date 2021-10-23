import React from 'react';
import { useState } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonColor: {
    color : 'white',
    background: 'black',
  },
  
}));


export default function AddTask () {

  const classes = useStyles();

  const [taskName, setTaskName] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { taskName };

    fetch('http://localhost:28908/api/task/add', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    }).then(() => {
      setOpen(true);
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {


      }
    })
  }  


  return (
    <Container maxWidth="sm">
    

<Box m={4}>
 <Paper>
 <Typography variant="h6" component="h2">Add Task</Typography>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Grid container direction="column">
          <Grid item pb={5}>
            <Box m={2}><TextField size="small" label="Task name" variant="outlined" required={true} onChange={(e) => setTaskName(e.target.value)}/></Box>
          </Grid>
          <Grid item>
            <Box m={2}><Button type="submit" variant="outlined" className={classes.buttonColor} >Submit</Button></Box>
          </Grid>
        </Grid>
      </form>
     </Paper>
     </Box>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Task Added"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
</Container>
  )
}

