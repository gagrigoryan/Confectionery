<template>
  <div class="main d-md-flex align-center justify-center mt-8 mt-md-0 px-4">
    <v-row class="align-start mt-md-10">
      <v-col
          cols="12"
          class="col-md-5"
      >
        <h1>Торты</h1>
        <h3 class="hidden-md-and-up mt-10">Торт "Какой-то"</h3>
        <p class="mt-4 mt-md-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias animi deserunt earum eveniet facilis fugit incidunt, ipsam mollitia nihil.</p>
        <div class="hidden-md-and-up price">
          от <span>1500</span> руб./кг
        </div>
        <main-btn class="hidden-sm-and-down mt-5">
          Подробнее
        </main-btn>
      </v-col>
      <v-col
          cols="12"
          class="col-md-7"
      >
        <v-img
          :src="require('@/assets/img/mainCake.png')"
          :width="$vuetify.breakpoint.mdAndUp ? '100%' : '90%'"
        >

        </v-img>
      </v-col>
      <mouse-scroll class="scrollIndicator mt-8" />
    </v-row>
  </div>
</template>

<script>
import MainBtn from "@/components/MainBtn";
import MouseScroll from "@/components/MouseScroll";

export default {
  name: "MainSection",
  components: {
    MainBtn,
    MouseScroll
  }
}
</script>

<style lang="sass" scoped>


.main
  width: 100%
  height: calc(100vh - 70px)
  position: relative


.scrollIndicator
  transform: scale(.7)
  margin-left: auto
  margin-right: auto

.price
  color: $primary
  font-weight: 700
  span
    font-size: 2.5rem
</style>