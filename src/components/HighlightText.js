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

  if (!keyword) {
    const escaseOriginal = utils.escapeHtml(original)
    el.innerHTML = replaceWithOriginal(escaseOriginal, escaseOriginal)
    return
  }

  let newStyle = copyObj(utils.defaultStyle)

  if (checkStyle(overWriteStyle)) {
    newStyle = Object.assign(newStyle, overWriteStyle)
  }

  const newSensitive = sensitive === undefined ? true : sensitive
  const highlight = utils.highlightSearch(original, keyword, getFlags(newSensitive), newStyle)
  el.innerHTML = replaceWithOriginal(utils.escapeHtml(original), highlight)
}

const replaceWithOriginal = (original, newText) => {
  return `<p style="display:none;">${original}</p>${newText}`
}

export default {
  bind(el, binding) {
    // Two consecutive spaces will be converted by innerHTML into a space and a &nbsp;
    // then &nbsp; converted into &amp;nbsp;
    const originalString = `${el.innerText}`
    el.innerHTML = replaceWithOriginal(originalString, originalString)
    beforeHighlight(el, binding, utils.unescapeHtml(originalString))
  },
  componentUpdated(el, binding, vnode) {
    const originalString = utils.escapeHtml(vnode.children[0].text)
    el.innerHTML = replaceWithOriginal(originalString, originalString)
    beforeHighlight(el, binding, utils.unescapeHtml(originalString))
  },
  unbind(el) {
    el.innerHTML = el.children[0].innerHTML
  }
}
