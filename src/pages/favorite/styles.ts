import {
  Theme,
  createStyles
} from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(7, 4),
  },
  rootEmptyItems: {
    padding: theme.spacing(7, 4),
    height: 450,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spacingHorizontal: {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: '5px',
    textAlign: 'left',
    background: 'none',
    position: 'relative',
    boxShadow: 'none'
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: '6px 16px 16px',
    textTransform: 'capitalize',
    display: 'block',
    width: '489px',
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
    padding: '11% 0px 20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '100%',
    textDecoration: 'none',
    cursor: 'pointer',

    "& p": {
      paddingTop: '0px'
    },
  },
  gridItem: {
    backgroundSize: 'cover !important',
    borderRadius: '10px',
    margin: '20px 0'
  },
  overline: {
    padding: theme.spacing(0, 2),
  },
  gridTitle: {
    paddingBottom: 25
  },
})