import React from 'react'
import { AppBar, Toolbar, Typography, Container} from '@material-ui/core';

const Footer = () => {
  return (
    <AppBar position="static" color="transparent" style={{ paddingBottom: 30 }}>
      <Container>
        <Toolbar>
          <Typography variant="h5"color="inherit" align="center" display="block" style={{ width: '100%' }}>
            Thanks for using <b>Up.</b>
        </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer