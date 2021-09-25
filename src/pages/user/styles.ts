import {
  Theme,
  createStyles
} from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(12, 4),
  },
  avatar: {
    width: '300px',
    height: '300px'
  },
  profile: {
    paddingBottom: 120
  }
})