<template>
  <nav class="navbar navbar-default navbar-fixed-top navbar-theme">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">
          Online Movie
        </router-link>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li>
            <router-link to="/cms/privacy-policy">Privacy and Policy</router-link>
        </li>
        <li>
            <router-link to="/cms/about">About</router-link>
        </li>
        <li>
            <router-link to="/contact-us">Contact Us</router-link>
        </li>
        <li>
            <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Header',
  props: {
    msg: String,
    ram:String
  },
  data(){
    return {
      sita:'hare ram'
    }
  },
  mounted(){

  }
}
</script>
