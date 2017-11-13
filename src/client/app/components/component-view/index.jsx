import React, { Component } from 'react';
import PropTypes from 'prop-types';

// materuia ui
import { withStyles } from 'material-ui/styles';


const styles = {
  container: {
    background: 'white'
  }
};

class ComponentView extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <iframe 
          src={this.props.renderComponent.path}
          frameBorder="1">
        </iframe>
      </div>
    )
  }
  
}

export default withStyles(styles)(ComponentView);