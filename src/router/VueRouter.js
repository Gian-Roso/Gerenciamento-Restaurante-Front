import { createRouter, createWebHistory } from 'vue-router';
import TelaOrigem from '@/components/TelaOrigem.vue';
import ProximaTela from '@/components/ProximaTela.vue';

const routes = [
  { path: '/', component: TelaOrigem },
  { path: '/proximaTela', name: 'proximaTela', component: ProximaTela }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
