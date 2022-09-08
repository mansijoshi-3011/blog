<template>
    <div>


        <div>
            <h1 class="title text-center text-8xl italic mt-5">Wordify</h1>
            <div>
                <nav class="m-5 dark:bg-gray-700 items-center">
                    <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                        <div class="flex items-center justify-center mt-9">
                            <ul class="flex flex-row   space-x-8 text-sm font-medium">
                                <li>
                                    <nuxt-link to="/" class="text-gray-900 dark:text-white hover:underline"
                                        aria-current="page">Home</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="#" class="text-gray-900 dark:text-white hover:underline">Business</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="#" class="text-gray-900 dark:text-white hover:underline">Travel</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="category" class="text-gray-900 dark:text-white hover:underline">Category</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/about" class="text-gray-900 dark:text-white hover:underline">About</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/contact" class="text-gray-900 dark:text-white hover:underline">Contact</nuxt-link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <hr class="mx-12"/>
            </div>
        </div>
        <div class="mt-5" v-if="$route.path=='/'">
            <VueSlickCarousel :arrows="true" :dots="true">
                <div>
                    <img :src="img.slider1" class="sliderImage" alt="" srcset="">
                </div>
                <div>
                    <img :src="img.slider2" class="sliderImage" alt="" srcset="">
                </div>
                <div>
                    <img :src="img.slider3" class="sliderImage" alt="" srcset="">
                </div>
            </VueSlickCarousel>

        </div>
        <h1 class="text-3xl heaad mt-16 ml-12" v-if="$route.path=='/'">Latest Posts</h1>
    </div>


</template>




<script>
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import images from '../helper/get_img'
export default {
    components: {
        images,
        // Carousel,
        // Slide,
        // Pagination, 
        // Navigation,
        VueSlickCarousel,
    },
    setup() {
        const img = images;
        return { img }
    }
}
</script>

<style scoped>
.title {
    font-family: 'Josefin Sans', sans-serif;
}

.sliderImage {
    margin-right: 0;
    margin-left: 47px;
    width: 1187px;
    height: 520px;
}
</style>