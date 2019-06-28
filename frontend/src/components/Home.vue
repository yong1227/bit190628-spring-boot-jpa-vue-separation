<template>
  <div class="hello">
    hello world
  </div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from'@/components/common/Footer.vue'
import JumboTron from'@/components/common/JumboTron.vue'

export default {
  name: 'Home',
  components:{
    Nav,Footer,JumboTron
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
