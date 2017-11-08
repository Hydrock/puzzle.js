import React from 'react';
import PropTypes from 'prop-types';
// materuia ui
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
  gridContainerRoot: {
    width: '100%',
    height: '100vh',
    margin: 0,
    background: 'linear-gradient(to right, #2c3e50, #3498db)',
    flexGrow: 1,
  },
  gridItemLeft: {
    background: 'rgba(255,255,255,0.4)'
  },
  gridItemRight: {
    background: 'rgba(0,0,0,0.4)'
  }
};

/*
<Button className={props.classes.button}>
      sdgsdgsdgfsdg
    </Button>
*/

const AppContainer = (props) => (
  <Grid container className={props.classes.gridContainerRoot} spacing={0}>
    <Grid item xs={2} className={props.classes.gridItemLeft}>
      sdeafsdgf
    </Grid>
    <Grid item xs={10} className={props.classes.gridItemRight}>
      sdeafsdgf
    </Grid>
  </Grid>
)

export default withStyles(styles)(AppContainer);