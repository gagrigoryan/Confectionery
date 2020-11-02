<template>
  <v-app class="app" id="app">
    <router-view name="navbar" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),

  computed: {
  }
};
</script>

