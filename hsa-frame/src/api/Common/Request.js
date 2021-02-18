/*
  公共Api
 */
import request from '@/utils/request'
import downRequest from '@/utils/fileReq'
import api from './Api.js'

/**
 * 查询码表数据
 * @param query
 */
export function getCodeTableDetailConvergence(query) {
  return request({
    url: api.getCodeTableDetailConvergence,
    method: 'post',
    data: query
  })
}

/**
 * 人员基本信息查询
 * @param data
 */
export function queryPsnBasicInfo(data) {
  return request({
    url: api.queryPsnBasicInfo,
    method: 'POST',
    data
  })
}

/**
 * 人员拓展信息
 * @param data
 */
export function queryPsnInsuInfo(data) {
  return request({
    url: api.queryPsnInsuInfo,
    method: 'POST',
    data
  })
}

/**
 * 人员拓展信息
 * @param data
 */
export function queryPsnInsuInfoByInsutype(data) {
  return request({
    url: api.queryPsnInsuInfoByInsuType,
    method: 'POST',
    data
  })
}
/**
 * 银行信息
 * @param data
 */
export function queryBankBasInfo(data) {
  return request({
    url: api.queryBankBasInfo,
    method: 'POST',
    data
  })
}

/**
 * 省市区
 * @param data
 */
export function queryAdmdvsTree(data) {
  return request({
    url: api.queryAdmdvsTree,
    method: 'POST',
    data
  })
}

/**
 * 乡镇街道
 * @param data
 */
export function queryGrstAdmdvsTree(data) {
  return request({
    url: api.queryGrstAdmdvsTree,
    method: 'POST',
    data
  })
}

/**
 * 单位基本信息查询
 * @param data
 */
export function queryEmpBasicInfo(data) {
  return request({
    url: api.queryEmpBasicInfo,
    method: 'POST',
    data
  })
}

/**
 * 单位基本信息查询
 * @param data
 */
export function queryAdmdvs(data) {
  return request({
    url: api.queryAdmdvs,
    method: 'POST',
    data
  })
}

/**
 * 科室维护
 * @param data
 */
export function listDepartment(data) {
  return request({
    url: api.listDepartment,
    method: 'POST',
    data
  })
}

/**
 * 医疗机构查询
 * @param query
 */
export function listMedinsComt(query) {
  return request({
    url: api.listMedinsComt,
    method: 'post',
    data: query
  })
}

/**
 * 医疗机构查询
 * @param query
 */
export function listDoctorByCode(query) {
  return request({
    url: api.listDoctorByCode,
    method: 'post',
    data: query
  })
}

/**
 * 长护机构
 * @param query
 */
export function listLtcInstInfo(query) {
  return request({
    url: api.listLtcInstInfo,
    method: 'post',
    data: query
  })
}
/**
 * 长护机构人员
 * @param query
 */
export function listPersonnelInfo(query) {
  return request({
    url: api.listPersonnelInfo,
    method: 'post',
    data: query
  })
}
/**
 * 医保目录
 * @param query
 */
export function listHilist(query) {
  return request({
    url: api.listHilist,
    method: 'post',
    data: query
  })
}
/**
 * 医疗目录
 * @param query
 */
export function queryMedlist(query) {
  return request({
    url: api.queryMedlist,
    method: 'post',
    data: query
  })
}
/**
 * 获取政策参数值
 * @param query
 */
export function getPolParam(params) {
  return request({
    url: api.getPolParam,
    method: 'post',
    data: params
  })
}
/**
 * 疾病诊断(弃用)
 * @param query
 */
export function listDiseases(query) {
  return request({
    url: api.listDiseases,
    method: 'post',
    data: query
  })
}

/**
 * 疾病名称(根据门慢门特筛选数据)
 * @param query
 */
export function listDiseasesByOpspDiseCode(query) {
  return request({
    url: api.listDiseasesByOpspDiseCode,
    method: 'post',
    data: query
  })
}
/**
 * 查询疾病诊断目录列表
 * @param params
 */
export function diagList(params) {
  return request({
    url: api.diagList,
    method: 'get',
    params
  })
}

/**
 * 调用服务接口查询医联体信息
 * @param query
 */
export function listFixmedinsRelaDetailInfoMta(query) {
  return request({
    url: api.listFixmedinsRelaDetailInfoMta,
    method: 'post',
    data: query
  })
}

/**
 * 新医联体
 * @param query
 */
export function listFixmedinsRelaInfoByYlt(query) {
  return request({
    url: api.listFixmedinsRelaInfoByYlt,
    method: 'post',
    data: query
  })
}

/**
 * 人员编号住院信息查询
 * @param query
 */
export function listMdcBizIfo(query) {
  return request({
    url: api.listMdcBizIfo,
    method: 'post',
    data: query
  })
}

/**
 * 药品通用名
 * @param query
 */
export function queryDrugList(query) {
  return request({
    url: api.queryDrugList,
    method: 'post',
    data: query
  })
}
/**
 * 异地药品通用名
 * @param query
 */
export function listOutDruggennameInfo(query) {
  return request({
    url: api.listOutDruggennameInfo,
    method: 'post',
    data: query
  })
}

/**
 * 工作流审核状态
 * @param query
 */
export function listFlowNodeVar(query) {
  return request({
    url: api.listFlowNodeVar,
    method: 'post',
    data: query
  })
}

/**
 * 医生团体
 * @param query
 */
