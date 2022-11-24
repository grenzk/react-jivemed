import { accessTokenCookie } from '../constants/cookies'
import { getCookie } from './cookie'
import { axiosGet } from './axios'
import { SH0W_CURRENT_USER_ENDPOINT } from '../constants/endpoints'

export const isLoggedIn = () => {
  const accessToken = getCookie(accessTokenCookie)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    Authorization: accessToken,
  }

  if (accessToken === '') {
    return false
  } else {
    return axiosGet(SH0W_CURRENT_USER_ENDPOINT, headers).then((response) => (response.status === 200 ? true : false))
  }
}
