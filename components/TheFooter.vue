<template>
    <div class="bg-black p-24  ">
        <div class="flex">
                    <div class="w-96">
            <h1 class="text-white text-xl mb-5">ABOUT US</h1>
            <img :src="img.slider2" alt="" class="h-60 mb-5 mt-5">
            <p class="text-gray-500 leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
                aperiam quam, labore facilis doloremque aliquam quibusdam placeat, accusantium neque delectus iure porro
                repudiandae! Ducimus, mollitia quae. Impedit dolores facere dolorum.</p>
        </div>
        <div class="pl-44 w-6/12 pr-24">
            <h1 class="text-white text-xl mb-5">LATEST POST</h1>
            <div class="flex mt-5">
                <img :src="img.p1" alt="" srcset="" height="100px" width="110px">
                <p class="pl-3 text-md text-white">How to Find the Video Games of Your Youth
                    <span class="pl-6 text-gray-400">March 20, 2021</span>
                </p>
            </div>
            <div class="flex mt-5">
                <img :src="img.p2" alt="" srcset="" height="100px" width="110px">
                <p class="pl-3  text-md text-white">How to Find the Video Games of Your Youth
                    <span class=" pl-6 text-gray-400">March 20, 2021</span>
                </p>
            </div>
            <div class="flex mt-5">
                <img :src="img.p3" alt="" srcset="" height="100px" width="110px">
                <p class="pl-3 text-md text-white">How to Find the Video Games of Your Youth
                    <span class="pl-6 text-gray-400">March 20, 2021</span>
                </p>
            </div>
        </div>
        <div class="quick">
            <h1 class="text-white text-xl mb-5">QUICK LINKS</h1>
            <div class="mt-7 text-white">
                <a href="#" class="p-2 leading-8">About Us</a><br>
                <a href="#" class="p-2 leading-8">Travel</a><br>

                <a href="#" class="p-2 leading-8">Adventure</a>
                <br> <a href="#" class="p-2 leading-8">Courses</a>
                <br> <a href="#" class="p-2 leading-8">Categories</a>
            </div>
            <h1 class="text-white text-xl mb-5 mt-9">SOCIAL</h1>
            <div class="mt-7 text-white">
                <a href="#" class="p-2 leading-8"><i class="fa-brands fa-facebook-f"></i> Facebook</a><br>
                <a href="#" class="p-2 leading-8">  <i class="fa-brands fa-twitter"></i> Twitter</a><br>

                <a href="#" class="p-2 leading-8"><i class="fa-brands fa-instagram"></i> Instagram</a>
                <br> <a href="#" class="p-2 leading-8"><i class="fa-brands fa-youtube"></i> YouTube</a>
                <br> <a href="#" class="p-2 leading-8"> <i class="fa-brands fa-square-snapchat"></i> Snapshot </a>
            </div>
        </div>
    </div>
    <p class="text-gray-500 text-sm mt-16 text-center">Copyright @ 2022 All Rights Reserved </p>
</div>

</template>

<script>
import images from '../helper/get_img'
export default {
    components: {
        images,
    },
    setup() {
        const img = images;
        return { img }
    }
}
</script>