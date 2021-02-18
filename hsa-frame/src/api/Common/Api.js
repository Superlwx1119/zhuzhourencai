import {
  hsaIps, // 门户
  hsaMbaIns, // 参保征缴服务
  hsaMbaMdt, // 医疗待遇服务
  hsaIts // 文件上传
} from '@/api/severs'
export default {
  // 登录信息
  getCurrentUser: hsaIps + '/admin/svc/web/getCurrentUser',
  //  码表查询
  getCodeTableDetailConvergence: hsaMbaMdt + '/web/common/codetable/getCodeTableDetailConvergence',
  // getCodeTableDetailConvergence: hsaHgsCtc + '/web/common/codetable/getCodeTableDetailConvergence',
  //  人员基本信息查询
  queryPsnBasicInfo: hsaMbaIns + '/web/mba/inc/combizmgt/comQuery/queryPsnBasicInfo',
  // 人员拓展信息
  queryPsnInsuInfo: hsaMbaIns + '/web/mba/inc/combizmgt/comQuery/queryPsnInsuInfo',
  // 人员拓展信息
  queryPsnInsuInfoByInsuType: hsaMbaIns + '/web/mba/inc/combizmgt/comQuery/queryPsnInsuInfoByInsuType',

  // 普通文件上传
  efileUpload: hsaIts + '/web/efile/upload',
  // 普通文件删除
  efileDelete: hsaIts + '/web/efile/delete',
  // 普通文件下载
  efileDownload: hsaIts + '/web/efile/download',
  // 普通文件查询
  efileQuery: hsaIts + '/web/efile/query',
  // 图片文件查询
  efileImageQuery: hsaIts + '/web/efile/image',
  // Excel文件上传
  fileUpload: hsaIts + '/web/file/upload',
  // Excel文件删除
  fileDelete: hsaIts + '/web/file/del',
  // Excel文件下载
  fileDownload: hsaIts + '/web/file/download'
}
