<template>
  <div class="page mt-200">
    <div class="page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-10">
            <h3 class="col-sm-12 text-center">{{movie_details.title}}</h3>
            <div class="col-sm-8 mb-30">
              <img class="img-responsive" :alt="movie_details.title" :title="movie_details.title" :src="movie_details.url" />
            </div>
            <div class="col-sm-4 mb-30" style="font-size: 20px">
              <div class="row">
                <div class="col-sm-12">
                  <img
                style="width:130px;float:left;margin-right:10px"
                src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-play-icon-png-image_695339.jpg"
                alt="play btn"
              />
              <div >
                <div class="form-group">
                  Score: {{movie_details.score}}
                </div>
                <div class="form-group">
                  Average Vote: {{movie_details.vote_average}}
                </div>
                <div class="form-group">
                  Vote Count: {{movie_details.vote_count}}
                </div>
              </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                    <div class="form-group mt-15">
                  <div class="pull-left">Rate this movie</div>
                  <div class="pull-left" style="margin-left: 5px">
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
                </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <h3 class="col-sm-12">Similar Movies</h3>
            <div class="row similar-movie-recommended">
              <div class="col-sm-12 mb-30" v-for="(api_data,index) in api_datas" :key="index">
                <router-link :to="{path: '/details/' + api_data.movieId}">
                  <img
                    :alt="api_data.title"
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
      count: 0
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
    
    rateThisMovie:function(){
        if (typeof this.$route.params.id == "undefined") {
          window.location.href = "/";
        } else {
          if (this.helper.getUserInfo().userId > 0) {
            this.movieId = this.$route.params.id;
            this.helper.request({
              type: "post",
              auth: false,
              withData: "json",
              url: this.api.getUpdateRatingApi(),
              data:{
                userId:this.helper.getUserInfo().userId,
                movieId:this.movieId,
                rating:this.count
              },
              dataType: "json",
              success: resp => {
                console.log(resp)
              }
            });
          }
        }
    },
    one: function() {

      this.isActive = !this.isActive ? true : false;

      if(this.count == 1){
        this.count = 0;
      }else{
        this.count = 1;
      }
      this.rateThisMovie();
      
    },
    two: function() {

      if(this.count == 2){
        this.count = 0;
      }else{
        this.count = 2;
      }
      this.rateThisMovie();
    },
    three: function() {

      if(this.count == 3){
        this.count = 0;
      }else{
        this.count = 3;
      }
      this.rateThisMovie();
    },
    four: function() {
      if(this.count == 4){
        this.count = 0;
      }else{
        this.count = 4;
      }
      this.rateThisMovie();
    },
    five: function() {
      if(this.count == 5){
        this.count = 0;
      }else{
        this.count = 5;
      }
      this.rateThisMovie();
    }
  },
  mounted() {
    this.callApi();
  }
};
</script>