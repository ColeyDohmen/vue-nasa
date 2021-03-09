<template>
  <div class="picture">
    <img :src="state.picture.url" />
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'picture',
  setup() {
    const state = reactive({
      picture: computed(() => AppState.picture)
    })

    return {
      state
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
