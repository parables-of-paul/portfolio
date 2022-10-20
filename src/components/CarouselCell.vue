<template>
    <div class="project-carousel__cell" :id="this.projectDataAttr.projectTitle" :data-brand-color="this.projectDataAttr.projectBrandColours[0].hex" :data-brand-color-2="this.projectDataAttr.projectBrandColours[1].hex" :data-brand-color-3="this.projectDataAttr.projectBrandColours[2].hex">
    <div class="button__wrapper">
        <svg @click="scroll(-20, true)" version="1.1" id="btn--prev" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128; transform: rotate(180deg);" xml:space="preserve"><g id="row1_1_"><g id="_x31__3_"><path class="st2" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" id="_x32__2_"/></g></g></svg>
        <svg @click="scroll(20, true)" version="1.1" id="btn--next" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve"><g id="row1_1_"><g id="_x31__3_"><path class="st2" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" id="_x32__2_"/></g></g></svg>
    </div>
    <img :src="this.projectDataAttr.projectScreens[0].url" class="project-screen__image--desktop" alt="Project Screenshot" />
    <img :src="this.projectDataAttr.projectScreens[1].url" class="project-screen__image--desktop" alt="Project Screenshot" />
    <video class="project-screen__image--mobile" autoplay mute loop playsinline controls >
        <source :src="this.projectDataAttr.projectScreens[2].url" type="video/mp4">
    </video>
    <a :href="this.projectDataAttr.projectLink" targe="_blank" class="project__title--link"><h2 class="project__title">{{this.projectDataAttr.projectTitle}}</h2></a>
    <img src="this.projectDataAttr.projectLogo.url" class="brand_logo" />
    <div class="project-carousel__description">
        <p>{{this.projectDataAttr.projectDescription.text}}</p>
    </div>
    <ul class="project-carousel__bullet-points">
        <li v-for="point in this.projectDataAttr.projectBulletPoints" :key="point" class="project-carousel__bullet-point--item">{{point}}</li>
    </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'CarouselCell',
    computed: mapGetters(['projectData']),
    methods: {
        scroll(scrollVal){
            const projectWindow = document.querySelector('.project-carousel__window');
            const carouselCells = document.querySelectorAll('.project-carousel__cell');
            const lastCell = carouselCells.length - 1;
            projectWindow.scrollBy({
                top: 0,
                left: scrollVal,
                behavior: 'smooth'
            });
            if(scrollVal < 0){
                projectWindow.prepend(carouselCells[lastCell])
            } else {
            projectWindow.append(carouselCells[0]);
            }
        },
    colorShift(cell){
        cell.forEach(entry => {
            if(entry.intersectionRatio == 1.0){
            console.log('is intersecting');
            const allStops = document.querySelectorAll('#svgBackdrop defs linearGradient stop');
            const allPaths = document.querySelectorAll('#svgBackdrop path');
            allStops[0].setAttribute('stop-color', entry.target.dataset.brandColor);
            allStops[1].setAttribute('stop-color', entry.target.dataset["brandColor-2"]);
            allStops[2].setAttribute('stop-color', entry.target.dataset.brandColor);
            allPaths.forEach(path => {
                path.setAttribute('fill', `${entry.target.dataset["brandColor-3"]}82`);
            })
            const allBtns = document.querySelectorAll('.button__wrapper svg path');
            allBtns.forEach(btn => {
                btn.style.fill = entry.target.dataset["brandColor-3"];
            });
        } else {
            console.log('not intersecting');
        }
        })
        
    }
    },
    props: {
        projectDataAttr: Object
    },
mounted(){
    console.log('updated fired');
    let options = {
        rootMargin: '0px',
        threshold: 1.0
    }
    let observer = new IntersectionObserver(this.colorShift, options);
    const allCells = document.querySelectorAll('.project-carousel__cell');
    allCells.forEach(cell => {
        observer.observe(cell);
    })
}
}
</script>

<style lang="scss" scoped>

svg path {
    fill: #fff;
}
.project-carousel__window {
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    display: flex;
    width: 100%;
    background-attachment: fixed;
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
    .project-carousel__cell {
        scroll-snap-align: start;
        min-width: 100vw;
        height: 100vh;
        position: relative;
        scroll-snap-stop: always;
        display: grid;
        padding: 20px 10%;
        .project-screen__image--desktop {
        width: 100%;
        height: auto;
    }
        // START MOBILE GRID RULES
        @media screen and (max-width: 768px){
        grid-template-columns: repeat(5, 20%);
        grid-template-rows: repeat(10, 10%);
        grid-gap: 5px 0px;
        .project-screen__image--desktop {
            border-radius: 30px;
        }
        .project-screen__image--desktop:nth-of-type(1) {
            grid-column: 1 / 6;
            grid-row: 1 / 3;
            z-index: 4;
        }
        .project-screen__image--desktop:nth-of-type(2){
            grid-column: 1 / 6;
            grid-row: 3 / 6;
            z-index: 4;
        }
        .project-screen__image--mobile {
            grid-column: 4 / 6;
            grid-row: 4 / 6;
            z-index: 5;
            border-radius: 20px;
            width: 100%;
            height: auto;
        }
        .project__title--link {
            grid-column: 1 / 4;
            grid-row: 6 / 7;
            text-align: left;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
        }
        .project-carousel__description {
            grid-column: 1 / 4;
            grid-row: 7 / 10;
            text-align: left;
            font-size: 14px;
            font-size: 16px;
            max-height: 20vh;
            overflow-y: scroll;
        }
        .project-carousel__bullet-points {
            grid-column: 1 / 6;
            grid-row: 9 / 11;
            list-style: none;
            display: flex;
            flex-flow: row nowrap;
            padding-left: 0px;
            gap: 0px 15px;
            justify-content:space-evenly;
            align-items: center;
            li {
                font-size: 14px;
                flex: 0 0 calc(33% - 15px);
            }
        }
    }
    }
    // END OF MOBILE GRID RULES

        .project-carousel__cell {
            @media screen and (min-width: 769px){
            display: grid;
            grid-template-rows: repeat(5, 20%);
            grid-template-columns: repeat(10, 10%);
            grid-gap: 0px 15px;
            .project-screen__image--mobile {
                border-radius: 50px;
                grid-column: 1 / 4;
                grid-row: 1 / 6;
            }
            .project-screen__image--desktop {
                border-radius: 30px;
            }
            .project-screen__image--desktop:nth-of-type(1) {
                grid-row: 1 / 3;
                grid-column: 4 / 8;
            }
            .project-screen__image--desktop:nth-of-type(2){
                grid-row: 3 / 6;
                grid-column: 4 / 8;
            }
            .project__title--link {
                grid-column: 8 / 11;
                grid-row: 1 / 2;
            }
            .project-carousel__description {
                grid-column: 8 / 11;
                grid-row: 2 / 5;
                text-align: center;
                padding: 0px 15px;
            }
            .project-carousel__bullet-points {
                grid-column: 4 / 11;
                grid-row: 5 / 6;
                display: flex;
                flex-flow: row nowrap;
                gap: 20px;
                justify-content: center;
                align-items: center;
            }
        }
    }
    //START DESKTOP GRID RULES

}
</style>