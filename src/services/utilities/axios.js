import axios from 'axios'
import JSONbig from 'json-bigint'

export const JivemedRef = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  // baseURL: 'https://rails-jivemed.onrender.com/api/v1',
})

export const axiosGet = async (endpoint, headers) => {
  return JivemedRef.get(endpoint, {
    transformResponse: (data) => JSONbig.parse(data),
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
