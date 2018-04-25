# vue-highlight-text

> Vue component for highlight multiple istances of a word

## Installation
```bash
# with yarn
yarn add vue-highlight-text

# with npm
npm install --save vue-highlight-text
```
## Use component
```js
import Vue from 'vue'
import HighlightText from 'vue-highlight-text'

Vue.component('HighlightText', HighlightText)
```
## Use directive
```js
import Vue from 'vue'
import highlight from 'vue-highlight-text/public/directive'

Vue.directive('highlight', highlight)
```

## In file vue
```html
<!-- component -->
<HighlightText :keyword="keyword" :sensitive="sensitive">{{msg}}</HighlightText>
<!-- Directive -->
<span v-highlight="{keyword: keyword}">{{msg}}</span>
```

## Props or value of directive

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| keyword | string | '' | word for highlight in message. |
| sensitive | bool | true | highlight with case sensitive |



