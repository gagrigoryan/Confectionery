<template>
  <div class="social__bar pl-15">
    <div class="social__bar-wrapper d-flex flex-column">
      <v-btn
          icon
          width="42"
          height="42"
          color="#512026"
          class="social__bar-btn my-2"
      >
        <a href="https://www.instagram.com/torti_torzhok/">
          <font-awesome-icon class="social__media-icon"  :icon="['fab', 'facebook-f']" />
        </a>
      </v-btn>
      <v-btn
          icon
          width="42"
          height="42"
          color="#512026"
          class="social__bar-btn my-2"
      >
        <a href="https://www.facebook.com/profile.php?id=100006994696118">
          <font-awesome-icon class="social__media-icon"  :icon="['fab', 'instagram']" />
        </a>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
name: "SocialBar"
}
</script>

<style lang="sass" scoped>
.social__bar
  position: fixed
  left: 0
  top: 50%
  transform: translateY(-50%)
  z-index: 1
  &-btn
    z-index: 2 !important

.social__media-icon
  font-size: 25px
</style>