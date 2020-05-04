<template>
    <div class="page">
      <div class="container-fluid">
          <h3 class="col-sm-12" v-if="api_datas.length>0">Top Trending Movies</h3>
          <div class="col-sm-2 mb-30" v-for="(api_data,index) in api_datas" :key="index">
              <img class="movie-image img-responsive" :src="api_data.url">
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
          api_datas:[]
        }
      },
      mounted(){
        /*home component is common for both guest user and after login user so displaying to trending movie for after login user only
        */
        if(this.helper.getUserInfo().userId>0){
              this.helper.request({
                    type: 'post',
                    auth:false,
                    withData:'json',
                    url: this.api.getTopTrendingMovieApi(),
                    dataType:'json',
                    success:(resp)=>{
                      if(resp.status == 'error'){
                        window.location.href = "/";
                      }else{
                        this.api_datas = resp.data;
                      }
                    }
              })
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
</style>