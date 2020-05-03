<template>
	<div class="page mt-200">
    <div class="col-sm-4 col-sm-offset-4">
      <div class="panel panel-default panel-theme">
        <div class="panel-heading">Login</div>
        <div class="panel-body">
          <div class="col-sm-12">
              <form class="form-theme">
                <div class="row">
                  <div class="form-group">
                    <label class="control-label">Email:</label>
                    <input type="email" name="email" class="form-control" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <label class="control-label">Password:</label>
                    <input type="password" name="password" class="form-control" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <router-link to="/forgot-password">Forgot your password?</router-link>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary">Login</button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
	export default {
      name: 'Login',
      components: {
      },
      data(){
        return {
          errors:[]
        }
      },
      mounted(){

      }
    }
</script>