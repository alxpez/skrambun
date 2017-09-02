import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import './Story.css'



const Story = ({ story }) => (
  <Grid item xs>
    <Paper className="story">
      <Typography type="title">
        {story.title}
      </Typography>
      <Typography type="subheading">
        {story.description}
      </Typography>
      <Typography type="subheading">
        Assigned: {story.assignedTo}
      </Typography>
    </Paper>
  </Grid>
);

export default Story;


//TODO: change Paper for Card material-ui
