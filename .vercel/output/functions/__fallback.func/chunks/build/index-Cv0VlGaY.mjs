import { defineComponent, resolveDirective, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Index-0AfarMpg.mjs';
import { u as useHead, _ as __nuxt_component_4$1, a as _sfc_main$a } from './server.mjs';
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
  __name: "SquaresBackground",
  __ssrInlineRender: true,
  props: {
    speed: { default: 0.5 },
    borderColor: { default: "#999" },
    squareSize: { default: 40 }
  },
  setup(__props) {
    ref({ x: 0, y: 0 });
    ref(null);
    ref(0);
    ref(0);
    const canvas = ref();
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({
        ref_key: "canvas",
        ref: canvas,
        class: "w-full h-full border-none block"
      }, _attrs))}></canvas>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SquaresBackground.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = [
      {
        title: "Blog",
        href: "/blog",
        icon: "line-md:document-list"
      },
      {
        title: "Projects",
        href: "/projects",
        icon: "line-md:cog"
      },
      {
        title: "Code",
        href: "/me/repos",
        icon: "line-md:github"
      },
      {
        title: "Contact",
        href: "/me/contact",
        icon: "line-md:at"
      }
    ];
    useHead({
      title: "Home"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SquaresBackground = _sfc_main$1;
      const _component_Card = _sfc_main$2;
      const _component_Icon = __nuxt_component_4$1;
      const _component_SmartImage = _sfc_main$a;
      const _directive_tippy = resolveDirective("tippy");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:min-h-[calc(100vh-11rem)] flex flex-col my-24 md:my-0 items-center justify-center container mx-auto" }, _attrs))}><div class="flex items-center gap-8"><div class="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-5">`);
      _push(ssrRenderComponent(_component_SquaresBackground, {
        speed: 0.3,
        "square-size": 40,
        class: "w-full h-full"
      }, null, _parent));
      _push(`</div><div class="hidden md:flex flex-col gap-4 w-2/12 z-10"><!--[-->`);
      ssrRenderList(cards.slice(0, 2), (card, index) => {
        _push(ssrRenderComponent(_component_Card, {
          key: `card-ml-${index}`,
          title: card.title,
          href: card.href,
          class: ["w-28 flex items-center justify-center transform hover:scale-105 transition-all dark:!bg-[#1B1B1B] dark:hover:!bg-[#1D1D1D]", {
            "ml-auto": index % 2 === 0,
            "rotate-2": index === 0,
            "-rotate-3": index === 2
          }],
          style: {
            aspectRatio: "1/1"
          }
        }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-2 items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: card.icon,
                class: "h-8 w-8"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(card.title)}</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col gap-2 items-center" }, [
                  createVNode(_component_Icon, {
                    name: card.icon,
                    class: "h-8 w-8"
                  }, null, 8, ["name"]),
                  createTextVNode(" " + toDisplayString(card.title), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><header class="flex-1 z-10"><div class="space-y-8 z-10"><div class="space-y-4"><h1 class="font-semibold text-center text-lg text-black/50 dark:text-white/50 md:text-xl"> Hi, I am <span class="text-black/60 select-none dark:text-white/60 transition-colors bg-zinc-200 dark:bg-zinc-800 rounded-full align-middle py-2.5 pl-3 pr-4 gap-1 inline-flex items-center w-max font-medium">`);
      _push(ssrRenderComponent(_component_SmartImage, {
        src: "/assets/images/memoji.png",
        class: "object-cover h-7 w-7"
      }, null, _parent));
      _push(` Romain</span> a </h1><h1 class="font-semibold text-center text-5xl text-black/90 dark:text-white/90 md:text-6xl mt-10"> French business student </h1></div></div><div class="mt-10"><a href="https://linkedin.com/in/romain-rochas" target="_blank" rel="noopener noreferrer"><h1 class="font-semibold text-center text-lg text-black/50 dark:text-white/50 md:text-xl"> Studying @ <span class="group relative bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 rounded-full align-middle py-3 pl-4 pr-5 gap-2 inline-flex items-center w-max font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 dark:hover:shadow-red-400/20 hover:scale-105 cursor-pointer"><div class="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div><div class="relative overflow-hidden rounded-md">`);
      _push(ssrRenderComponent(_component_SmartImage, {
        src: "/assets/images/school/emlyon-logo.svg",
        class: "object-cover h-10 w-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
        alt: "Emlyon Business School"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div></div><span class="text-sm font-semibold text-black/70 dark:text-white/70 group-hover:text-red-600 dark:group-hover:text-white transition-colors duration-300"> Emlyon </span><div class="flex items-center gap-1"><div class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div><span class="text-xs text-black/50 dark:text-white/50 font-medium">M2</span></div></span></h1></a></div><div class="mt-8 flex items-center justify-center gap-x-3 gap-y-2 flex-wrap"><!--[-->`);
      ssrRenderList([
        { name: "TypeScript", icon: "devicon:typescript" },
        { name: "React.js", icon: "devicon:react" },
        { name: "HTML5", icon: "devicon:html5" },
        { name: "Linux", icon: "devicon:linux" },
        { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
        { name: "Node.js", icon: "devicon:nodejs" }
      ], (item) => {
        _push(ssrRenderComponent(_component_Icon, mergeProps({
          key: `skill-icon-${item.name}`,
          name: item.icon,
          class: {
            "h-[22px] w-[22px]": item.name === "Node.js",
            "h-[25px] w-[25px]": ["HTML5", "TypeScript"].includes(item.name),
            "h-7 w-7": !["TypeScript", "Node.js", "HTML5"].includes(
              item.name
            )
          }
        }, ssrGetDirectiveProps(_ctx, _directive_tippy, { content: item.name, placement: "bottom" })), null, _parent));
      });
      _push(`<!--]--></div></header><div class="hidden md:flex flex-col gap-4 w-2/12 z-10"><!--[-->`);
      ssrRenderList(cards.slice(2, 6), (card, index) => {
        _push(ssrRenderComponent(_component_Card, {
          key: `card-mr-${index}`,
          title: card.title,
          href: card.href,
          class: ["w-28 flex items-center justify-center transform hover:scale-105 transition-all dark:!bg-[#1B1B1B] dark:hover:!bg-[#1D1D1D]", {
            "ml-auto": index % 2 !== 0,
            "-rotate-2": index === 0,
            "rotate-3": index === 2
          }],
          style: {
            aspectRatio: "1/1"
          }
        }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-2 items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: card.icon,
                class: "h-8 w-8"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(card.title)}</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col gap-2 items-center" }, [
                  createVNode(_component_Icon, {
                    name: card.icon,
                    class: "h-8 w-8"
                  }, null, 8, ["name"]),
                  createTextVNode(" " + toDisplayString(card.title), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="grid md:hidden grid-cols-2 gap-4 w-full mt-24 z-10"><!--[-->`);
      ssrRenderList(cards, (card, index) => {
        _push(ssrRenderComponent(_component_Card, {
          key: `card-m-${index}`,
          title: card.title,
          href: card.href,
          class: "w-full flex items-center justify-center dark:!bg-[#1B1B1B] dark:hover:!bg-[#1D1D1D]",
          style: {
            aspectRatio: "1/1"
          }
        }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-2 items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: card.icon,
                class: "h-8 w-8"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(card.title)}</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col gap-2 items-center" }, [
                  createVNode(_component_Icon, {
                    name: card.icon,
                    class: "h-8 w-8"
                  }, null, 8, ["name"]),
                  createTextVNode(" " + toDisplayString(card.title), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cv0VlGaY.mjs.map
