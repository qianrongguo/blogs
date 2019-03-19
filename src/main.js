// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResoure from 'vue-resource'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;
Vue.use(VueResoure);
// Vue.use(VueRouter);

//全局自定义指令
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    //$el元素  bingding:b绑定
    el.style.color = '#' + Math.random().toString(16).slice(2, 8)   //vnode生成的虚拟节点
  }
});

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1260px';
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg == 'columu') {  //查看自定义指令参数arg,如果有就实现下面的代码
      el.style.background = '#6677cc';
      el.style.padding = '20px'
    }
  }
});
// Vue.filter('to-uppercase',function (value) {
//   return value.toUpperCase()
// });

Vue.filter('snippet', function (value) {
  return value.slice(0, 10) + '...'
});

//
// const router = new VueRouter({   //实例化路由
//   routes:
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



