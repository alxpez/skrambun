import React from 'react';
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import Story from './Story'
import './Column.css'

const Column = ({ column }) => (
  <Grid item sm>
    <Toolbar>
      <Typography type="title">
        {column.name}
      </Typography>
      <Typography className="info" type="subheading">
        Stories: {column.stories.length}
      </Typography>
    </Toolbar>

    <Grid container direction="column">
      {column.stories.map(story => (
        <Story key={story.id} story={story}/>
      ))}
    </Grid>
  </Grid>
);

export default Column;
