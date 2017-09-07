import React from 'react';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import Grid from 'material-ui/Grid';

import Story from './Story';
import './Backlog.css'

class Backlog extends React.Component {

  constructor() {
    super();
    this.state = { expanded: false };
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <div>
        <Button raised className="backlogButton" onClick={this.handleExpandClick}>Backlog</Button>

        <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
          <Grid container direction="row">
            {this.props.backlog.stories.map(story => (
              <Story key={story.id} story={story}/>
            ))}
          </Grid>
        </Collapse>
      </div>
    )
  }
}

export default Backlog;
