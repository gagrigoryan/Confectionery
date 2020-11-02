<template>
  <v-app-bar
    app
    class="navbar"
    height="70"
    color="#fff"
  >
    <router-link
        to="/"
        tag="a"
    >
      <v-img
          alt="Cake Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="54"
      />
    </router-link>

    <v-spacer />

    <ul v-if="$vuetify.breakpoint.smAndUp" class="navbar__menu d-flex">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="mx-5"
      >
        <router-link :to="item.url" tag="a">
          {{ item.title }}
        </router-link>
      </li>
    </ul>

    <v-spacer />

    <div class="navbar__basket">
      <span class="mr-2 hidden-sm-and-down">Корзина пустая</span>
      <v-badge
          offset-x="12px"
          offset-y="12px"
          color="#FED39C"
          content="0"
      >
        <v-btn
            fab
            color="#512026"
            small
        >
          <v-icon color="#fff">mdi-cupcake</v-icon>
        </v-btn>
      </v-badge>
    </div>
    <v-btn
      fab
      icon
      class="ml-6 hidden-md-and-up"
      width="55"
      height="55"
    >
      <div class="hamburger">
        <div class="hamburger-1"></div>
        <div class="hamburger-2"></div>
        <div class="hamburger-3"></div>
      </div>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    menuItems () {
      return this.$store.getters.getMenuItems
    }
  },
  data: () => ({})
}
</script>

<style lang="sass" scoped>
.navbar
  &__menu
    li
      transition: all .3s
      position: relative
      &:before
        content: ''
        width: 0
        height: 2px
        background-color: $primary
        position: absolute
        right: 0
        bottom: -5px
        transition: .3s
      &:hover
        a
          color: $primary !important
        &:before
          width: 100%
          left: 0
      a
        color: $secondary
        transition: all .3s
  &__basket
    font-size: 12px
    color: $secondary

.hamburger
  transform: rotate(180deg)
  div
    width: 34px
    height: 3px
    border-radius: 30px
    background: $primary
  &-2
    width: 25px !important
    margin-top: 6px
    margin-bottom: 6px
</style>