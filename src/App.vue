<template>
  <div id="app">
    <HighlightText :keyword="keyword">
      {{msg}}
    </HighlightText>
    <br/>
    <div><span v-highlight="{keyword: keyword}">{{msg}}</span></div>
    <input type="text" placeholder="keyword" v-model="keyword">
    <input type="checkbox" v-model="sensitive"> sensitive : {{sensitive}}
  </div>
</template>

<script>
import HighlightText from './components/VueHighlightText'
import highlight from './components/HighlightText'
export default {
  name: 'app',
  components: {
    HighlightText
  },
  directives: {
    highlight
  },
  data () {
    return {
      msg: '(l)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
      keyword: 'lo',
      sensitive: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
