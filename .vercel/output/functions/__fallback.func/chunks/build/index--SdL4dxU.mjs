import { _ as _sfc_main$2 } from './PageLayout-DbkzbJM8.mjs';
import { c as useNuxtApp, u as useHead, f as _sfc_main$9, _ as __nuxt_component_4$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, createVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "Figure",
  __ssrInlineRender: true,
  props: {
    src: { default: null },
    alt: { default: null },
    caption: { default: null },
    imageClass: { default: null },
    border: { type: Boolean, default: false },
    zoomable: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<figure${ssrRenderAttrs(mergeProps({ class: "w-full h-full overflow-hidden" }, _attrs))}><img${ssrRenderAttr("src", __props.src)}${ssrRenderAttr("alt", __props.alt || __props.caption || "image")} loading="lazy" draggable="false" fit="cover" class="${ssrRenderClass([[
        __props.imageClass,
        __props.border && "border border-black/10 dark:border-white/10"
      ], "object-cover w-full rounded-md"])}"${ssrRenderAttr("data-zoomable", __props.zoomable)}>`);
      if (__props.caption) {
        _push(`<figcaption class="text-center">${ssrInterpolate(__props.caption)}</figcaption>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</figure>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Smart/Figure.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const title = "Projects";
const description = "Projects I built as a freelance developer, or for clients.";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $prepareMeta, $applyMediumZoom } = useNuxtApp();
    useHead({
      title,
      meta: $prepareMeta({
        title,
        description
      })
    });
    const projects = ref([
      {
        // client: "Japan",
        name: "Ai job artisan",
        description: "A simple platform to help students get past the first round of interviews. This project was a good practice at understanding how hard it is to find an innovative way to solve a problem.",
        image: "/assets/images/projects/ai-job-artisan.png",
        buttons: [
          {
            text: "Website",
            link: "https://jobs.rrchs.fr",
            icon: "mdi:link"
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageLayout = _sfc_main$2;
      const _component_Button = _sfc_main$9;
      const _component_Icon = __nuxt_component_4$1;
      const _component_SmartFigure = _sfc_main$1;
      _push(ssrRenderComponent(_component_PageLayout, mergeProps({
        title: "My Projects",
        description: "Check out the projects I worked on!"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="flex items-center flex-wrap gap-2"${_scopeId}><span class="text-sm"${_scopeId}>Jump to:</span><!--[-->`);
            ssrRenderList(unref(projects), (project, index) => {
              _push2(ssrRenderComponent(_component_Button, {
                key: `skipto-button-${index}`,
                href: `#${project.name.toLowerCase().split(" ").join("-")}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(project.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(project.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></section><!--[-->`);
            ssrRenderList(unref(projects), (project, index) => {
              _push2(`<section${ssrRenderAttr("id", project.name.toLowerCase().split(" ").join("-"))} class="${ssrRenderClass([index === 0 ? "mt-24 mb-40" : "my-40", "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"])}"${_scopeId}><div class="space-y-4"${_scopeId}>`);
              if (project.client) {
                _push2(`<span class="bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:bg-white/5 dark:text-white/30"${_scopeId}>${ssrInterpolate(project.client)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (project.note) {
                _push2(`<span class="bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:bg-white/5 dark:text-white/30"${_scopeId}>${ssrInterpolate(project.note)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<h2 class="text-4xl text-black/90 font-bold dark:text-white/90"${_scopeId}>${ssrInterpolate(project.name)}</h2><p${_scopeId}>${ssrInterpolate(project.description)}</p>`);
              if (project.buttons) {
                _push2(`<div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
                ssrRenderList(project.buttons, (button, index2) => {
                  _push2(ssrRenderComponent(_component_Button, {
                    key: `button-${index2}`,
                    href: button.link,
                    blank: !button.link.startsWith("/")
                  }, {
                    icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        if (button.icon) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: button.icon,
                            class: "h-5 w-5"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      } else {
                        return [
                          button.icon ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: button.icon,
                            class: "h-5 w-5"
                          }, null, 8, ["name"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` ${ssrInterpolate(button.text)}`);
                      } else {
                        return [
                          createTextVNode(" " + toDisplayString(button.text), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (project.image) {
                _push2(ssrRenderComponent(_component_SmartFigure, {
                  src: project.image,
                  border: "",
                  class: { "md:order-first": index % 2 === 0 }
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</section>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("section", { class: "flex items-center flex-wrap gap-2" }, [
                createVNode("span", { class: "text-sm" }, "Jump to:"),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project, index) => {
                  return openBlock(), createBlock(_component_Button, {
                    key: `skipto-button-${index}`,
                    href: `#${project.name.toLowerCase().split(" ").join("-")}`
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(project.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["href"]);
                }), 128))
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project, index) => {
                return openBlock(), createBlock("section", {
                  key: `project-${index}`,
                  id: project.name.toLowerCase().split(" ").join("-"),
                  class: ["grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center", index === 0 ? "mt-24 mb-40" : "my-40"]
                }, [
                  createVNode("div", { class: "space-y-4" }, [
                    project.client ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:bg-white/5 dark:text-white/30"
                    }, toDisplayString(project.client), 1)) : createCommentVNode("", true),
                    project.note ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:bg-white/5 dark:text-white/30"
                    }, toDisplayString(project.note), 1)) : createCommentVNode("", true),
                    createVNode("h2", { class: "text-4xl text-black/90 font-bold dark:text-white/90" }, toDisplayString(project.name), 1),
                    createVNode("p", null, toDisplayString(project.description), 1),
                    project.buttons ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "flex flex-wrap gap-2"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(project.buttons, (button, index2) => {
                        return openBlock(), createBlock(_component_Button, {
                          key: `button-${index2}`,
                          href: button.link,
                          blank: !button.link.startsWith("/")
                        }, {
                          icon: withCtx(() => [
                            button.icon ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: button.icon,
                              class: "h-5 w-5"
                            }, null, 8, ["name"])) : createCommentVNode("", true)
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" " + toDisplayString(button.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["href", "blank"]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ]),
                  project.image ? (openBlock(), createBlock(_component_SmartFigure, {
                    key: 0,
                    src: project.image,
                    border: "",
                    class: { "md:order-first": index % 2 === 0 }
                  }, null, 8, ["src", "class"])) : createCommentVNode("", true)
                ], 10, ["id"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index--SdL4dxU.mjs.map
