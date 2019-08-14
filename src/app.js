import Vue from 'vue';
import Button from './Button';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from './input.vue';
import Row from './row.vue';
import Col from './col.vue';

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);


export default new Vue({
  el: '#app',
  data: {
    loading: false
  }
});
