const toStyleString = require('to-style').string

const defaultStyle = {
  color: '#00C1E8'
}

const getFlags = function(sensitive) {
  let flag = 'g'
  flag = !sensitive ? flag + 'i' : flag
  return flag
}

const escapeRegExp = function(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
}

const highlightSearch = function(message, keyword, flags, styleString) {
  let newKeyword = keyword
  let regexWord = ''
  if (typeof keyword === String) {
    regexWord =  escapeRegExp(newKeyword)
  } else if (Array.isArray(keyword) && keyword.length > 0) {
    regexWord = keyword.map(k => escapeRegExp(k)).join('|')
  } else {
    console.warn('type is not String or Array')
    return ''
  }

  const match = new RegExp(`(${regexWord})`, flags)
  if (match.test(message)) {
    return message.replace(match, `<span ${styleString}>\$&</span>`)
  }
  return message
}

const checkStyle = overWriteStyle => !!overWriteStyle && JSON.stringify(overWriteStyle) !== '{}'
const copyObj = obj => JSON.parse(JSON.stringify(obj))

const beforeHighlight = (el, binding, original) => {
  const {
    value: { keyword, sensitive, overWriteStyle }
  } = binding

  if (!keyword || keyword === '') {
    el.innerHTML = replaceWithOriginal(original, original)
    return
  }

  let newStyle = copyObj(defaultStyle)
  let styleString = ''

  if (checkStyle(overWriteStyle)) {
    newStyle = Object.assign(newStyle, overWriteStyle)
  }

  styleString = `style="${toStyleString(newStyle)}"`
  const newSensitive = sensitive === undefined ? true : sensitive
  const highlight = highlightSearch(original, keyword, getFlags(newSensitive), styleString)
  el.innerHTML = replaceWithOriginal(original, highlight)
}

const replaceWithOriginal = (original, newText) => {
  return `<p style="display:none;">${original}</p>${newText}`
}

export default {
  bind(el, binding) {
    el.innerHTML = replaceWithOriginal(el.innerHTML, el.innerHTML)
    beforeHighlight(el, binding, el.children[0].innerHTML)
  },
  update(el, binding) {
    const original = el.children[0].innerHTML
    el.innerHTML = replaceWithOriginal(original, original)
    beforeHighlight(el, binding, el.children[0].innerHTML)
  },
  unbind(el) {
    el.innerHTML = el.children[0].innerHTML
  }
}
