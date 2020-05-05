<template>
  <div>
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

            <!-- <div>
 <label>Rate this movie</label>
<select v-model="selectOne">
 <option value=1>1</option>
  <option value=2>2</option>
  <option value=3>3</option>
   <option value=4>4</option>
  <option value=5>5</option>
</select> 
            </div>-->
            <span class="fa fa-star" v-on:click="one" v-bind:class="{ checked: isActive }"></span>
            <span class="fa fa-star" v-on:click="two" v-bind:class="{ checked: isActivetwo }"></span>
            <span class="fa fa-star" v-on:click="three" v-bind:class="{ checked: isActivethree }"></span>
            <span class="fa fa-star" v-on:click="four" v-bind:class="{ checked: isActivefour }"></span>
            <span class="fa fa-star" v-on:click="five" v-bind:class="{ checked: isActivefive }"></span>
            <br />
            <span v-on:click="totalrating">click here see rating {{count}}</span>

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
  methods: {
    one: function() {
      //  alert('Hello ' + this.selectOne+ '!')
      this.isActive = !this.isActive ? true : false;
      if (!this.isActive) {
        this.isActivetwo = false;
        this.isActivethree = false;
        this.isActivefour = false;
        this.isActivefive = false;
      }
    },
    two: function() {
      this.isActivetwo = !this.isActivetwo ? true : false;
      if (this.isActivetwo) {
        this.isActive = true;
      }
      if (!this.isActivetwo) {
        this.isActivethree = false;
        this.isActivefour = false;
        this.isActivefive = false;
      }
    },
    three: function() {
      this.isActivethree = !this.isActivethree ? true : false;

      if (this.isActivethree) {
        this.isActive = true;
        this.isActivetwo = true;
      }
      if (!this.isActivethree) {
        this.isActivefour = false;
        this.isActivefive = false;
      }
    },
    four: function() {
      this.isActivefour = !this.isActivefour ? true : false;

      if (this.isActivefour) {
        this.isActive = true;
        this.isActivetwo = true;
        this.isActivethree = true;
      }
      if (!this.isActivefour) {
        this.isActivefive = false;
      }
    },
    five: function() {
      this.isActivefive = !this.isActivefive ? true : false;
      if (this.isActivefive) {
        this.isActive = true;
        this.isActivetwo = true;
        this.isActivethree = true;
        this.isActivefour = true;
      }
    },
    totalrating: function() {
      if (this.isActive) {
        this.count = 1;
      }else{
         this.count=0;
      }
      if (this.isActivetwo) {
        this.count = 2;
      }
      if (this.isActivethree) {
        this.count = 3;
      }
      if (this.isActivefour) {
        this.count = 4;
      }
      if (this.isActivefive) {
        this.count = 5;
      }
      alert(this.count);
    }

  }
};
</script>