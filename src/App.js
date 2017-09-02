import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AddIcon from 'material-ui-icons/Add'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import { MockData } from './mocks'
import './App.css';


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

    <Button raised className="backlogButton">Backlog</Button>

    <GridList className="gridList" cellHeight={75} cols={MockData.columns.length}>
      {MockData.columns.map(column => (

          <GridListTile key={column.id}>
            <GridListTileBar
              title={column.name}
              subtitle={<span>stories: {column.stories.length}</span>}
              actionIcon={
                <IconButton>
                  <AddIcon color="rgba(255, 255, 255, 0.54)" />
                </IconButton>
              }
            />
          </GridListTile>
      ))}
    </GridList>
  </div>
);

export default App;
