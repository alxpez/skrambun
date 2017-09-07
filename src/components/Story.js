import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FaceIcon from 'material-ui-icons/Face';

import './Story.css'


function handleClick(event) {
  event.preventDefault();
}

const Story = ({ story }) => (
  <Grid item sm>
    <Card>
      <CardContent>
        <Typography type="subheading">
          {story.title}
        </Typography>
        <Typography type="caption">
          {story.description}
        </Typography>
        <Chip
          avatar={
            <Avatar>
              <FaceIcon/>
            </Avatar>
          }
          label={story.assignedTo}
          onClick={handleClick}
        />
      </CardContent>
      {/* <CardActions>
        <Button dense>Learn More</Button>
      </CardActions> */}
    </Card>
  </Grid>
);

export default Story;


//TODO: change Paper for Card material-ui