export function listFamilyDoctorSign(query) {
  return request({
    url: api.listFamilyDoctorSign,
    method: 'post',
    data: query
  })
}

/**
 * 获取人员基金冻结信息
 * @param query
 */
export function getPsnFundFrozenInfo(query) {
  return request({
    url: api.getPsnFundFrozenInfo,
    method: 'post',
    data: query
  })
}

/**
 * 获取人员基金冻结信息
 * @param query
 */
export function queryFundStatus(query) {
  return request({
    url: api.queryFundStatus,
    method: 'post',
    data: query
  })
}

/**
 * 读卡服务
 * @param query
 */
export function getSysParamValueBcl(query) {
  return request({
    url: api.getSysParamValueBcl,
    method: 'post',
    data: query
  })
}

/**
 * 查询累计信息
 * @param query
 */
export function getCumulativeInfo(query) {
  return request({
    url: api.getCumulativeInfo,
    method: 'post',
    data: query
  })
}
/**
 * 单病种手术治疗方式
 * @param query
 */
export function queryDiseSetl(query) {
  return request({
    url: api.queryDiseSetl,
    method: 'post',
    data: query
  })
}

/**
 * 日间手术治疗方式
 * @param query
 */
export function queryDaysrgTrtList(query) {
  return request({
    url: api.queryDaysrgTrtList,
    method: 'post',
    data: query
  })
}

/**
 * 模板下载
 * @param query
 */
export function download(query) {
  return downRequest({
    url: api.download,
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}

/**
 * 导出
 * @param query
 */
export function exportExcel(query) {
  return downRequest({
    url: api.exportExcel,
    method: 'post',
    params: query,
    responseType: 'blob'
  })
}
/**
 * 导出组件可配置url
 * @param query
 */
export function exportExcelUrl(query, url) {
  return downRequest({
    url: '/' + url + api.exportExcelUrl,
    method: 'post',
    params: query,
    responseType: 'blob'
  })
}

/**
 * Excel文件导出 ctc服务(目录那块)
 * @param query
 */

export function exportExcel_ctc(query) {
  return downRequest({
    url: api.exportExcel_ctc,
    method: 'post',
    params: query,
    responseType: 'blob'
  })
}

/**
 * Excel文件导出 ihs服务(个人待遇申报)
 * @param query
 */

export function exportExcel_ihs(query) {
  return downRequest({
    url: api.exportExcel_ihs,
    method: 'post',
    params: query,
    responseType: 'blob'
  })
}

/**
 * 获取审核节点信息
 * @param data
 */
export function getCrtFlowInfo(data) {
  return request({
    url: api.getCrtFlowInfo,
    method: 'POST',
    data
  })
}

/**
 * 病种名称
 * @param data
 */
export function listMedtrttypeRslt(data) {
  return request({
    url: api.listMedtrttypeRslt,
    method: 'POST',
    data
  })
}

/**
 * 门户登录信息
 * @param data
 */
export function getCurrentUser() {
  return request({
    url: api.getCurrentUser,
    method: 'GET'
  })
}

/**
 * 门特根据病种查询疾病，只有一大类，二大类目录疾病
 * @param data
 */
export function listOpspDiseDiag(data) {
  return request({
    url: api.listOpspDiseDiag,
    method: 'POST',
    data
  })
}
/*
  门慢门特新增关联疾病
*/
export function queryDiagList(data) {
  return request({
    url: api.queryDiagList,
    method: 'POST',
    data
  })
}

/**
 * 病种
 * @param data
 */
export function listOpspDise(data) {
  return request({
    url: api.listOpspDise,
    method: 'POST',
    data
  })
}

/**
 * 根据医疗机构编码查询起医联体
 * @param data
 */
export function getYLTInfoForIHS(data) {
  return request({
    url: api.getYLTInfoForIHS,
    method: 'POST',
    data
  })
}

/**
 * 根据医联体查询医联体成员
 * @param data
 */
export function listYLTMerberInfo(data) {
  return request({
    url: api.listYLTMerberInfo,
    method: 'POST',
    data
  })
}

/**
 * 省市区代码转中文
 * @param data
 */
export function queryAdmdvsByID(data) {
  return request({
    url: api.queryAdmdvsByID,
    method: 'POST',
    data
  })
}

/**
 * 读取系统参数信息
 * @param data
 */
export function getSysParamValue(data) {
  return request({
    url: api.getSysParamValue,
    method: 'POST',
    data
  })
}
/**
 * 读取电子凭证二维码
 * @param data
 */
export function getQrcode(data) {
  return request({
    url: api.getQrcode,
    method: 'POST',
    data
  })
}

// 前端非购物车页面获取电子档案参数的接口
export function getDzdaParamByAcpId(query) {
  return request({
    url: api.getDzdaParamByAcpId,
    method: 'post',
    data: query
  })
}
/**
 * 获取材料上传（业务文件类型）列表
 */
export function listMatterDzdaMaterials(query) {
  return request({
    url: api.listMatterDzdaMaterials,
    method: 'post',
    data: query
  })
}

/**
 * 前端获取受理号接口
 */
export function getMattAcpSnByMattCode(query) {
  return request({
    url: api.getMattAcpSnByMattCode,
    method: 'post',
    data: query
  })
}

/**
 * 电子档案，新增文件类型接口  电子签章归档前调用
 */
export function openBusiArch(query) {
  return request({
    url: api.openBusiArch,
    method: 'post',
    data: query
  })
}

