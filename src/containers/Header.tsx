import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles, Tooltip } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header: React.FC = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <b>Projects</b>
        </Typography>

        <div>
          <Tooltip title="Favorite">
            <Button
              onClick={handleMenu}
              color="inherit"
            >
              <FavoriteBorderIcon /> 
              <span style={{ paddingLeft: 5 }}>Favorite</span>
            </Button>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
