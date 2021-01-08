<template>
  <div class="schedule">
    <Navbar active="schedule" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Schedule",
  components: {
    Navbar,
    Footer,
  },
};
</script>
