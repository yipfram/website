import { c as useNuxtApp, j as useRoute, d as useLazyAsyncData, u as useHead, _ as __nuxt_component_4$1, k as __nuxt_component_6$1, i as __nuxt_component_0, f as _sfc_main$9, b as _sfc_main$b } from './server.mjs';
import { defineComponent, withAsyncContext, computed, watchEffect, unref, withCtx, createVNode, toDisplayString, mergeProps, createTextVNode, ref, createBlock, openBlock, reactive, resolveDirective, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderVNode } from 'vue/server-renderer';
import _sfc_main$6 from './ContentRenderer-Bu7TJoKI.mjs';
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
import './ContentRendererMarkdown-DlwsDmWB.mjs';
import 'property-information';
import './node-yHY0X6Y7.mjs';
import './preview-8tYmIGC1.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Content",
  __ssrInlineRender: true,
  props: {
    error: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$9;
      if (__props.error === false) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full pt-28" }, _attrs))}><section class="space-y-8"><div class="space-y-4"><div class="flex space-x-2 justify-left"><div class="bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"></div><div class="bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"></div><div class="bg-black/10 h-4 animate-pulse w-1/4 sm:w-1/6 dark:bg-white/5"></div></div><div class="bg-black/10 h-10 w-full animate-pulse sm:w-8/12 dark:bg-white/5"></div><div class="flex flex-col space-y-2"><div class="bg-black/10 h-4 w-full animate-pulse sm:w-8/12 dark:bg-white/5"></div><div class="bg-black/10 h-4 animate-pulse w-1/2 sm:w-4/12 dark:bg-white/5"></div></div></div></section><div class="space-y-10 mt-20 w-full"><div class="space-y-1"><!--[-->`);
        ssrRenderList(6, (_) => {
          _push(`<div class="${ssrRenderClass([_ !== 6 ? "w-full" : "w-8/12", "bg-black/10 h-5 animate-pulse dark:bg-white/5"])}"></div>`);
        });
        _push(`<!--]--></div><div class="space-y-1"><!--[-->`);
        ssrRenderList(4, (_) => {
          _push(`<div class="${ssrRenderClass([_ !== 4 ? "w-full" : "w-1/2", "bg-black/10 h-5 animate-pulse dark:bg-white/5"])}"></div>`);
        });
        _push(`<!--]--></div><div class="space-y-1"><!--[-->`);
        ssrRenderList(24, (_) => {
          _push(`<div class="${ssrRenderClass([_ !== 24 ? "w-full" : "w-1/2", "bg-black/10 h-5 animate-pulse dark:bg-white/5"])}"></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6 pt-14" }, _attrs))}><h1 class="font-semibold text-2xl text-black/90 dark:text-white/90"> Post could not be loaded. </h1><p class="text-black/50 dark:text-white/30"> Please make sure that the post you are looking for exists on my blog and that there are no errors in the address. You can search for the post using the search feature or return to the homepage to access my other posts. </p>`);
        _push(ssrRenderComponent(_component_Button, {
          icon: "heroicons:chevron-left",
          onClick: ($event) => _ctx.$router.back()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Go Back`);
            } else {
              return [
                createTextVNode("Go Back")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loaders/Content.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Share",
  __ssrInlineRender: true,
  props: {
    title: { default: "" },
    path: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const copied = ref(false);
    const shareUrlRef = ref();
    const share = (option) => {
      if (option === "url") {
        let el = shareUrlRef.value;
        if (!el) {
          el = (void 0).createElement("input");
          el.value = props.path ? `https://rrchs.fr${props.path}` : (void 0).href;
          (void 0).body.appendChild(el);
          el.select();
          (void 0).execCommand("copy");
          (void 0).body.removeChild(el);
        } else {
          el.select();
          (void 0).execCommand("copy");
        }
        copied.value = true;
        setTimeout(() => copied.value = false, 3e3);
      } else {
        let url = "";
        switch (option) {
          case "twitter":
            url = `https://twitter.com/intent/tweet?via=eggsydev&text=${encodeURIComponent(
              props.title + "\n" + (void 0).href
            )}`;
            break;
          case "telegram":
            url = `https://telegram.me/share/url?url=${encodeURIComponent(
              (void 0).href
            )}`;
            break;
          case "whatsapp":
            url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
              props.title + "\n" + (void 0).href
            )}`;
            break;
        }
        (void 0).open(
          url,
          `${option[0].toUpperCase() + option.toLowerCase().slice(1)}`,
          "width=400,height=550"
        );
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$9;
      const _component_Icon = __nuxt_component_4$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center gap-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Button, {
        rounded: "",
        onClick: ($event) => share("twitter")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:twitter",
              class: "text-[#1DA1F2] h-6 w-6 align-middle"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:twitter",
                class: "text-[#1DA1F2] h-6 w-6 align-middle"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        rounded: "",
        onClick: ($event) => share("telegram")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:telegram",
              class: "text-[#2EAADE] h-6 w-6 align-middle"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:telegram",
                class: "text-[#2EAADE] h-6 w-6 align-middle"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        rounded: "",
        onClick: ($event) => share("whatsapp")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:whatsapp",
              class: "text-[#25D366] h-6 w-6 align-middle"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:whatsapp",
                class: "text-[#25D366] h-6 w-6 align-middle"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        rounded: "",
        onClick: ($event) => share("url")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(copied) === true) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:check",
                class: "text-green-500 h-6 w-6 align-middle"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:link",
                class: "text-gray-800 dark:text-gray-200 h-6 w-6 align-middle"
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(copied) === true ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: "heroicons:check",
                class: "text-green-500 h-6 w-6 align-middle"
              })) : (openBlock(), createBlock(_component_Icon, {
                key: 1,
                name: "heroicons:link",
                class: "text-gray-800 dark:text-gray-200 h-6 w-6 align-middle"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input readonly${ssrRenderAttr("value", `https://rrchs.fr${__props.path}`)} class="hidden"></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Share.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ReadingIndicator",
  __ssrInlineRender: true,
  props: {
    selector: { default: null }
  },
  setup(__props) {
    ref(null);
    const scrollY = ref(0);
    const rect = reactive({
      top: 0,
      bottom: 0
    });
    const windowDimensions = reactive({
      height: 0,
      width: 0
    });
    const getPercentLeftBottom = computed(() => {
      const { top, bottom } = rect;
      const percent = Math.round(
        (top - windowDimensions.height) / (top - bottom) * 100
      );
      return percent > 100 ? 100 : percent;
    });
    const isElementVisible = computed(() => {
      return scrollY.value > 175;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_tippy = resolveDirective("tippy");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, {
        style: unref(isElementVisible) ? null : { display: "none" }
      }, ssrGetDirectiveProps(_ctx, _directive_tippy, {
        content: unref(getPercentLeftBottom) === 100 ? "Article fully read!" : "Reading progress"
      })))}><div class="rounded-md bg-gray-200 h-40 w-4 hidden relative md:block dark:bg-neutral-800"><div class="${ssrRenderClass([{
        "bg-green-500": unref(getPercentLeftBottom) === 100,
        "bg-gray-300 dark:bg-neutral-600": unref(getPercentLeftBottom) < 100
      }, "rounded-md inset-x-0 transition bottom-0 absolute"])}" style="${ssrRenderStyle({ height: `${unref(getPercentLeftBottom)}%` })}"></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/ReadingIndicator.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TableOfContents",
  __ssrInlineRender: true,
  props: {
    toc: { default: () => [] }
  },
  setup(__props) {
    const tocToggled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_4$1;
      if (__props.toc && __props.toc.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-md flex flex-col space-y-2 mb-6" }, _attrs))}><div class="cursor-pointer flex font-medium space-x-1 transition-colors text-gray-500 items-center dark:text-dark-100 hover:text-gray-700 dark:hover:text-white/40 select-none"><h1 class="uppercase">Table of Contents</h1>`);
        if (!unref(tocToggled)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "heroicons:chevron-right",
            key: "'tocToggled'",
            class: "h-4 w-4"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_Icon, {
            name: "heroicons:chevron-down",
            key: "'tocToggledFalse'",
            class: "h-4 w-4"
          }, null, _parent));
        }
        _push(`</div><ul class="flex flex-wrap gap-x-4 gap-y-2 items-center" style="${ssrRenderStyle(unref(tocToggled) === true ? null : { display: "none" })}"><!--[-->`);
        ssrRenderList(__props.toc || [], (link) => {
          _push(`<li class="border-gray-300 transition-colors text-dark-400 dark:border-dark-200 dark:text-white/30 hover:text-dark-700 dark:hover:text-white/60">`);
          if (link.id) {
            _push(`<a${ssrRenderAttr("href", `#${link.id}`)}>${ssrInterpolate(link.text)}</a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/TableOfContents.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PrevNext",
  __ssrInlineRender: true,
  props: {
    path: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data: surroundPosts, status } = ([__temp, __restore] = withAsyncContext(() => useLazyAsyncData(
      `${props.path}-surround`,
      () => {
        return queryCollectionItemSurroundings("posts", props.path).order(
          "createdAt",
          "DESC"
        );
      }
    )), __temp = await __temp, __restore(), __temp);
    const prev = computed(() => {
      var _a;
      return ((_a = surroundPosts.value) == null ? void 0 : _a[0]) || null;
    });
    const next = computed(() => {
      var _a;
      return ((_a = surroundPosts.value) == null ? void 0 : _a[1]) || null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_4$1;
      if (unref(status) !== "pending") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2" }, _attrs))}>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(prev) ? unref(_sfc_main$b) : "div"), {
          href: unref(prev) && unref(prev).path,
          class: [
            "rounded-lg card-base flex items-center space-x-2",
            !unref(prev) ? "cursor-not-allowed" : "dark:hover:text-white hover:bg-opacity-40"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:chevron-left",
                class: "h-4 w-4 flex-shrink-0"
              }, null, _parent2, _scopeId));
              if (unref(prev)) {
                _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(unref(prev).title)}</span>`);
              } else {
                _push2(`<span class="truncate"${_scopeId}>No Newer Post</span>`);
              }
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "heroicons:chevron-left",
                  class: "h-4 w-4 flex-shrink-0"
                }),
                unref(prev) ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "truncate"
                }, toDisplayString(unref(prev).title), 1)) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "truncate"
                }, "No Newer Post"))
              ];
            }
          }),
          _: 1
        }), _parent);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(next) ? unref(_sfc_main$b) : "div"), {
          href: unref(next) && unref(next).path,
          class: [
            "rounded-lg card-base flex items-center space-x-2 justify-end",
            !unref(next) ? "cursor-not-allowed" : "dark:hover:text-white hover:bg-opacity-40"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(next)) {
                _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(unref(next).title)}</span>`);
              } else {
                _push2(`<span class="truncate"${_scopeId}>No Older Post</span>`);
              }
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:chevron-right",
                class: "h-4 w-4 flex-shrink-0"
              }, null, _parent2, _scopeId));
            } else {
              return [
                unref(next) ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "truncate"
                }, toDisplayString(unref(next).title), 1)) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "truncate"
                }, "No Older Post")),
                createVNode(_component_Icon, {
                  name: "heroicons:chevron-right",
                  class: "h-4 w-4 flex-shrink-0"
                })
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/PrevNext.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $applyMediumZoom, $getReadingTime, $getReadableDate, $prepareMeta } = useNuxtApp();
    const route = useRoute();
    const {
      data: post,
      status,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useLazyAsyncData(
      route.path,
      () => queryContent(route.path).findOne(),
      "$fhvmE-Di65"
    )), __temp = await __temp, __restore(), __temp);
    const { data: relatedPosts } = ([__temp, __restore] = withAsyncContext(async () => useLazyAsyncData(
      `${route.path}-related`,
      async () => {
        var _a, _b;
        if (!((_b = (_a = post.value) == null ? void 0 : _a.related) == null ? void 0 : _b.length)) return [];
        const relatedSlugs = post.value.related;
        const allPosts = await queryContent("/blog").only(["title", "_path"]).find();
        return allPosts.filter(
          (p) => relatedSlugs.some((slug) => p._path.endsWith(slug))
        );
      },
      {
        watch: [post]
      }
    )), __temp = await __temp, __restore(), __temp);
    const getTags = computed(() => {
      var _a;
      return ((_a = post.value) == null ? void 0 : _a.tags) || [];
    });
    const getReadingTime = computed(() => {
      var _a;
      return $getReadingTime(JSON.stringify((_a = post.value) == null ? void 0 : _a.body));
    });
    useHead(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const title = (_a = post.value) == null ? void 0 : _a.title;
      const description = ((_b = post.value) == null ? void 0 : _b.description) || "You are invited to read this post on my blog.";
      const tags = ((_c = getTags.value) == null ? void 0 : _c.join(", ")) || title;
      const href = `https://rrchs.fr${route == null ? void 0 : route.path}`;
      const image = `https://rrchs.fr/og-images/${((_e = (_d = post.value) == null ? void 0 : _d._path) == null ? void 0 : _e.split("/")[2]) || ((_f = route.path) == null ? void 0 : _f.split("/")[2]) || "default"}.png`;
      return {
        bodyAttrs: {
          class: "overflow-x-hidden"
        },
        title,
        link: [
          {
            rel: "canonical",
            href
          }
        ],
        meta: $prepareMeta(
          {
            title,
            description,
            image,
            keywords: `${tags}, rrchs blog, blog, vue, discord, rrchs`,
            url: href
          },
          [
            {
              name: "twitter:card",
              content: "summary_large_image"
            },
            {
              name: "article:published-time",
              content: ((_g = post.value) == null ? void 0 : _g.createdAt) || null
            },
            {
              name: "twitter:label1",
              content: "Date"
            },
            {
              name: "twitter:data1",
              content: (_h = post.value) == null ? void 0 : _h.createdAt
            },
            {
              name: "twitter:label2",
              content: "Reading Time"
            },
            {
              name: "twitter:data2",
              content: `${getReadingTime.value} min`
            }
          ]
        )
      };
    });
    const getReadableDate = computed(() => {
      var _a;
      return $getReadableDate(new Date(((_a = post.value) == null ? void 0 : _a.createdAt) || Date.now()));
    });
    watchEffect(async () => {
      if (status.value !== "success" || true) return;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_LoadersContent = _sfc_main$5;
      const _component_Icon = __nuxt_component_4$1;
      const _component_BlogShare = _sfc_main$4;
      const _component_BlogReadingIndicator = _sfc_main$3;
      const _component_BlogTableOfContents = _sfc_main$2;
      const _component_ContentRenderer = _sfc_main$6;
      const _component_DisqusComments = __nuxt_component_6$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BlogPrevNext = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(status) === "pending" || unref(error) !== null) {
        _push(ssrRenderComponent(_component_LoadersContent, {
          error: unref(status) !== "pending" && unref(error) !== null
        }, null, _parent));
      } else if (unref(post)) {
        _push(`<div class="pt-4 mt-10"><header class="space-y-4 mb-24 mt-12"><div class="flex flex-wrap items-center gap-x-6 gap-y-2 dark:text-white/30 text-black/50 text-base sm:text-sm"><div class="flex items-center space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:calendar",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(getReadableDate))}</span></div><div class="flex items-center space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:tag",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(getTags).join(" \uFF0D "))}</span></div><div class="flex items-center space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:eye",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(getReadingTime))} min read</span></div></div><div class="space-y-2"><h1 class="block text-2xl font-bold text-black text-balance sm:text-4xl dark:text-white">${ssrInterpolate(unref(post).title)}</h1><p class="text-black/50 dark:text-white/50 text-balance">${ssrInterpolate(unref(post).description)}</p></div></header><div class="mt-4">`);
        if (!unref(post).indicatorsHidden) {
          _push(`<!--[--><div class="sticky z-10 hidden float-left -ml-20 text-right top-4 md:block">`);
          _push(ssrRenderComponent(_component_BlogShare, {
            type: "vertical",
            title: unref(post).title,
            path: _ctx.$route.path
          }, null, _parent));
          _push(`</div><div class="sticky z-10 hidden float-right text-left -mr-14 top-4 md:block">`);
          _push(ssrRenderComponent(_component_BlogReadingIndicator, { selector: ".prose" }, null, _parent));
          _push(`</div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(post).body.toc) {
          _push(ssrRenderComponent(_component_BlogTableOfContents, {
            toc: unref(post).body.toc.links
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<article class="max-w-full prose dark:prose-invert prose-a:no-underline">`);
        if (unref(post)) {
          _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(post) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</article></div>`);
        if (!_ctx.$config.public.isDev) {
          _push(ssrRenderComponent(_component_DisqusComments, {
            title: unref(post).title,
            slug: ((_a = unref(post).path || unref(post)._path) == null ? void 0 : _a.split("/")[2]) || "unknown",
            url: `https://rrchs.fr/${unref(post).path}`,
            identifier: unref(post).path,
            lang: "tr",
            class: "mt-10"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-16 space-y-10">`);
        if (unref(relatedPosts) && unref(relatedPosts).length > 0) {
          _push(`<div class="space-y-2"><h3 class="text-sm dark:text-white/30 text-black/50"> Related Posts </h3>`);
          if (unref(relatedPosts).length) {
            _push(`<div class="grid gap-4 grid-cols-1 sm:grid-cols-2"><!--[-->`);
            ssrRenderList(unref(relatedPosts), (relatedPost, index) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: `related-${index}`,
                to: relatedPost._path,
                class: "rounded-lg border-[0.1px] p-4 bg-neutral-300 bg-opacity-25 border-neutral-200 flex items-center space-x-2 transition-colors hover:bg-opacity-40 dark:bg-neutral-800/30 dark:border-neutral-800 dark:text-white/80 dark:hover:text-white"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: "mdi:document",
                      class: "w-4 h-4"
                    }, null, _parent2, _scopeId));
                    _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(relatedPost.title)}</span>`);
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "mdi:document",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", { class: "truncate" }, toDisplayString(relatedPost.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="space-y-2"><h3 class="text-sm dark:text-white/30 text-black/50"> Continue Reading </h3>`);
        _push(ssrRenderComponent(_component_BlogPrevNext, {
          path: unref(post).path
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-Dj4dZcLh.mjs.map
