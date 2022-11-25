import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SIGN_IN_LINK, SIGN_UP_LINK, CLIENT_DASHBOARD_LINK } from '../constants/links'
import { isLoggedIn } from '../utilities/isLoggedIn'

const useRedirect = () => {
  const navigate = useNavigate()

  const urlPath = `/${window.location.pathname.split('/')[1]}`

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(-1)
    } else {
      switch (urlPath) {
        case '/':
          navigate('/')
          break
        case SIGN_IN_LINK:
          navigate(SIGN_IN_LINK)
          break
        case SIGN_UP_LINK:
          navigate(SIGN_UP_LINK)
          break
      }
    }
  }, [])
}

export default useRedirect
