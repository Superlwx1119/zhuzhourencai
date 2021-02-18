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
    },
    {
      path: 'houseSubsidiesApply',
      component: () => import('@/views/internet/houseSubsidiesApply/index'),
      name: 'HouseSubsidiesApply',
      meta: { title: '人才购房补贴申报', icon: 'spot' }
    },
    {
      path: 'rewardApply',
      component: () => import('@/views/internet/rewardApply/index'),
      name: 'RewardApply',
      meta: { title: '人才贡献奖励申报', icon: 'spot' }
    },
    {
      path: 'childStudyApply',
      component: () => import('@/views/internet/childStudyApply/index'),
      name: 'ChildStudyApply',
      meta: { title: '子女入学申请', icon: 'spot' }
    },
    {
      path: 'spouseWorkAppky',
      component: () => import('@/views/internet/spouseWorkAppky/index'),
      name: 'SpouseWorkAppky',
      meta: { title: '配偶就业申请', icon: 'spot' }
    },
    {
      path: 'apartmentApply',
      component: () => import('@/views/internet/apartmentApply/index'),
      name: 'ApartmentApply',
      meta: { title: '人才公寓入住申请', icon: 'spot' }
    }
  ]
}
