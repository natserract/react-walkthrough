import React, { useCallback, useEffect, useState } from 'react'
import { useToastData } from '../../hooks'
import { get, getAll } from '../../api/API'
import { findsBy, removeWhiteSpace } from '../../utils/helper'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import styles from './styles'
import { useHistory } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FullscreenLoading from '../../components/loading';

type FieldState = {
  albums: any[],
  users: any[]
}

const useStyles = makeStyles(styles);

const Home: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [, setToastData] = useToastData()

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<FieldState>()

  const fetchData = useCallback(() => {
    const reqAlbums = get('https://jsonplaceholder.typicode.com/albums')
    const reqUsers = get('https://jsonplaceholder.typicode.com/users')

    getAll([reqAlbums, reqUsers])
      .then((data) => {
        const usersData = data[1]
        const albumsData = findsBy(data[0], usersData, ['userId'])

        setData({
          albums: albumsData!!,
          users: usersData
        })
        setLoading(false)
      })
      .catch((error) => {
        setToastData({ error: `Error: ${error.what}`, show: true })
        setLoading(true)
      })
  }, [setToastData])

  useEffect(fetchData, []);

  const handleRouteChange = (to: string, state = {}) => {
    history.push(to, { ...state })
  }

  useEffect(() => {
    console.log('data', data)
  }, [data])

  if (loading) return <FullscreenLoading />

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
        {data?.users.map(({ id, name, username }) => {
          const userName = username.toLowerCase()
          const albums = data?.albums.filter(v => v.userId === id)

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
      </Grid>
    </Container>
  )
}

export default Home