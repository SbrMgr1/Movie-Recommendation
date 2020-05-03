<template>
  <div>
    <Header/>
    <section class="main-body"><router-view/></section>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import './assets/style.css'
export default {
  name: 'App',
  components: {
    Header,
    Footer
    
  },
  data(){
    return {
      api_data:[]
    }
  },
  mounted(){
    this.api_data = [1,2,3];
  }
}
</script>
