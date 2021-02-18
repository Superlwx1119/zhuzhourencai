// 码表接口
import request from '@/utils/request'
import api from './Api.js'
/**
 * 码表
 * @param query
 */
export function getCodeTableDetailConvergence(query) {
  return request({
    url: api.getCodeTableDetailConvergence,
    method: 'post',
    data: query
  })
}
