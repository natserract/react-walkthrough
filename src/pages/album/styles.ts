import {
  Theme,
  createStyles
} from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(7, 4),
  },
  titleBar: {
    background:
      'linear-gradient(to right, rgba(247, 83, 83, 0.55) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    textTransform: 'capitalize',
    
    "& .MuiImageListItemBar-title": {
      maxWidth: '400px'
    }
  },
  icon: {
    color: 'white'
  },
  btnComment: {
    color: 'white'
  },
  gridTitle: {
    paddingBottom: 25
  },
  commentsContainer: {
    paddingTop: 80,
    paddingBottom: 20
  },
  appBarComment: {
    top: 'auto', 
    bottom: 0,
    padding: '26px 20px !important',
    background: '#fff'
  },
  commentInput: {
    width: '100%',
  },
  btnSubmit: {
    maxWidth: 150,
    margin: '10px 0'
  }
})