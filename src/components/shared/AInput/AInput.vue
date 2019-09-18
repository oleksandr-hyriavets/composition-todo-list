<template>
  <input :value="value" type="text" class="a-input" @input="onInput" />
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  setup(props, context) {
    function onInput(evt: InputEvent) {
      if (!evt || !evt.target) return

      // @ts-ignore
      context.emit('input', evt.target.value)
    }

    return {
      onInput
    }
  }
})
</script>

<style lang="scss">
.a-input {
  width: 100%;
  height: 45px;
  border: 2px solid #e6e6e6;
  border-radius: 7px;
  padding: 12px 16px;
  font-size: 16px;

  &:focus {
    border-color: #dff2e6;
    outline: none;
    box-shadow: 0 0 0 1px #dff2e6, 0 0 4px 0 #dff2e6;
  }
}
</style>