import {
  Theme,
  createStyles
} from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  loading: {
    fontSize: '5rem',
    height: '5rem',
    lineHeight: '3rem',
  },
  containerPage: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})