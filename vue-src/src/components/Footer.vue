<template>
    <!-- Footer -->


<footer    class="page-footer font-small blue pt-4" >


  <!-- Footer Links -->
  <div class="container-fluid text-center text-md-left">

    <!-- Grid row -->
    <div class="row">


      <hr class="clearfix w-100 d-md-none pb-3">

      <!-- Grid column -->
      <div class="col-md-5 mb-md-0 mb-3 col-md-offset-7">

        <!-- Links -->

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <router-link to="/">home.com</router-link>
  </div>
  <!-- Copyright -->

</footer>

<!-- Footer -->
</template>
<script type="text/javascript">
    export default {
  name: 'App',
  components: {
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