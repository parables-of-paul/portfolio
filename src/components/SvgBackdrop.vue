<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="100vw" height="100vh" preserveAspectRatio="none" viewBox="0 0 425 897" id="svgBackdrop">
        <rect width="425" height="897" x="0" y="0" fill="url(#SvgjsLinearGradient1180)"></rect>
        <path d="M184.761,201.624C215.506,202.095,239.577,178.533,255.056,151.964C270.665,125.172,279.194,92.658,263.989,65.635C248.548,38.194,216.248,27.142,184.761,27.033C153.053,26.924,119.705,37.218,104.58,65.086C89.949,92.044,102.564,123.418,118.096,149.867C133.364,175.867,154.613,201.162,184.761,201.624" fill="rgba(20, 89, 164, 0.82)" class="triangle-float3"></path>
        <path d="M30.671,960.455C54.846,959.987,80.444,954.445,92.829,933.678C105.453,912.51,99.747,886.368,87.667,864.884C75.296,842.883,55.912,823.046,30.671,823.137C5.547,823.228,-12.881,843.636,-25.617,865.293C-38.585,887.344,-48.828,914.153,-35.804,936.171C-22.932,957.933,5.392,960.945,30.671,960.455" fill="rgba(20, 89, 164, 0.82)" class="triangle-float1"></path>
        <path d="M371.826,623.197C409.44,620.512,438.014,591.87,454.989,558.197C470.179,528.065,468.394,493.385,452.184,463.789C435.233,432.84,407.012,409.03,371.826,406.359C331.455,403.294,289.073,415.712,267.134,449.74C243.512,486.379,242.671,534.423,265.197,571.746C287.054,607.959,329.635,626.209,371.826,623.197" fill="rgba(20, 89, 164, 0.82)" class="triangle-float2"></path>
        <path d="M424.777,395.412C460.466,394.293,490.32,369.711,506.507,337.884C521.235,308.926,517.252,274.805,500.171,247.169C484.004,221.012,455.52,206.319,424.777,205.65C392.707,204.952,361.185,217.011,343.479,243.76C323.754,273.559,316.775,311.808,333.659,343.304C351.377,376.354,387.295,396.587,424.777,395.412" fill="rgba(20, 89, 164, 0.82)" class="triangle-float3"></path>
        <path d="M275.711,905.157C318.128,904.672,362.695,893.243,384.06,856.596C405.547,819.74,396.127,773.741,373.355,737.665C352.193,704.14,315.35,684.24,275.711,684.946C237.281,685.63,204.793,708.771,183.909,741.039C160.629,777.009,142.063,821.732,162.98,859.126C184.217,897.093,232.211,905.655,275.711,905.157" fill="rgba(20, 89, 164, 0.82)" class="triangle-float1"></path>
        <path d="M23.923,451.241C40.172,451.742,56.38,444.395,64.257,430.174C71.932,416.317,68.137,399.651,60.039,386.036C52.152,372.776,39.347,362.006,23.923,362.363C8.981,362.709,-2.169,374.568,-9.409,387.643C-16.379,400.23,-18.996,415.067,-12.317,427.811C-5.16,441.467,8.512,450.765,23.923,451.241" fill="rgba(20, 89, 164, 0.82)" class="triangle-float2"></path>
        <path d="M397.138,944.066C417.503,943.862,437.667,936.151,448.198,918.719C459.069,900.725,458.941,877.827,448,859.875C437.468,842.594,417.358,834.119,397.138,834.939C378.312,835.703,362.921,847.741,352.956,863.731C342.242,880.922,334.515,902.011,344.276,919.76C354.293,937.974,376.352,944.274,397.138,944.066" fill="rgba(20, 89, 164, 0.82)" class="triangle-float3"></path>
        <path d="M387.225,482.553C401.644,481.94,412.64,470.994,419.546,458.322C426.109,446.278,427.864,432.032,421.33,419.972C414.486,407.341,401.556,399.665,387.225,398.668C370.734,397.521,352.261,400.39,343.775,414.577C335.137,429.017,340.704,447.113,349.766,461.29C358.054,474.256,371.85,483.207,387.225,482.553" fill="rgba(20, 89, 164, 0.82)" class="triangle-float1"></path>
    <defs>
        <linearGradient x1="-27.76%" y1="13.15%" x2="127.76%" y2="86.85%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1180">
            <stop stop-color="#2f2746" offset="0"></stop>
            <stop stop-color="rgba(0, 69, 158, 1)" offset="0.56"></stop>
            <stop stop-color="#2f2746" offset="1"></stop>
        </linearGradient>
    </defs>
</svg>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SvgBackdrop',
    computed: mapGetters(['projectData']),
    mounted(){
        if(window.innerWidth < 769){
            return
        } else {
            const svg = document.getElementById('svgBackdrop');
            const rect = document.querySelector('#svgBackdrop rect');
            const paths = document.querySelectorAll('#svgBackdrop rect path');
            svg.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
            rect.setAttribute('width', `${window.innerWidth}`);
            rect.setAttribute('height', `${window.innerHeight}`);
            paths.forEach(path => {
                path.style.transform = 'translate(400px, 0px)';
            })
        }
    }
}
</script>

<style scoped>
path {
    transition: fill 0.5s;
}
linearGradient stop {
    transition: stopColor 0.5s;
}
@media screen and (min-width: 769px){
    .triangle-float1 {
        position: absolute;
        left: 50%;
    }
    .triangle-float2 {
        position: absolute;
        left: 75%;
    }
}
@keyframes float1 {
                0%{
                    transform: translate(0, 0);
                    opacity: 1;
                    }
                50%{
                    transform: translate(-8px, 8px);
                    opacity: 0;
                }
                100%{
                    transform: translate(0, 0);
                    opacity: 1;
                    }
            }

            .triangle-float1 {
                animation: float1 5s 0s infinite;
            }

            @keyframes float2 {
                0%{transform: translate(0, 0);opacity: 1;}
                50%{transform: translate(8px, 0px);opacity: 0;}
                100%{transform: translate(0, 0); opacity: 1;}
            }

            .triangle-float2 {
                animation: float2 5s 0.5s infinite;
            }

            @keyframes float3 {
                0%{transform: translate(0, 0); opacity: 1;}
                50%{transform: translate(0, -2px); opacity: 0;}
                100%{transform: translate(0, 0); opacity: 1;}
            }

            .triangle-float3 {
                animation: float3 5s 1.5s infinite ease-in-out;
            }
</style>