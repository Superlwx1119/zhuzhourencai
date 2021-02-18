import request from '@/utils/request'
// import request from '@/utils/request'
import api from './api.js'

export function listPsnFixDetlInfo(params) {
  return request({
    url: api.listPsnFixDetlInfo,
    method: 'post',
    data: params
  })
}

export function listPsnFixPeopleInfo(params) {
  return request({
    url: api.listPsnFixPeopleInfo,
    method: 'post',
    data: params
  })
}

