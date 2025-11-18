import { _ as _sfc_main$2 } from './Index-DI6mKyIr.mjs';
import { defineComponent, withAsyncContext, computed, unref, withCtx, createVNode, toDisplayString, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { c as useNuxtApp, d as useLazyAsyncData, u as useHead, i as __nuxt_component_0 } from './server.mjs';
import { q as queryContent } from './query-4jrWN0HO.mjs';
import '../nitro/nitro.mjs';
import 'unist-util-visit';
import 'hast-util-to-string';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import '@iconify/utils';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'github-slugger';
import 'vue-router';
import 'vue3-disqus';
import '@iconify/vue';
import 'vue-tippy';
import 'medium-zoom';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'unhead/utils';
import './preview-8tYmIGC1.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    const getRandomNumber = () => {
      return Math.floor(Math.random() * 5) + 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SkeletonLoader = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-12 space-y-12" }, _attrs))}><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<section class="space-y-4">`);
        _push(ssrRenderComponent(_component_SkeletonLoader, { class: "w-2/7 md:w-1/12 h-10" }, null, _parent));
        _push(`<div class="flex flex-col space-y-3"><!--[-->`);
        ssrRenderList(getRandomNumber(), (j) => {
          _push(ssrRenderComponent(_component_SkeletonLoader, {
            key: j,
            class: "w-full h-14"
          }, null, _parent));
        });
        _push(`<!--]--></div></section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loaders/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $prepareMeta } = useNuxtApp();
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric"
    });
    const { data: posts, status } = ([__temp, __restore] = withAsyncContext(async () => useLazyAsyncData("posts", async () => {
      const result = await queryContent("/blog").only(["title", "createdAt", "_path"]).sort({ createdAt: -1 }).find();
      return result.map((post) => ({
        title: post.title,
        createdAt: post.createdAt,
        path: post._path
      }));
    })), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Blog",
      meta: $prepareMeta({
        title: "Romain's Blog",
        description: "Technology, business, and anything else I'm interested in :)"
      })
    });
    const getYearGroupedPosts = computed(() => {
      var _a;
      const yearsOfPosts = /* @__PURE__ */ new Map();
      if (!posts.value) return /* @__PURE__ */ new Map();
      for (const post of posts == null ? void 0 : posts.value) {
        if (!post.createdAt) continue;
        const year = new Date(post.createdAt).getFullYear();
        if (yearsOfPosts.has(year)) {
          (_a = yearsOfPosts.get(year)) == null ? void 0 : _a.push(post);
        } else {
          yearsOfPosts.set(year, [post]);
        }
      }
      const years = [...yearsOfPosts.keys()].sort((a, b) => b - a);
      const sortedByYears = /* @__PURE__ */ new Map();
      for (const year of years) {
        sortedByYears.set(year, yearsOfPosts.get(year));
      }
      return sortedByYears;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadersBlog = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(status) === "pending") {
        _push(ssrRenderComponent(_component_LoadersBlog, null, null, _parent));
      } else {
        _push(`<div class="mt-12 space-y-10"><!--[-->`);
        ssrRenderList(unref(getYearGroupedPosts), ([year, posts2]) => {
          _push(`<section class="space-y-4"><h1 class="text-3xl font-bold text-black/90 dark:text-white/90">${ssrInterpolate(year)}</h1><div class="space-y-3"><!--[-->`);
          ssrRenderList(posts2, (post) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: post.path,
              to: post.path,
              class: "flex items-start gap-6 card-base rounded-lg"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="w-[20%] text-black/50 dark:text-white/50 md:w-1/12 flex-shrink-0"${_scopeId}>${ssrInterpolate(unref(formatter).format(new Date(post.createdAt)))}</span><span class="text-blue-600 dark:text-blue-300 font-medium leading-relaxed"${_scopeId}>${ssrInterpolate(post.title)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "w-[20%] text-black/50 dark:text-white/50 md:w-1/12 flex-shrink-0" }, toDisplayString(unref(formatter).format(new Date(post.createdAt))), 1),
                    createVNode("span", { class: "text-blue-600 dark:text-blue-300 font-medium leading-relaxed" }, toDisplayString(post.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></section>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Du8QEr6H.mjs.map
