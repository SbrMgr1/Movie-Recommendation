<template>
    <div class="page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-10">
            <h3 class="col-sm-12 text-center">{{movie_details.title}}</h3>
            <div class="col-sm-8 mb-30">
                <img class="img-responsive" :title="movie_details.title" :src="movie_details.url">
            </div>
            <div class="col-sm-4 mb-30">
              <h4 class="">
              Score:{{movie_details.score}}<br/>
              Average Vote:{{movie_details.vote_average}}<br/>
              Vote Count:{{movie_details.vote_count}}<br/>
            </h4>
            </div>
            
          </div>
          <div class="col-sm-2">
            <h3 class="col-sm-12">Similar Movies</h3>
            <div class="row similar-movie-recommended">
                <div class="col-sm-12 mb-30" v-for="(api_data,index) in api_datas" :key="index">
                  <router-link :to="{path: '/details/' + api_data.movieId}">
                    <img class="movie-image img-responsive" :title="api_data.title" :src="api_data.url">
                  </router-link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script type="text/javascript">
    export default {
      name: 'Home',
      components: {

      },
      data(){
        return {
          movie_details:{},
          api_datas:[],
          movieId:0
        }
      },
      watch:{
            $route (to){
                console.log(to)
                this.callApi();
            }
      },
      methods:{
        callApi:function(){
          if(typeof(this.$route.params.id) == 'undefined'){
            window.location.href = "/";
          }else{
              if(this.helper.getUserInfo().userId>0){
                    this.movieId = this.$route.params.id;
                    this.helper.request({
                          type: 'post',
                          auth:false,
                          withData:'json',
                          url: this.api.getTopSimilarMovieApi()+'/'+this.movieId,
                          dataType:'json',
                          success:(resp)=>{
                            if(resp.status == 'error'){
                              window.location.href = "/";
                            }else{
                              this.movie_details = resp.data.movie_details;
                              this.api_datas = resp.data.other_similar_movies;
                            }
                          }
                    })
              }
          }
          
        }
      },
      mounted(){
        this.callApi();
      }
    }
</script>