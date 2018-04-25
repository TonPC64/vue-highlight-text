<template>
  <span v-highlight="{keyword: keyword, sensitive: sensitive}" >{{message}}</span>
</template>


<script>
import HighlightText from './HighlightText'
export default {
  props: {
    keyword: {
      type: String,
      required: true
    },
    sensitive: {
      type: Boolean,
      default: true
    },
  },
  directives: {
    highlight: HighlightText
  },
  computed: {
    message () {
      return this.$slots.default[0].text
    }
  }
}
</script>
