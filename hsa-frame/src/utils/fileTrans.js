import {
  hsaMbaMdt // 医疗待遇服务
} from '@/api/severs'
// 上传接口
export const UPLOAD_API = (process.env.NODE_ENV === 'production' ? '' : 'dev-api') + hsaMbaMdt + '/web/file/importExcel'

// 上传类型
export const UPLOAD_EXCEL_TYPE = '.xls,.xlsx'

// 导出.xlsx文件 对应MIMEType类型
export const XLSX_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

// 导出.xls文件 对应MIMEType类型
export const XLS_TYPE = 'application/vnd.ms-excel'

// 导盘模板
export const SP_FEE_CRTF_TMPL = 'SP_FEE_CRTF_TMPL' // 制作特殊费用核定表模板下载

// 制作特殊费用核定表上传入参
export const SP_FEE_CRTF_IMP = {
  type: '4',
  tmplNo: 'SP_FEE_CRTF_IMP',
  serviceName: 'spFeeCrtfService',
  methodName: 'saveSpFeeCrtfImp'
}

export const PAY_HISTORY_AUDIT = {

  'excelHeader': 'psnClctDetlId:应缴流水号,empNo:统一社会信用代码,psnNo:人员编号,insutypeName:险种类型,clctTypeName:核定方式,clctFlagName:到账标志,fincName:款项,poolareaNo:缴费统筹区,clctSumamt:金额,psnClctstd:缴费基数,accrymEnd:对应费款所属期,cashym:费款所属期,clctTime:到账日期,chgOprt:修改标识',

  'tempId': '',

  'serviceName': 'paymentHisReviseService',

  'methodName': 'exportPersonPay',

  'bizParams': {},

  'title': '单位人员缴费明细表',

  'fileName': '单位人员缴费明细表',

  'datePattern': 'yyyy-MM-dd'

}
export const PAY_HISTORY_TEM_DOWN = {
  'excelHeader': 'psnClctDetlId:应缴流水号,empNo:统一社会信用代码,psnNo:人员编号,insutypeName:险种类型,clctTypeName:核定方式,clctFlagName:到账标志,fincName:款项,poolareaNo:缴费统筹区,clctSumamt:金额,psnClctstd:缴费基数,accrymEnd:对应费款所属期,cashym:费款所属期,clctTime:到账日期,chgOprt:修改标识',
  'tempNo': '',
  'serviceName': '',
  'methodName': '',
  'bizParams': {},
  'title': '单位人员缴费明细表',
  'fileName': '单位人员缴费修订导盘模板',
  'datePattern': 'yyyy-MM-dd'
}

export const SALARY_APPLY_FAIL_DOWN = {
  'excelHeader': '',
  'tmplNo': 'psn_wag_dcla_fail_data_export_temple',
  'serviceName': 'psnWagDclaServiceImpl',
  'methodName': 'listFailDataExport',
  'bizParams': { 'wagDclaUpldEid': 'sfd' },
  'title': 'Sheet1',
  'fileName': '工资申报校验失败明细模板',
  'datePattern': 'yyyy-MM-dd HH:mm:ss'
}
