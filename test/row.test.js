const expect = chai.expect;
import Vue from 'vue';
import Row from '../src/row.vue';
import Col from '../src/col.vue';

Vue.config.devtools = true;
Vue.config.productionTip = false;

const Constructor = Vue.extend(Row);

describe('Row', () => {
  it('gutter', () => {
    Vue.component('g-row', Row);
    Vue.component('g-col', Col);
    const div = document.createElement('div');
    div.innerHTML = `<g-row gutter=10>
      <g-col></g-col>
      <g-col></g-col>
    </g-row>`
    document.body.appendChild(div);
    const vm = new Vue({
      el: div
    });
    const row = vm.$el.querySelector('.g-row');
    const cols = vm.$el.querySelector('.g-col');
    expect(getComputedStyle(row).margin).eq('0px -5px');
    Array.from(cols).forEach((col) => {
      expect(getComputedStyle(col).padding).eq('0px 5px');
    });
    vm.$el.remove();
    vm.$destroy();
  })
})

