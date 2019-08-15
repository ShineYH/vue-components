<template>
  <div class="g-layout" :class="hasSlider ? 'has-slider' : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'gLayoyt',
  data() {
    return {
      hasSlider: false
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      console.info(vm);
      if(vm.$options.name === 'gSlider') {
        this.hasSlider = true;
      }
    })
  }
}
</script>
<style lang='scss'>
.g-layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.has-slider {
    flex-direction: row;
  }
}
</style>