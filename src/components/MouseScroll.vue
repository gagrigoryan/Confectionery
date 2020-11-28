<template>
  <div class="mouse" @click="mouseClick">
    <div class="icon-scroll"></div>
  </div>
</template>

<script>
export default {
  name: "MouseScroll",
  methods: {
    mouseClick () {
    }
  }
}
</script>

<style scoped>
.mouse {
  cursor: pointer;
}

.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  width: 30px;
  height: 50px;
  border: 2px solid #4f2025;
  border-radius: 25px;
  position: relative;
}
@media (max-width: 767px) {
  .icon-scroll {
    position: relative;
  }
}
.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: #4f2025;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(26px);
  }
}
</style>