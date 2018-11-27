<template>
<body>
  <div class="aboutTop">
    <div class="title is-1　has-text-left-mobile has-text-centerd">
      <h1>About</h1>
    </div>
  </div>
  <div class="aboutBottom">
    <ul id="" class="colloms">
      <li class="collom" v-for="about in abouts" :key="about">
        <div class="box">
          {{ about.title }}
          <p>aaaaa</p>
        </div>
      </li>
    </ul>
  </div>
</body>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      abouts:[
        {title: "生い立ち"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.aboutTop {
  padding: 5%;
}
</style>
