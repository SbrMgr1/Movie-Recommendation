<template>
    <div>
        <h1>{{slug}}</h1>
        <p>{{content}}</p>
    </div>
</template>
<script type="text/javascript">
    export default {
  name: 'Cms',
  components: {
  },
  data(){
    return {
      slug:"here",
      content:""
    }
  },

  mounted(){
        this.slug = this.$route.params.sluging;
        
    
  },
  watch:{
            $route (to){
                console.log(to)
                this.slug = this.$route.params.sluging;
            }
        }
}
</script>