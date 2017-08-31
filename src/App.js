import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';


const columns = [
  {
    id: 1,
    name: 'ToDo',
  }, {
    id: 2,
    name: 'In Progress',
  }, {
    id: 3,
    name: 'Done',
  },
];

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  tileChild: {
    width: 50,
    height: 50,
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const App = () => (
  <MuiThemeProvider>
    <div>
      <h1>skrambun</h1>
      <div style={styles.root}>
        <GridList style={styles.gridList} cellHeight={100} cols={columns.length}>
          {columns.map(column => (
            <GridTile key={column.id} title={column.name}>
              <div style={styles.tileChild}></div>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
