<template>
  <div class="page mt-10">
    <div class="page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-10">
            <h3 class="col-sm-12 text-center">{{movie_details.title}}</h3>
            <div class="col-sm-8 mb-30">
              <img
                class="img-responsive"
                :alt="movie_details.title"
                :title="movie_details.title"
                :src="movie_details.url"
              />
            </div>
            <div class="col-sm-4 mb-30" style="font-size: 15px">
              <div class="row">
                <div class="col-sm-12">
                  <img
                    style="width:130px;float:left;margin-right:10px"
                    src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-play-icon-png-image_695339.jpg"
                    alt="play btn"
                  />
                  <div>
                    <div class="form-group"><span class="text-bold">Score:</span> {{movie_details.score}}</div>
                    <div class="form-group"><span class="text-bold">Vote Count:</span> {{movie_details.vote_count}}</div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group mt-15">
                    <div class="pull-left form-group">Rate this movie</div>
                    <div class="pull-left" style="margin-left:5px">
                      <span
                        class="fa fa-star"
                        v-on:click="one"
                        v-bind:class="{ checked: count>=1 }"
                      ></span>
                      <span
                        class="fa fa-star"
                        v-on:click="two"
                        v-bind:class="{ checked: count>=2 }"
                      ></span>
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
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group"><span class="text-bold">Director:</span> {{movie_details.director}}</div>
                  <div class="form-group"><span class="text-bold">Genres:</span> {{movie_details.genres.join(", ")}}</div>
                  <div class="form-group"><span class="text-bold">Tags:</span> {{movie_details.keywords.join(", ")}}</div>
                  <div class="form-group"><span class="text-bold">OverView:</span> {{movie_details.overview}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row-sm-3">
            <h3 class="col-sm-12 search-text">{{similar_movie_txt}}</h3>
              <div class="row form-group">
                <div class="col-sm-3 pull-left">
                  <div class="col-sm-12">
                      <form @submit="doSearch">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Search" v-model="searchInput">
                          <div class="input-group-btn">
                            <button class="btn btn-default" type="submit">
                              <i class="glyphicon glyphicon-search"></i>
                            </button>
                          </div>
                        </div>
                        <p class="text-danger">{{searchError}}</p>
                      </form>
                  </div>  
                </div>
              </div>
              <div class="col-sm-1" v-for="(api_data,index) in api_datas" :key="index">
                <div class="row-sm-3">
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
    if (this.helper.getUserInfo().userId > 0) {
      return {
        movie_details: {},
        api_datas: [],
        movieId: 0,
        count: 0,
        similar_movie_txt:'Similar Movies',
        userId: this.helper.getUserInfo().userId,
        searchInput: null,
        searchError:''
      };
    } else {
      window.location.href = "/";
    }
  },
  watch: {
    $route(to) {
      console.log(to);
      this.similar_movie_txt = 'Similar Movies';
      this.searchError = '';
      this.searchInput = null;
      this.callApi();
    }
  },
  methods: {
    doSearch:function(e){
      e.preventDefault();
      //this.movieId = this.$route.params.id;
      if(!this.searchInput){
        this.searchError = 'Field is empty';
      }else{
        this.searchError = '';
        this.helper.request({
        type: "post",
        auth: false,
        withData: "json",
        url: this.api.getSearchApi(),
        dataType: "json",
        data:{
          movie_name:this.searchInput,
          movie_id:this.movieId,
          user_id:this.userId,
        },
        success: (resp) => {
          this.similar_movie_txt = 'Search Results';
          if (resp.status == "error") {
            window.location.href = "/";
          } else {
            //this.movie_details = resp.data.movie_details;
            
            // console.log(this.movie_details)

            this.api_datas = resp.data.other_similar_movies;
            this.fetchOldRatingInfo();
          }
        }
      });
      }
      
    },
    fetchOldRatingInfo: function() {
      if (this.userId > 0) {
        this.movieId = this.$route.params.id;
        this.helper.request({
          type: "post",
          auth: false,
          withData: "json",
          url: this.api.getRatingApi() + "/" + this.userId + "/" + this.movieId,
          dataType: "json",
          success: (resp) => {
            if (typeof resp.data != "undefined") {
              this.count = resp.data;
            }
          }
        });
      }
    },
    callApi: function() {
      this.movieId = this.$route.params.id;
      this.helper.request({
        type: "post",
        auth: false,
        withData: "json",
        url: this.api.getTopSimilarMovieApi() + "/" + this.movieId,
        dataType: "json",
        success: (resp) => {

          if (resp.status == "error") {
            window.location.href = "/";
          } else {
            this.movie_details = resp.data.movie_details;
            
            console.log(this.movie_details)

            this.api_datas = resp.data.other_similar_movies;
            this.fetchOldRatingInfo();
          }
        }
      });
    },
    rateThisMovie: function() {
      this.movieId = this.$route.params.id;
      this.helper.request({
        type: "post",
        auth: false,
        withData: "json",
        url: this.api.getUpdateRatingApi(),
        data: {
          userId: this.userId,
          movieId: this.movieId,
          rating: this.count
        },
        dataType: "json",
        success: (resp) => {
          console.log(resp);
        }
      });
    },
    one: function() {
      this.isActive = !this.isActive ? true : false;

      if (this.count == 1) {
        this.count = 0;
      } else {
        this.count = 1;
      }
      this.rateThisMovie();
    },
    two: function() {
      if (this.count == 2) {
        this.count = 0;
      } else {
        this.count = 2;
      }
      this.rateThisMovie();
    },
    three: function() {
      if (this.count == 3) {
        this.count = 0;
      } else {
        this.count = 3;
      }
      this.rateThisMovie();
    },
    four: function() {
      if (this.count == 4) {
        this.count = 0;
      } else {
        this.count = 4;
      }
      this.rateThisMovie();
    },
    five: function() {
      if (this.count == 5) {
        this.count = 0;
      } else {
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