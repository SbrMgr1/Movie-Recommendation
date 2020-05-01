<template>
  <div>
    <Header/>
    <section class="main-body"><router-view/></section>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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
