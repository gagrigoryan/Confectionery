<template>
  <div>
    <section-bar v-show="$vuetify.breakpoint.mdAndUp" />
    <section class="main">
      <main-section />
    </section>
  </div>
</template>

<script>
const SectionBar = () => import("@/components/SectionBar")
import MainSection from "@/views/MainPage/MainSection";

export default {
  name: "Main",
  components: {
    MainSection,
    SectionBar
  }
}
</script>

<style lang="sass" scoped>
</style>