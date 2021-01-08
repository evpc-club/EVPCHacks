<template>
  <div id="navbar">
    <vs-navbar
      target-scroll="#padding-scroll-content"
      padding-scroll
      center-collapsed
      v-model="active"
      notLine="true"
      color="#040C0F"
      textWhite
    >
      <template #left>
        <img src="@/assets/img/logo/logo500x.png" width="50px" />
        <h1 class="heavy"><a href="/">EVPC.Hacks(1);</a></h1>
      </template>
      <template #default>
        <vs-navbar-item :active="active == 'home'" id="home" to="/">
          Home
        </vs-navbar-item>
        <vs-navbar-item
          :active="active == 'schedule'"
          id="schedule"
          to="/schedule"
        >
          Schedule {{ primaryColor }}
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'team'" id="team" to="/team">
          Team
        </vs-navbar-item>
        <vs-navbar-item
          :active="active == 'sponsors'"
          id="sponsors"
          to="/sponsors"
        >
          Sponsors
        </vs-navbar-item>
      </template>

      <template #right>
        <vs-button
          flat
          color="#00bbff"
          href="https://discord.gg/4C3eUdHKcR"
          blank
          border
        >
          <i class="bx bxl-discord"></i>
          <template #animate>
            <i class="bx bx-link"></i>
          </template>
        </vs-button>
        <vs-button
          color="#00bbff"
          blank
          href="https://github.com/EVProgrammingClub"
          flat
          border
        >
          <i class="bx bxl-github"></i>
          <template #animate>
            <i class="bx bx-link"></i>
          </template>
        </vs-button>

        <vs-tooltip bottom dark>
          <vs-button border color="#00bbff" href="https://github.com/ArmeetJatyani" blank>
            <i class="bx bx-coffee"></i>
            <template #animate>
              <i class="bx bxs-coffee"></i>
            </template>
          </vs-button>
          <template #tooltip>Made by @ArmeetJatyani</template>
        </vs-tooltip>

        <vs-button color="#00bbff" href="/register">
          Register
          <template #animate>
            <i class="bx bxs-heart"></i>
          </template>
        </vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    active: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap");

* {
  font-family: "Ubuntu", sans-serif;
  font-weight: normal;
  font-size: 20px;
  letter-spacing: 2px;
}

.heavy a {
  color: #00bbff;
  text-decoration: none;
  padding-left: 20px;
  font-family: "Ubuntu", sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2px;
}

.vs-tooltip {
  color:red;
  background:red;
  font-family: "Ubuntu", sans-serif;
  font-weight: normal;
  font-size: 20px;
  letter-spacing: 2px;
}
</style>
