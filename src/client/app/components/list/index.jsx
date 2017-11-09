import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import FolderIcon from 'material-ui-icons/Folder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  item: {
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: 'gray'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class ComponentsList extends Component {

  renderComponents = () => {
    const { classes } = this.props;

    const data = this.props.componentsList;

    if (data.name) {
      return (
        <List className={classes.root}>
          <Collapse in={true} transitionDuration="auto" unmountOnExit>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText inset primary={data.name} />
            </ListItem>
            {this.renderChildrens(data.children)}
          </Collapse>
        </List>
      )
    } else {
      return (
        <div>nothing</div>
      )
    }
  }

  renderChildrens = (children) => {
    const { classes } = this.props;

    if (children && children.length > 0) {
      return children.map((item, id) => {
        if (item.children && item.children.length > 0) {
          return (
              <Collapse in={true} transitionDuration="auto" unmountOnExit key={id}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <FolderIcon/>
                  </ListItemIcon>
                  <ListItemText inset primary={item.name} />
                </ListItem>
                {this.renderChildrens(item.children)}
              </Collapse>
          )
        } else {
          return (
            <ListItem button className={classes.item} key={id}>
              <ListItemText inset primary={item.name} />
            </ListItem>
          )
        }
      })
    }
  }

  render () {
    return (
      <div>
        {this.renderComponents()}
      </div>
    )
  }
}

export default withStyles(styles)(ComponentsList);