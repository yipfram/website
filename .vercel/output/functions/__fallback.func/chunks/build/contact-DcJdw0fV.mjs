import { _ as _sfc_main$1 } from './PageLayout-DbkzbJM8.mjs';
import { _ as _sfc_main$2 } from './Index-0AfarMpg.mjs';
import { c as useNuxtApp, u as useHead, _ as __nuxt_component_4$1 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const pageLoaded = ref(false);
    const { $prepareMeta, $config } = useNuxtApp();
    useHead({
      title: "Contact",
      meta: $prepareMeta({
        title: "Contact",
        description: "Get in touch with me via my social media accounts and e-mail address!"
      })
    });
    const titles = {
      twitter: "Follow me on Twitter!",
      github: "Follow me on GitHub!",
      linkedIn: "Connect with me on LinkedIn!"
    };
    const icons = {
      twitter: "line-md:twitter",
      github: "line-md:github",
      linkedIn: "line-md:linkedin"
    };
    const getLinks = computed(() => {
      var _a;
      const social = $config.public.social;
      const array = [];
      for (const item in social) {
        if (item === "email") continue;
        array.push({
          url: social[item],
          title: ((_a = item == null ? void 0 : item[0]) == null ? void 0 : _a.toUpperCase()) + item.slice(1),
          description: titles[item],
          icon: icons[item]
        });
      }
      return array;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageLayout = _sfc_main$1;
      const _component_Card = _sfc_main$2;
      const _component_Icon = __nuxt_component_4$1;
      _push(ssrRenderComponent(_component_PageLayout, mergeProps({
        title: "Contact",
        description: "If you have any questions, feel free to contact me."
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-4 md:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(getLinks), (contact, index) => {
              _push2(ssrRenderComponent(_component_Card, {
                key: index,
                title: contact.title,
                href: contact.url,
                blank: ""
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: contact.icon,
                      class: "h-9 w-9"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: contact.icon,
                        class: "h-9 w-9"
                      }, null, 8, ["name"])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-black/50 dark:text-white/30"${_scopeId2}>${ssrInterpolate(contact.description)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-black/50 dark:text-white/30" }, toDisplayString(contact.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_Card, {
              title: "Email",
              href: unref(pageLoaded) ? `mailto:${unref($config).public.social.email}` : "",
              utm: false
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "line-md:at",
                    class: "h-8 w-8"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "line-md:at",
                      class: "h-8 w-8"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Send me an email! `);
                } else {
                  return [
                    createTextVNode(" Send me an email! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid gap-4 md:grid-cols-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(getLinks), (contact, index) => {
                  return openBlock(), createBlock(_component_Card, {
                    key: index,
                    title: contact.title,
                    href: contact.url,
                    blank: ""
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: contact.icon,
                        class: "h-9 w-9"
                      }, null, 8, ["name"])
                    ]),
                    default: withCtx(() => [
                      createVNode("span", { class: "text-black/50 dark:text-white/30" }, toDisplayString(contact.description), 1)
                    ]),
                    _: 2
                  }, 1032, ["title", "href"]);
                }), 128)),
                createVNode(_component_Card, {
                  title: "Email",
                  href: unref(pageLoaded) ? `mailto:${unref($config).public.social.email}` : "",
                  utm: false
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "line-md:at",
                      class: "h-8 w-8"
                    })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Send me an email! ")
                  ]),
                  _: 1
                }, 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/me/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-DcJdw0fV.mjs.map
