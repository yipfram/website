import { _ as _sfc_main$3 } from './PageLayout-DbkzbJM8.mjs';
import { c as useNuxtApp, d as useLazyAsyncData, u as useHead, h as _export_sfc, e as _sfc_main$2$1, b as _sfc_main$b, a as _sfc_main$a, _ as __nuxt_component_4$1 } from './server.mjs';
import { _ as _sfc_main$4 } from './Index-DI6mKyIr.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, createVNode, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageTitle = _sfc_main$2$1;
  const _component_SkeletonLoader = _sfc_main$4;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "space-y-20" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_PageTitle, { class: "mb-4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Details`);
      } else {
        return [
          createTextVNode("Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="grid gap-x-0 gap-y-4 md:gap-x-12 md:grid-cols-2"><div class="flex space-x-4 items-center"><span>Profile</span><div class="flex space-x-2 w-full justify-end items-center">`);
  _push(ssrRenderComponent(_component_SkeletonLoader, { class: "h-5 w-1/2" }, null, _parent));
  _push(ssrRenderComponent(_component_SkeletonLoader, { class: "h-6 w-6 !rounded-full" }, null, _parent));
  _push(`</div></div><div class="flex space-x-4 items-center justify-between"><span class="flex-shrink-0">Total Plays</span><div class="flex space-x-2 w-full justify-end items-center">`);
  _push(ssrRenderComponent(_component_SkeletonLoader, { class: "h-5 w-1/3" }, null, _parent));
  _push(ssrRenderComponent(_component_SkeletonLoader, { class: "h-6 w-6 !rounded-full" }, null, _parent));
  _push(`</div></div><div class="flex space-x-4 items-center justify-between"><span class="flex-shrink-0">Account Age</span><div class="flex space-x-2 w-full justify-end items-center">`);
  _push(ssrRenderComponent(_component_SkeletonLoader, { class: "h-5 w-1/4" }, null, _parent));
  _push(ssrRenderComponent(_component_SkeletonLoader, { class: "h-6 w-6 !rounded-full" }, null, _parent));
  _push(`</div></div></div></div><div>`);
  _push(ssrRenderComponent(_component_PageTitle, { class: "mb-4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Top Songs (last 7 days)`);
      } else {
        return [
          createTextVNode("Top Songs (last 7 days)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="grid gap-2 md:grid-cols-2"><!--[-->`);
  ssrRenderList(6, (i) => {
    _push(ssrRenderComponent(_component_SkeletonLoader, {
      key: `topsongs-${i}`,
      class: "h-16 w-full"
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div>`);
  _push(ssrRenderComponent(_component_PageTitle, { class: "mb-4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Top Artists (last 7 days)`);
      } else {
        return [
          createTextVNode("Top Artists (last 7 days)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="grid gap-2 md:grid-cols-2"><!--[-->`);
  ssrRenderList(4, (i) => {
    _push(ssrRenderComponent(_component_SkeletonLoader, {
      ":key": `topartists-${i}`,
      class: "h-12 w-full"
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div>`);
  _push(ssrRenderComponent(_component_PageTitle, { class: "mb-4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Recent Songs`);
      } else {
        return [
          createTextVNode("Recent Songs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="grid gap-2 md:grid-cols-2"><!--[-->`);
  ssrRenderList(15, (i) => {
    _push(ssrRenderComponent(_component_SkeletonLoader, {
      key: `recentsongs-${i}`,
      type: "lastfm"
    }, null, _parent));
  });
  _push(`<!--]--></div></div></main>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loaders/Songs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LastFm",
  __ssrInlineRender: true,
  props: {
    name: {},
    artist: { default: null },
    url: {},
    image: {},
    nowPlaying: { type: Boolean, default: false },
    plays: { default: null }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SmartLink = _sfc_main$b;
      const _component_SmartImage = _sfc_main$a;
      const _component_Icon = __nuxt_component_4$1;
      _push(ssrRenderComponent(_component_SmartLink, mergeProps({
        href: __props.url,
        title: __props.name,
        class: ["rounded-lg flex items-center gap-4 card-base", {
          "justify-between": __props.plays !== null
        }],
        blank: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex space-x-4 truncate items-center"${_scopeId}>`);
            if (__props.image) {
              _push2(`<div class="flex-shrink-0 h-14 w-14 relative"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SmartImage, {
                src: __props.image,
                class: "rounded-md"
              }, null, _parent2, _scopeId));
              if (__props.nowPlaying) {
                _push2(`<div title="Playing now..." class="rounded-md flex bg-black/75 inset-0 items-center justify-center absolute"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "svg-spinners:bars-scale-middle",
                  class: "h-6 text-neutral-300"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-col truncate"${_scopeId}><span class="truncate"${_scopeId}>${ssrInterpolate(__props.name)}</span>`);
            if (__props.artist) {
              _push2(`<span class="text-sm text-black/50 dark:text-white/30 truncate"${_scopeId}>by ${ssrInterpolate(__props.artist)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (__props.plays) {
              _push2(`<div class="rounded-md text-blue-600 bg-blue-600/10 ring-[0.5px] ring-blue-600/40 px-4 py-1 flex-shrink-0 text-xs"${_scopeId}>${ssrInterpolate(__props.plays)} plays </div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex space-x-4 truncate items-center" }, [
                __props.image ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex-shrink-0 h-14 w-14 relative"
                }, [
                  createVNode(_component_SmartImage, {
                    src: __props.image,
                    class: "rounded-md"
                  }, null, 8, ["src"]),
                  __props.nowPlaying ? (openBlock(), createBlock("div", {
                    key: 0,
                    title: "Playing now...",
                    class: "rounded-md flex bg-black/75 inset-0 items-center justify-center absolute"
                  }, [
                    createVNode(_component_Icon, {
                      name: "svg-spinners:bars-scale-middle",
                      class: "h-6 text-neutral-300"
                    })
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex flex-col truncate" }, [
                  createVNode("span", { class: "truncate" }, toDisplayString(__props.name), 1),
                  __props.artist ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-sm text-black/50 dark:text-white/30 truncate"
                  }, "by " + toDisplayString(__props.artist), 1)) : createCommentVNode("", true)
                ])
              ]),
              __props.plays ? (openBlock(), createBlock("div", {
                key: 0,
                class: "rounded-md text-blue-600 bg-blue-600/10 ring-[0.5px] ring-blue-600/40 px-4 py-1 flex-shrink-0 text-xs"
              }, toDisplayString(__props.plays) + " plays ", 1)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/LastFm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "songs",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $prepareMeta } = useNuxtApp();
    const {
      data: lastFm,
      status,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useLazyAsyncData(
      "lastfm",
      () => $fetch("/api/lastfm", {
        responseType: "json"
      }),
      {
        server: false
      }
    )), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Songs",
      meta: $prepareMeta({
        title: "Songs",
        description: "Songs that I recently listened and the songs that I listened most."
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageLayout = _sfc_main$3;
      const _component_LoadersSongs = __nuxt_component_1;
      const _component_PageTitle = _sfc_main$2$1;
      const _component_SmartLink = _sfc_main$b;
      const _component_SmartImage = _sfc_main$a;
      const _component_Icon = __nuxt_component_4$1;
      const _component_CardLastFm = _sfc_main$1;
      _push(ssrRenderComponent(_component_PageLayout, mergeProps({
        title: "Songs",
        description: "My latest listening activity on Last FM.",
        class: "space-y-12"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(status) === "pending" || unref(error) !== null) {
              _push2(ssrRenderComponent(_component_LoadersSongs, null, null, _parent2, _scopeId));
            } else if (unref(lastFm)) {
              _push2(`<!--[--><section${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PageTitle, { class: "mb-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Details`);
                  } else {
                    return [
                      createTextVNode("Details")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid gap-y-4 gap-x-12 md:grid-cols-2"${_scopeId}><div class="flex space-x-4 items-center justify-between"${_scopeId}><span${_scopeId}>Profile</span><div class="flex space-x-2 items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SmartLink, {
                href: `https://last.fm/user/${unref(lastFm).user.name}`,
                class: "flex-shrink-0",
                blank: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`@${ssrInterpolate(unref(lastFm).user.name)}`);
                  } else {
                    return [
                      createTextVNode("@" + toDisplayString(unref(lastFm).user.name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_SmartImage, {
                src: unref(lastFm).user.image,
                class: "rounded-full h-6 w-6"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex space-x-4 items-center justify-between"${_scopeId}><span class="flex-shrink-0"${_scopeId}>Total Plays</span><div class="flex space-x-2 items-center"${_scopeId}><div class="truncate"${_scopeId}>${ssrInterpolate(unref(lastFm).user.totalPlays)}</div>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:fire",
                class: "h-6 text-red-700 w-6 dark:text-current"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex space-x-4 items-center justify-between"${_scopeId}><span class="flex-shrink-0"${_scopeId}>Account Age</span><div class="flex space-x-2 items-center"${_scopeId}><div class="truncate"${_scopeId}>${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear() - new Date(unref(lastFm).user.registered * 1e3).getFullYear())} year(s) </div>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:calendar",
                class: "h-6 w-6"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div></section><section id="top-songs"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PageTitle, { class: "mb-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Top Songs (last 7 days)`);
                  } else {
                    return [
                      createTextVNode("Top Songs (last 7 days)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid gap-x-4 gap-y-2 md:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(lastFm).topTracks, (song) => {
                _push2(ssrRenderComponent(_component_CardLastFm, {
                  key: song.name,
                  name: song.name,
                  artist: song.artist,
                  "now-playing": song.nowPlaying,
                  plays: song.plays,
                  url: song.url
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></section><section id="top-artists"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PageTitle, { class: "mb-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Top Artists (last 7 days)`);
                  } else {
                    return [
                      createTextVNode("Top Artists (last 7 days)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid gap-x-4 gap-y-2 md:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(lastFm).topArtists, (artist) => {
                _push2(ssrRenderComponent(_component_CardLastFm, {
                  key: artist.name,
                  name: artist.name,
                  plays: artist.plays,
                  url: artist.url
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></section><section id="recent"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PageTitle, { class: "mb-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Recent Songs`);
                  } else {
                    return [
                      createTextVNode("Recent Songs")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid gap-x-4 gap-y-2 md:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(lastFm).recentTracks, (song) => {
                _push2(ssrRenderComponent(_component_CardLastFm, {
                  key: song.name,
                  name: song.name,
                  artist: song.artist,
                  image: song.image,
                  "now-playing": song.nowPlaying,
                  url: song.url
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></section><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(status) === "pending" || unref(error) !== null ? (openBlock(), createBlock(_component_LoadersSongs, { key: 0 })) : unref(lastFm) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode("section", null, [
                  createVNode(_component_PageTitle, { class: "mb-4" }, {
                    default: withCtx(() => [
                      createTextVNode("Details")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid gap-y-4 gap-x-12 md:grid-cols-2" }, [
                    createVNode("div", { class: "flex space-x-4 items-center justify-between" }, [
                      createVNode("span", null, "Profile"),
                      createVNode("div", { class: "flex space-x-2 items-center" }, [
                        createVNode(_component_SmartLink, {
                          href: `https://last.fm/user/${unref(lastFm).user.name}`,
                          class: "flex-shrink-0",
                          blank: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("@" + toDisplayString(unref(lastFm).user.name), 1)
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(_component_SmartImage, {
                          src: unref(lastFm).user.image,
                          class: "rounded-full h-6 w-6"
                        }, null, 8, ["src"])
                      ])
                    ]),
                    createVNode("div", { class: "flex space-x-4 items-center justify-between" }, [
                      createVNode("span", { class: "flex-shrink-0" }, "Total Plays"),
                      createVNode("div", { class: "flex space-x-2 items-center" }, [
                        createVNode("div", { class: "truncate" }, toDisplayString(unref(lastFm).user.totalPlays), 1),
                        createVNode(_component_Icon, {
                          name: "heroicons:fire",
                          class: "h-6 text-red-700 w-6 dark:text-current"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "flex space-x-4 items-center justify-between" }, [
                      createVNode("span", { class: "flex-shrink-0" }, "Account Age"),
                      createVNode("div", { class: "flex space-x-2 items-center" }, [
                        createVNode("div", { class: "truncate" }, toDisplayString((/* @__PURE__ */ new Date()).getFullYear() - new Date(unref(lastFm).user.registered * 1e3).getFullYear()) + " year(s) ", 1),
                        createVNode(_component_Icon, {
                          name: "heroicons:calendar",
                          class: "h-6 w-6"
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("section", { id: "top-songs" }, [
                  createVNode(_component_PageTitle, { class: "mb-4" }, {
                    default: withCtx(() => [
                      createTextVNode("Top Songs (last 7 days)")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid gap-x-4 gap-y-2 md:grid-cols-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(lastFm).topTracks, (song) => {
                      return openBlock(), createBlock(_component_CardLastFm, {
                        key: song.name,
                        name: song.name,
                        artist: song.artist,
                        "now-playing": song.nowPlaying,
                        plays: song.plays,
                        url: song.url
                      }, null, 8, ["name", "artist", "now-playing", "plays", "url"]);
                    }), 128))
                  ])
                ]),
                createVNode("section", { id: "top-artists" }, [
                  createVNode(_component_PageTitle, { class: "mb-4" }, {
                    default: withCtx(() => [
                      createTextVNode("Top Artists (last 7 days)")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid gap-x-4 gap-y-2 md:grid-cols-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(lastFm).topArtists, (artist) => {
                      return openBlock(), createBlock(_component_CardLastFm, {
                        key: artist.name,
                        name: artist.name,
                        plays: artist.plays,
                        url: artist.url
                      }, null, 8, ["name", "plays", "url"]);
                    }), 128))
                  ])
                ]),
                createVNode("section", { id: "recent" }, [
                  createVNode(_component_PageTitle, { class: "mb-4" }, {
                    default: withCtx(() => [
                      createTextVNode("Recent Songs")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid gap-x-4 gap-y-2 md:grid-cols-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(lastFm).recentTracks, (song) => {
                      return openBlock(), createBlock(_component_CardLastFm, {
                        key: song.name,
                        name: song.name,
                        artist: song.artist,
                        image: song.image,
                        "now-playing": song.nowPlaying,
                        url: song.url
                      }, null, 8, ["name", "artist", "image", "now-playing", "url"]);
                    }), 128))
                  ])
                ])
              ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/me/songs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=songs-MEanYeAn.mjs.map
