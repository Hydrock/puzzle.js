import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import store from '../../store.js'

// materuia ui
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
//
import ComponentsList from '../../containers/list/index.jsx';
import ComponentView from '../../containers/component-view/index.jsx';
//
import axios from 'axios';

//actions
import { getComponents } from '../../actions';



const styles = {
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
  },
};

/*

*/

class AppContainer extends Component {
  render () {
    return (
      <Provider store={store}>
        <Grid container className={this.props.classes.gridContainerRoot} spacing={0}>
          <Grid item xs={2} className={this.props.classes.gridItemLeft}>
            <ComponentsList/>
          </Grid>
          <Grid item xs={10} className={this.props.classes.gridItemRight}>
            <ComponentView/>
          </Grid>
        </Grid>
      </Provider>
    )
  }
  
}

export default withStyles(styles)(AppContainer);