# vue-highlight-text

[![NPM version](https://img.shields.io/npm/v/vue-highlight-text.svg?style=flat)](https://npmjs.com/package/vue-highlight-text)
[![NPM downloads](https://img.shields.io/npm/dm/vue-highlight-text.svg?style=flat)](https://npmjs.com/package/vue-highlight-text)
[![Build Status](https://travis-ci.org/TonPC64/vue-highlight-text.svg?branch=master)](https://travis-ci.org/TonPC64/vue-highlight-text)

> Vue component for highlight multiple instances of a word

![](./images/example.gif)

## Installation

```bash
# with yarn
yarn add vue-highlight-text

# with npm
npm install --save vue-highlight-text
```

## Use component

```js
import Vue from 'vue';
import HighlightText from 'vue-highlight-text';

Vue.component('HighlightText', HighlightText);
```

## Use directive

```js
import Vue from 'vue';
import highlight from 'vue-highlight-text/public/directive.min.js';

Vue.directive('highlight', highlight);
```

## In file vue

```html
<!-- component -->
<HighlightText :keyword="keyword" :sensitive="sensitive">{{msg}}</HighlightText>
<!-- Directive -->
<span v-highlight="{keyword: keyword}">{{msg}}</span>
```

## Props or value of directive

| Name           | Type   | Default            | Description                                                   |
| :------------- | :----- | :----------------- | :------------------------------------------------------------ |
| keyword        | string | ''                 | word for highlight in message.                                |
| sensitive      | bool   | true               | highlight with case sensitive                                 |
| overWriteStyle | Object | {color: '#00C1E8'} | custom highlight for overwrite style by HTML DOM Style Object |
