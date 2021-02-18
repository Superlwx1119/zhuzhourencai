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
    }
  ]
}
