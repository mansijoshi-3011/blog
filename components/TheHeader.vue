<template>
    <div class="h-12 bg-black flex justify-between">
        <div class="flex">
                    <i class=" p-3 pl-9 text-2xl text-gray-400 fa-brands fa-twitter"></i>
                    <i class="p-3 text-2xl text-gray-400 fa-brands fa-facebook-f"></i>
                    <i class="p-3 text-2xl  text-gray-400 fa-brands fa-instagram"></i>
                    <i class="p-3 text-2xl  text-gray-400 fa-brands fa-youtube"></i>
            </div>
        <!-- <div class="flex">
            <img :src="img.twitter" alt="twitter" srcset="" class="h-10">
            <img :src="img.fb" alt="facebook" srcset="" class="h-10">
            <img :src="img.insta" alt="instagram" srcset="" class="h-10">
            <img :src="img.youtube" alt="youtube" srcset="" class="h-10">
           
        </div> -->
        <!-- <p>{{img.fb}}</p> -->
        <div class="mt-1">
            <form class="flex">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-xl">
                    <!-- <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div> -->
                    <div class="flex bg-gray-50 mr-2 rounded-lg">
                        <input type="text" id="simple-search"
                            class="bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search" required>
                        <button type="submit"
                            class="p-2.5 mr-2 bg-gray-50 text-sm font-medium text-gray rounded-lg  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <!-- <span class="sr-only">Search</span> -->
                        </button>
                    </div>
                </div>


            </form>
        </div>
    </div>
</template>


<script>
import images from '../helper/get_img'
export default {
    components: {
        images
    },
    setup() {
        const img = images;
        return { img }
    }
}
</script>