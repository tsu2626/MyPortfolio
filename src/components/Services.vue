<template>
  <body>
    <div class="serviceTop">
      <div class="title is-1　has-text-left-mobile has-text-centerd">
        <h1>Services</h1>
      </div>
    </div>
    <div class="serviceBottom">
      <ul id="list" class="columns">
        <li class="column" v-for="item in items" :key="item">
          <div class="box">
            <a class="title is-2" v-bind:href="item.link">{{ item.title }}</a><br>
            <p class="subtitle">{{ item.description }}</p><br>
          </div>
        </li>
      </ul>
    </div>
  </body>
</template>

<script>
export default {
  name: 'Services',
  data () {
    return {
      items:[
        {title: "Yotei-kun", description: "GitHubで認証でき、予定を作って出欠が取れるサービス", link: "https://mr-schedule-arranger.herokuapp.com/"},
        {title: "niiyama-project", description: "アーティストの活動休止を受け、ファンが想いを発信できるサイト", link: "https://niiyama-project-0210.firebaseapp.com/"},
      ]
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
a {
  color: #42b983;
}
.serviceTop {
  padding: 5%;
}
</style>
