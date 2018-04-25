/*!
 * vue-highlight-text v1.1.2
 * (c) 2018-present Chanwit Piromplad <kingkong2103@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueHighlightText = factory());
}(this, (function () { 'use strict';

  var originalContent = undefined;

  var getFlags = function getFlags(sensitive) {
    var flag = 'g';
    flag = !sensitive ? flag + 'i' : flag;
    return flag;
  };

  var escapeRegExp = function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  };

  var highlightSeach = function highlightSeach(message, keyword, flags) {
    var match = new RegExp("(".concat(escapeRegExp(keyword), ")"), flags);

    if (match.test(message)) {
      return message.replace(match, "<span style=\"color: #0084FF;\">$&</span>");
    }

    return message;
  };

  var HighlightTextDirective = {
    bind: function bind(el, binding) {
      originalContent = el.innerHTML;
      var _binding$value = binding.value,
          keyword = _binding$value.keyword,
          sensitive = _binding$value.sensitive;
      el.innerHTML = highlightSeach(originalContent, keyword, getFlags(sensitive));
    },
    update: function update(el, binding) {
      var _binding$value2 = binding.value,
          keyword = _binding$value2.keyword,
          sensitive = _binding$value2.sensitive;
      el.innerHTML = highlightSeach(originalContent, keyword, getFlags(sensitive));
    },
    unbind: function unbind(el) {
      el.innerHTML = originalContent;
    }
  };

  return HighlightTextDirective;

})));
