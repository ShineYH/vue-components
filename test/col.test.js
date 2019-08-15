const expect = chai.expect;
import Vue from 'vue';
import Col from '../src/col.vue';

Vue.config.devtools = true;
Vue.config.productionTip = false;

describe('Col', () => {
  it('span', () => {
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 10
      }
    }).$mount();
    expect(Array.from(vm.$el.classList).includes('col-10')).eq(true);
    vm.$destroy();
  })
  it('offset', () => {
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 3
      }
    }).$mount();
    expect(Array.from(vm.$el.classList).includes('offset-3')).eq(true);
    vm.$destroy();
  })
})