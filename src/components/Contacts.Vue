<template>
  <body>
    <div class="contactTop">
      <div class="title is-1　has-text-left-mobile has-text-centerd">
        <h1>Contacts</h1>
      </div>
    </div>
    <div class="contactBottom">
      <div class="subtitle">
        <p>全てのご連絡は<a href="https://twitter.com/watuyo_2">Twitter</a>のDMかメールにてお願いいたします</p>
      </div>
      <ul>
        <!-- <li><a href="https://twitter.com/watuyo_2">Twitter</a></li> -->
        <li><a href="https://github.com/tsu2626">GItHub</a></li>
        <li><a href="https://qiita.com/watuyo_2">Qiita</a></li>
        <li><a href="https://qa8srqqprvzps6ls.qrunch.io/">Qrunch</a></li>
        <li><a href="https://connpass.com/user/watuyo_2/">connpass</a></li>
        <li><a href="https://supporterzcolab.com/user/watuyo/">SupporterzColab</a></li>
        <li><a href="https://watuyo-2.hateblo.jp/">HatenaBlog</a></li>
      </ul>
    </div>
  </body>
</template>

<script>
export default {
  name: 'Contacts',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
a {
  color: #42b983;
}
.contactTop {
  padding: 5%;
}
.contactBottom {

}
</style>
