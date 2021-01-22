<template>
  <div>
    <section-bar v-show="$vuetify.breakpoint.mdAndUp" />
    <section id="cake" class="main">
      <main-section />
    </section>
    <v-card id="candy" class="candy">
      <candy-section />
    </v-card>
  </div>
</template>

<script>
const SectionBar = () => import("@/components/SectionBar")
import MainSection from "@/views/MainPage/MainSection";
import CandySection from "@/views/MainPage/CandySection";

export default {
  name: "Main",
  components: {
    MainSection,
    CandySection,
    SectionBar
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
</style>