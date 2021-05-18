<template>
  <div>
  <b-card
    :title="movie.Title"
    :sub-title="movie.Year"
    :img-src="movie.Poster"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-4"
  >

    <router-link class="btn btn-primary btn-block" :to="`/movie-detail/${movie.imdbID}`">See Detail</router-link>
  </b-card>
</div>
</template>

<script>
export default {
  name: "Movie",
  props: ["movie"],
};
</script>

<style scoped>

article {
  height: 550px;
}

img {
  height: 400px;
}

h4 {
  font-size: 20px;
}
a {
  width: 100%;
}

</style>