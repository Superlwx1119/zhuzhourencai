//  查询模块
import Layout from '@/layout'
export default [
  {
    path: '/child-admission',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'index',
        component: () => import('@/views/childAdmission/index'),
        meta: {
          title: '子女入学申请',
          icon: 'education'
        }
      }
    ]
  },
  {
    path: '/spouse-employment',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'index',
        component: () => import('@/views/spouseEmployment/index'),
        meta: {
          title: '配偶就业申请',
          icon: 'home'
        }
      }
    ]
  },
  {
    path: '/talent-apartment',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: 'index',
        component: () => import('@/views/talentApartment/index'),
        meta: {
          title: '人才公寓入住申请',
          icon: 'apply'
        }
      }
    ]
  }
]
