import {
  Theme,
  createStyles
} from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(12, 4),
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: '5px',
    textAlign: 'left',
    background: '#f7f7f7',
    position: 'relative',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 3px 9px -2px'
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
    textTransform: 'capitalize',
    display: 'block',
    width: '289px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    [`${theme.breakpoints.only('md')} and (orientation: portrait)`]: {
      fontSize: "22px",
      padding: '0px 16px 10px'
    },

    [`${theme.breakpoints.down('sm')}`]: {
      width: '90%',
      whiteSpace: 'normal',
    }
  },
  btnUser: {
    position: 'absolute',
    left: '20px',
    top: '30px',
    textTransform: 'capitalize',
    zIndex: 10,
  },
  featureList: {
    padding: theme.spacing(2),
  },
  cardInner: {
    position: 'relative',
    padding: '65% 0px 20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '100%',
    textDecoration: 'none',
    cursor: 'pointer',

    "& p": {
      paddingTop: '0px'
    },

  },
  wishlist: {
    position: 'absolute',
    right: '15px',
    top: '15px',
    height: '24px',
  }
})