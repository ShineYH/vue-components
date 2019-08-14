const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';
let sinonChai = require("sinon-chai");
chai.use(sinonChai);

Vue.config.devtools = true;
Vue.config.productionTip = false;
const Constructor = Vue.extend(Input);

describe('props: value', () => {
  const vm = new Constructor({
    propsData: {
      value: '1234'
    }
  }).$mount();
  const inputElement = vm.$el.querySelector('input');
  expect(inputElement.value).equal('1234');
  vm.$destroy();
})

describe('props: disabled', () => {
  const vm = new Constructor({
    propsData: {
      disabled: true
    }
  }).$mount();
  const inputElement = vm.$el.querySelector('input');
  expect(inputElement.disabled).equal(true);
  vm.$destroy();
})

describe('props: readonly', () => {
  const vm = new Constructor({
    propsData: {
      disabled: true
    }
  }).$mount();
  const inputElement = vm.$el.querySelector('input');
  expect(inputElement.disabled).equal(true);
  vm.$destroy();
})

describe('props: error', () => {
  const vm = new Constructor({
    propsData: {
      error: '输入错误'
    }
  }).$mount();
  const iconElement = vm.$el.querySelector('use');
  expect(iconElement.getAttribute('xlink:href')).equal('#i-error');
  const errorMessage = vm.$el.querySelector('.error-message');
  expect(errorMessage.innerText).equal('输入错误');
  vm.$destroy();
})

describe('change 事件', () => {
  const vm = new Constructor({}).$mount();
  const callback = sinon.fake();
  vm.$on('change', callback);
  const changeEvent = new Event('change');
  const inputElement = vm.$el.querySelector('input');
  Object.defineProperty(changeEvent, 'target', {
    enumerable: true,
    writable: true,
    value: { value: 'change'}
  });
  inputElement.dispatchEvent(changeEvent);
  expect(callback).to.have.been.calledWith('change');
  vm.$destroy();
})

describe('input 事件', () => {
  const vm = new Constructor({}).$mount();
  const callback = sinon.fake();
  vm.$on('input', callback);
  const inputEvent = new Event('input');
  const inputElement = vm.$el.querySelector('input');
  Object.defineProperty(inputEvent, 'target', {
    enumerable: true,
    writable: true,
    value: { value: 'input'}
  });
  inputElement.dispatchEvent(inputEvent);
  expect(callback).to.have.been.calledWith('input');
  vm.$destroy();
})

