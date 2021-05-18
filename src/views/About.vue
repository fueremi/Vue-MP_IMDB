<template>
  <b-container>
    <div class="d-inline">
      <h1>
        {{ this.$store.state.detailMovie.Title }}
        <small class="text-muted"
          >({{ this.$store.state.detailMovie.Year }})</small
        >
      </h1>
    </div>
    <router-link class="btn btn-primary" to="/" variant="primary">Go Back</router-link>

    <b-row class="my-4">
      <b-col md="4"
        ><b-img :src="this.$store.state.detailMovie.Poster"></b-img
      ></b-col>
      <b-col>
        <b-list-group>
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Actors</h5>
            </div>

            <p class="mb-1">
              {{ this.$store.state.detailMovie.Actors }}
            </p>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Writer</h5>
            </div>

            <p class="mb-1">
              {{ this.$store.state.detailMovie.Writer }}
            </p>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">About</h5>
            </div>
            <b-list-group class="mt-3">
              <b-list-group-item href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Release Date</h5>
                </div>

                <p class="mb-1">
                  {{ this.$store.state.detailMovie.Released }}
                </p>
              </b-list-group-item>
              <b-list-group-item href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Rated</h5>
                </div>

                <p class="mb-1">
                  {{ this.$store.state.detailMovie.Rated }}
                </p>
              </b-list-group-item>
              <b-list-group-item href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">IMDB Rating</h5>
                </div>

                <p class="mb-1">
                  {{ this.$store.state.detailMovie.imdbRating }}
                </p>
              </b-list-group-item>
              <b-list-group-item href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Plot</h5>
                </div>

                <p class="mb-1">
                  {{ this.$store.state.detailMovie.Plot }}
                </p>
              </b-list-group-item>
            </b-list-group>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MovieDetail",
  async created() {
    await this.$store.dispatch("fetchDetailMovie", this.$route.params.id);
  },
  beforeDestroy(){
    this.$store.state.detailMovie = {}
    this.$store.state.movies = []
  }
};
</script>
