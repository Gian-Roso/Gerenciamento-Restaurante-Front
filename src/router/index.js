import { createRouter, createWebHistory } from 'vue-router'
import LayoutCardapio from '@/components/Layout/LayoutCardapio.vue'
import LayoutPagamento from '@/components/Layout/LayoutPagamento.vue'  

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: LayoutCardapio
  },
  {
    path: '/pagamento',
    name: 'pagamento',
    component: LayoutPagamento 
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
})

export default router
