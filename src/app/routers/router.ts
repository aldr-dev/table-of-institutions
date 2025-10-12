import { createRouter, createWebHistory } from 'vue-router';
import MainTable from '@/pages/table/main-table.vue';
import PageNotFound from '@/pages/page-not-found/page-not-found.vue';

const routes = [
  { name: 'table', path: '/table-of-institutions', component: MainTable },
  { name: 'PageNotFound', path: '/:pathMatch(.*)*', component: PageNotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
