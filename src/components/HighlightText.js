import utils from './Utils'

const getFlags = function(sensitive) {
  let flag = 'g'
  flag = !sensitive ? flag + 'i' : flag
  return flag
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

  let newStyle = copyObj(utils.defaultStyle)

  if (checkStyle(overWriteStyle)) {
    newStyle = Object.assign(newStyle, overWriteStyle)
  }

  const newSensitive = sensitive === undefined ? true : sensitive
  const highlight = utils.highlightSearch(original, keyword, getFlags(newSensitive), newStyle)
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
