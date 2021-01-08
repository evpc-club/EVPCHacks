<template>
  <div id="team">
    <Navbar active="team"/>
    <Footer />
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Team",
  components: {
    Navbar,
    Footer
  }
};
</script>
