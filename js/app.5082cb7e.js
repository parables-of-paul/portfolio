(function(t){function e(e){for(var a,n,l=e[0],s=e[1],i=e[2],d=0,u=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(u.length)u.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],a=!0,l=1;l<o.length;l++){var s=o[l];0!==r[s]&&(a=!1)}a&&(c.splice(e--,1),t=n(n.s=o[0]))}return t}var a={},r={app:0},c=[];function n(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=a,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="//";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var p=s;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},1126:function(t,e,o){"use strict";o("4ebb")},"123a":function(t,e,o){"use strict";o("c085")},"16b4":function(t,e,o){},"1b63":function(t,e,o){},"355a":function(t,e,o){t.exports=o.p+"img/portfolio_profile_photo.3420d360.jpg"},"4cb2":function(t,e,o){"use strict";o("8024")},"4ebb":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var a=o("7a23");const r={class:"backdrop"},c={class:"main-scroll__track"};function n(t,e,o,n,l,s){const i=Object(a["q"])("SvgBackdrop"),p=Object(a["q"])("IntroSplash"),d=Object(a["q"])("ProjectCarousel"),u=Object(a["q"])("ExitPage");return Object(a["l"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",r,[Object(a["i"])(i)]),Object(a["f"])("div",c,[Object(a["i"])(p),(Object(a["l"])(!0),Object(a["e"])(a["a"],null,Object(a["p"])(t.projectDataGetter,t=>(Object(a["l"])(),Object(a["d"])(d,{key:t.projectTitle,projectDataAttr:t},null,8,["projectDataAttr"]))),128)),Object(a["i"])(u)])],64)}const l=t=>(Object(a["n"])("data-v-3dca3eb8"),t=t(),Object(a["m"])(),t),s={class:"splash__page main-scroll__cell"},i=["src"],p=l(()=>Object(a["f"])("h1",{class:"intro-tag"},[Object(a["h"])("Front-end Developer "),Object(a["f"])("br"),Object(a["h"])("Paul Simmonds "),Object(a["f"])("br"),Object(a["h"])("Portfolio")],-1)),d={class:"svg__pointer",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",id:"icons_1_",x:"0",y:"0",version:"1.1",viewBox:"0 0 128 128",style:{filter:"invert(1)",transform:"rotate(90deg)"}},u=l(()=>Object(a["f"])("g",{id:"row1_1_"},[Object(a["f"])("g",{id:"_x31__3_"},[Object(a["f"])("path",{id:"_x32__2_",d:"M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z",class:"st2"})])],-1)),g=[u];function j(t,e,o,r,c,n){return Object(a["l"])(),Object(a["e"])("div",s,[Object(a["f"])("img",{src:this.profilePhoto,class:"splash__profile-image",alt:"paul simmonds profile picture"},null,8,i),p,(Object(a["l"])(),Object(a["e"])("svg",d,g))])}var h={name:"IntroSplash",data(){return{profilePhoto:o("355a")}},methods:{colorShiftIntro(t){if(t[0].isIntersecting>.5){const t=document.querySelectorAll("#svgBackdrop defs linearGradient stop"),e=document.querySelectorAll("#svgBackdrop path");t[0].setAttribute("stop-color","#2f2746"),t[1].setAttribute("stop-color","rgba(0, 69, 158, 1)"),t[2].setAttribute("stop-color","#2f2746"),e.forEach(t=>{t.setAttribute("fill","rgba(20, 89, 164, 0.82)")});const o=document.querySelectorAll(".exit-page__container p"),a=document.querySelectorAll(".exit-page__container h5");o.forEach(t=>{t.style.color="#fff"}),a.forEach(t=>{t.style.color="#fff"})}}},mounted(){let t={rootMargin:"0px",threshold:.8},e=new IntersectionObserver(this.colorShiftIntro,t);const o=document.querySelector(".splash__page");e.observe(o)}},b=(o("c325"),o("6b0d")),f=o.n(b);const m=f()(h,[["render",j],["__scopeId","data-v-3dca3eb8"]]);var y=m;const O=t=>(Object(a["n"])("data-v-6586a25c"),t=t(),Object(a["m"])(),t),v=["id","data-brand-color","data-brand-color-2","data-brand-color-3","data-brand-color-4"],_={class:"svg__pointer",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",id:"icons_1_",x:"0",y:"0",version:"1.1",viewBox:"0 0 128 128",style:{filter:"invert(1)",transform:"rotate(0deg) translate(-50%, -10%)"}},C=O(()=>Object(a["f"])("g",{id:"row1_1_"},[Object(a["f"])("g",{id:"_x31__3_"},[Object(a["f"])("path",{id:"_x32__2_",d:"M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z",class:"st2"})])],-1)),w=[C];function S(t,e,o,r,c,n){const l=Object(a["q"])("OpeningCarouselSlide"),s=Object(a["q"])("DesktopCarouselSlide"),i=Object(a["q"])("MobileCarouselSlide");return Object(a["l"])(),Object(a["e"])("div",{onScroll:e[0]||(e[0]=t=>n.scrollWrapAround(this.projectDataAttr.id)),class:"project-carousel__window main-scroll__cell",id:this.projectDataAttr.id,"data-brand-color":this.projectDataAttr.projectBrandColours[0].hex,"data-brand-color-2":this.projectDataAttr.projectBrandColours[1].hex,"data-brand-color-3":this.projectDataAttr.projectBrandColours[2].hex,"data-brand-color-4":this.projectDataAttr.projectBrandColours[3].hex},[Object(a["i"])(l,{projectData:this.projectDataAttr},null,8,["projectData"]),Object(a["i"])(s,{projectData:this.projectDataAttr},null,8,["projectData"]),Object(a["i"])(i,{projectData:this.projectDataAttr},null,8,["projectData"]),(Object(a["l"])(),Object(a["e"])("svg",_,w))],40,v)}const D={class:"project-carousel__cell",id:"opening"},A={class:"flex-bullets"};function x(t,e,o,r,c,n){const l=Object(a["q"])("SlideHeading");return Object(a["l"])(),Object(a["e"])("div",D,[Object(a["i"])(l,{projectData:this.projectData},null,8,["projectData"]),(Object(a["l"])(!0),Object(a["e"])(a["a"],null,Object(a["p"])(this.projectData.projectDescription.raw.children,t=>(Object(a["l"])(),Object(a["e"])("p",{key:t.children[0].text},Object(a["r"])(t.children[0].text),1))),128)),Object(a["f"])("div",A,[(Object(a["l"])(!0),Object(a["e"])(a["a"],null,Object(a["p"])(this.projectData.projectBulletPoints,t=>(Object(a["l"])(),Object(a["e"])("h4",{key:t},Object(a["r"])(t),1))),128))])])}const k=["href"],P=["src"];function q(t,e,o,r,c,n){return Object(a["l"])(),Object(a["e"])("a",{href:this.projectData.projectLink,target:"_blank"},[Object(a["f"])("img",{src:this.projectData.projectLogo.url},null,8,P)],8,k)}var M={name:"Slide Heading",props:{projectData:Object}};const B=f()(M,[["render",q]]);var L=B,E={name:"OpeningCarouselSlide",props:{projectData:Object},components:{SlideHeading:L}};o("a2a1");const I=f()(E,[["render",x],["__scopeId","data-v-3681badf"]]);var T=I;const H={class:"project-carousel__cell",id:"desktop"},G={class:"desktop-image__wrapper"},N={class:"desktop-image__col"},z=["src","alt"],F={class:"desktop-image__col"},W=["src","alt"];function J(t,e,o,r,c,n){const l=Object(a["q"])("SlideHeading");return Object(a["l"])(),Object(a["e"])("div",H,[Object(a["i"])(l,{projectData:this.projectData},null,8,["projectData"]),Object(a["f"])("div",G,[Object(a["f"])("div",N,[Object(a["f"])("div",{onClick:e[0]||(e[0]=(...t)=>n.toggleImg&&n.toggleImg(...t)),class:"image__modal"},[Object(a["f"])("img",{src:this.projectData.projectScreens[0].url,alt:this.projectData.projectTitle+" desktop screen"},null,8,z)]),Object(a["f"])("h4",null,Object(a["r"])(this.projectData.projectScreens[0].fileName),1)]),Object(a["f"])("div",F,[Object(a["f"])("div",{onClick:e[1]||(e[1]=(...t)=>n.toggleImg&&n.toggleImg(...t)),class:"image__modal"},[Object(a["f"])("img",{src:this.projectData.projectScreens[1].url,alt:this.projectData.projectTitle+" desktop screen"},null,8,W)]),Object(a["f"])("h4",null,Object(a["r"])(this.projectData.projectScreens[1].fileName),1)])])])}var $={name:"DesktopCarouselSlide",props:{projectData:Object},components:{SlideHeading:L},methods:{toggleImg(t){t.target.classList.toggle("active");const e=document.querySelector(".main-scroll__track");e.classList.toggle("scrollLock")}},mounted(){const t=document.querySelectorAll(".desktop-image__col h4");t.forEach(t=>{t.innerHTML.includes(".png")&&(console.log(t.innerHTML),t.innerHTML=t.innerHTML.slice(0,-4))})}};o("c972");const R=f()($,[["render",J],["__scopeId","data-v-258c1e22"]]);var Y=R;const U={class:"project-carousel__cell",id:"mobile"},K={class:"video__wrapper"},Q={class:"mobile__video",autoplay:"",playsinline:"",mute:"",loop:""},V=["src"];function X(t,e,o,r,c,n){const l=Object(a["q"])("SlideHeading");return Object(a["l"])(),Object(a["e"])("div",U,[Object(a["i"])(l,{projectData:this.projectData},null,8,["projectData"]),Object(a["f"])("div",K,[Object(a["f"])("video",Q,[Object(a["f"])("source",{src:this.projectData.projectScreens[2].url,type:"video/mp4"},null,8,V)])])])}var Z={name:"MobileCarouselSlide",props:{projectData:Object},components:{SlideHeading:L}};o("aa92");const tt=f()(Z,[["render",X],["__scopeId","data-v-3c2742d2"]]);var et=tt,ot={name:"ProjectCarousel.vue",components:{OpeningCarouselSlide:T,DesktopCarouselSlide:Y,MobileCarouselSlide:et},props:{projectDataAttr:Object},methods:{scroll(t,e){const o=document.querySelector(".project-carousel__window"),a=document.querySelectorAll(".project-carousel__cell"),r=a.length-1;o.scrollBy({top:0,left:t,behavior:"smooth"}),t<0&&!0===e?o.prepend(a[r]):t>0&&!0===e&&o.append(a[0])},scrollWrapAround(t){const e=document.querySelector("#"+t);let o=document.querySelectorAll(`#${t} .project-carousel__cell`),a=e.scrollLeft,r=Math.abs(a/window.innerWidth);switch(r){case 1:break;case 2:{e.appendChild(o[0]);let t=window.innerWidth;e.scrollTo(t,0);break}case 0:{e.prepend(o[2]);let t=window.innerWidth;e.scrollTo(t,0);break}default:break}},colorShift(t){t.forEach(t=>{if(t.intersectionRatio>.2){const e=document.querySelectorAll("#svgBackdrop defs linearGradient stop"),o=document.querySelectorAll("#svgBackdrop path");e[0].setAttribute("stop-color",t.target.dataset.brandColor),e[1].setAttribute("stop-color",t.target.dataset["brandColor-2"]),e[2].setAttribute("stop-color",t.target.dataset.brandColor),o.forEach(e=>{e.setAttribute("fill",t.target.dataset["brandColor-3"]+"82")});const a=t.target.getAttribute("id"),r=document.querySelectorAll(`#${a} p`),c=document.querySelectorAll(`#${a} h4`);r.forEach(e=>{e.style.color=t.target.dataset["brandColor-4"]}),c.forEach(e=>{e.style.color=t.target.dataset["brandColor-4"]})}})},arrowAnimate(t){console.log("arrow animate fired"),t.forEach(t=>{if(t.intersectionRatio>.2){const t=document.querySelectorAll(".arrowNav .arrow");t.forEach(t=>{t.classList.add("animate")}),console.log("arrow classlist changed")}})}},mounted(){let t={rootMargin:"0px",threshold:.2},e=new IntersectionObserver(this.colorShift,t);const o=document.querySelectorAll(".project-carousel__window");o.forEach(t=>{e.observe(t)})}};o("1126");const at=f()(ot,[["render",S],["__scopeId","data-v-6586a25c"]]);var rt=at;const ct={class:"exit-page__container main-scroll__cell"},nt=Object(a["f"])("h2",null,"Some other sites I have had the pleasure of contributing to:",-1),lt=Object(a["f"])("div",{class:"payg__grid"},null,-1),st=Object(a["f"])("h3",null,"Don't forget to get in touch!",-1),it=Object(a["f"])("h3",null,[Object(a["h"])("07479846119"),Object(a["f"])("br"),Object(a["h"])("paulsimmonds6@googlemail.com")],-1),pt=[nt,lt,st,it];function dt(t,e,o,r,c,n){return Object(a["l"])(),Object(a["e"])("div",ct,pt)}var ut={name:"ExitPage",components:{},data(){return{paygData:[]}},methods:{colorShiftExit(t){if(t[0].isIntersecting>.5){const t=document.querySelectorAll("#svgBackdrop defs linearGradient stop"),e=document.querySelectorAll("#svgBackdrop path");t[0].setAttribute("stop-color","#2f2746"),t[1].setAttribute("stop-color","rgba(0, 69, 158, 1)"),t[2].setAttribute("stop-color","#2f2746"),e.forEach(t=>{t.setAttribute("fill","rgba(20, 89, 164, 0.82)")});const o=document.querySelectorAll(".exit-page__container p"),a=document.querySelectorAll(".exit-page__container h5");o.forEach(t=>{t.style.color="#fff"}),a.forEach(t=>{t.style.color="#fff"})}},async getPaygData(){console.log("gonna go get the datas"),await fetch("https://api-eu-west-2.hygraph.com/v2/cl8yo9jag0cgh01ur9ltf5cdw/master",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'\n                {\n                    paygProject(where: {id: "cl9fyenfi36ne0al8acwmo1q7"}) {\n                      paygClient {\n                        paygClientName\n                        paygLogo {\n                          url\n                        }\n                        paygLink\n                      }\n                    }\n                  }\n                    '})}).then(t=>t.json()).then(t=>{this.paygData=t.data,console.log(this.paygData);const e=document.querySelector(".payg__grid");for(let o=0;o<this.paygData.paygProject.paygClient.length;o++){let t=document.createElement("a");t.setAttribute("href",""+this.paygData.paygProject.paygClient[o].paygLink),t.setAttribute("target","_blank"),t.classList.add("link-col");let a=document.createElement("div"),r=document.createElement("h2"),c=document.createElement("img");a.classList.add("payg__block"),r.innerHTML=this.paygData.paygProject.paygClient[o].paygClientName,c.setAttribute("src",""+this.paygData.paygProject.paygClient[o].paygLogo.url),c.classList.add("payg__logo"),t.appendChild(r),t.appendChild(c),a.appendChild(t),e.appendChild(a)}})}},mounted(){let t={rootMargin:"0px",threshold:.8},e=new IntersectionObserver(this.colorShiftExit,t);const o=document.querySelector(".exit-page__container");e.observe(o)},beforeMount(){this.getPaygData()}};o("123a");const gt=f()(ut,[["render",dt]]);var jt=gt;const ht={xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"100vw",height:"100vh",preserveAspectRatio:"none",viewBox:"0 0 425 897",id:"svgBackdrop"},bt=Object(a["g"])('<rect width="425" height="897" x="0" y="0" fill="url(#SvgjsLinearGradient1180)" data-v-90cced96></rect><path d="M184.761,201.624C215.506,202.095,239.577,178.533,255.056,151.964C270.665,125.172,279.194,92.658,263.989,65.635C248.548,38.194,216.248,27.142,184.761,27.033C153.053,26.924,119.705,37.218,104.58,65.086C89.949,92.044,102.564,123.418,118.096,149.867C133.364,175.867,154.613,201.162,184.761,201.624" fill="rgba(20, 89, 164, 0.82)" class="triangle-float3" data-v-90cced96></path><path d="M30.671,960.455C54.846,959.987,80.444,954.445,92.829,933.678C105.453,912.51,99.747,886.368,87.667,864.884C75.296,842.883,55.912,823.046,30.671,823.137C5.547,823.228,-12.881,843.636,-25.617,865.293C-38.585,887.344,-48.828,914.153,-35.804,936.171C-22.932,957.933,5.392,960.945,30.671,960.455" fill="rgba(20, 89, 164, 0.82)" class="triangle-float1" data-v-90cced96></path><path d="M371.826,623.197C409.44,620.512,438.014,591.87,454.989,558.197C470.179,528.065,468.394,493.385,452.184,463.789C435.233,432.84,407.012,409.03,371.826,406.359C331.455,403.294,289.073,415.712,267.134,449.74C243.512,486.379,242.671,534.423,265.197,571.746C287.054,607.959,329.635,626.209,371.826,623.197" fill="rgba(20, 89, 164, 0.82)" class="triangle-float2" data-v-90cced96></path><path d="M424.777,395.412C460.466,394.293,490.32,369.711,506.507,337.884C521.235,308.926,517.252,274.805,500.171,247.169C484.004,221.012,455.52,206.319,424.777,205.65C392.707,204.952,361.185,217.011,343.479,243.76C323.754,273.559,316.775,311.808,333.659,343.304C351.377,376.354,387.295,396.587,424.777,395.412" fill="rgba(20, 89, 164, 0.82)" class="triangle-float3" data-v-90cced96></path><path d="M275.711,905.157C318.128,904.672,362.695,893.243,384.06,856.596C405.547,819.74,396.127,773.741,373.355,737.665C352.193,704.14,315.35,684.24,275.711,684.946C237.281,685.63,204.793,708.771,183.909,741.039C160.629,777.009,142.063,821.732,162.98,859.126C184.217,897.093,232.211,905.655,275.711,905.157" fill="rgba(20, 89, 164, 0.82)" class="triangle-float1" data-v-90cced96></path><path d="M23.923,451.241C40.172,451.742,56.38,444.395,64.257,430.174C71.932,416.317,68.137,399.651,60.039,386.036C52.152,372.776,39.347,362.006,23.923,362.363C8.981,362.709,-2.169,374.568,-9.409,387.643C-16.379,400.23,-18.996,415.067,-12.317,427.811C-5.16,441.467,8.512,450.765,23.923,451.241" fill="rgba(20, 89, 164, 0.82)" class="triangle-float2" data-v-90cced96></path><path d="M397.138,944.066C417.503,943.862,437.667,936.151,448.198,918.719C459.069,900.725,458.941,877.827,448,859.875C437.468,842.594,417.358,834.119,397.138,834.939C378.312,835.703,362.921,847.741,352.956,863.731C342.242,880.922,334.515,902.011,344.276,919.76C354.293,937.974,376.352,944.274,397.138,944.066" fill="rgba(20, 89, 164, 0.82)" class="triangle-float3" data-v-90cced96></path><path d="M387.225,482.553C401.644,481.94,412.64,470.994,419.546,458.322C426.109,446.278,427.864,432.032,421.33,419.972C414.486,407.341,401.556,399.665,387.225,398.668C370.734,397.521,352.261,400.39,343.775,414.577C335.137,429.017,340.704,447.113,349.766,461.29C358.054,474.256,371.85,483.207,387.225,482.553" fill="rgba(20, 89, 164, 0.82)" class="triangle-float1" data-v-90cced96></path><defs data-v-90cced96><linearGradient x1="-27.76%" y1="13.15%" x2="127.76%" y2="86.85%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1180" data-v-90cced96><stop stop-color="#2f2746" offset="0" data-v-90cced96></stop><stop stop-color="rgba(0, 69, 158, 1)" offset="0.56" data-v-90cced96></stop><stop stop-color="#2f2746" offset="1" data-v-90cced96></stop></linearGradient></defs>',10),ft=[bt];function mt(t,e,o,r,c,n){return Object(a["l"])(),Object(a["e"])("svg",ht,ft)}var yt=o("5502"),Ot={name:"SvgBackdrop",computed:Object(yt["c"])(["projectData"]),mounted(){if(!(window.innerWidth<769)){const t=document.getElementById("svgBackdrop"),e=document.querySelector("#svgBackdrop rect"),o=document.querySelectorAll("#svgBackdrop rect path");t.setAttribute("viewBox",`0 0 ${window.innerWidth} ${window.innerHeight}`),e.setAttribute("width",""+window.innerWidth),e.setAttribute("height",""+window.innerHeight),o.forEach(t=>{t.style.transform="translate(400px, 0px)"})}}};o("4cb2");const vt=f()(Ot,[["render",mt],["__scopeId","data-v-90cced96"]]);var _t=vt,Ct={name:"App",components:{IntroSplash:y,ProjectCarousel:rt,ExitPage:jt,SvgBackdrop:_t},methods:{...Object(yt["b"])(["fetchProjectData","fetchPAYGData"])},computed:Object(yt["c"])(["projectDataGetter"]),beforeMount(){this.fetchProjectData(),this.fetchPAYGData()}};o("d061");const wt=f()(Ct,[["render",n]]);var St=wt;const Dt={projectData:[]},At={projectDataGetter:t=>t.projects},xt={async fetchProjectData({commit:t}){await fetch("https://api-eu-west-2.hygraph.com/v2/cl8yo9jag0cgh01ur9ltf5cdw/master",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n                {\n                    projects {\n                      projectTitle\n                      projectBulletPoints\n                      projectLink\n                      projectScreens {\n                        url\n                        handle\n                        fileName\n                      }\n                      projectDescription {\n                        text\n                        raw\n                      }\n                      projectBrandColours {\n                        hex\n                        rgba {\n                          a\n                          b\n                          g\n                          r\n                        }\n                      }\n                      projectLogo {\n                        url\n                      }\n                      id\n                    }\n                  }\n                    "})}).then(t=>t.json()).then(e=>{t("projectDataFetched",e.data)})}},kt={projectDataFetched:(t,e)=>{t.projects=e.projects}};var Pt={state:Dt,getters:At,actions:xt,mutations:kt};const qt={paygProject:[]},Mt={paygProjectGetter:t=>t.paygProject},Bt={async fetchPAYGData({commit:t}){await fetch("https://api-eu-west-2.hygraph.com/v2/cl8yo9jag0cgh01ur9ltf5cdw/master",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'\n                {\n                    paygProject(where: {id: "cl9fyenfi36ne0al8acwmo1q7"}) {\n                      paygClient {\n                        paygClientName\n                        paygLogo {\n                          url\n                        }\n                      }\n                    }\n                  }\n                    '})}).then(t=>t.json()).then(e=>{t("paygProjectsFetched",e.data)})}},Lt={paygProjectsFetched:(t,e)=>{t.paygProject=e}};var Et={state:qt,getters:Mt,actions:Bt,mutations:Lt};const It={pageContent:[]},Tt={pageContent:t=>t.page},Ht={async pageContentFetched({commit:t}){await fetch("https://api-eu-west-2.hygraph.com/v2/cl8yo9jag0cgh01ur9ltf5cdw/master",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'{\n          pageContent(where: {id: "cl976s4za03zf0bjq78w98yay"}) {\n            pageTextImage {\n              sectionBody {\n                text\n              }\n              sectionImage {\n                url\n              }\n            }\n          }\n        }'})}).then(t=>t.json()).then(e=>{t("pageContentFetched",e.data)})}},Gt={pageContentFetched:(t,e)=>{t.pageContent=e.page}};var Nt={state:It,getters:Tt,actions:Ht,mutations:Gt},zt=Object(yt["a"])({state:{},mutations:{},actions:{},modules:{projectData:Pt,paygProject:Et,pageContent:Nt}});Object(a["c"])(St).use(zt).mount("#app")},"7f32":function(t,e,o){},8024:function(t,e,o){},"99ce":function(t,e,o){},a2a1:function(t,e,o){"use strict";o("99ce")},aa92:function(t,e,o){"use strict";o("1b63")},c085:function(t,e,o){},c325:function(t,e,o){"use strict";o("7f32")},c972:function(t,e,o){"use strict";o("16b4")},cf9a:function(t,e,o){},d061:function(t,e,o){"use strict";o("cf9a")}});
//# sourceMappingURL=app.5082cb7e.js.map