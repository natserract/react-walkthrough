import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Tooltip } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { useUsersData } from '../hooks'
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    paddingTop: 15
  },
}));

const Header: React.FC = (props) => {
  const classes = useStyles();
  const [usersData,] = useUsersData()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isEmpty = (data) => data.length === 0

  useEffect(() => console.log('usersData new', usersData), [usersData])

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Link to="/" className={classes.title}>
          <Typography variant="h3">
            <b>Up.</b>
          </Typography>
        </Link>

        <div>
          <Tooltip title="Favorite">
            <Button
              onClick={handleMenu}
              color="inherit"
              style={{ textTransform: 'capitalize' }}
            >
              <Badge 
                badgeContent={usersData.favorites.length} 
                invisible={isEmpty(usersData.favorites)} 
                color="secondary" 
                variant="dot"
              >
                <FavoriteBorderIcon />
                <Typography
                  variant="subtitle1"
                  component="span"
                  style={{ paddingLeft: 5 }}
                >
                  My Favorite
              </Typography>
              </Badge>
            </Button>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
