import Vue from 'vue'
import Vuex from 'vuex'
import MovieService from '@/services/MovieService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    detailMovie: {}
  },
  mutations: {
    SET_MOVIES(state, payload){
        state.movies = payload
    },
    SET_DETAIL_MOVIE(state, payload){
      state.detailMovie = payload
    }
  },
  actions: {
    async fetchMovies({ commit }, text){
      try {
        const res = await MovieService.fetchMovies(text)
        commit('SET_MOVIES', res.Search)
      } catch (err) {
        console.error(err);
      }
    },
    async fetchDetailMovie({ commit }, id){
      try {
        const res = await MovieService.fetchDetailMovie(id)
        commit('SET_DETAIL_MOVIE', res)
      } catch (err){
        console.error(err);
      }
    }
  },
  modules: {
  }
})
