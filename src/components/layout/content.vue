<template>
  <div class="g-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'gContent',
};
</script>
<style lang='scss'>
.g-content {
  flex-grow: 1;
}
</style>
