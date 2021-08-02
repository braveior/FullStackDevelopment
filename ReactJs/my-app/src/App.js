import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddTask from './components/AddTask'
import Home from './components/Home'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbarColor: {
    background : 'black',
  },
  LinkColor: {
    color : 'white',
  },
}));

export default function ButtonAppBar() {


  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      <AppBar className={classes.appbarColor} position="static">
        <Toolbar >
          <Grid container>
          <Grid item xs={10} />
          <Grid item xs={1} >
          <Typography variant="h6" color='textPrimary'>
            <Link className={classes.LinkColor} to='/addtask'>Add Task</Link>
          </Typography>
          </Grid>
          <Grid item xs={1} >
          <Typography variant="h6" >
          <Link className={classes.LinkColor} to='/listtasks'>List Tasks</Link>
          </Typography>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    <Switch>
    <Route path='/addtask' component={AddTask} />
    <Route path='/' component={Home} />
    </Switch>
    </Router>
  );
}