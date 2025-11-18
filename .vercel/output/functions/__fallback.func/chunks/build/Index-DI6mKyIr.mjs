import { defineComponent, mergeProps, ref, unref, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { h as _export_sfc } from './server.mjs';

const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-md space-y-4 card-base" }, _attrs))}><div class="rounded-md bg-black/10 h-6 animate-pulse w-7/12 dark:bg-white/5"></div><div class="space-y-2"><div class="rounded-md bg-black/10 h-4 w-full animate-pulse dark:bg-white/5"></div><div class="rounded-md bg-black/10 h-4 animate-pulse w-4/12 dark:bg-white/5"></div></div><div class="space-y-2"><div class="flex items-center justify-between"><div class="rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"></div><div class="rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"></div></div><div class="flex items-center justify-between"><div class="rounded-md bg-black/10 h-4 animate-pulse w-2/6 dark:bg-white/5"></div><div class="rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"></div></div><div class="flex items-center justify-between"><div class="rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"></div><div class="rounded-md bg-black/10 h-4 animate-pulse w-1/6 dark:bg-white/5"></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkeletonLoader/Repository.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Iframe",
  __ssrInlineRender: true,
  props: {
    iframeUrl: { type: [String, Boolean, null], default: null }
  },
  setup(__props) {
    const itemLoaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: {
          "bg-gray-100 dark:bg-neutral-800 rounded animate-pulse": unref(itemLoaded) === false
        }
      }, _attrs))}>`);
      if (__props.iframeUrl) {
        _push(`<iframe class="${ssrRenderClass({
          "w-full h-full rounded": true,
          invisible: unref(itemLoaded) === false
        })}"${ssrRenderAttr("src", __props.iframeUrl)}></iframe>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkeletonLoader/Iframe.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-base space-y-2" }, _attrs))}><div class="rounded-md bg-black/5 flex-shrink-0 h-16 animate-pulse w-16 dark:bg-white/5"></div><div class="flex-grow space-y-1"><div class="rounded bg-black/5 h-4 animate-pulse w-2/3 dark:bg-white/5"></div><div class="rounded bg-black/5 h-4 animate-pulse w-1/3 dark:bg-white/5"></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkeletonLoader/Song.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Lastfm",
  __ssrInlineRender: true,
  setup(__props) {
    const getRandomItem = computed(() => {
      return ["w-2/3", "w-3/4", "w-2/5"][Math.floor(Math.random() * 3)];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SkeletonLoader = _sfc_main;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-md card-base flex space-x-4 w-full items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SkeletonLoader, { class: "rounded-md flex-shrink-0 h-16 w-16" }, null, _parent));
      _push(`<div class="flex flex-col space-y-2 w-full">`);
      _push(ssrRenderComponent(_component_SkeletonLoader, {
        class: ["h-5", unref(getRandomItem)]
      }, null, _parent));
      _push(ssrRenderComponent(_component_SkeletonLoader, { class: "h-5 w-1/3" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkeletonLoader/Lastfm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center" }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24"><path class="fill-[#888888] dark:fill-white" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"></path><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"></animateTransform></path></svg></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkeletonLoader/Spinner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    type: { default: "block" },
    iframeUrl: { type: [String, Boolean, null], default: null }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SkeletonLoaderRepository = __nuxt_component_0;
      const _component_SkeletonLoaderIframe = _sfc_main$4;
      const _component_SkeletonLoaderSong = __nuxt_component_2;
      const _component_SkeletonLoaderLastfm = _sfc_main$2;
      const _component_SkeletonLoaderSpinner = __nuxt_component_4;
      if (__props.type === "repository") {
        _push(ssrRenderComponent(_component_SkeletonLoaderRepository, _attrs, null, _parent));
      } else if (__props.type === "iframe") {
        _push(ssrRenderComponent(_component_SkeletonLoaderIframe, mergeProps({ "iframe-url": __props.iframeUrl }, _attrs), null, _parent));
      } else if (__props.type === "song") {
        _push(ssrRenderComponent(_component_SkeletonLoaderSong, _attrs, null, _parent));
      } else if (__props.type === "lastfm") {
        _push(ssrRenderComponent(_component_SkeletonLoaderLastfm, _attrs, null, _parent));
      } else if (__props.type === "spinner") {
        _push(ssrRenderComponent(_component_SkeletonLoaderSpinner, _attrs, null, _parent));
      } else if (__props.type === "block") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black/5 rounded animate-pulse dark:bg-white/5" }, _attrs))}></div>`);
      } else if (__props.type === "rounded") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black/5 rounded-full animate-pulse dark:bg-white/5" }, _attrs))}></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkeletonLoader/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Index-DI6mKyIr.mjs.map
