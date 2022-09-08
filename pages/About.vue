<template>
    <div class="px-16">
        <h1 class="text-3xl text-bold mt-9 mb-5">Hi There! I'm Craig David</h1>
        <img :src="img.list4" alt="" class="mt-5 mb-5">
        <p class="text-gray-400 mt-5 leading-8">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum minima eveniet recusandae suscipit eum laboriosam fugit amet deleniti iste et. Ad dolores, necessitatibus non saepe tenetur impedit commodi quibusdam natus repellat, exercitationem accusantium perferendis officiis. Laboriosam impedit quia minus pariatur! <br> <br>

Dignissimos iste consectetur, nemo magnam nulla suscipit eius quibusdam, quo aperiam quia quae est explicabo nostrum ab aliquid vitae obcaecati tenetur beatae animi fugiat officia id ipsam sint? Obcaecati ea nisi fugit assumenda error totam molestiae saepe fugiat officiis quam? <br> <br>

Culpa porro quod doloribus dolore sint. Distinctio facilis ullam voluptas nemo voluptatum saepe repudiandae adipisci officiis, explicabo eaque itaque sed necessitatibus, fuga, ea eius et aliquam dignissimos repellendus impedit pariatur voluptates. Dicta perferendis assumenda, nihil placeat, illum quibusdam. Vel, incidunt? <br> <br>

Dolorum blanditiis illum quo quaerat, possimus praesentium perferendis! Quod autem optio nobis, placeat officiis dolorem praesentium odit. Vel, cum, a. Adipisci eligendi eaque laudantium dicta tenetur quod, pariatur sunt sed natus officia fuga accusamus reprehenderit ratione, provident possimus ut voluptatum.</p>
<h1 class="text-3xl text-bold mt-9 mb-5">My Latest Posts</h1>
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