<template>
    <div>
        <h1>{{slug}}</h1>
        <p>{{content}}</p>
        <section id="services" class="container"> 
   <h2  class="display-4 text-center mt-5 mb-3">Movies </h2>
   
   <div class="row text-center">
      <div class="col-md-4 mb-4">
         <div class="card h-100">
            <img  style="width:50%" class="rounded float-left" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Enemy_at_the_gates_ver2.jpg/220px-Enemy_at_the_gates_ver2.jpg" alt="movie 1">
            <div class="card-body">
               <h4 class="card-title">Movie 1</h4>
               <p class="card-text">sdfsdfsdfsdf sfsdfsdfsfd fsdfsdfsdf sdfsfsdf 
                 sdfsdfsdfsdfsdfsfdsdf</p>
            </div>
            <!--  -->
<span  v-on:click=" ischeckedone"  class="fa fa-star "  v-bind:class="{checked: ischecked1}" ></span>
<span  v-on:click=" ischeckedtwo" class="fa fa-star "  v-bind:class="{checked: ischecked2}"></span>
<span   v-on:click=" ischeckedthree" class="fa fa-star " v-bind:class="{checked: ischecked3}"></span>
<span  v-on:click=" ischeckedfour" class="fa fa-star" v-bind:class="{checked: ischecked4}"></span>
<span  v-on:click=" ischeckedfive"  class="fa fa-star" v-bind:class="{checked: ischecked5}"></span>
            <div class="card-footer py-4">
               <a href="#" class="btn btn-secondary">See portfolio &raquo;</a>
            </div>
         </div>
      </div>
      
  <div class="col-md-4 mb-4">
         <div class="card h-100">
            <img  style="width:50%"  class="rounded float-left" src="https://images-na.ssl-images-amazon.com/images/I/51J7E5RVJDL._SY445_.jpg" alt="movie 1">
            <div class="card-body">
               <h4 class="card-title">Movie 1</h4>
               <p class="card-text">sdfsdfsdfsdf sfsdfsdfsfd fsdfsdfsdf sdfsfsdf 
                 sdfsdfsdfsdfsdfsfdsdf</p>
            </div>
            <div class="card-footer py-4">
               <a href="#" class="btn btn-secondary">See portfolio &raquo;</a>
            </div>
         </div>
      </div>
      
      <div class="col-md-4 mb-4">
         <div class="card h-100">
            <img  style="width:50%" class="rounded float-left" src="https://images-na.ssl-images-amazon.com/images/I/51A348WXZ8L._AC_SY445_.jpg" alt="movie 1">
            <div class="card-body">
               <h4 class="card-title">Movie 1</h4>
               <p class="card-text">sdfsdfsdfsdf sfsdfsdfsfd fsdfsdfsdf sdfsfsdf 
                 sdfsdfsdfsdfsdfsfdsdf</p>
            </div>
            <div class="card-footer py-4">
               <a href="#" class="btn btn-secondary">See portfolio &raquo;</a>
            </div>
         </div>
      </div>
   </div>
</section>
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
      content:"",
      ischecked1:true,
      ischecked2:false,
      ischecked3:false,
      ischecked4:false,
      ischecked5:false
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
        },
       methods: {
   ischeckedone: function () {
       alert('Hello ' + this.name + '!')
      this.data.ischecked1=false
  },
  ischeckedtwo: function () {
      alert('Hello ' + this.name + '!')
      // this.ischecked1=this.ischecked1?false:true
  }
 }
}
</script>