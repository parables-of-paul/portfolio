<template>
<div class="project-carousel__cell" id="desktop">
  <SlideHeading :projectData="this.projectData" />
  <div class="desktop-image__wrapper">
    <div class="desktop-image__col">
        <div @click="toggleImg" class="image__modal">
            <img :src="this.projectData.projectScreens[0].url" :alt="this.projectData.projectTitle + ' desktop screen'" />
        </div>
        <h4>{{this.projectData.projectScreens[0].fileName}}</h4>
    </div>
    <div class="desktop-image__col">
        <div @click="toggleImg" class="image__modal">
            <img :src="this.projectData.projectScreens[1].url" :alt="this.projectData.projectTitle + ' desktop screen'" />
        </div>
        <h4>{{this.projectData.projectScreens[1].fileName}}</h4>
    </div>
  </div>
</div>
</template>

<script>

import SlideHeading from './SlideHeading.vue'

export default {
    name: "DesktopCarouselSlide",
    props: {
        projectData: Object
    },
    components: {
        SlideHeading
    },
    methods: {
        toggleImg(event){
            event.target.classList.toggle('active');
            const mainScroll = document.querySelector('.main-scroll__track');
            mainScroll.classList.toggle('scrollLock');
        }
    },
    mounted(){
        const allCaptions = document.querySelectorAll('.desktop-image__col h4');
        allCaptions.forEach(caption => {
            if(caption.innerHTML.includes('.png')){
            console.log(caption.innerHTML);
            caption.innerHTML = caption.innerHTML.slice(0, -4);
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .desktop-image__wrapper {
        display: flex;
        @media screen and (min-width: 769px){
        flex-flow: row nowrap;
        gap: 0px 50px;
        }
        @media screen and (max-width: 768px){
            flex-flow: column nowrap;
            height: 100%;
        }
        justify-content: space-evenly;
        align-items: center;
        .desktop-image__col {
            display: flex;
            flex-flow: column nowrap;
            max-height: 80vh;
            gap: 15px;
            justify-content: center;
        }
    }
    .image__modal {
        @media screen and (min-width: 769px){
            height: 450px;
            object-fit: cover;
            object-position: 0% 50%;
            overflow-y: hidden;
            border-radius: 30px;
            &.active {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 90vw;
                height: 90vh;
                overflow-y: scroll;
            }
        }
        @media screen and (max-width: 768px){
            height: 250px;
            object-fit: cover;
            object-position: 0% 50%;
            border-radius: 30px;
            overflow-y: hidden;
            border-radius: 30px;
            &.active {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 90vw;
                height: 90vh;
                overflow-y: scroll;
            }
        }
    }
    .image__modal img {
        @media screen and (min-width: 769px){
            width: 100%;
            height: auto;
            pointer-events: none;
        }
        @media screen and (max-width: 768px){
            width: 100%;
            height: auto;
            pointer-events: none;
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