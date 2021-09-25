import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

import styles from './styles'

const useStyles = makeStyles(styles)

const FullscreenLoading = () => {
  const classes = useStyles()

  return (
    <div
      className={classes.containerPage}
    >
      <CircularProgress
        disableShrink
        size={40}
        className={classes.loading}
        color='inherit'
      />
    </div>
  )
}

export default FullscreenLoading
