//  查询模块
import Layout from '@/layout'
export default {
  path: '/query-list-manage',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: {
    title: '报表查询模块',
    icon: 'example'
  },
  children: [
    {
      path: 'outpatient-service-point-num',
      component: () => import('@/views/queryListManage/outpatientServicePointNum'),
      name: 'outpatientServicePointNum',
      meta: { title: '普通门诊选点、改点及转诊业务汇总查询', icon: 'spot' }
    },
    {
      path: 'number-designated-clinics',
      component: () => import('@/views/queryListManage/numberDesignatedClinics'),
      name: 'numberDesignatedClinics',
      meta: { title: '门诊定点人数查询', icon: 'spot' }
    },
    {
      path: 'general-clinic-selection-total-check',
      component: () => import('@/views/queryListManage/generalClinicSelectionTotalCheck'),
      name: 'numberDesignatedClinics',
      meta: { title: '门诊定点人数汇总查询', icon: 'spot' }
    },
    {
      path: 'gype-of-medical-card-query',
      component: () => import('@/views/queryListManage/gypeOfMedicalCardQuery'),
      name: 'gypeOfMedicalCardQuery',
      meta: { title: '就医刷卡类别查询统计', icon: 'spot' }
    }
  ]
}
