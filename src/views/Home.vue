<template>
  <div>
    <AInput v-model="state.newNote" />
  </div>
</template>

<script>
import { createComponent, reactive } from '@vue/composition-api'

import { AInput } from '@/components/shared/AInput'

export default createComponent({
  components: {
    AInput
  },
  setup() {
    const state = reactive({
      newNote: ''
    })

    return {
      state
    }
  }
})
</script>
