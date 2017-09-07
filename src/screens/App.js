import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Grid from 'material-ui/Grid';

import Backlog from '../components/Backlog';
import Column from '../components/Column';

import { MockData } from '../mocks'


const App = () => (
  <div className="root">
    <AppBar position="static" color="default">
      <Toolbar disableGutters>
        <IconButton className="menuButton" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" className="flex">
          skrambun
        </Typography>
      </Toolbar>
    </AppBar>

    <Backlog backlog={MockData.backlog}/>

    <Grid container justify="space-around" align="stretch" direction="row" spacing={Number(8)}>
      {MockData.columns.map(column => (
        <Column key={column.id} column={column}/>
      ))}
    </Grid>
  </div>
);

export default App;
