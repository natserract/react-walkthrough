import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { get, getAll } from '../../api/API'
import { useToastData } from '../../hooks'
import styles from './styles'
import { makeStyles } from '@material-ui/core';
import { removeWhiteSpace } from '../../utils/helper'

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles);

const User: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const { state } = useLocation()
  const [, setToastData] = useToastData()

  const [dataUser, setDataUser] = useState<Record<string, any>>()
  const [dataAlbums, setDataAlbums] = useState<any[]>([])

  const fetchAlbum = useCallback(() => {
    const { userId } = state

    const reqUsers = get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const reqAlbums = get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)

    getAll([reqUsers, reqAlbums])
      .then((data) => {
        const user = data[0]
        const albums = data[1]

        setDataUser(user)
        setDataAlbums(albums)
      })
      .catch((error) => {
        setToastData({ error: `Error: ${error.what}`, show: true })
      })
  }, [state, setToastData])

  useEffect(fetchAlbum, [])

  useEffect(() => {
    console.log('dataAlbums', dataAlbums)
  }, [dataAlbums])

  const handleRouteChange = (to: string, state = {}) => {
    history.push(to, { ...state })
  }

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid justifyContent="space-between" direction="row" container className={classes.profile}>
        <Grid item>
          <div className={classes.spacingHorizontal}>
            <Typography variant="overline" gutterBottom>User Profile</Typography>
            <Typography variant="h4" component="h3">{dataUser?.name}</Typography>
          </div>

          <List>
            <ListItem>
              <ListItemText primary="Email" secondary={`${dataUser?.email}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Phone" secondary={`${dataUser?.phone}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Company Name" secondary={`${dataUser?.company?.name}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Address" secondary={`${dataUser?.address?.street}, ${dataUser?.address?.city}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Zip Code" secondary={`${dataUser?.address?.zipcode}`} />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Grid container>
        <Grid container direction="column" alignItems="flex-start">
          <div className={classes.spacingHorizontal}>
            <Typography variant="overline" gutterBottom>Collections</Typography>
            <Typography variant="h4" gutterBottom component="h3">
              Albums
            </Typography>
          </div>
        </Grid>

        <Grid container spacing={2} alignItems="stretch" className={classes.spacingHorizontal}>
          {dataAlbums.map(({ userId, id: albumId, title }, index) => (
            <Grid item xs={12} key={`list-${albumId}-${index}`}>
              <div className={classes.card}>
                <div
                  onClick={() => handleRouteChange(`/${dataUser?.username}/album/${removeWhiteSpace(title)}`, { albumId, userId })}
                  className={classes.cardInner}>
                  <Typography variant="h4" component="h3" className={classes.title} >
                    {title}
                  </Typography>
                  <Typography className={classes.featureList}>
                    Discover Tokyo like you never have before.
                    </Typography>
                </div>
                <IconButton onClick={() => handleRouteChange(`/${dataUser?.username}/album/${removeWhiteSpace(title)}`, { albumId, userId })} className={classes.wishlist} color="inherit" aria-label="upload picture" component="span">
                  <FavoriteBorderIcon fontSize="large" />
                </IconButton>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default User