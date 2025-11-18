import { _ as _sfc_main$2 } from './PageLayout-DbkzbJM8.mjs';
import { c as useNuxtApp, d as useLazyAsyncData, u as useHead, g as __nuxt_component_1$1, b as _sfc_main$b, _ as __nuxt_component_4$1 } from './server.mjs';
import { _ as _sfc_main$3 } from './Index-DI6mKyIr.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Repository",
  __ssrInlineRender: true,
  props: {
    name: {},
    language: { default: null },
    stars: {},
    top: { type: Boolean, default: false },
    license: { default: null },
    description: {},
    username: { default: "yipfram" }
  },
  setup(__props) {
    const icons = {
      Vue: "devicon:vuejs",
      TypeScript: "devicon:typescript",
      JavaScript: "devicon:javascript",
      HTML: "devicon:html5"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_4$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-lg card-base" }, _attrs))}><div class="space-y-2"><div class="${ssrRenderClass(__props.top && "flex justify-between space-x-2")}"><h3 class="text-black/90 dark:text-white/90 items-center truncate space-x-1"><span class="text-black/50 dark:text-white/30">${ssrInterpolate(__props.username)}/</span><span>${ssrInterpolate(__props.name)}</span></h3>`);
      if (__props.top === true) {
        _push(ssrRenderComponent(_component_Icon, {
          class: "h-6 text-yellow-600 w-6",
          title: "Top repository",
          name: "heroicons:star-solid"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-black/50 dark:text-white/30 line-clamp-2">${ssrInterpolate(__props.description)}</p></div><div class="mt-4"><div class="flex items-center justify-between text-black/50 dark:text-white/30"><span>Stars:</span><span>${ssrInterpolate(__props.stars)}</span></div>`);
      if (__props.language) {
        _push(`<div class="flex items-center justify-between text-black/50 dark:text-white/30"><span>Language:</span>`);
        if (icons[__props.language]) {
          _push(ssrRenderComponent(_component_Icon, {
            name: icons[__props.language],
            class: "h-5 w-5"
          }, null, _parent));
        } else {
          _push(`<span class="text-sm">${ssrInterpolate(__props.language)}</span>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.license) {
        _push(`<div class="flex items-center justify-between text-black/50 dark:text-white/30"><span>License:</span><span>${ssrInterpolate(__props.license)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Repository.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "repos",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $prepareMeta } = useNuxtApp();
    const { data: repos, status } = ([__temp, __restore] = withAsyncContext(async () => useLazyAsyncData(
      "repos",
      async () => {
        var _a;
        const filter = ["yipfram", "website"];
        const repos2 = await $fetch(
          "https://api.github.com/users/yipfram/repos?per_page=100"
        );
        return (_a = repos2 == null ? void 0 : repos2.filter((repo) => repo.fork === false && !filter.includes(repo.name))) == null ? void 0 : _a.sort((a, b) => (b == null ? void 0 : b.stargazers_count) - (a == null ? void 0 : a.stargazers_count));
      },
      {
        default: () => []
      }
    )), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "GitHub Repositories",
      meta: $prepareMeta({
        title: "GitHub Repositories",
        description: "My open-source projects' GitHub repositories."
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageLayout = _sfc_main$2;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_SkeletonLoader = _sfc_main$3;
      const _component_SmartLink = _sfc_main$b;
      const _component_CardRepository = _sfc_main$1;
      _push(ssrRenderComponent(_component_PageLayout, mergeProps({
        title: "Repositories",
        description: "My public projects on GitHub."
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              fallback: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid gap-4 md:grid-cols-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(9, (i) => {
                    _push3(ssrRenderComponent(_component_SkeletonLoader, {
                      key: `skeleton-${i}`,
                      type: "repository"
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid gap-4 md:grid-cols-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(9, (i) => {
                        return createVNode(_component_SkeletonLoader, {
                          key: `skeleton-${i}`,
                          type: "repository"
                        });
                      }), 64))
                    ])
                  ];
                }
              })
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                fallback: withCtx(() => [
                  createVNode("div", { class: "grid gap-4 md:grid-cols-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(9, (i) => {
                      return createVNode(_component_SkeletonLoader, {
                        key: `skeleton-${i}`,
                        type: "repository"
                      });
                    }), 64))
                  ])
                ]),
                default: withCtx(() => [
                  unref(status) === "pending" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid gap-4 md:grid-cols-2"
                  }, [
                    (openBlock(), createBlock(Fragment, null, renderList(9, (i) => {
                      return createVNode(_component_SkeletonLoader, {
                        key: `skeleton-${i}`,
                        type: "repository"
                      });
                    }), 64))
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid gap-4 md:grid-cols-2"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(repos), (repo, index) => {
                      return openBlock(), createBlock(_component_SmartLink, {
                        key: `repo-${index}`,
                        href: repo.html_url,
                        blank: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_CardRepository, {
                            name: repo.name,
                            language: repo.language,
                            stars: repo.stargazers_count,
                            description: repo.description,
                            license: repo.license && repo.license.spdx_id,
                            top: index === 0,
                            class: "h-full"
                          }, null, 8, ["name", "language", "stars", "description", "license", "top"])
                        ]),
                        _: 2
                      }, 1032, ["href"]);
                    }), 128))
                  ]))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/me/repos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=repos-C9MS0QUZ.mjs.map
