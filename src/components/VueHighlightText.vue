<template>
  <span v-html="highlightSeach(message, keyword)"></span>
</template>


<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    keyword: {
      type: String,
      required: true
    }
  },
  methods: {
    highlightSeach (message, keyword) {
      let match = new RegExp(keyword, 'g')
      if (match.test(message)) {
        return message.replace(match, `<span style="color: #0084FF;">${this.keyword}</span>`)
      }
      return message
    },
  }
}
</script>
