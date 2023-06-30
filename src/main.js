import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/common.scss' // common css

import moment from "moment";
import {
  formatDate
} from "@/utils/generator/dateTimeConfig.js";

import {
  Button,
  Divider,
  Col,
  Row,
  Dialog,
  NavBar,
  Cell,
  Icon,
  CellGroup,
  Badge ,
  Toast,
  ActionSheet,
  Form,
  Field,
  Popup,
  DatetimePicker,
  SwipeCell,
  List,
  Sticky
} from 'vant';


//挂载全局组件
Vue.use(Button);
Vue.use(Divider);
Vue.use(Col);
Vue.use(Row);
Vue.use(NavBar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Badge);
Vue.use(ActionSheet);
Vue.use(Form);
Vue.use(Field);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(SwipeCell);
Vue.use(List);
Vue.use(Sticky);
Vue.use(Toast);
Vue.use(Dialog);

//挂载全局方法
Vue.prototype.$moment = moment;
Vue.prototype.$formatDate = formatDate;
moment.locale('zh-cn')

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
