'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var serverRenderer = require('vue/server-renderer');

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<html${serverRenderer.ssrRenderAttrs(vue.mergeProps({ lang: "en" }, _attrs))}><head><meta charset="utf-8"><link rel="stylesheet" href="/css/styles.css"><script type="module" src="/src/main.js"></script></head><body class="bg-gradient-to-r from-blue-300 to-amber-400"><div class="text-center text-5xl font-bold text-white p-10"> Hello World </div><div id="vitehello"></div></body></html>`);
}

exports.ssrRender = ssrRender;
