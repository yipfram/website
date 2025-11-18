import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageLayout",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {}
  },
  setup(__props) {
    const props = __props;
    const getDescriptions = computed(() => {
      return typeof props.description === "string" ? [props.description] : props.description;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-black/50 dark:text-white/30" }, _attrs))}><header class="space-y-2 my-12"><h1 class="text-black/90 dark:text-white/90 text-4xl font-semibold">${ssrInterpolate(__props.title)}</h1><!--[-->`);
      ssrRenderList(unref(getDescriptions), (description, index) => {
        _push(`<p>${ssrInterpolate(description)}</p>`);
      });
      _push(`<!--]--></header>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PageLayout-DbkzbJM8.mjs.map
