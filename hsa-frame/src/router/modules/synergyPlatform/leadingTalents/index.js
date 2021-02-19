export default {
  path: '/leadingTalents',
  component: () => import('@/views/synergyPlatform/leadingTalents'),
  name: 'leadingTalents',
  meta: { title: '市领军人才评审', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'InnovativeTalents',
      component: () => import('@/views/synergyPlatform/leadingTalents/InnovativeTalents'),
      name: 'InnovativeTalents',
      redirect: 'noRedirect',
      alwaysShow: true,
      meta: { title: '创新类人才', icon: '' },
      children: [
        {
          path: 'declarationDetails',
          component: () => import('@/views/synergyPlatform/leadingTalents/InnovativeTalents/declarationDetails'),
          name: 'declarationDetails',
          meta: { title: '【互联网】申报详情', icon: 'spot' }
        }
      ]
    },
    {
      path: 'entrepreneurialTalents',
      component: () => import('@/views/synergyPlatform/leadingTalents/entrepreneurialTalents'),
      name: 'entrepreneurialTalents',
      redirect: 'noRedirect',
      alwaysShow: true,
      meta: { title: '创业类人才', icon: '' },
      children: [
        {
          path: 'declarationDetails',
          component: () => import('@/views/synergyPlatform/leadingTalents/entrepreneurialTalents/declarationDetails'),
          name: 'declarationDetails',
          meta: { title: '【互联网】申报详情', icon: 'spot' }
        }
      ]
    },
    {
      path: 'controlTalents',
      component: () => import('@/views/synergyPlatform/leadingTalents/controlTalents'),
      name: 'controlTalents',
      redirect: 'noRedirect',
      alwaysShow: true,
      meta: { title: '疫情防控类人才', icon: '' },
      children: [
        {
          path: 'declarationDetails',
          component: () => import('@/views/synergyPlatform/leadingTalents/controlTalents/declarationDetails'),
          name: 'declarationDetails',
          meta: { title: '【互联网】申报详情', icon: 'spot' }
        }
      ]
    }
  ]
}
