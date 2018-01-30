import axios from 'axios'
export function getRC () {
  const url = window.location.href.substr(0, 21) + '/api/richeng'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getJiaBin () {
  const url = window.location.href.substr(0, 21) + '/api/jiabin'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function Shijuan () {
  const url = window.location.href.substr(0, 21) + '/api/shijuan'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getDown () {
  const url = window.location.href.substr(0, 21) + '/api/down'

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
