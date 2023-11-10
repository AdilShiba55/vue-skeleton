import { createRouter, createWebHistory } from 'vue-router'
import SiteLayout from '../layouts/SiteLayout.vue'
import LandingPage from '../views/LandingPage.vue'
import AppLayout from '../layouts/AppLayout.vue'
import TestFrame1 from '../views/TestFrame1.vue'
import TestFrame2 from '../views/TestFrame2.vue'
import {UtSidebar} from "../util/UtSidebar";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: SiteLayout,
      redirect: '/site',
      children: [
        {
          path: '/site',
          component: LandingPage
        }
      ]
    },
    {
      path: '/app',
      component: AppLayout,
      redirect: UtSidebar.testFrame1.path,
      children: [
        {
          path: UtSidebar.testFrame1.path,
          alias: UtSidebar.testFrame1.alias,
          component: TestFrame1
        },
        {
          path: UtSidebar.testFrame2.path,
          alias: UtSidebar.testFrame2.alias,
          component: TestFrame2
        }
      ]
    }
  ]
})

export default router
