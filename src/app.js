import Vue from 'vue';
import Button from './Button';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from './input.vue';
import Row from './row.vue';
import Col from './col.vue';
import Layout from './layout/layout.vue';
import Header from './layout/header.vue';
import Slider from './layout/slider.vue';
import Content from './layout/content.vue';
import Footer from './layout/footer.vue';


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-slider', Slider);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);


export default new Vue({
  el: '#app',
  data: {
    loading: false
  }
});
