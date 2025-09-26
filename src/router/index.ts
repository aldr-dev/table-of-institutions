import { createRouter, createWebHistory } from 'vue-router';
import TablePage from '@/pages/TablePage/TablePage.vue';
import PageNotFound from '@/pages/PageNotFound/PageNotFound.vue';

const routes = [
  { name: 'TablePage', path: '/', component: TablePage },
  { path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
