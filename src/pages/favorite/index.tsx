import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import styles from './styles'
import { useUsersData } from '../../hooks';

const useStyles = makeStyles(styles);

const Favorite = () => {
  const classes = useStyles()
  const [usersData] = useUsersData()

  useEffect(() => {
    console.log('Fac', Object.values(usersData?.favorites))
  }, [usersData])

  if (!Object.values(usersData?.favorites).length) return (
    <Container component="section" maxWidth="lg" className={classes.rootEmptyItems}>
      <Typography variant="h4" component="h3" align="center">
        No Favorite Items Added
      </Typography>
    </Container>
  )

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container direction="column" className={classes.gridTitle}>
        <Typography variant="overline">Collections</Typography>
        <Typography variant="h3" component="h2">
          Favorite
        </Typography>
      </Grid>

      <Grid container spacing={2} alignItems="stretch" className={classes.spacingHorizontal}>
        {Object.values(usersData?.favorites).map(({ title: albumTitle, items }) => {
          return items.map(({ albumId, title: photoTitle, url }, index) => (
            <Grid item xs={12} key={`list-${albumId}-${index}`}
              className={classes.gridItem}
              style={{ background: `url(${url}) no-repeat center` }}
            >
              <div className={classes.card}>
                <div
                  className={classes.cardInner}>
                  <Typography variant="overline" component="span" className={classes.overline}>
                    Album
                  </Typography>
                  <Typography variant="h4" component="h3" className={classes.title} >
                    {albumTitle}
                  </Typography>
                  <Typography className={classes.featureList}>
                    {photoTitle}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))
        })}
      </Grid>
    </Container>
  )
}

export default Favorite