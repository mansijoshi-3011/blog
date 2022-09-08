<template>
  <div>
    <!-- <TheHeader /> -->
    <!-- <Demo /> -->
    <!-- <div class="flex m-5"> -->
      <Card />
      
      <!-- <RightSidebar />
    </div> -->
    <!-- <TheFooter /> -->
  </div>
</template>

<!-- <script src="https://kit.fontawesome.com/2887b12f59.js" crossorigin="anonymous">
import Contact from "./index/Contact.vue";</script> -->
<script>
import RightSidebar from '../components/RightSidebar.vue';
export default {
    layouts: 'default' ,
    name: "IndexPage",
    components: { RightSidebar }
}
</script>
