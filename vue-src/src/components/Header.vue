<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">{{ram}}</a>
      </div>
      <ul class="nav navbar-nav">
        <li>
          <router-link class="dropdown-item" to="/">
            Home
          </router-link>
        </li>
        <li>
            <router-link class="dropdown-item" to="/about">
              About
            </router-link>
        </li>
        <li>
            <router-link class="dropdown-item" to="/cms/faq">
              FAQ
            </router-link>
        </li>
        <li>
            <router-link class="dropdown-item" to="/cms/how-to-work">
              How to work
            </router-link>
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
