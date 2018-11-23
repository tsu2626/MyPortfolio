<template>
  <body>
    <div class="top">
      <h1 class="title is-1　has-text-left-mobile has-text-centerd">Welcome to Tsuyoshi Hirosawa's Portfolio Site</h1>
      <!-- <h2>{{ tab1 }}</h2>
      <ul>
        <li><a href="https://twitter.com/watuyo_2">Twitter</a></li>
        <li><a href="https://github.com/tsu2626">GItHub</a></li>
        <li><a href="https://qiita.com/watuyo_2">Qiita</a></li>
        <li><a href="https://qa8srqqprvzps6ls.qrunch.io/">Qrunch</a></li>
        <li><a href="https://connpass.com/user/watuyo_2/">connpass</a></li>
        <li><a href="https://supporterzcolab.com/user/watuyo/">SupporterzColab</a></li>
        <li><a href="https://watuyo-2.hateblo.jp/">HatenaBlog</a></li>
      </ul> -->
    </div>
    <div class="bottom">
      <div class="share">
        <a href="http://twitter.com/share?url=http://http://localhost:8080/#/"><span>Twitter</span></a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:8080/#/"><span>Facebook</span></a>
        <a href="http://line.me/R/msg/text/?http://localhost:8080/#/"><span>LINE</span></a>
      </div>
      <p>Share</p>
    </div>
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
.top {
  padding-top: 20%;
  padding-bottom:  5%;
  background-image: linear-gradient(-90deg, #00E5FF, #00B2FF);
}
.bottom {
  padding-top: 5%;
  padding-bottom: 30%;
  background-image: linear-gradient(-90deg, #00E5FF, #00B2FF);
}
.share a {
  color: white;
  font-size: 50px;
}
</style>
