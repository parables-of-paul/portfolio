<template>
<div class="exit-page__container main-scroll__cell">
  <h2>Some other sites I have had the pleasure of contributing to:</h2>
  <div class="payg__grid">
  </div>
  <h3>Don't forget to get in touch!</h3>
  <h3>07479846119<br>paulsimmonds6@googlemail.com</h3>
</div>
</template>

<script>

export default {
    name: 'ExitPage',
    components: {
    },
    data() {
      return {
        paygData: []
      }
    },
    methods: {
      colorShiftExit(exitPage){
        if(exitPage[0].isIntersecting > 0.5){
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
      },
      async getPaygData(){
        console.log('gonna go get the datas');
        await fetch('https://api-eu-west-2.hygraph.com/v2/cl8yo9jag0cgh01ur9ltf5cdw/master', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                query: `
                {
                    paygProject(where: {id: "cl9fyenfi36ne0al8acwmo1q7"}) {
                      paygClient {
                        paygClientName
                        paygLogo {
                          url
                        }
                        paygLink
                      }
                    }
                  }
                    `
                })
            })
            .then(res => res.json())
            .then(data => {
              this.paygData = data.data
              console.log(this.paygData);
              const client_grid = document.querySelector('.payg__grid');
              for(let i = 0; i < this.paygData.paygProject.paygClient.length; i++){
                let clientLink = document.createElement('a');
                clientLink.setAttribute('href', `${this.paygData.paygProject.paygClient[i].paygLink}`);
                clientLink.setAttribute('target', '_blank');
                clientLink.classList.add('link-col');
                let clientBlock = document.createElement('div')
                let clientName = document.createElement('h2');
                let clientLogo = document.createElement('img');
                clientBlock.classList.add('payg__block');
                clientName.innerHTML = this.paygData.paygProject.paygClient[i].paygClientName;
                clientLogo.setAttribute('src', `${this.paygData.paygProject.paygClient[i].paygLogo.url}`);
                clientLogo.classList.add('payg__logo');
                clientLink.appendChild(clientName);
                clientLink.appendChild(clientLogo);
                clientBlock.appendChild(clientLink);
                client_grid.appendChild(clientBlock);
                }
      })
    }
    },
    mounted(){
      let optionsExit = {
        rootMargin: '0px',
        threshold: 0.8
    }
    let observer = new IntersectionObserver(this.colorShiftExit, optionsExit);
    const exitPage = document.querySelector('.exit-page__container');
    observer.observe(exitPage);
    },
    beforeMount() {
      this.getPaygData()
    }
}
</script>

<style>
.exit-page__container h3 {
  margin-bottom: 20px;
}
.exit-page__container {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.payg__grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 50px 0px;
}
.payg__block {
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  max-width: 25vw;
  align-items: center;
  gap: 20px 0px;
}
@media screen and (min-width: 769px){
.payg__block img {
  width: 50%;
  height: auto;
}
}
@media screen and (max-width: 768px){
.payg__block img {
  width: 100%;
  height: auto;
}
}
.link-col {
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
}
</style>