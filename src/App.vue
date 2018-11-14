<template>
  <div id="app">
    <div class="tabs is-toggle is-fullwidth">
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
          <a href="#/servises">
            <span>Servises</span>
          </a>
        </li>
        <li>
          <a href="#/contacts">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
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
