import React, { Component } from 'react';
import PropTypes from 'prop-types';

// materuia ui
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';


const styles = {
  container: {
    width: '100%',
    height: '100%',
    background: 'white',
    padding: '20px',
    border: '1px solid black',
    boxSizing: 'borderBox'
  }
};

class ComponentView extends Component {
  render () {
    const { classes } = this.props;

    return (
      <Grid container className={classes.container} spacing={0}>
        <Grid item xs={12}>
        <h1>HTML View</h1>
        <iframe 
          src={this.props.renderComponent.path}
          frameBorder="1">
        </iframe>
        </Grid>
      </Grid>
    )
  }
  
}

export default withStyles(styles)(ComponentView);