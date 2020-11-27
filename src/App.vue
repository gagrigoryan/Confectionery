<template>
  <v-app class="app" id="app">
    <navigation-drawer v-if="$vuetify.breakpoint.smAndDown" />
    <social-bar v-if="$vuetify.breakpoint.mdAndUp" class="social" />
    <router-view name="navbar" />
    <v-main>
      <div class="container">
        <router-view />
      </div>
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
.app
  height: 1000px

.container
  width: 80%
  margin-left: 10%


</style>

