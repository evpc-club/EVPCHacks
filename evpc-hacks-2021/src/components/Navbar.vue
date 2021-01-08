<template>
  <div class>
    <vs-navbar
      target-scroll="#padding-scroll-content"
      padding-scroll
      center-collapsed
      v-model="active"
    >
      <template #left> </template>
      <template #default>
        <vs-navbar-item :active="active == 'home'" id="home" to="/">
          Home
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'schedule'" id="schedule" to="/schedule">
          Schedule
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'team'" id="team" to="/team">
          Team
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'sponsors'" id="sponsors" to="/sponsors">
          Sponsors
        </vs-navbar-item>
      </template>

      <template #right>
        <vs-button href="https://discord.gg/4C3eUdHKcR" blank>
          <i class="bx bxl-discord"></i>

          <template #animate>
            <i class="bx bx-link"></i>
          </template>
        </vs-button>
        <vs-button blank href="https://github.com/EVProgrammingClub">
          <i class="bx bxl-github"></i>
          <template #animate>
            <i class="bx bx-link"></i>
          </template>
        </vs-button>

        <vs-button href="/register">
          Register
          <template #animate>
            <i class="bx bx-link"></i>
          </template>
        </vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
