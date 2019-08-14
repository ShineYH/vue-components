<template>
  <div class="g-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'gRow',
}
</script>
<style lang='scss'>
.g-row {
  display: flex;
}
</style>