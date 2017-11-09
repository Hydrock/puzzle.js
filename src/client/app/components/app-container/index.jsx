import React, { Component } from 'react';
import PropTypes from 'prop-types';
// materuia ui
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

//
import axios from 'axios';

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
  },
  box: {
    background: 'white',
    border: '2px solid black'
  },
  box2: {
    background: 'white',
    border: '1px solid red'
  }
};

/*

*/

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: {}
    }
  } 

  clickFunc = () => { 

    axios({
      method:'post',
      url:'/',
      data: {
        command: 'getComponents',
      }
    })
    .then(res => {
      console.log(res)

      this.setState({components: res.data.components})
    });

  }

  renderComponents = () => {
    if (this.state.components.name) {
      return (
        <div className={this.props.classes.box}>
          {this.state.components.name}
          {this.renderChildrens(this.state.components.children)}
        </div>
      )
    } else {
      return (
        <div className={this.props.classes.box}>nothing</div>
      )
    }
  }

  renderChildrens = (children) => {
    if (children && children.length > 0) {
      return children.map((item, id) => {
        if (item.children && item.children.length > 0) {
          console.log(item.children)
          return (
              <div key={id} className={this.props.classes.box2}>
                <div>{item.name}</div>
                <div>{this.renderChildrens(item.children)}</div>
              </div>
          )
        } else {
          return (
            <div key={id} className={this.props.classes.box2}>
              {item.name}
            </div>
          )
        }
      })
    }
  }
  
  render () {
    return (
      <Grid container className={this.props.classes.gridContainerRoot} spacing={0}>
        <Grid item xs={2} className={this.props.classes.gridItemLeft}>
          sdeafsdgf
        </Grid>
        <Grid item xs={10} className={this.props.classes.gridItemRight}>
          <Button
            className={this.props.classes.button}
            onClick={this.clickFunc}
          >
            <div>
              sdfsdfsdg
            </div>
          </Button>
          { /* {this.renderComponents()} */ }
        </Grid>
      </Grid> 
    )
  }
  
}

export default withStyles(styles)(AppContainer);