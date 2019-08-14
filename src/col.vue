<template>
  <div :class="['g-col', `col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'gCol',
  props: {
    span: {
      type: [ Number, String ],
      default: 24
    }
  }
}
</script>
<style lang='scss'>
.g-col {
  height: auto;
  border: 1px solid grey;

  @for $n from 1 through 24 {
    &.col-#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>