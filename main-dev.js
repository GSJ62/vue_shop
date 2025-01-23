import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import router from './JS/router.js';
import './assets/css/basic.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
import './JS/element.js'
import axios from 'axios';
import TreeTable from 'vue-table-with-tree-grid';
import moment from "moment";
import './JS/element.js'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import NProgress from 'nprogress.css'
import 'nprogress/nprogress.css'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

axios.interceptors.request.use(config => {
    console.log(config);
    NProgress.start();
    config.headers.Authorization = window.sessionStorage.getItem('token');
    return config;
})
axios.interceptors.response.use(config => {
    console.log(config);
    NProgress.done();
    return config;
})
Vue.prototype.$http = axios

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueQuillEditor)
Vue.use(Mint);
Vue.use(ElementUI);
Vue.component('tree-table', TreeTable);
Vue.filter('Format', function(input, fmtstring) {
    return moment(input).format(fmtstring);
});
Vue.prototype.$moment = moment;

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})