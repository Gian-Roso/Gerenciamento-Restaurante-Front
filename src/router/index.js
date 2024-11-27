import { createRouter, createWebHistory } from 'vue-router'
import LayoutCardapio from '@/components/Layout/LayoutCardapio.vue'
import LayoutPagamento from '@/components/Layout/LayoutPagamento.vue' 
import QRcore from '@/components/Layout/QRcore.vue'
import LayoutPedidoF from '@/components/Layout/LayoutPedidoF.vue'

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
  {
    path: '/pedidoFinalizado',
    name: 'finalizado',
    component: LayoutPedidoF
  },
  {
    path: '/QRcode',
    name: 'QRcode',
    component: QRcore
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
})

export default router
