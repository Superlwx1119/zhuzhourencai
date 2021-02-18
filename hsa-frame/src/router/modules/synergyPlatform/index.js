//  协同平台
import Layout from '@/layout'
export default {
  path: '/synergyPlatform',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: {
    title: '协同平台',
    icon: 'example'
  },
  children: [
    {
      path: 'talentClassify',
      component: () => import('@/views/synergyPlatform/talentClassify'),
      name: 'talentClassify',
      meta: { title: '人才分类认定', icon: 'spot' }
    },
    {
      path: 'evaluationOfMunicipalLeadingTalents',
      component: () => import('@/views/synergyPlatform/evaluationOfMunicipalLeadingTalents'),
      name: 'evaluationOfMunicipalLeadingTalents',
      meta: { title: '市领军人才评审', icon: 'folder' },
      children: [
        {
          path: 'enterpriseInnovationTeam',
          component: () => import('@/views/synergyPlatform/evaluationOfMunicipalLeadingTalents/enterpriseInnovationTeam'),
          name: 'enterpriseInnovationTeam',
          meta: { title: '企业创新团队', icon: 'spot' }
        }
      ]
    }
  ]
}
