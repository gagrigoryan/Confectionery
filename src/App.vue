<template>
  <v-app class="app" id="app">
    <navigation-drawer v-if="$vuetify.breakpoint.smAndDown" />
    <social-bar v-if="$vuetify.breakpoint.mdAndUp" class="social" />
    <router-view name="navbar" />
    <v-main class="wrapper">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
const NavigationDrawer = () => import("@/components/NavigationDrawer")
const SocialBar = () => import("@/components/SocialBar")

export default {
  name: 'App',

  components: {
    NavigationDrawer,
    SocialBar
  },

  data: () => ({
    //
  }),

  computed: {
  }
};
</script>

<style lang="sass">

@media (max-width: 600px)
  .wrapper
    margin: 0 !important
    width: 100% !important

.app
  height: 1000px

.wrapper
  margin-left: 15vw
  margin-right: 15vw

</style>

