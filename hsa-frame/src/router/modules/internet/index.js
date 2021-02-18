//  互联网端
import Layout from '@/layout'
export default {
  path: '/internet',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: {
    title: '互联网端',
    icon: 'example'
  },
  children: [
    {
      path: 'homeSubsidiesApply',
      component: () => import('@/views/internet/homeSubsidiesApply/index'),
      name: 'HomeSubsidiesApply',
      meta: { title: '人才分类认定及安家补贴申报', icon: 'spot' }
    }
  ]
}
