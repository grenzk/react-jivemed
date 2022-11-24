import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  SIGN_IN_LINK,
  SIGN_UP_LINK,
  CLIENT_DASHBOARD_LINK,
} from '../constants/links'
import { accessTokenCookie } from '../constants/cookies'
import { isLoggedIn } from '../utilities/isLoggedIn'
import { getCookie } from '../utilities/cookie'

const useRedirect = () => {
  const navigate = useNavigate()
  const accessToken = getCookie(accessTokenCookie)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    Authorization: accessToken,
  }
  const urlPath = `/${window.location.pathname.split('/')[1]}`

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(CLIENT_DASHBOARD_LINK)
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
