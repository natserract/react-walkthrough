import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles, Tooltip } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none'
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
        <Link to="/" className={classes.title}>
          <Typography variant="h5">
            <b>Projects</b>
          </Typography>
        </Link>

        <div>
          <Tooltip title="Favorite">
            <Button
              onClick={handleMenu}
              color="inherit"
              style={{ textTransform: 'capitalize' }}
            >
              <FavoriteBorderIcon />
              <Typography 
                variant="subtitle1" 
                component="span" 
                style={{ paddingLeft: 5 }}
              >
                 My Favorite
              </Typography>
            </Button>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
