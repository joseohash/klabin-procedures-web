import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FaTools } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      display: 'flex',
      width: drawerWidth,
      background: '#2c2932',
      color: '#fff',
    },

    // necessary for content to be below app bar
  }),
);

const PermanentDrawerLeft: React.FC = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <FaTools color="#fff" />
          </ListItemIcon>
          <ListItemText primary="Subáreas" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default PermanentDrawerLeft;
