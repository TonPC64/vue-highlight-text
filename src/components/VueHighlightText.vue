<template>
  <span v-highlight="{keyword, sensitive, overWriteStyle}" >
      <slot></slot>
  </span>
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
  }
}
</script>
