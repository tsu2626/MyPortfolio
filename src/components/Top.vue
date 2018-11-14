<template>
  <div class="hello">
    <h1>Welcome to Tsuyoshi Hirosawa's Portfolio Site</h1>
    <h2>{{ tab1 }}</h2>
    <ul>
      <li><a href="https://twitter.com/watuyo_2">Twitter</a></li>
      <li><a href="https://github.com/tsu2626">GItHub</a></li>
      <li><a href="https://qiita.com/watuyo_2">Qiita</a></li>
      <li><a href="https://qa8srqqprvzps6ls.qrunch.io/">Qrunch</a></li>
      <li><a href="https://connpass.com/user/watuyo_2/">connpass</a></li>
      <li><a href="https://supporterzcolab.com/user/watuyo/">SupporterzColab</a></li>
      <li><a href="https://watuyo-2.hateblo.jp/">HatenaBlog</a></li>
    </ul>
  </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
a {
  color: #42b983;
}
</style>
