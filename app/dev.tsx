// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import Suite, { install } from '@/index';

install(Vue);

/* eslint-disable no-new */
new Vue({
  data() {
    return {
      name: 'Suite Project',
    };
  },
  render(h) {
    return (
      <div>
        <kl-text content="这是一段文本这是一段文本这是一段文本这是一段文本"/>
        {
          Suite.Utils.hi(this.name)
        }
      </div>
    );
  },
}).$mount('#app');
