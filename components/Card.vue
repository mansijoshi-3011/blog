<template>
    <div >
        
        <div class="flex">

<div class="max-w-xs bg-white m-4 border border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" :src="img.list1" alt="">
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
    </div>
</div>
<div class="max-w-xs border m-4 border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" :src="img.list2" alt="">
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
    </div>
</div>
        </div>
        <div class="flex">

<div class="max-w-xs bg-white m-4 border border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" :src="img.list3" alt="">
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
    </div>
</div>
<div class="max-w-xs border m-4 border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" :src="img.list4" alt="">
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
    </div>
</div>
        </div>
        <div class="flex">

<div class="max-w-xs bg-white m-4 border border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" :src="img.list5" alt="">
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
    </div>
</div>
<div class="max-w-xs border m-4 border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img :src="img.list6" alt="">
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
    </div>
</div>
        </div>
    </div>
</template>

<script>
    import images from '../helper/get_img'
    export default {
        components:{
            images,
}, 
setup() {
        const img= images;
        return{img}
    }
}
</script>


<style>
    .heaad {
        font-family: 'Montserrat', sans-serif;

    }
</style>