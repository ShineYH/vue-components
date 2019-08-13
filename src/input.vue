<template>
  <div class="input-wrap" :class="{error}">
    <input type="text" :disabled="disabled" :value="value" :readonly="readonly"
    @change="change" @input="input">
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon';
export default {
  name: 'gInput',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String
    }
  },
  components: { Icon },
  methods: {
    change(event) {
      this.$emit('change', event.target.value)
    },
    input(event) {
      this.$emit('change', event.target.value)
    }
  }

}
</script>
<style lang='scss'>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0,0,0,.5);
$red: #f1453D;
.input-wrap {font-size: $font-size;display: inline-flex;align-items:center;
  :not(:last-child) { margin-right: .5em; }
  > input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;
    &:hover {border-color: 1px solid $border-color-hover;}
    &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
    &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed;}
  }
  &.error {> input {border-color: $red;};}
  .icon-error { fill: $red;};.error-message {color: $red;}
}
</style>