import { getCookie } from '../utilities/cookie'
import { accessTokenCookie } from './cookies'

const accessToken = getCookie(accessTokenCookie)

export const headers = {
  'Access-Control-Allow-Origin': '*',
  Authorization: accessToken,
}
