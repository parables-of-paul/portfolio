<template>
<div class="project-carousel__cell" id="mobile">
  <SlideHeading :projectData="this.projectData" />
  <div class="video__wrapper">
    <video class="mobile__video" autoplay playsinline mute loop>
      <source :src="this.projectData.projectScreens[2].url" type="video/mp4">
    </video>
  </div>
</div>
</template>

<script>
import SlideHeading from './SlideHeading.vue'
export default {
    name: "MobileCarouselSlide",
    props: {
        projectData: Object
    },
    components: {
        SlideHeading
    }
}
</script>

<style lang="scss" scoped>
.mobile__video {
    border-radius: 45px;
    height: 80vh;
    width: auto;
}
.button__wrapper {
        width: 100vw;
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translate(0%, -50%);
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        svg {
            height: 45px;
            width: 45px;
            padding: 10px;
        }
    }
</style>