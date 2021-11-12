import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddTask from './components/AddTask'
import Home from './components/Home'
import  Link  from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default function App() {
  return (
<Router>
      <AppBar sx={{background: 'black'}} position="static">
        <Toolbar>
          <Grid container>
          <Grid item xs={10} />
          <Grid item xs={1} >
          <Link href='/addtask' sx={{color: 'white'}}>Add Task</Link>
          </Grid>
          <Grid item xs={1} >
          <Link href='/' sx={{color: 'white'}} >List Tasks</Link>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Switch>
    <Route path='/addtask' component={AddTask} />
    <Route path='/' component={Home} />
    </Switch>
</Router>
  );
}


