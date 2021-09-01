
import React from 'react';
import TaskList from "./TaskList";
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Home () {
  const [tasks, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //const { error, isPending, data: tasks } = useFetch('http://localhost:8090/api/task/tasks') 
  const classes = useStyles();
   
useEffect(() => {

   fetchData();

  }, []);

const fetchData = () => {
 setTimeout(() => {
      fetch('http://localhost:28908/api/Task/tasks')
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
      })
      .catch(err => {
          // auto catches network / connection error
          setIsPending(false);
          setError('API call Error !!');
      })
    }, 1000);
}

  return (
    <Container maxWidth="sm">
      { error && <div>{ error }</div> }
      { tasks && <TaskList tasks={tasks} /> }
      <Backdrop className={classes.backdrop} open={isPending} >
        <CircularProgress color="inherit" />
      </Backdrop>
      </Container>
    )
  }
  