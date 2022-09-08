<template>
    <div>
        <TheHeader />
        <Demo />
        <div class="flex m-5">
            <Nuxt class="w-3/5"/>
            <RightSidebar />
        </div> 
        <TheFooterVue />
    </div>
</template>

<script>
    import TheHeader from '../components/TheHeader.vue';
    import TheFooterVue from '../components/TheFooter.vue';
    import Demo from '../components/Demo.vue';
    import RightSidebar from '../components/RightSidebar.vue';
export default {
    components:{
        TheHeader,
        TheFooterVue,
        Demo,
        RightSidebar,
    },
    setup() {
        
    },
}
</script>