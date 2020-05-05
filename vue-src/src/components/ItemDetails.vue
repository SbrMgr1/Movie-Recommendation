<template>
  <div class="page mt-200">
    <div class="page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-10">
            <h3 class="col-sm-12 text-center">{{movie_details.title}}</h3>
            <div class="col-sm-8 mb-30">
              <img class="img-responsive" :title="movie_details.title" :src="movie_details.url" />
            </div>
            <div class="col-sm-4 mb-30">
              <img
                style="width:100px;float:left;margin-right:10px"
                src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-play-icon-png-image_695339.jpg"
                alt="play btn"
              />
              <h4 class>
                Score:{{movie_details.score}}
                <br />
                Average Vote:{{movie_details.vote_average}}
                <br />
                Vote Count:{{movie_details.vote_count}}
                <br />Rate This movie
                <br />
                <div style="margin-left:80px">
                  <span class="fa fa-star" v-on:click="one" v-bind:class="{ checked: count>=1 }"></span>
                  <span class="fa fa-star" v-on:click="two" v-bind:class="{ checked: count>=2 }"></span>
                  <span
                    class="fa fa-star"
                    v-on:click="three"
                    v-bind:class="{ checked: count>=3 }"
                  ></span>
                  <span
                    class="fa fa-star"
                    v-on:click="four"
                    v-bind:class="{ checked: count>=4 }"
                  ></span>
                  <span
                    class="fa fa-star"
                    v-on:click="five"
                    v-bind:class="{ checked: count>=5 }"
                  ></span>
                </div>
                <br />
                <span>click here see rating {{count}}</span>
              </h4>
            </div>
          </div>
          <div class="col-sm-2">
            <h3 class="col-sm-12">Similar Movies</h3>
            <div class="row similar-movie-recommended">
              <div class="col-sm-12 mb-30" v-for="(api_data,index) in api_datas" :key="index">
                <router-link :to="{path: '/details/' + api_data.movieId}">
                  <img
                    class="movie-image img-responsive"
                    :title="api_data.title"
                    :src="api_data.url"
                  />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "Home",
  components: {},
  data() {
    return {
      movie_details: {},
      api_datas: [],
      movieId: 0,
      count: 3,
      isActive: false,
      isActivetwo: false,
      isActivefour: false,
      isActivethree: false,
      isActivefive: false
    };
  },
  watch: {
    $route(to) {
      console.log(to);
      this.callApi();
    }
  },
  methods: {
    callApi: function() {
      if (typeof this.$route.params.id == "undefined") {
        window.location.href = "/";
      } else {
        if (this.helper.getUserInfo().userId > 0) {
          this.movieId = this.$route.params.id;
          this.helper.request({
            type: "post",
            auth: false,
            withData: "json",
            url: this.api.getTopSimilarMovieApi() + "/" + this.movieId,
            dataType: "json",
            success: resp => {
              if (resp.status == "error") {
                window.location.href = "/";
              } else {
                this.movie_details = resp.data.movie_details;
                this.api_datas = resp.data.other_similar_movies;
              }
            }
          });
        }
      }
    },
    one: function() {
      //  alert('Hello ' + this.selectOne+ '!')
      this.isActive = !this.isActive ? true : false;
      if (!this.isActive) {
        this.isActivetwo = false;
        this.isActivethree = false;
        this.isActivefour = false;
        this.isActivefive = false;
      }
      this.count = 1;
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
      this.count = 2;
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
      this.count = 3;
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
      this.count = 4;
    },
    five: function() {
      this.isActivefive = !this.isActivefive ? true : false;
      if (this.isActivefive) {
        this.isActive = true;
        this.isActivetwo = true;
        this.isActivethree = true;
        this.isActivefour = true;
      }
      this.count = 5;
    },
    totalrating: function() {
      if (this.isActive) {
        this.count = 1;
      } else {
        this.count = 0;
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
      // remove this alert  part if  its working
      alert(this.count);
    }
  },
  mounted() {
    this.callApi();
  }
};
</script>