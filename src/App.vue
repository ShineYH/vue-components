<template>
  <div>
    <div class="slpit">默认布局layout</div>
    <g-layout class="layout-demo">
      <g-slider class="demo">slider</g-slider>
      <g-layout>
        <g-header class="demo">header</g-header>
        <g-layout class="demo">
          <g-slider class="demo">slider</g-slider>
          <g-content class="demo">content</g-content>
        </g-layout>
        <g-footer class="demo">footer</g-footer>
      </g-layout>
    </g-layout>
    <div class="slpit"> 栅格布局</div>

    <g-row gutter=10>
      <g-col span=12>hhhh</g-col>
      <g-col span=12>aaaa</g-col>
    </g-row>
    <g-row gutter=20>
      <g-col span=2 offset=2>aaaa</g-col>
      <g-col span=20>aaaa</g-col>
    </g-row>

    <div class="slpit">输入框</div>

    <g-input value="13243"></g-input>
    <g-input value="13243" disabled></g-input>
    <g-input value="13243" readonly></g-input>
    <g-input value="13243" error="输入错误"></g-input>


    <div class="slpit">按钮</div>
    <g-button
      icon="search"
      :loading="true"
      icon-position="right" >
      设置
    </g-button>
    <g-button
      icon="search"
      :disabled="loading"
      :loading="loading"
      icon-position="left"
      @click="loading = !loading">
        设置
    </g-button>
    <g-button-group>
      <g-button icon="arrow-left">上一页</g-button>
      <g-button icon="arrow-right">下一页</g-button>
    </g-button-group>
  </div>
</template>

<script>
import Button from './components/button.vue';
// import Icon from './components/icon.vue';
import ButtonGroup from './components/button-group.vue';
import Input from './components/input.vue';
import Row from './components/row.vue';
import Col from './components/col.vue';
import Layout from './components/layout/layout.vue';
import Header from './components/layout/header.vue';
import Slider from './components/layout/slider.vue';
import Content from './components/layout/content.vue';
import Footer from './components/layout/footer.vue';

export default {
  name: 'demo',
  data() {
    return {
      loading: false,
    };
  },

  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup,
    'g-input': Input,
    'g-row': Row,
    'g-col': Col,
    'g-layout': Layout,
    'g-header': Header,
    'g-slider': Slider,
    'g-content': Content,
    'g-footer': Footer,
  },
};
</script>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --botton-height: 32px;
  --font-size: 14px;
  --button-bg: #fff;
  --button-acitve-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --boder-color-hover: #666;
}
body {
  font-size: var(--font-size);
}
#app {
  margin: 20px;
}
.slpit {
  width: 100%;
  height: 25px;
  border-top: 1px solid #999;
  margin: 20px 0 10px;
  color: red;
}
.layout-demo {
  height: 500px;
}
.demo {
  border:1px solid #666;
  min-height: 100px;
}
</style>
