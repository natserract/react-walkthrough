import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import styles from './styles'
import Container from '@material-ui/core/Container';

type Props = {
  openDialog: boolean;
  setOpenDialog: Function
}

const useStyles = makeStyles(styles);

const CommentsDialog: React.FC<Props> = (props) => {
  const classes = useStyles()

  const handleClose = () => {
    props.setOpenDialog(false);
  };

  return (
    <Dialog fullScreen open={props.openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
      <AppBar position="fixed">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h5">Comments</Typography>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container className={classes.commentsContainer}>
        <List>
          <Divider />
          <ListItem>
            <ListItemText secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText secondary="Tethys" />
          </ListItem>
          <Divider />
        </List>

        <AppBar position="fixed" color="transparent" className={classes.appBarComment}>
          <TextField
            id="outlined-multiline-static"
            label="Add your comment here"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
            className={classes.commentInput}
          />
          <Button variant="contained" color="primary" className={classes.btnSubmit}>Submit</Button>
        </AppBar>
      </Container>
    </Dialog>
  );
}

export default CommentsDialog