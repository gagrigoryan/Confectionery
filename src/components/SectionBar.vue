<template>
  <div class="section__bar pr-15">
    <ul class="sections">
      <li
        v-for="(section, index) in sections"
        :key="index"
        class="section d-flex align-center justify-end"
        :class="{'active-section': index === 0}"
      >
        <div class="section__title mr-3">{{ section.title }}</div>
        <div class="section__mark" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SectionBar",
  computed: {
    sections () {
      return this.$store.getters.getMenuItems.slice(1, 6)
    }
  }
}
</script>

<style lang="sass" scoped>
.section__bar
  position: fixed
  right: 0
  top: 50%
  transform: translateY(-50%)
  z-index: 1

.section
  text-align: right
  font-weight: 600
  font-size: 14px
  color: $primary
  opacity: .4
  margin-top: 3px
  margin-bottom: 3px
  cursor: pointer
  transition: all .3s ease
  min-height: 33px
  &:hover
    opacity: 1
  &__mark
    width: 11px
    height: 11px
    border-radius: 50%
    background-color: $primary
    transition: all .3s

.active-section
  opacity: 1
  .section__mark
    height: 30px !important
    border-radius: 25px !important
</style>