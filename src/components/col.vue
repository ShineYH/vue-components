<template>
  <div
    :class="['g-col', span && `col-${span}`, offset && `offset-${offset}`]"
    :style="colGutterClass">
    <div style="border: 1px solid grey;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gCol',
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colGutterClass() {
      return `padding: 0 ${this.gutter / 2}px;`;
    },
  },
};
</script>
<style lang='scss'>
.g-col {
  height: auto;
  padding: 0 10px;

  @for $n from 1 through 24 {
    &.col-#{$n} {
      width: ($n / 24) * 100%;
    }
    &.offset-#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
