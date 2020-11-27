<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    right
    width="75%"
    color="#411B20"
    dark
    class="py-7"
  >
    <v-btn
      fab
      icon
      class="close-btn"
      small
      @click="closeBtnClick"
    >
      <v-icon size="32">mdi-close</v-icon>
    </v-btn>
    <v-list
        class="menu mt-16"
        width="100%"
    >
      <v-list-item
        class="menu__item pl-10"
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.url"
        color="#FFA903"
      >
        <v-list-item-title :class="{'active-link': index === 0}">{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <div class="social__media ml-8 mt-7">
      <v-btn
        icon
        width="42"
        height="42"
        class="mr-2"
        color="#fff"
      >
        <a href="https://www.instagram.com/torti_torzhok/">
          <font-awesome-icon class="social__media-icon"  :icon="['fab', 'instagram']" />
        </a>
      </v-btn>
      <v-btn
        icon
        width="42"
        height="42"
      >
        <a href="https://www.facebook.com/profile.php?id=100006994696118">
          <font-awesome-icon class="social__media-icon"  :icon="['fab', 'facebook-f']" />
        </a>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  computed: {
    drawer: {
      get () {
        return this.$store.getters.getNavigationDrawer
      },

      set (value) {
        this.$store.dispatch('setNavigationDrawer', value)
      }
    },
    menuItems () {
      return this.$store.getters.getMenuItems
    }
  },
  methods: {
    closeBtnClick () {
      this.$store.dispatch('setNavigationDrawer', false)
    }
  }
}
</script>

<style lang="sass" scoped>
.close-btn
  position: absolute
  top: 25px
  right: 10px


.menu
  &__item
    text-transform: uppercase
    min-height: 42px !important
    font-weight: 600

.social__media
  &-icon
    font-size: 30px
</style>]
