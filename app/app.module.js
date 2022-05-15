import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import store from './store';

import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import FilterSearchComponent from './components/vue-components/search-filter.vue';
import NotFoundComponent from './pages/not-found.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]).config(($ngVueProvider) => {
  $ngVueProvider.setRootVueInstanceProps({
    store: store,
  });
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vNotFound', (createVueComponent) => {
  return createVueComponent(Vue.component('notFoundComponent', NotFoundComponent));
});

angular.module('appModule').directive('vFilterSearch', (createVueComponent) => {
  return createVueComponent(Vue.component('FilterSearchComponent', FilterSearchComponent));
});
