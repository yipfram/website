import { _ as _sfc_main$1 } from './PageLayout-DbkzbJM8.mjs';
import { _ as _sfc_main$2 } from './Index-0AfarMpg.mjs';
import { c as useNuxtApp, u as useHead, f as _sfc_main$9, _ as __nuxt_component_4$1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    title: { default: "" },
    description: { default: "" }
  },
  setup(__props) {
    const { $prepareMeta } = useNuxtApp();
    const pages = [
      {
        title: "Custom Status",
        url: "/projects/premid/custom-status",
        description: "Tool that allows you do display whatever you want on your Discord profile with PreMiD! Easy and free!"
      },
      {
        title: "Metadata Creator",
        url: "/projects/premid/mdcreator",
        description: "Easy and free to use tool to create PreMiD Presence metadata files easily, without even opening your code editor!"
      }
    ];
    useHead(() => {
      const title = "PreMiD";
      const image = "https://i.imgur.com/CuVtvKW.png";
      const description = "Custom tools created for your PreMiD experience! Featuring Custom Status and Metadata Creator for free and fresh UI!";
      return {
        title,
        meta: $prepareMeta({
          title,
          description,
          image,
          keywords: "premid, custom, status",
          url: "https://rrchs.fr/projects/premid"
        }),
        link: [
          {
            rel: "canonical",
            href: "https://rrchs.fr/projects/premid"
          }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageLayout = _sfc_main$1;
      const _component_Card = _sfc_main$2;
      const _component_Button = _sfc_main$9;
      const _component_Icon = __nuxt_component_4$1;
      _push(ssrRenderComponent(_component_PageLayout, mergeProps({
        title: "PreMiD",
        description: "PreMiD is a simple, configurable utility that allows you to show what\n          you're doing on the web in your Discord now playing status.",
        class: "space-y-12"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="grid gap-4 sm:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(pages, (page, index) => {
              _push2(ssrRenderComponent(_component_Card, {
                key: `page-${index}`,
                title: page.title,
                href: page.url
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-black opacity-50 dark:text-white dark:opacity-30"${_scopeId2}>${ssrInterpolate(page.description)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-black opacity-50 dark:text-white dark:opacity-30" }, toDisplayString(page.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></section><section class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              href: "https://premid.app",
              blank: ""
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "mdi:link",
                    class: "h-6 w-6 text-gray-700 dark:text-neutral-300"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "mdi:link",
                      class: "h-6 w-6 text-gray-700 dark:text-neutral-300"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Visit PreMiD `);
                } else {
                  return [
                    createTextVNode(" Visit PreMiD ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "grid gap-4 sm:grid-cols-2" }, [
                (openBlock(), createBlock(Fragment, null, renderList(pages, (page, index) => {
                  return createVNode(_component_Card, {
                    key: `page-${index}`,
                    title: page.title,
                    href: page.url
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-black opacity-50 dark:text-white dark:opacity-30" }, toDisplayString(page.description), 1)
                    ]),
                    _: 2
                  }, 1032, ["title", "href"]);
                }), 64))
              ]),
              createVNode("section", { class: "space-y-4" }, [
                createVNode(_component_Button, {
                  href: "https://premid.app",
                  blank: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "mdi:link",
                      class: "h-6 w-6 text-gray-700 dark:text-neutral-300"
                    })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Visit PreMiD ")
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/premid/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-u4l_tbBc.mjs.map
