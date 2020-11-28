<template>
  <v-btn
    :color="color"
    v-bind="$attrs"
    class="button"
    @click="$emit('click')"
    :width="width"
    :rounded="rounded"
    :dark="dark"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: "MainBtn",
  props: {
    width: {
      type: String,
      default: '11rem'
    },
    color: {
      type: String,
      default: '#512026'
    },
    rounded: {
      type: Boolean,
      default: true
    },
    dark: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="sass" scoped>
.button
  font-size: 12px
</style>