import axios from 'axios'
import jsonBigInt from 'json-bigint'
import { JIVEMED_URL } from '../constants/links'

export const JivemedRef = axios.create({
  baseURL: JIVEMED_URL,
})

export const axiosGet = async (endpoint, headers) => {
  return JivemedRef.get(endpoint, {
    transformResponse: (response) => jsonBigInt.parse(response),
    headers,
  })
    .then((response) => response)
    .catch((error) => error)
}

export const axiosPost = async (endpoint, body, headers) => {
  return JivemedRef.post(endpoint, body, {
    headers,
  })
    .then((response) => response)
    .catch((error) => error)
}

export const axiosPut = async (endpoint, body, headers) => {
  return JivemedRef.put(endpoint, body, {
    headers,
  })
    .then((response) => response)
    .catch((error) => error)
}

export const axiosDelete = async (endpoint, headers) => {
  return JivemedRef.delete(endpoint, {
    headers,
  })
    .then((response) => response)
    .catch((error) => error)
}
