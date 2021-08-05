
import React from 'react';
import TaskList from "./TaskList";
import useFetch from "../useFetch";
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Home () {
  const { error, isPending, data: tasks } = useFetch('http://localhost:8090/api/task/tasks') 
  const classes = useStyles();
   
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
  