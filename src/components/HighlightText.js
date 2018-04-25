let originalContent = undefined

const getFlags = function (sensitive) {
  let flag = 'g'
  flag = !sensitive ? flag + 'i' : flag
  return flag
}

const escapeRegExp = function (str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
}

const highlightSeach = function (message, keyword, flags) {  
  const match = new RegExp(`(${escapeRegExp(keyword)})`,flags)
  if (match.test(message)) {
    return message.replace(match, `<span style="color: #0084FF;">\$&</span>`)
  }
  return message
}

const HighlightTextDirective = {
  bind(el, binding) {
    originalContent = el.innerHTML
    const { value: {keyword, sensitive} } = binding
    let newSensitive = sensitive === undefined ? true : sensitive
    el.innerHTML = highlightSeach(originalContent, keyword, getFlags(newSensitive))
  },
  update(el, binding) {
    const { value: {keyword, sensitive} } = binding
    let newSensitive = sensitive === undefined ? true : sensitive
    el.innerHTML = highlightSeach(originalContent, keyword, getFlags(newSensitive))
  },
  unbind(el) {
    el.innerHTML = originalContent
  }
}

export default HighlightTextDirective
