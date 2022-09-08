<template>
    <div>
        <h1 class="text-3xl text-bold mt-9 mb-5">Categories</h1>
        <div class="flex w-7/8 bg-white m-4 border border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
   <div> <a href="#">
        <img class="w-96 h-44" :src="img.list5" alt="">
    </a>
</div>
    <div class="pl-5 pt-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
    </div>
</div>
<div class="flex w-7/8 bg-white m-4 border border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
   <div> <a href="#">
        <img class="w-96 h-44" :src="img.list6" alt="">
    </a>
</div>
    <div class="pl-5 pt-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
    </div>
</div>
<div class="flex w-7/8 bg-white m-4 border border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
   <div> <a href="#">
        <img class="w-96 h-44" :src="img.list4" alt="">
    </a>
</div>
    <div class="pl-5 pt-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
    </div>
</div>
<div class="flex w-7/8 bg-white m-4 border border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
   <div> <a href="#">
        <img class="w-96 h-44" :src="img.list2" alt="">
    </a>
</div>
    <div class="pl-5 pt-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
    </div>
</div><div class="flex w-7/8 bg-white m-4 border border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
   <div> <a href="#">
        <img class="w-96 h-44" :src="img.list3" alt="">
    </a>
</div>
    <div class="pl-5 pt-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
    </div>
</div>
<div class="flex w-7/8 bg-white m-4 border border-gray-200 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
   <div> <a href="#">
        <img class="w-96 h-44" :src="img.list1" alt="">
    </a>
</div>
    <div class="pl-5 pt-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
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