<template>
  <div>
    {{ content }}
    <button @click="onDelete">Delete</button>
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
  setup(props, { emit }) {
    function onDelete() {
      emit('delete')
    }

    return {
      onDelete
    }
  }
})
</script>