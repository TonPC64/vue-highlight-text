<template>
  <span v-highlight="{keyword, sensitive, overWriteStyle}" >{{message}}</span>
</template>


<script>
import HighlightText from './HighlightText'
export default {
  props: {
    keyword: {
      type: [String, Array],
      required: true
    },
    sensitive: {
      type: Boolean,
      default: true
    },
    overWriteStyle: {
      type: Object,
      default: () => {return {}}
    }
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
