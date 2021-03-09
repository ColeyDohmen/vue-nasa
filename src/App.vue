<template>
  <div class="app">
    <header class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col text-center">
          <h1>NASA</h1>
        </div>
      </div>
    </header>
    <main class="container">
      <div class="row">
        <div class="col">
          <form @submit.prevent="search">
            <input
              class="mx-2 my-2"
              type="date"
              placeholder=""
              v-model="state.query"
            />
            <button type="submit" class="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <Picture />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { pictureService } from './services/PictureService'
import { AppState } from './AppState'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      query: '',
      picture: computed(() => AppState.picture)
    })
    return {
      state,
      async search() {
        try {
          await pictureService.searchPicture(state.query)
          state.query = ''
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    // picture
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
