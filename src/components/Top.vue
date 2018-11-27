<template>
  <body>
    <section class="hero is-info is-large">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Welcome to Tsuyoshi Hirosawa's Portfolio Site
          </p>
        </div>
        <div class="bottom">
          <p>Share</p>
          <div class="columns">
            <div class="column buttons" id="buttons">
              <a href="http://twitter.com/share?url=http://http://localhost:8080/#/"><span class="button is-info">Twitter</span></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:8080/#/"><span class="button is-primary" id="fb">Facebook</span></a>
              <a href="http://line.me/R/msg/text/?http://localhost:8080/#/"><span class="button is-success">LINE</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      tab1: 'SNS&Media'
    }
  }
}
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.hero {
  background-image: linear-gradient(-90deg, #00E5FF, #00B2FF);
}
// .top {
//   padding-top: 20%;
//   padding-bottom:  5%;
//   background-image: linear-gradient(-90deg, #00E5FF, #00B2FF);
// }
// .bottom {
//   padding-top: 5%;
//   padding-bottom: 30%;
//   background-image: linear-gradient(-90deg, #00E5FF, #00B2FF);
// }
.bottom p {
  font-size: 200%;
  padding-top: 15%;
  padding-bottom: 2%;
}
// .share a {
//   color: white;
//   font-size: 200%;
//   padding: 2%;
// }
#buttons {
  
}
#fb {
  background-color: #3B5998;
  border-color: #3B5998;
  color: #fff;
}
</style>
