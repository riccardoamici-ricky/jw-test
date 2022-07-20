<template>  
    <div class="app">
       <h1>Search light JustWatch</h1>
       <h3>Riccardo Amici coding challenge</h3>
       <p>Type a movie and press enter to start the search</p>
    <form class="search-box" @submit.prevent="storeSearch(search_query)">
      <input 
        class="search-field" 
        type="search" 
        placeholder="Search for a movie" 
        required 
        v-model="search_query"
      />
    </form>
        <MovieList/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore, mapActions } from 'vuex'
import { key } from './store'

import Movie from "./types/Movie";
import MovieList from "./components/MovieList.vue"

export default defineComponent({
  name: 'App',
  components: {
    MovieList
  },
  methods: {
    ...mapActions(["storeSearch"])
  },
  setup(){
    const store = useStore(key)
     
    const search_query = ref("")
    const movies = ref<Movie[]>([])

    return{
      search_query,
      movies,
      store,
    }
  }
});
</script>

<style>
</style>
