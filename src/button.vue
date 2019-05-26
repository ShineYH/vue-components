<!--  -->
<template>
  <button  :class="[`icon-${iconPosition}`, 'g-button']" @click="$emit('click')">
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon v-if="loading" class="icon loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  // props: ['icon', 'icon-position']
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right';
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang='scss'>
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
.g-button {
  font-size: var(--font-size);
  height: var(--botton-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover { border-color: var(--border-color-hover); }
  &:active { background-color: var(--button-active-bg); }
  &:focus {  outline: none; }
  &.icon-left { .content { order: 2 } .icon { order: 1; margin-right:  .3em;} }
  &.icon-right { .content { order: 1 } .icon { order: 2; margin-right: 0; margin-left: .3em;} }
 .loading { animation: spin 1s infinite  linear; } }
</style>