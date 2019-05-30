import KlText from './components/kl.text/index.vue';
import Utils from './utils';
import Filters from './filters';

export const install = (Vue) => {
  Vue.component('kl-text', KlText);
  Vue.filter(Filters);
};

export default {
  Utils,
};
