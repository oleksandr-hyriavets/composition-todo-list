<template>
  <div>
    {{ content }}
  </div>
</template>

<script lang='ts'>
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup({ content }) {
    return {
      content
    }
  }
})
</script>