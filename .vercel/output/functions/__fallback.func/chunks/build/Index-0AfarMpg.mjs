import { defineComponent, useAttrs, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, createBlock, createCommentVNode, openBlock, renderSlot, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { b as _sfc_main$b } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    icon: {},
    href: {},
    tight: { type: Boolean, default: false },
    elevated: { type: Boolean, default: false },
    cursor: { type: Boolean, default: false },
    truncate: { type: Boolean, default: false }
  },
  setup(__props) {
    const attrs = useAttrs();
    const { class: className, ...restAttrs } = attrs;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.href ? unref(_sfc_main$b) : "div"), mergeProps({
        href: __props.href,
        class: [
          "rounded-lg card-base overflow-x-hidden transition-colors",
          __props.tight ? "p-2" : "p-4",
          {
            "cursor-pointer": __props.cursor === true,
            "items-center flex space-x-4": _ctx.$slots.icon || _ctx.$slots["icon-left"],
            "justify-between": _ctx.$slots.icon && !_ctx.$slots["icon-left"]
          },
          unref(className)
        ]
      }, { ...restAttrs }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$slots["icon-left"]) {
              _push2(`<div class="flex-shrink-0"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "icon-left", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="overflow-x-hidden leading-relaxed space-y-2"${_scopeId}>`);
            if (_ctx.$slots.title) {
              _push2(`<h2 class="font-medium text-black dark:text-white truncate"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", { class: "font-medium text-black dark:text-white truncate" }, null, _push2, _parent2, _scopeId);
              _push2(`</h2>`);
            } else if (__props.title) {
              _push2(`<h2 class="font-medium text-black dark:text-white truncate"${_scopeId}>${ssrInterpolate(__props.title)}</h2>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$slots.default) {
              _push2(`<p class="${ssrRenderClass([__props.truncate === true && "line-clamp-2", "text-black/50 dark:text-white/30 text-sm"])}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.$slots.icon) {
              _push2(`<div class="flex-shrink-0"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.$slots["icon-left"] ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex-shrink-0"
              }, [
                renderSlot(_ctx.$slots, "icon-left")
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "overflow-x-hidden leading-relaxed space-y-2" }, [
                _ctx.$slots.title ? (openBlock(), createBlock("h2", {
                  key: 0,
                  class: "font-medium text-black dark:text-white truncate"
                }, [
                  renderSlot(_ctx.$slots, "title", { class: "font-medium text-black dark:text-white truncate" })
                ])) : __props.title ? (openBlock(), createBlock("h2", {
                  key: 1,
                  class: "font-medium text-black dark:text-white truncate"
                }, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                _ctx.$slots.default ? (openBlock(), createBlock("p", {
                  key: 2,
                  class: ["text-black/50 dark:text-white/30 text-sm", __props.truncate === true && "line-clamp-2"]
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2)) : createCommentVNode("", true)
              ]),
              _ctx.$slots.icon ? (openBlock(), createBlock("div", {
                key: 1,
                class: "flex-shrink-0"
              }, [
                renderSlot(_ctx.$slots, "icon")
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Index-0AfarMpg.mjs.map
