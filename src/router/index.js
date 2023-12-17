import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Santiago Morales | About'
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      meta: {
        title: 'Santiago Morales | Manage'
      },
      component: () => import('@/views/ManageView.vue'),
      beforeEnter: () => {
        const user = useUserStore()
        if (!user.userLoggedIn) {
          const router = useRouter()
          router.push('/login')
        }
      }
    },
    {
      path: '/projects',
      name: 'projects',
      meta: {
        title: 'Santiago Morales | Projects'
      },
      component: () => import('@/views/ProjectsView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      meta: {
        title: 'Santiago Morales | Skills'
      },
      component: () => import('@/views/SkillsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Santiago Morales | Login'
      },
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: 'Santiago Morales | Contact'
      },
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: {
        title: 'Santiago Morales | Not Found'
      },
      component: () => import('@/views/PageNotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Santiago Morales'
})

export default router
