import React, { useCallback } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useToastData } from '../../hooks'
import { useHistory } from 'react-router-dom'

const Toast = () => {
  const [toastData, setToastData] = useToastData()
  const history = useHistory()

  const resetError = useCallback(() => {
    setToastData({ error: null, show: false })

    history.push('/')
  }, [history, setToastData])

  const renderToast = () => {
    const open = toastData ? toastData.show : false
    const data = toastData ? toastData.error : ''
    return (
      <Snackbar
        open={open}
        onClose={resetError}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={resetError} severity="error">
          {data}
        </Alert>
      </Snackbar>
    )
  }

  return renderToast()
}

export default Toast
