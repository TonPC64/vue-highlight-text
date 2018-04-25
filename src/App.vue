<template>
  <div id="app">
    <h1>Example</h1>
    <div>
      <h2>Component no style</h2>
      <HighlightText :keyword="keyword" :sensitive="sensitive">{{msg}}</HighlightText>
    </div>
    <div>
      <h2>directive with default</h2>
      <span v-highlight="{keyword}">{{msg}}</span>
    </div>
    <div>
      <h2>directive all </h2>
      <span 
      v-highlight="{
        keyword: keyword,
        sensitive: sensitive,
        overWriteStyle: style
      }">
        {{msg}}
      </span>
    </div>
    <h2>input</h2>
    <div>
     keyword: <input type="text" placeholder="keyword" v-model="keyword">
    </div>
    <div>
      <input type="checkbox" v-model="sensitive">Case Sensitive : {{sensitive}}
    </div>
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
      msg: 'Lorem ipsum dolor',
      keyword: 'lo',
      sensitive: false,
      style: {
        color: '#F0F',
        backgroundColor: 'blue'
      }
    }
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 60px;
  width: 500px;
}
.highlight {
  color: green !important;
}
</style>
