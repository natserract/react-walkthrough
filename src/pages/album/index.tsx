import React, { useCallback, useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router'
import { getAll, get } from '../../api/API'
import { useToastData, useUsersData } from '../../hooks'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from './styles'
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentsDialog from './dialog'
import { UsersState } from '../../store/State';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(styles);

const Album: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const { state } = useLocation()
  const [, setToastData] = useToastData()
  const [usersData, setUsersData] = useUsersData()

  const [dataAlbum, setDataAlbum] = useState({})
  const [dataPhotos, setDataPhotos] = useState<any[]>([])
  const [openDialog, setOpenDialog] = useState(false);

  const fetchAlbum = useCallback(() => {
    const { albumId } = state

    // Using the query in the url it takes less to load up because it doesn't have to load up all the items
    const reqAlbums = get(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
    const reqPhotos = get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)

    getAll([reqAlbums, reqPhotos])
      .then((data) => {
        const album = data[0]
        const photos = data[1]

        setDataAlbum(album)
        setDataPhotos(photos)
      })
      .catch((error) => {
        setToastData({ error: `Error: ${error.what}`, show: true })
      })
  }, [state, setToastData])

  useEffect(fetchAlbum, [])

  useEffect(() => console.log('data albums', dataAlbum, dataPhotos), [dataAlbum, dataPhotos])

  const handleClickComments = useCallback(() => {
    setOpenDialog(true)
  }, [])

  const handleClickFavorite = useCallback((photoId: string) => () => {
    const photos = dataPhotos.find(v => v.id === photoId)
    setUsersData({
      data: photos,
      id: photoId
    })
  }, [dataPhotos, setUsersData])

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container direction="column" className={classes.gridTitle}>
        <Typography variant="overline">Album</Typography>
        <Typography variant="h3" component="h2">
          Quidem Molestiae Enim
        </Typography>
      </Grid>

      <div>
        <ImageList gap={10}>
          {dataPhotos.map((photo, index) => (
            <ImageListItem key={index}>
              <img src={photo.url} alt={photo?.title} />

              <ImageListItemBar
                title={photo?.title}
                position='bottom'
                actionIcon={
                  <>
                    <Button color='inherit' className={classes.btnComment} onClick={handleClickComments}>
                      Comments
                    </Button>
                    <IconButton
                      aria-label={`star ${photo?.title}`}
                      className={classes.icon}
                      onClick={handleClickFavorite(photo?.id)}
                    >
                      {!!usersData.favorites.find(v => v.id === photo?.id) ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
                    </IconButton>
                  </>
                }
                className={classes.titleBar}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <CommentsDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </Container>
  )
}

export default Album