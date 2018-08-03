const toStyleString = require('to-style').string

const defaultStyle = {
  color: '#00C1E8'
}

const escapeRegExp = function(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
}

/**
 * This func may be used by "HighlightText.js(v-highlight-text)" or used to mark the keywors for html content from server.
 * <br/>
 *  For some reason, you can't use v-html and v-highlight-text together.
 *  You can format the html content using this function and then display it with 'v-html'
 *
 * @param message
 * @param keyword
 * @param flags
 * @param newStyle
 * @returns {*}
 */
const highlightSearch = function(message, keyword, flags = 'g', newStyle = defaultStyle) {
  let styleString = `style="${toStyleString(newStyle)}"`
  let newKeyword = keyword
  let regexWord = ''
  if (typeof keyword === String) {
    if (/^\s*$/.test(keyword)) {
      // when the keyword is empty string, return the original message.
      return message;
    }
    regexWord =  escapeRegExp(newKeyword)
  } else if (Array.isArray(keyword) && keyword.length > 0) {
    let kws = keyword.filter(s => !/^\s*$/.test(keyword))
    if (kws.length === 0) {
      // when the keyword is empty string, return the original message.
      return message
    }
    regexWord = keyword.map(k => escapeRegExp(k)).join('|')
  } else {
    console.warn('type is not String or Array')
    // return ''
    return message
  }

  // const match = new RegExp(`(${regexWord})`, flags)
  // Can only replace the words out of the html tags.
  const match = new RegExp(`(${regexWord})(?![^<]*>)`, flags)
  if (match.test(message)) {
    return message.replace(match, `<span ${styleString}>\$&</span>`)
  }
  return message
}

export default {highlightSearch, defaultStyle}
