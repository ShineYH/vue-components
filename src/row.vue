<template>
  <div class="g-row" :style="rowGutterClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'gRow',
  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    rowGutterClass() {
      return `margin: 0 ${-this.gutter / 2}px`;
    }
  },
  mounted() {
    this.$children.forEach(child => {
      child.gutter = this.gutter;
    });
  }
}
</script>
<style lang='scss'>
.g-row {
  display: flex;
}
</style>