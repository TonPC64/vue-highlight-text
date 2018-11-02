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
        <a href="#Install" class="mg-l-10px f-w-900">Install</a>
        <a href="#Usage" class="mg-l-10px f-w-900">Usage</a>
        <a href="#Example" class="mg-l-10px f-w-900">Example</a>
      </div>
    </div>
    <div class="body pd-20px">
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
      <div id="Home" class="pd-20px">
        <span class="f-s-28px f-w-bold"># vue-highlight-text</span>
        <p class="pd-6px p-content">
          Vue component for highlight multiple instances of a word.
        </p>
      </div>

      <div id="Install" class="pd-20px">
        <span class="f-s-28px f-w-bold"># Install</span>
        <div>
          <span class="f-s-20px pd-20px f-w-bold">npm</span>
          <highlight language="bash" class="highlight">
      npm install --save vue-highlight-text
          </highlight>
        </div>
        <div>
          <span class="f-s-20px pd-20px f-w-bold">yarn</span>
          <highlight language="bash" class="highlight">
      yarn add vue-highlight-text
          </highlight>
        </div>
      </div>
      <hr>
      <div id="Usage" class="pd-20px">
        <span class="f-s-28px f-w-bold"># Usage</span>
        <div>
          <span class="f-s-20px pd-20px f-w-bold">Use component</span>
          <highlight language="javascript" class="highlight">
      import Vue from 'vue';
      import HighlightText from 'vue-highlight-text';
      
      Vue.component('HighlightText', HighlightText);
          </highlight>
        </div>
  
        <div>
          <span class="f-s-20px pd-20px f-w-bold">Use directive</span>
          <highlight language="javascript" class="highlight">
      import Vue from 'vue';
      import highlight from 'vue-highlight-text/public/directive.min.js';
      
      Vue.directive('highlight', highlight);
          </highlight>
        </div>

        <div>
          <span class="f-s-20px pd-20px f-w-bold">In file .vue</span>
          <highlight language="html" class="highlight">
      {{exampleUseComponent}}
          </highlight>
        </div>
      </div>
      <hr>

      <div id="Example" class="pd-20px">
        <span class="f-s-28px f-w-bold"># Example</span>
        <div>
          <div class="f-s-20px pd-20px f-w-bold">input</div>
          <div class="box w-fit-content pd-20px mg-l-20px">
            <div>
              <b>overWriteStyle</b> {{overWriteStyle}}
            </div>
            <div>
              <b>Keyword</b>:
              <input type="text" v-model="newKeyword">
              <button @click="addKeyword(newKeyword)">Add Keyword</button>
              <div :key="index" v-for="(k, index) in keyword" class="pd-5px">
                <b-tag
                  size="is-medium"
                  closable
                  @close="keyword.splice(index, 1)">
                    {{k}}
                </b-tag>
                <br>
              </div>
              <b-switch v-model="sensitive">{{sensitive}}</b-switch>
            </div>
          </div>
        </div>

        <div>
          <div class="f-s-20px pd-20px f-w-bold">Component with default props</div>
          <div class="box w-fit-content pd-20px mg-l-20px">
            <HighlightText :keyword="keyword">{{msg}}</HighlightText>
          </div>
        </div>
        <div>
          <div class="f-s-20px pd-20px f-w-bold">Directive with default value</div>
          <div class="box w-fit-content pd-20px mg-l-20px">
            <span v-highlight="{keyword}">{{msg}}</span>
          </div>
        </div>
        <div>
          <div class="f-s-20px pd-20px f-w-bold">Component all props</div>
          <div class="box w-fit-content pd-20px mg-l-20px">
            <HighlightText :keyword="keyword" :sensitive="sensitive" :overWriteStyle="overWriteStyle">{{msg}}</HighlightText>
          </div>
        </div>
        <div>
          <div class="f-s-20px pd-20px f-w-bold">Directive all value</div>
          <div class="box w-fit-content pd-20px mg-l-20px">
            <span v-highlight="{keyword, sensitive, overWriteStyle}">{{msg}}</span>
            <div :key="index" v-highlight={keyword} v-for="(data, index) in loopData">{{data.text}}</div>
          </div>
        </div>
        <div>
          <div class="f-s-20px pd-20px f-w-bold">Directive all value with string keyword</div>
          <div class="box w-fit-content pd-20px mg-l-20px">
            <b>Messages</b>: <span v-highlight="{keyword: keywordStr, sensitive, overWriteStyle}">{{msg}}</span><br/>
            <b>Keyword</b>: <input type="text" v-model="keywordStr">
          </div>
        </div>

        <div>
          <div class="f-s-20px pd-20px f-w-bold">Directive all value with string keyword</div>
          <div class="box w-fit-content pd-20px mg-l-20px">
            <b>Messages</b>: <span v-highlight="{keyword: keywordStr, sensitive, overWriteStyle}">{{html}}</span><br/>
            <b>Keyword</b>: <input type="text" v-model="keywordStr">
          </div>
        </div>

        <div>
          <div class="f-s-20px pd-20px f-w-bold">Directive all value with string keyword</div>
          <div class="box w-fit-content pd-20px mg-l-20px">
            <b>Messages</b>: <span v-highlight="{keyword: keywordStr, sensitive, overWriteStyle}">{{script}}</span><br/>
            <b>Keyword</b>: <input type="text" v-model="keywordStr">
          </div>
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
        color: 'red',
        backgroundColor: 'yellow'
      },
      loopData: [{ text: 'text1' }, { text: 'text2' }, { text: 'text3' }],
      exampleUseComponent: 
    `<!-- component -->
    <HighlightText :keyword="keyword" :sensitive="sensitive">{{msg}}</HighlightText>
    <!-- Directive -->
    <span v-highlight="{keyword: keyword}">{{msg}}</span>`
    }
  }
}
</script>

<style >
body::-webkit-scrollbar  {
  display: none;
}
.highlight {
  padding: 0;
  width: 100%;
  border-radius: 6px;
  margin: 5px 0 !important;
}
.highlight .hljs {
  padding: 0 !important;
  background-color: #f6f8fa !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  left: 0;
  right: 0;
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
  /* color: #00C1E8; */
  color: #2c3e50;
}
</style>
