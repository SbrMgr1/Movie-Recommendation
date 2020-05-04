<template>
    <div class="page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-10">
            <h3 class="col-sm-12 text-center">{{movie_details.title}}</h3>
            <div class="col-sm-12 mb-30">
                <img class="img-responsive" :title="movie_details.title" :src="movie_details.url">
            </div>
            <h4 class="col-sm-12 mb-30">
              Score:{{movie_details.score}}<br/>
              Average Vote:{{movie_details.vote_average}}<br/>
              Vote Count:{{movie_details.vote_count}}<br/>
            </h4>
          </div>
          <div class="col-sm-2">
            <h3 class="col-sm-12">Other recommended</h3>
            <div class="row similar-movie-recommended">
                <div class="col-sm-12 mb-30" v-for="(api_data,index) in api_datas" :key="index">
                  <img class="movie-image img-responsive" :title="api_data.title" :src="api_data.url">
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
          api_datas:[]
        }
      },
      mounted(){
        if(typeof(this.$route.params.id) == 'undefined'){
          window.location.href = "/";
        }else{
          if(this.helper.getUserInfo().userId>0){
                this.helper.request({
                      type: 'post',
                      auth:false,
                      withData:'json',
                      url: this.api.getTopSimilarMovieApi()+'/'+this.$route.params.id,
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
    }
</script>
<style type="text/css">
  .movie-image{
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  .similar-movie-recommended{
    max-height: 1200px;
    overflow-y: scroll;
  }
</style>