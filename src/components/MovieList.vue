<template>
    <div class="result">
        <ul class="movie-list">
           <li v-for="movie in store.state.movies"
            :key="movie.id"
            >
                {{movie.title}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex'
import { key } from '../store'

export default defineComponent({
  setup(){
     const store = useStore(key)

    return{
      store,
    }
  }
});
</script>

<style scoped>
.movie-list li{
    list-style: none;
}
</style>