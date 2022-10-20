<template>
<div class="backdrop">
  <SvgBackdrop />
</div>
  <div class="main-scroll__track">
    <IntroSplash />
    <ProjectCarousel v-for="project in projectDataGetter" :key="project.projectTitle" :projectDataAttr="project" />
    <ExitPage />
</div>
</template>

<script>

import IntroSplash from './components/IntroSplash'
import ProjectCarousel from './components/ProjectCarousel.vue'
import ExitPage from './components/ExitPage.vue'
import SvgBackdrop from './components/SvgBackdrop.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    IntroSplash,
    ProjectCarousel,
    ExitPage,
    SvgBackdrop
  },
  methods: {
    ...mapActions(['fetchProjectData', 'fetchPAYGData'])
  },
  computed: mapGetters(['projectDataGetter']),
  beforeMount() {
    this.fetchProjectData();
    this.fetchPAYGData();
  }
}
</script>

<style lang="scss">
@font-face {
        font-family: 'Josefin Sans';
        src: url('../src/assets/fonts/JosefinSans-VariableFont_wght.ttf') format('truetype');
      }
* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: Josefin Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
a {
  color: #fff;
  height: fit-content;
}
.backdrop {
  background-color: #2f2746;
  position: absolute;
  top: 0px;
  left: 0px;
}

.main-scroll__track {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  position: absolute;
  .main-scroll__cell {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    max-height: 100vh;
    overflow-y: hidden;
  }
}
.main-scroll__track.scrollLock {
  overflow-y: hidden;
}

</style>
