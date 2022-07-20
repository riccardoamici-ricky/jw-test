import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  movies: {
      id: any,
      title: any
  }
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    movies: {
        id: "",
        title: ""
    }
  },
  mutations: {
    setMovies(state, movies){
        state.movies = movies
    }
  },
  actions: {
    async storeSearch(context, data: string) {
        const fetchedMovies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4b4b054792688a3119f90221491ed983&query=${data}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => context.commit("setMovies", data.results))
    }
  }
})