<template>
    <div id="rightSidebar" class="">
        <form>
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative mb-10">
                <!-- <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div> -->
                <div class="flex bg-gray-100 ">
                    <input type="text" id="simple-search"
                        class="bg-gray-100 text-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Type a keyword and hit enter" required>
                    <button type="submit"
                        class="p-2.5 ml-2 text-sm font-medium text-gray rounded-lg  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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


        <div class="border mt-20 border-gray-200 dark:bg-gray-800 dark:border-gray-700">

            <div class="flex flex-col items-center pb-5">
                <img class=" w-24 h-24 rounded-full shadow-lg" :src="img.person" alt="Bonnie image"
                    style="margin-top: -51px;">
                <h5 class="mb-1 text-xl mt-9 name font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                <span class="text-sm text-gray-400 leading-7 dark:text-gray-200 px-9 text-center">Lorem ipsum dolor, sit
                    amet consectetur adipisicing elit. Ducimus tempora ea voluptate expedita magni! Similique a deserunt
                    impedit earum expedita sint cumque non asperiores, enim ab assumenda unde, fugiat aliquam.</span>
                <div class="mt-4 space-x-3 md:mt-6">
                    <a href="#"
                        class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read
                        my Bio</a>

                    <!-- <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a> -->
                </div>
                <div class="flex mt-5"><i class="p-3 fa-brands fa-facebook-f"></i>
                    <i class="p-3  fa-brands fa-twitter"></i>
                    <i class="p-3  fa-brands fa-instagram"></i>
                    <i class="p-3  fa-brands fa-youtube"></i>
            </div>
        </div>
        </div>

        <div>
            <p class="text-xl heaad mt-12 font-bold">Popular post</p>
            <hr class="mt-5">
            <div class="flex mt-5">
                <img :src="img.p1" alt="" srcset="" height="100px" width="110px">
                <p class="p-3 text-md">How to Find the Video Games of Your Youth
                    <span class="text-gray-400">March 20, 2021</span>
                </p>
            </div>
            <div class="flex mt-5">
                <img :src="img.p2" alt="" srcset="" height="100px" width="110px">
                <p class="p-3 text-md">How to Find the Video Games of Your Youth
                    <span class="text-gray-400">March 20, 2021</span>
                </p>
            </div>
            <div class="flex mt-5">
                <img :src="img.p3" alt="" srcset="" height="100px" width="110px">
                <p class="p-3 text-md">How to Find the Video Games of Your Youth
                    <span class="text-gray-400">March 20, 2021</span>
                </p>
            </div>
        </div>
        <div>
            <p class="text-xl heaad mt-12 font-bold">Categories</p>
            <hr class="mt-5">
            <div class="flex mt-9 ">
                <p class="text-sx heaad text-indigo-600 hover:text-indigo-900  font-medium">Food</p>
                <p class="text-right ml-56 text-gray-300 hover:text-gray-700">(12)</p>
            </div>
            <hr class="mt-3">
            <div class="flex mt-9">
                <p class="text-sx heaad text-indigo-600  font-medium">Travel</p>
                <p class="text-right ml-52 text-gray-300 hover:text-gray-700">(22)</p>
            </div>
            <hr class="mt-3">
            <div class="flex mt-9">
                <p class="text-sx heaad text-indigo-600  font-medium">Business</p>
                <p class="text-right ml-48 text-gray-300 hover:text-gray-700">(37)</p>
            </div>
            <hr class="mt-3">
            <div class="flex mt-9">
                <p class="text-sx heaad text-indigo-600  font-medium">Lifestyle</p>
                <p class="text-right ml-48 text-gray-300 hover:text-gray-700">(42)</p>
            </div>
            <hr class="mt-3">
            <div class="flex mt-9">
                <p class="text-sx heaad text-indigo-600  font-medium">Adventures</p>
                <p class="text-right ml-44 text-gray-300 hover:text-gray-700">(14)</p>
            </div>
            <hr class="mt-3">


        </div>
        <div>
            <p class="text-xl heaad mt-12 font-bold">Tags</p>
            <hr class="mt-5">

            <div class="mt-4">
                <a href="#"
                    class=" items-center py-2 px-4 text-sm text-center text-gray-500 bg-gray-200 rounded-md hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Travel</a>
           
                <a href="#"
                    class=" items-center py-2 px-4 text-sm text-center text-gray-500 bg-gray-200 rounded-md hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Adventure</a>
         
                <a href="#"
                    class=" items-center py-2 px-4 text-sm text-center text-gray-500 bg-gray-200 rounded-md hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lifestyle</a>
            </div>
            <div class="mt-4">
                <a href="#"
                    class=" items-center py-2 px-4 text-sm text-center text-gray-500 bg-gray-200 rounded-md hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Business</a>
            
                <a href="#"
                    class="  items-center py-2 px-4 text-sm text-center text-gray-500 bg-gray-200 rounded-md hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Freelancing</a>
          
                <a href="#"
                    class=" items-center py-2 px-4 text-sm text-center text-gray-500 bg-gray-200 rounded-md hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Travel</a>
            </div>
            <div class="mt-4">
                <a href="#"
                    class="  items-center py-2 px-4 text-sm text-center text-gray-500 bg-gray-200 rounded-md hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Food</a>
            
                <a href="#"
                    class=" items-center py-2 px-4 text-sm text-center text-gray-500 bg-gray-200 rounded-md hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lifestyle</a>
                <a href="#"
                    class=" items-center py-2 px-4 text-sm text-center text-gray-500 bg-gray-200 rounded-md hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Business</a>
            </div>
            <div class="mt-4 ">
                <a href="#"
                    class="items-center py-2 px-4 text-sm text-center text-gray-500 bg-gray-200 rounded-md hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Freelancing</a>
            </div>

        </div>
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

<style scoped>
#rightSidebar {
    width: 300px;
    margin-left: 169px;
    margin-top: 15px;
}

.name {
    font-family: 'Nanum Gothic', sans-serif;
}
</style>