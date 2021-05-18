<template>
  <Movie :movie="movie"/>
</template>

<script>
import Movie from '@/components/Movie'

export default {
  name: "Movies",
  props: ["movie"],
  components: {
    Movie,
  }
};
</script>

<style>
</style>