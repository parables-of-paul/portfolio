<template>
<div @scroll="scrollWrapAround(this.projectDataAttr.id)" class="project-carousel__window main-scroll__cell" :id="this.projectDataAttr.id" :data-brand-color="this.projectDataAttr.projectBrandColours[0].hex" :data-brand-color-2="this.projectDataAttr.projectBrandColours[1].hex" :data-brand-color-3="this.projectDataAttr.projectBrandColours[2].hex" :data-brand-color-4="this.projectDataAttr.projectBrandColours[3].hex">
<OpeningCarouselSlide :projectData="this.projectDataAttr" />
<DesktopCarouselSlide :projectData="this.projectDataAttr" />
<MobileCarouselSlide :projectData="this.projectDataAttr" />
<svg class="svg__pointer" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="icons_1_" x="0" y="0" version="1.1" viewBox="0 0 128 128" style="filter: invert(1); transform: rotate(0deg) translate(-50%, -10%);">
  <g id="row1_1_">
    <g id="_x31__3_">
      <path id="_x32__2_" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" class="st2"/>
    </g>
  </g>
</svg>
</div>
</template>

<script>
import OpeningCarouselSlide from './OpeningCarouselSlide.vue'
import DesktopCarouselSlide from './DesktopCarouselSlide.vue'
import MobileCarouselSlide from './MobileCarouselSlide.vue'

export default {
    name: "ProjectCarousel.vue",
    components: {
        OpeningCarouselSlide,
        DesktopCarouselSlide,
        MobileCarouselSlide
    },
    data(){
        return {
            arrowImg: require('../assets/images/arrow.png')
        }
    },
    props: {
        projectDataAttr: Object
    },
    methods: {
        scroll(scrollVal, clicked){
            const projectWindow = document.querySelector('.project-carousel__window');
            const carouselCells = document.querySelectorAll('.project-carousel__cell');
            const lastCell = carouselCells.length - 1;
            projectWindow.scrollBy({
                top: 0,
                left: scrollVal,
                behavior: 'smooth'
            });
            if(scrollVal < 0 && clicked === true){
                projectWindow.prepend(carouselCells[lastCell])
            } else if(scrollVal > 0 && clicked === true) {
            projectWindow.append(carouselCells[0]);
            }

        },
        scrollWrapAround(windowID) {
            const projectWindow = document.querySelector(`#${windowID}`);
            let carouselCells = document.querySelectorAll(`#${windowID} .project-carousel__cell`);
            let carouselScrollVal = projectWindow.scrollLeft;
            let whichSlideAreWeOn = Math.abs(carouselScrollVal / window.innerWidth);
            switch(whichSlideAreWeOn){
                case 1: {
                    break;
                }
                case 2: {
                    projectWindow.appendChild(carouselCells[0]);
                    let scrollToVal = window.innerWidth;
                    projectWindow.scrollTo(scrollToVal, 0);
                    break;
                }
                case 0: {
                    projectWindow.prepend(carouselCells[2]);
                    let scrollToVal = window.innerWidth;
                    projectWindow.scrollTo(scrollToVal, 0);
                    break
                }
                default: {
                    break;
                }
            }
    },
    colorShift(cell){
        cell.forEach(entry => {
            if(entry.intersectionRatio > 0.2){
            const allStops = document.querySelectorAll('#svgBackdrop defs linearGradient stop');
            const allPaths = document.querySelectorAll('#svgBackdrop path');
            allStops[0].setAttribute('stop-color', entry.target.dataset.brandColor);
            allStops[1].setAttribute('stop-color', entry.target.dataset["brandColor-2"]);
            allStops[2].setAttribute('stop-color', entry.target.dataset.brandColor);
            allPaths.forEach(path => {
                path.setAttribute('fill', `${entry.target.dataset["brandColor-3"]}82`);
            })
            const intersectingID = entry.target.getAttribute('id');
            const allP = document.querySelectorAll(`#${intersectingID} p`);
            const allh4 = document.querySelectorAll(`#${intersectingID} h4`);
            allP.forEach(paragraph => {
                paragraph.style.color = entry.target.dataset["brandColor-4"];
            })
            allh4.forEach(h4 => {
                h4.style.color = entry.target.dataset["brandColor-4"];
            })
        }
        })
    },
    arrowAnimate(cell){
        console.log('arrow animate fired');
        cell.forEach(entry => {
            if(entry.intersectionRatio > 0.2){
                const allArrows = document.querySelectorAll('.arrowNav .arrow');
                allArrows.forEach(arrow => {
                    arrow.classList.add('animate');
                });
                console.log('arrow classlist changed');
            }
        })
    }
},
mounted(){
    let options = {
        rootMargin: '0px',
        threshold: 0.2
    }
    let observer = new IntersectionObserver(this.colorShift, options);
    const allCells = document.querySelectorAll('.project-carousel__window');
    allCells.forEach(cell => {
        observer.observe(cell);
    })
}
} // end of script export
</script>

<style lang="scss" scoped>
.project-carousel__window {
    position: relative;
    .svg__pointer {
    max-width: 45px;
    max-height: 45px;
    object-fit: contain;
    position: absolute;
    bottom: 0px;
    left: 50%;
  }
}
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
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        padding: 20px 10%;
    }
    //START DESKTOP GRID RULES
    p, h4 {
        transition: color 1s ease-in;
    }
}
</style>