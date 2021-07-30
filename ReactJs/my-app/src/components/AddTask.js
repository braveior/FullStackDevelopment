import React from 'react';
import { useState } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



export default function AddTask () {
  const [taskname, setTaskName] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { taskname };

    fetch('http://localhost:28908/Task/addTask', {
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
  <div className="create">
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Add Task:</label>
        <input 
          type="text" 
          required 
          value={taskname}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button>Add Task</button>
      </form>

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

    </div>
  )
}

