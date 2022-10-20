<template>
  <div class="splash__page main-scroll__cell">
    <img :src="this.profilePhoto" class="splash__profile-image" alt="paul simmonds profile picture"/>
    <h1 class="intro-tag">Front-end Developer
      <br>Paul Simmonds
      <br>Portfolio</h1>
      <svg class="svg__pointer" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="icons_1_" x="0" y="0" version="1.1" viewBox="0 0 128 128" style="filter: invert(1); transform: rotate(90deg);">
  <g id="row1_1_">
    <g id="_x31__3_">
      <path id="_x32__2_" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" class="st2"/>
    </g>
  </g>
</svg>
  </div>
</template>

<script>
export default {
  name: 'IntroSplash',
  data(){
    return {
      profilePhoto: require('../assets/images/portfolio_profile_photo.jpg')
    }
  },
  methods: {
      colorShiftIntro(introPage){
        if(introPage[0].isIntersecting > 0.5){
        const allStops = document.querySelectorAll('#svgBackdrop defs linearGradient stop');
        const allPaths = document.querySelectorAll('#svgBackdrop path');
        allStops[0].setAttribute('stop-color', '#2f2746');
        allStops[1].setAttribute('stop-color', 'rgba(0, 69, 158, 1)');
        allStops[2].setAttribute('stop-color', '#2f2746');
        allPaths.forEach(path => {
            path.setAttribute('fill', `rgba(20, 89, 164, 0.82)`);
        })
        const paragraphs = document.querySelectorAll('.exit-page__container p');
        const heading = document.querySelectorAll('.exit-page__container h5');
        paragraphs.forEach(paragraph => {
          paragraph.style.color = '#fff';
          });
        heading.forEach(h5 => {
          h5.style.color = '#fff';
          });
        }
    }
    },
    mounted(){
      let optionsExit = {
        rootMargin: '0px',
        threshold: 0.8
    }
    let observer = new IntersectionObserver(this.colorShiftIntro, optionsExit);
    const introPage = document.querySelector('.splash__page');
    observer.observe(introPage);
    }
}
</script>

<style lang="scss" scoped>
  .splash__page {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 30px;
    .intro-tag {
      @media screen and (max-width: 768px){
        font-size: 22px;

      }
    }
    .splash__profile-image {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border: solid 2px #fff;
        padding: 15px;
        margin-bottom: 30px;
    }
  }
  .svg__pointer {
    max-width: 45px;
    max-height: 45px;
    object-fit: contain;
    position: absolute;
    bottom: 0px;
  }
</style>