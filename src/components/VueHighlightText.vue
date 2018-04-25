<template>
  <div>
    <div>{{sensitive ? 'true': 'false'}}</div>
    <span v-html="highlightSeach(message, keyword)"></span>
  </div>
</template>


<script>
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
  computed: {
    message () {
      return this.$slots.default[0].text
    },
    flags () {
      let flags = 'g'
      flags = !this.sensitive ? flags + 'i' : flags
      return flags
    }
  },
  methods: {
    highlightSeach (message, keyword) {
      
      const match = new RegExp(`(${this.escapeRegExp(keyword)})`, this.flags)
      console.log(match)
      if (match.test(message)) {
        console.log(this.flags, match.test(message))
        return message.replace(match, `<span style="color: #0084FF;">\$&</span>`)
      }
      return message
    },
    escapeRegExp (str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
    }
  }
}
</script>
