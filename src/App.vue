<template>
  <header>
    <Navbar />
    <b-container id="app">
      <router-view />
    </b-container>
  </header>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>