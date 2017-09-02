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

const App = () => (
  <MuiThemeProvider>
    <div>

      <h1>skrambun</h1>
      <div>Backlog</div>
      <div>
        <GridList cellHeight={100} cols={columns.length}>
          {columns.map(column => (
            <GridTile key={column.id} title={column.name}>
              <div></div>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
