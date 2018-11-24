<template>
  <div id="app">
    <header>
      <div class="navbar tabs is-toggle is-fullwidth">
        <ul>
          <li>
            <a href="#/"> 
              <span>Top</span>
            </a>
          </li>
          <li>
            <a href="#/about">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#/Services">
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#/contacts">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
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
.header {
  position: fixed;
  z-index: 10;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
