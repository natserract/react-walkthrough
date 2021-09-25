
import React from 'react'
import { removeWhiteSpace } from '../../utils/helper'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import styles from './styles'
import { useHistory } from 'react-router-dom';

type FieldState = {
  albums: any[],
  users: any[]
}

type Props = {
  data: FieldState,
}

const useStyles = makeStyles(styles);

const AlbumsGrid: React.FC<Props> = (props) => {
  const classes = useStyles()
  const history = useHistory()

  const handleRouteChange = (to: string, state = {}) => {
    history.push(to, { ...state })
  }

  if (!props.data) return <React.Fragment />

  return (
    <React.Fragment>
      {props.data?.users.map(({ id, name, username }) => {
        const userName = username.toLowerCase()
        const albums = props.data?.albums.filter(v => v.userId === id)

        return albums.map(({ userId, id: albumId, title }, index) => (
          <Grid item xs={12} sm={4} key={`list-${albumId}-${index}`}>
            <div className={classes.card}>
              <Button onClick={() => handleRouteChange(`/user/${userName}`, { userId })} className={classes.btnUser}>
                <Typography component="span">{name}</Typography>
              </Button>

              <div
                onClick={() => handleRouteChange(`/${userName}/album/${removeWhiteSpace(title)}`, { albumId })}
                className={classes.cardInner}>
                <Typography variant="h4" component="h3" className={classes.title} >
                  {title}
                </Typography>
                <Typography className={classes.featureList}>
                  Discover Tokyo like you never have before.
              </Typography>
              </div>
              <IconButton onClick={() => handleRouteChange(`/${userName}/album/${removeWhiteSpace(title)}`, { albumId })} className={classes.wishlist} color="inherit" aria-label="upload picture" component="span">
                <FavoriteBorderIcon fontSize="large" />
              </IconButton>
            </div>
          </Grid>
        ))
      })}
    </React.Fragment>
  )
}

export default AlbumsGrid