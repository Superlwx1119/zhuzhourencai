import {
  hsaMbaMdt // 医疗待遇服务
} from '@/api/severs'
// 文件上传通用接口
import request from '@/utils/request'
import fileRequest from '@/utils/fileRequest'
import api from './Api'

/**
 * 码表
 * @param query
 */
export function getCodeTableDetailConvergence(query) {
  return request({
    url: hsaMbaMdt + '/web/common/codetable/getCodeTableDetailConvergence',
    method: 'post',
    data: query
  })
}

/**
 * 普通文件上传
 * @param query
 */
export function efileUpload(query) {
  return fileRequest({
    url: api.efileUpload,
    method: 'post',
    data: query
  })
}

/**
 * Excel文件删除
 * @param query
 */
export function efileDelete(query) {
  return fileRequest({
    url: api.efileDelete,
    method: 'get',
    params: query
  })
}

/**
 * 普通文件下载
 * @param query
 */
export function efileDownload(query) {
  return fileRequest({
    url: api.efileDownload,
    method: 'get',
    params: query
  })
}

/**
 * Excel文件上传
 * @param query
 */
export function fileUpload(query) {
  return fileRequest({
    url: api.fileUpload,
    method: 'post',
    data: query
  })
}

/**
 * Excel文件删除
 * @param query
 */
export function fileDelete(query) {
  return fileRequest({
    url: api.fileDelete,
    method: 'post',
    data: query
  })
}

/**
 * Excel文件下载
 * @param query
 */
export function fileDownload(query) {
  return fileRequest({
    url: api.fileDownload,
    method: 'post',
    data: query
  })
}

/**
 * Excel文件导入
 * @param query
 */
export function importExcel(query) {
  return fileRequest({
    url: api.importExcel,
    method: 'post',
    data: query
  })
}

/**
 * Excel文件导入 ctc服务(目录那块)
 * @param query
 */
export function importExcel_ctc(query) {
  return fileRequest({
    url: api.importExcel_ctc,
    method: 'post',
    data: query
  })
}

