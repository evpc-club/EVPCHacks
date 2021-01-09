<template>
  <div id="home">
    <Navbar active="home"/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1 id = "title">EVPC Hacks 2021.</h1>
    <Footer />
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer
  }
};
</script>
