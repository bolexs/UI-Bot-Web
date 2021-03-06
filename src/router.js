import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Watson from './views/WatsonService.vue';
import PageNotFound from './views/Page-Not-Found.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/watson' },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/watson',
          name: 'Watson Service',
          component: Watson,
          meta: {
            breadcrumb: 'Watson Service',
          },
        },
      ],
    },
    { path: '*', component: PageNotFound },
  ],
});
