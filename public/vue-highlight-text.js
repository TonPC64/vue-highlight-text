/*!
 * vue-highlight-text v1.2.1
 * (c) 2018-present Chanwit Piromplad <kingkong2103@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueHighlightText = factory());
}(this, (function () { 'use strict';

  var toStyleString = require('to-style').string;

  var originalContent = undefined;
  var defaultStyle = {
    color: '#00C1E8'
  };

  var getFlags = function getFlags(sensitive) {
    var flag = 'g';
    flag = !sensitive ? flag + 'i' : flag;
    return flag;
  };

  var escapeRegExp = function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  };

  var highlightSeach = function highlightSeach(message, keyword, flags, styleString) {
    var match = new RegExp("(".concat(escapeRegExp(keyword), ")"), flags);

    if (match.test(message)) {
      return message.replace(match, "<span ".concat(styleString, ">$&</span>"));
    }

    return message;
  };

  var checkStyle = function checkStyle(overWriteStyle) {
    return !!overWriteStyle && JSON.stringify(overWriteStyle) !== '{}';
  };

  var copyObj = function copyObj(obj) {
    return JSON.parse(JSON.stringify(obj));
  };

  var HighlightText = {
    bind: function bind(el, binding) {
      originalContent = el.innerHTML;
      var _binding$value = binding.value,
          keyword = _binding$value.keyword,
          sensitive = _binding$value.sensitive,
          overWriteStyle = _binding$value.overWriteStyle;

      if (keyword && keyword == '') {
        el.innerHTML = originalContent;
        return;
      }

      var newStyle = copyObj(defaultStyle);
      var styleString = '';

      if (checkStyle(overWriteStyle)) {
        newStyle = Object.assign(defaultStyle, overWriteStyle);
      }

      styleString = "style=\"".concat(toStyleString(newStyle), "\"");
      var newSensitive = sensitive === undefined ? true : sensitive;
      el.innerHTML = highlightSeach(originalContent, keyword, getFlags(newSensitive), styleString);
    },
    update: function update(el, binding) {
      var _binding$value2 = binding.value,
          keyword = _binding$value2.keyword,
          sensitive = _binding$value2.sensitive,
          overWriteStyle = _binding$value2.overWriteStyle;

      if (keyword && keyword == '') {
        el.innerHTML = originalContent;
        return;
      }

      var newStyle = copyObj(defaultStyle);
      var styleString = '';

      if (checkStyle(overWriteStyle)) {
        newStyle = Object.assign(defaultStyle, overWriteStyle);
      }

      styleString = "style=\"".concat(toStyleString(newStyle), "\"");
      var newSensitive = sensitive === undefined ? true : sensitive;
      el.innerHTML = highlightSeach(originalContent, keyword, getFlags(newSensitive), styleString);
    },
    unbind: function unbind(el) {
      el.innerHTML = originalContent;
    }
  };

  (function () {
    if (typeof document !== 'undefined') {
      var head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style'),
          css = "";
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  })();
  var VueHighlightText = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('span', {
        directives: [{
          name: "highlight",
          rawName: "v-highlight",
          value: {
            keyword: _vm.keyword,
            sensitive: _vm.sensitive,
            overWriteStyle: _vm.overWriteStyle
          },
          expression: "{keyword, sensitive, overWriteStyle}"
        }]
      }, [_vm._v(_vm._s(_vm.message))]);
    },
    staticRenderFns: [],
    props: {
      keyword: {
        type: String,
        required: true
      },
      sensitive: {
        type: Boolean,
        default: true
      },
      overWriteStyle: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },
    directives: {
      highlight: HighlightText
    },
    computed: {
      message: function message() {
        return this.$slots.default[0].text;
      }
    }
  };

  return VueHighlightText;

})));
