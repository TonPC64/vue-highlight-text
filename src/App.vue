<template>
  <div id="app">
    <div class="header w-100pct dp-flex jtf-ct-space-between al-it-center">
      <div class="f-s-32px f-w-bold">
        🔦 vue-highlight-text
        <iframe class="mg-l-10px"
          src="https://ghbtns.com/github-btn.html?user=TonPC64&repo=vue-highlight-text&type=star&count=true&size=large"
          frameborder="0"
          scrolling="0"
          width="160px"
          height="30px"/>
      </div>
      <div class="f-s-24px">
        <a href="#Install" class="mg-l-10px">Install</a>
        <a href="#Usage" class="mg-l-10px">Usage</a>
        <a href="#Example" class="mg-l-10px">Example</a>
      </div>
    </div>
    <div class="body pd-20px">
      <div id="Home">
        <div>
          <a href="https://npmjs.com/package/vue-highlight-text" target="_blank">
            <img src="https://img.shields.io/npm/v/vue-highlight-text.svg?style=flat" alt="">
          </a>
          <a href="https://npmjs.com/package/vue-highlight-text" target="_blank">
            <img src="https://img.shields.io/npm/dm/vue-highlight-text.svg?style=flat" alt="">
          </a>
          <a href="https://travis-ci.org/TonPC64/vue-highlight-text" target="_blank">
            <img src="https://travis-ci.org/TonPC64/vue-highlight-text.svg?branch=master" alt="">
          </a>
        </div>
        <span class="f-s-28px f-w-bold"># vue-highlight-text</span>
        <p class="pd-6px p-content">
          Vue component for highlight multiple instances of a word.
        </p>
      </div>
      <div id="Install">
         <span class="f-s-28px f-w-bold"># Install</span>
         <div class="code-section">
           npm install --save vue-highlight-text
         </div>
      </div>
      <div id="Usage">
        <span class="f-s-28px f-w-bold"># Usage</span>
      </div>
      <div id="Example">
        <span class="f-s-28px f-w-bold"># Exanple</span>
        <div>
          <h2>Component with default props</h2>
          <HighlightText :keyword="keyword">{{msg}}</HighlightText>
        </div>
        <div>
          <h2>Directive with default value</h2>
          <span v-highlight="{keyword}">{{msg}}</span>
        </div>
        <div>
          <h2>Component all props</h2>
          <HighlightText :keyword="keyword" :sensitive="sensitive" :overWriteStyle="overWriteStyle">{{msg}}</HighlightText>
        </div>
        <div>
          <h2>Directive all value</h2>
          <span v-highlight="{keyword, sensitive, overWriteStyle}">{{msg}}</span>
        </div>
        <div :key="index" v-highlight={keyword} v-for="(data, index) in loopData">{{data.text}}</div>
        <div>
          <h2>Directive all value with string keyword</h2>
          <b>Messages</b>: <span v-highlight="{keyword: keywordStr, sensitive, overWriteStyle}">{{msg}}</span><br/>
          <b>Keyword</b>: <input type="text" v-model="keywordStr">
        </div>

        <div>
          <h2>Directive all value with string keyword</h2>
          <b>Messages</b>: <span v-highlight="{keyword: keywordStr, sensitive, overWriteStyle}">{{html}}</span><br/>
          <b>Keyword</b>: <input type="text" v-model="keywordStr">
        </div>

        <div>
          <h2>Directive all value with string keyword</h2>
          <b>Messages</b>: <span v-highlight="{keyword: keywordStr, sensitive, overWriteStyle}">{{script}}</span><br/>
          <b>Keyword</b>: <input type="text" v-model="keywordStr">
        </div>

        <h2>input</h2>
        <div>
          <b>overWriteStyle</b> {{overWriteStyle}}
        </div>
        <div>
          <b>Keyword</b>:
          <input type="text" v-model="newKeyword">
          <button @click="addKeyword(newKeyword)">Add Keyword</button>
          <ul :key="index" v-for="(k, index) in keyword">
            <li>
              <b>{{k}}</b>
              <button @click="keyword.splice(index, 1)">X</button>
            </li>
          </ul>
          <input type="checkbox" v-model="sensitive" style="width: 20px; height: 20px">Case Sensitive :
          <b>{{sensitive}}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HighlightText from './components/VueHighlightText'
import highlight from './components/HighlightText'
import toStyle from 'to-style'

export default {
  name: 'app',
  components: {
    HighlightText
  },
  directives: {
    highlight
  },
  methods: {
    addKeyword (text) {
      this.keyword.push(text)
      this.newKeyword = ''
    }
  },
  data() {
    return {
      msg: 'Lorem ipsum dolor',
      html: '<span style="color: red">Hello</span>',
      script: `<script>alert('hello')<\/script>`,
      keyword: ['Lorem', 'ipsum', 'dolor', 'text1'],
      keywordStr: 'Hello',
      newKeyword: '',
      sensitive: false,
      overWriteStyle: {
        color: 'green',
        backgroundColor: 'blue'
      },
      loopData: [{ text: 'text1' }, { text: 'text2' }, { text: 'text3' }]
    }
  }
}
</script>

<style >
body::-webkit-scrollbar  {
  display: none;
}
.code-section {
    margin-top: 0;
    margin-bottom: 24px;
    padding: 12px;
    font-size: 1em;
    background: #f7f7f7;
    border-radius: 2px;
    overflow-x: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  left: 0;
  right: 0;
  -webkit-font-smoothing: ;
  -moz-osx-font-smoothing: grayscale;
}
.highlight {
  color: green !important;
}
.header {
  height: 80px;
  border-bottom: 1px solid #f5f5f5;
  padding: 20px;
}
.body {
  height: calc(100vh - 80px);
  overflow: auto;
}
.p-content {
  border-left: 3px solid #f5f5f5;
}
a {
  color: #00C1E8;
}
</style>
