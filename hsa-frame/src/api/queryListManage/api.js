import {
  hsaCtaIhs // 医疗待遇服务
} from '@/api/severs'

export default {
  // 门诊定点人数查询
  listPsnFixDetlInfo: hsaCtaIhs + '/web/ihs/mdt/psntrtdclamgt/psnfix/listPsnFixDetlInfo',

  // 门诊定点人数汇总查询
  listPsnFixPeopleInfo: hsaCtaIhs + '/web/ihs/mdt/psntrtdclamgt/psnfix/listPsnFixPeopleInfo'
}
