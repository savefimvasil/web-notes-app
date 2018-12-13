import Vue from 'vue';
import Router from 'vue-router'
import store from './store'

import NotesApp from './NotesApp.vue';
import '@progress/kendo-ui';
import { InputsInstaller } from '@progress/kendo-inputs-vue-wrapper';

Vue.use(InputsInstaller);
Vue.use(Router);

new Vue({
  el: '#app',
  store,
  base: process.env.BASE_URL,
  router: new Router({ mode: 'history', routes: [
    {
      path: '/',
      name: 'home',
      component: NotesApp
    },
  ] }),
  render: h => h(NotesApp)
});
