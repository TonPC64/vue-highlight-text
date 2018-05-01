const toStyleString = require('to-style').string;

let originalContent = undefined;
const defaultStyle = {
  color: '#00C1E8'
};

const getFlags = function(sensitive) {
  let flag = 'g';
  flag = !sensitive ? flag + 'i' : flag;
  return flag;
};

const escapeRegExp = function(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

const highlightSeach = function(message, keyword, flags, styleString) {
  const match = new RegExp(`(${escapeRegExp(keyword)})`, flags);
  if (match.test(message)) {
    return message.replace(match, `<span ${styleString}>\$&</span>`);
  }
  return message;
};

const checkStyle = overWriteStyle =>
  !!overWriteStyle && JSON.stringify(overWriteStyle) !== '{}';
const copyObj = obj => JSON.parse(JSON.stringify(obj));

const beforeHighlight = (el, binding) => {
  const {
    value: { keyword, sensitive, overWriteStyle }
  } = binding;
  if (keyword && keyword == '') {
    el.innerHTML = originalContent;
    return;
  }

  let newStyle = copyObj(defaultStyle);
  let styleString = '';

  if (checkStyle(overWriteStyle)) {
    newStyle = Object.assign(newStyle, overWriteStyle);
  }

  styleString = `style="${toStyleString(newStyle)}"`;
  let newSensitive = sensitive === undefined ? true : sensitive;
  el.innerHTML = highlightSeach(
    originalContent,
    keyword,
    getFlags(newSensitive),
    styleString
  );
};

export default {
  bind(el, binding) {
    originalContent = el.innerHTML;
    beforeHighlight(el, binding);
  },
  update(el, binding) {
    beforeHighlight(el, binding);
  },
  unbind(el) {
    el.innerHTML = originalContent;
  }
};
