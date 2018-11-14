<template>
  <div id="app">
    <nav class="navbar container" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#/">
          <img src="./assets/logo.png">
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#/about">
            About
          </a>
          <a class="navbar-item" href="#/servises">
            Servises
          </a>
          <a class="navbar-item" href="#/contacts">
            Contacts
          </a>
        </div>
      </div>
    </nav>
    <!-- <div class="tabs tabs-detail is-boxed is-medium">
      <div class="container">
        <ul id="js-tabs">
          <li class="is-active" data-tab="design">
            <a>
              <span>Top</span>
            </a>
          </li>
          <li data-tab="html">
            <a>
              <span>About</span>
            </a>
          </li>
          <li data-tab="css">
            <a>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
