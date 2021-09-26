import React from 'react';
import Header from './Header';
import Footer from './Footer'
import { makeStyles } from '@material-ui/core';
import styles from './styles'

const useStyles = makeStyles(styles);

const Layout: React.FC = (props) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Header />
      <div className={classes.root}>
         {props.children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
