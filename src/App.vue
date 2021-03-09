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
      <div class="row justify-content-center">
        <div class="col">
          <form @submit.prevent="search">
            <input class="mx-2 my-2" type="date" v-model="state.query" />
            <button type="submit" class="btn btn-primary">Search</button>
          </form>
        </div>
        <Picture />
      </div>
    </main>
    <footer class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col text-center">
          <p class="m-3"><b>L o o k . u p o n . t h e . s t a r s</b></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { pictureService } from './services/PictureService'
import { AppState } from './AppState'
import Picture from './components/Picture'

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
    Picture
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
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
