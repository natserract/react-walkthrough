import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { get, getAll } from '../../api/API'
import { useToastData } from '../../hooks'
import styles from './styles'
import { makeStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles(styles);

const User: React.FC = () => {
  const classes = useStyles()
  const { state } = useLocation()
  const [toastData, setToastData] = useToastData()

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
    console.log('dataUser', dataUser)
  }, [dataUser])

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid justifyContent="space-between" direction="row" container spacing={2} className={classes.profile}>
        <Grid item md={3}>
          <Avatar className={classes.avatar}> </Avatar>
        </Grid>
        <Grid item md={9}>
          <Typography variant="h4" component="h3">{dataUser?.name}</Typography>
          <Typography variant="subtitle2">
            Desc
          </Typography>
        </Grid>
      </Grid>

      <Grid container direction="column" alignItems="center">
        <Typography variant="h4" component="h4" align="center">Collection Albums</Typography>
      </Grid>
    </Container>
  )
}

export default User