<template>
 <div class="page mt-200">
    <h1>{{slug}}</h1>
    <p>{{content}}</p>
    
    

    <section id="services" class="container">
      <h2 class="display-4 text-center mt-5 mb-3">Movies</h2>

      <div class="row text-center">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img
              style="width:50%"
              class="rounded float-left"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Enemy_at_the_gates_ver2.jpg/220px-Enemy_at_the_gates_ver2.jpg"
              alt="movie 1"
            />
            <div class="card-body">
              <h4 class="card-title">Movie 1</h4>
              <p class="card-text">
                sdfsdfsdfsdf sfsdfsdfsfd fsdfsdfsdf sdfsfsdf
                sdfsdfsdfsdfsdfsfdsdf
              </p>
            </div>
            <div class="card-footer py-4">
              <a href="#" class="btn btn-secondary">See portfolio &raquo;</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img
              style="width:50%"
              class="rounded float-left"
              src="https://images-na.ssl-images-amazon.com/images/I/51J7E5RVJDL._SY445_.jpg"
              alt="movie 1"
            />
            <div class="card-body">
              <h4 class="card-title">Movie 1</h4>
              <p class="card-text">
                sdfsdfsdfsdf sfsdfsdfsfd fsdfsdfsdf sdfsfsdf
                sdfsdfsdfsdfsdfsfdsdf
              </p>
            </div>
            <div class="card-footer py-4">
              <a href="#" class="btn btn-secondary">See portfolio &raquo;</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img
              style="width:50%"
              class="rounded float-left"
              src="https://images-na.ssl-images-amazon.com/images/I/51A348WXZ8L._AC_SY445_.jpg"
              alt="movie 1"
            />
            <div class="card-body">
              <h4 class="card-title">Movie 1</h4>
              <p class="card-text">
                sdfsdfsdfsdf sfsdfsdfsfd fsdfsdfsdf sdfsfsdf
                sdfsdfsdfsdfsdfsfdsdf
              </p>
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
  name: "Cms",
  components: {},
  data() {
    return {
      slug: "here",
      content: "",
      selectOne: "",
      count: 0,
      isActive: false,
      isActivetwo: false,
      isActivefour: false,
      isActivethree: false,
      isActivefive: false
    };
  },

  mounted() {
    this.slug = this.$route.params.sluging;
  },
  watch: {
    $route(to) {
      console.log(to);
      this.slug = this.$route.params.sluging;
    }
  },
  
};
</script>