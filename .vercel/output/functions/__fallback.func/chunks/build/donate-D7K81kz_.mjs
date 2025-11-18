import { _ as _sfc_main$2 } from './PageLayout-DbkzbJM8.mjs';
import { c as useNuxtApp, d as useLazyAsyncData, u as useHead, e as _sfc_main$2$1, f as _sfc_main$9, _ as __nuxt_component_4$1, b as _sfc_main$b, a as _sfc_main$a } from './server.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, createBlock, createCommentVNode, openBlock, Transition, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Sponsor",
  __ssrInlineRender: true,
  props: {
    sponsor: {},
    monthly: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SmartLink = _sfc_main$b;
      const _component_SmartImage = _sfc_main$a;
      _push(ssrRenderComponent(_component_SmartLink, mergeProps({
        href: `https://github.com/${__props.sponsor.login}`,
        class: "card-base rounded-lg flex flex-col gap-2",
        blank: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SmartImage, {
              src: __props.sponsor.avatarUrl,
              class: "h-10 w-10 flex-shrink-0 rounded-full"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex overflow-x-hidden flex-col leading-tight"${_scopeId}><span class="truncate"${_scopeId}>${ssrInterpolate(__props.sponsor.login)}</span><span class="text-sm text-black/30 dark:text-white/30 truncate"${_scopeId}>${ssrInterpolate(__props.monthly ? "Monthly" : "One time")}</span></div>`);
          } else {
            return [
              createVNode(_component_SmartImage, {
                src: __props.sponsor.avatarUrl,
                class: "h-10 w-10 flex-shrink-0 rounded-full"
              }, null, 8, ["src"]),
              createVNode("div", { class: "flex overflow-x-hidden flex-col leading-tight" }, [
                createVNode("span", { class: "truncate" }, toDisplayString(__props.sponsor.login), 1),
                createVNode("span", { class: "text-sm text-black/30 dark:text-white/30 truncate" }, toDisplayString(__props.monthly ? "Monthly" : "One time"), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Sponsor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "donate",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $config, $prepareMeta } = useNuxtApp();
    const {
      status,
      error,
      data: sponsors
    } = ([__temp, __restore] = withAsyncContext(() => useLazyAsyncData(
      "sponsors",
      () => $fetch(
        "https://raw.githubusercontent.com/eggsy/.github/main/sponsors.json",
        {
          responseType: "json"
        }
      ),
      {
        server: false
      }
    )), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Donate",
      meta: $prepareMeta({
        title: "Donate",
        description: "Sponsor to me to boost my performance and help me create more, better projects in the future!",
        keywords: "donate",
        url: "https://eggsy.xyz/donate"
      }),
      link: [
        {
          rel: "canonical",
          href: "https://eggsy.xyz/donate"
        }
      ]
    });
    const sortByPrice = (a, b) => b.monthlyDollars - a.monthlyDollars;
    const getSortedSponsors = computed(() => {
      var _a, _b, _c, _d;
      return {
        oneTime: ((_b = (_a = sponsors.value) == null ? void 0 : _a.filter) == null ? void 0 : _b.call(_a, (sponsor) => sponsor.isOneTime).sort(sortByPrice)) || [],
        monthly: ((_d = (_c = sponsors.value) == null ? void 0 : _c.filter) == null ? void 0 : _d.call(_c, (sponsor) => !sponsor.isOneTime).sort(sortByPrice)) || []
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageLayout = _sfc_main$2;
      const _component_PageTitle = _sfc_main$2$1;
      const _component_Button = _sfc_main$9;
      const _component_Icon = __nuxt_component_4$1;
      const _component_CardSponsor = _sfc_main$1;
      _push(ssrRenderComponent(_component_PageLayout, mergeProps({
        title: "Donate",
        description: "If you like my projects and/or what I do and you want to contribute, make me happy, you can donate to me with the information on this page! Thank you \u2665",
        class: "space-y-12"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<section class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Support Me On`);
                } else {
                  return [
                    createTextVNode("Support Me On")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-wrap gap-x-4 gap-y-2"${_scopeId}>`);
            if ((_b = (_a = unref($config).public) == null ? void 0 : _a.sponsor) == null ? void 0 : _b.github) {
              _push2(ssrRenderComponent(_component_Button, {
                href: unref($config).public.sponsor.github,
                blank: ""
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "mdi:github",
                      class: "h-5 w-5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "mdi:github",
                        class: "h-5 w-5"
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` GitHub Sponsors `);
                  } else {
                    return [
                      createTextVNode(" GitHub Sponsors ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></section><section class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageTitle, { padding: false }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sponsors`);
                } else {
                  return [
                    createTextVNode("Sponsors")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            if (unref(status) === "pending") {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "svg-spinners:90-ring-with-bg",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
            } else if (unref(error)) {
              _push2(`<p${_scopeId}>An error occured.</p>`);
            } else if (!unref(error) && (!unref(sponsors) || ((_d = (_c = unref(sponsors)) != null ? _c : []) == null ? void 0 : _d.length) === 0)) {
              _push2(`<p${_scopeId}> No sponsors yet :( </p>`);
            } else {
              _push2(`<div class="grid grid-cols-2 lg:grid-cols-4 gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(getSortedSponsors).monthly, (item, index) => {
                _push2(ssrRenderComponent(_component_CardSponsor, {
                  key: `sponsor-monthly-${index}`,
                  sponsor: item.sponsor,
                  monthly: ""
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--><!--[-->`);
              ssrRenderList(unref(getSortedSponsors).oneTime, (item, index) => {
                _push2(ssrRenderComponent(_component_CardSponsor, {
                  key: `sponsor-oneTime-${index}`,
                  sponsor: item.sponsor
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div></section>`);
          } else {
            return [
              createVNode("section", { class: "space-y-4" }, [
                createVNode(_component_PageTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Support Me On")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex flex-wrap gap-x-4 gap-y-2" }, [
                  ((_f = (_e = unref($config).public) == null ? void 0 : _e.sponsor) == null ? void 0 : _f.github) ? (openBlock(), createBlock(_component_Button, {
                    key: 0,
                    href: unref($config).public.sponsor.github,
                    blank: ""
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "mdi:github",
                        class: "h-5 w-5"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" GitHub Sponsors ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("section", { class: "space-y-4" }, [
                createVNode(_component_PageTitle, { padding: false }, {
                  default: withCtx(() => [
                    createTextVNode("Sponsors")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(Transition, {
                    name: "fade",
                    mode: "out-in"
                  }, {
                    default: withCtx(() => {
                      var _a2, _b2;
                      return [
                        unref(status) === "pending" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "svg-spinners:90-ring-with-bg",
                          class: "w-5 h-5"
                        })) : unref(error) ? (openBlock(), createBlock("p", { key: 1 }, "An error occured.")) : !unref(error) && (!unref(sponsors) || ((_b2 = (_a2 = unref(sponsors)) != null ? _a2 : []) == null ? void 0 : _b2.length) === 0) ? (openBlock(), createBlock("p", { key: 2 }, " No sponsors yet :( ")) : (openBlock(), createBlock("div", {
                          key: 3,
                          class: "grid grid-cols-2 lg:grid-cols-4 gap-2"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(getSortedSponsors).monthly, (item, index) => {
                            return openBlock(), createBlock(_component_CardSponsor, {
                              key: `sponsor-monthly-${index}`,
                              sponsor: item.sponsor,
                              monthly: ""
                            }, null, 8, ["sponsor"]);
                          }), 128)),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(getSortedSponsors).oneTime, (item, index) => {
                            return openBlock(), createBlock(_component_CardSponsor, {
                              key: `sponsor-oneTime-${index}`,
                              sponsor: item.sponsor
                            }, null, 8, ["sponsor"]);
                          }), 128))
                        ]))
                      ];
                    }),
                    _: 1
                  })
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/donate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=donate-D7K81kz_.mjs.map
