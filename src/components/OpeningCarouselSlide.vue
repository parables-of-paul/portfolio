<template>
<div class="project-carousel__cell" id="opening">
  <SlideHeading :projectData="this.projectData" />
  <p v-for="paragraph in this.projectData.projectDescription.raw.children" :key="paragraph.children[0].text">{{paragraph.children[0].text}}</p>
  <div class="flex-bullets">
    <h4 v-for="bullet in this.projectData.projectBulletPoints" :key="bullet">{{bullet}}</h4>
  </div>
</div>
</template>

<script>
import SlideHeading from './SlideHeading.vue'

export default {
    name: "OpeningCarouselSlide",
    props: {
        projectData: Object
    },
    components: {
        SlideHeading
    }
}
</script>

<style lang="scss" scoped>
    .flex-bullets {
        @media screen and (min-width: 769px){
            margin: 0 auto;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
            gap: 30px;
            margin-top: 50px;
        }
        h4 {
            flex: 0 0 30%;
        }
        @media screen and (max-width: 768px){
            margin: 0 auto;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-top: 100px;
        }
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