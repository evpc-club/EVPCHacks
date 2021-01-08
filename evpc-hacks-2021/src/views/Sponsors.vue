<template>
  <div id="sponsors">
    <Navbar active="sponsors"/>
    <Footer />
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Sponsors",
  components: {
    Navbar,
    Footer
  }
};
</script>
