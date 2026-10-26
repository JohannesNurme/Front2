import { createApp } from 'vue';
import { createMemoryHistory, createWebHashHistory, createWebHistory, createRouter } from 'vue-router';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Important from './pages/Important.vue';

const routes = [
  { path: '/', component: ToDo, name: 'ToDo'},
  { path: '/modals', component: Modals, name: 'Modals'},
  { path: '/important', component: Important, name: 'Important'},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
