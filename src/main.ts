import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as cornerstone from "@cornerstonejs/core";
import * as cornerstoneTools from "@cornerstonejs/tools";
import * as streamingImageVolumeLoader from "@cornerstonejs/streaming-image-volume-loader";
console.log("cornerstone",cornerstone)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
