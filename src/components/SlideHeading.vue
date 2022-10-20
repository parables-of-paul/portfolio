<template>
<a :href="this.projectData.projectLink" target="_blank"><img :src="this.projectData.projectLogo.url" /></a>  
</template>

<script>
export default {
name: "Slide Heading",
props: {
    projectData: Object
}
}
</script>

<style>

</style>