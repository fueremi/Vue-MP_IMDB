<template>
  <b-container>
    <b-input-group class="my-4">
      <b-form-input v-model="searchText" @keyup="onSearch()"></b-form-input>
      <b-input-group-append>
      </b-input-group-append>
    </b-input-group>

    <b-row>
      <b-col
        v-for="movie in this.$store.state.movies"
        :key="movie.id"
        md="3"
        sm="1"
      >
        <Movies :movie="movie" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Movies from "@/components/Movies";

export default {
  name: "Home",
  components: {
    Movies,
  },
  data(){
    return {
      searchText: ''
    }
  },
  methods: {
    async onSearch() {
      await this.$store.dispatch('fetchMovies', this.searchText)
    }
  },
};
</script>
