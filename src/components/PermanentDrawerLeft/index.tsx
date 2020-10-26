import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FaTools, FaUser } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      display: 'flex',
      width: drawerWidth,
      background: '#2c2932',
      color: '#fff',
    },
  }),
);

const PermanentDrawerLeft: React.FC = () => {
  const classes = useStyles();

  return (
    <Drawer
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

        <ListItem button component={Link} to="/register-operator">
          <ListItemIcon>
            <FaUser color="#fff" />
          </ListItemIcon>
          <ListItemText primary="Cadastrar operador" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default PermanentDrawerLeft;
