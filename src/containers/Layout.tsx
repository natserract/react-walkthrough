import { makeStyles } from '@material-ui/core';
import React from 'react';
import Header from './Header';
import Footer from './Footer'
import styles from './Layout.styles'
const useStyles = makeStyles(styles);

const Layout: React.FC = (props) => {
  const classes = useStyles()
  
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
