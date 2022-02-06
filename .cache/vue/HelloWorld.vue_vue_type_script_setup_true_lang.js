'use strict';

var vue = require('vue');
var serverRenderer = require('vue/server-renderer');

var script = {
  __ssrInlineRender: true,
  setup(__props) {

const count = vue.ref(0);

return (_ctx, _push, _parent, _attrs) => {
  _push(`<div${
    serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "font-bold text-red-500 text-center text-3xl" }, _attrs))
  } data-v-469af010><h1 data-v-469af010>Bonjour le monde</h1><button type="button" class="flex rounded-lg mx-auto p-2 m-4 bg-yellow-500 text-gray-600 font-mono text-lg hover:bg-red-500 shadow-lg" data-v-469af010> You can count on me: ${
    serverRenderer.ssrInterpolate(count.value)
  }</button></div>`);
}
}

};

module.exports = script;
