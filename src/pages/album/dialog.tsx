import React, { useReducer } from 'react';
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
import { useUsersData } from '../../hooks'

type Props = {
  openDialog: boolean;
  setOpenDialog: Function;
  stateLocation: Record<string, any>,
  photoId: string;
}

const useStyles = makeStyles(styles);

const CommentsDialog: React.FC<Props> = (props) => {
  const classes = useStyles()
  const { stateLocation, photoId } = props
  const [, , setCommentsValue] = useUsersData()

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      comment: "",
    }
  );

  const handleClose = () => {
    props.setOpenDialog(false);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setCommentsValue({
      input: formInput?.comment,
      stateLocation,
      photoId
    })
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
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
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-multiline-static"
              label="Add your comment here"
              multiline
              rows={4}
              name="comment"
              defaultValue={formInput.comment}
              variant="outlined"
              className={classes.commentInput}
              onChange={handleInput}
            />
            <Button type="submit" variant="contained" color="primary" className={classes.btnSubmit}>Submit</Button>
          </form>
        </AppBar>
      </Container>
    </Dialog>
  );
}

export default CommentsDialog