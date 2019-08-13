const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.devtools = true;
Vue.config.productionTip = false;

describe('Button', () => {
  it('Button存在.', () => {
    expect(Button).to.be.ok
  })
  it('设置icon', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "loading"
      }
    }).$mount();
    const dom = vm.$el.querySelector('use');
    expect(dom.getAttribute('xlink:href')).to.equal('#i-loading');
    vm.$destroy();
  })
  it('设置loading', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        loading: true,
        icon: 'search'
      }
    }).$mount();
    const dom = vm.$el.querySelectorAll('use');
    expect(dom.length).to.equal(1);
    expect(dom[0].getAttribute('xlink:href')).to.equal('#i-loading');
    vm.$destroy();
  })
  it('icon默认在左边，order是1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
    propsData: {
        icon: 'search',
    }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })
  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
    propsData: {
        icon: 'search',
        iconPosition: 'right'
    }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
    propsData: {
        icon: 'search',
    }
    }).$mount();
    const callback = sinon.spy();
    vm.$on('click', callback);
    vm.$el.click();
    expect(callback).to.have.been.called;
  })
})