import { defineComponent, ref, reactive, watch, toRaw, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, watchEffect, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrGetDirectiveProps, ssrRenderSlot } from 'vue/server-renderer';
import { h as _export_sfc, c as useNuxtApp, u as useHead, b as _sfc_main$b, e as _sfc_main$2$1, _ as __nuxt_component_4$1, a as _sfc_main$a } from './server.mjs';
import moment from 'moment';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Notification",
  __ssrInlineRender: true,
  props: {
    type: { default: "information" },
    title: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const getIcon = computed(() => {
      if (props.type === "warning") return "\u2757\uFE0F";
      else if (props.type === "danger") return "\u{1F6A8}";
      else if (props.type === "success") return "\u2705";
      else return "\u{1F4A1}";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["notification flex flex-col md:items-center md:flex-row gap-x-4 gap-y-2", __props.type]
      }, _attrs))} data-v-d661484e><span class="text-xl md:text-lg" data-v-d661484e>${ssrInterpolate(unref(getIcon))}</span><div data-v-d661484e>`);
      if (__props.title) {
        _push(`<h1 data-v-d661484e>${ssrInterpolate(__props.title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (!!_ctx.$slots.default) {
        _push(`<p data-v-d661484e>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Notification.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d661484e"]]);
const general$1 = [
  { name: "Extreme Thinking", url: "https://i.imgur.com/IJbthB1.png" },
  { name: "Angry Stickman", url: "https://i.imgur.com/90lDk9T.png" },
  { name: "Read The Docs", url: "https://i.imgur.com/PvrqhRJ.png" },
  { name: "Please Stop", url: "https://i.imgur.com/qgCcDu7.png" },
  { name: "Brilliance", url: "https://i.imgur.com/skclu5h.png" },
  { name: "Pepe Sweat", url: "https://i.imgur.com/j4ip0Dx.png" },
  { name: "Panda Cry", url: "https://i.imgur.com/NFCmYsM.png" },
  { name: "Thinking", url: "https://i.imgur.com/mzlKBw3.png" },
  { name: "Spongery", url: "https://i.imgur.com/VfhmSfN.png" },
  { name: "Balance", url: "https://i.imgur.com/v0jG4vt.png" },
  { name: "Bravery", url: "https://i.imgur.com/etvIz6E.png" },
  { name: "Playing", url: "https://i.imgur.com/UHgwoyQ.png" },
  { name: "Reading", url: "https://i.imgur.com/tbSYfJV.png" },
  { name: "Popcorn", url: "https://i.imgur.com/dQ4EOWV.png" },
  { name: "Windows", url: "https://i.imgur.com/YkOU4HD.png" },
  { name: "Mobile", url: "https://i.imgur.com/BhBThRQ.png" },
  { name: "Paused", url: "https://i.imgur.com/TYvgF3M.png" },
  { name: "Search", url: "https://i.imgur.com/hnDIQO1.png" },
  { name: "Please", url: "https://i.imgur.com/Zp835mC.png" },
  { name: "Sadcat", url: "https://i.imgur.com/IaSeSJk.png" },
  { name: "Coffee", url: "https://i.imgur.com/W5NIvJF.png" },
  { name: "Doubt", url: "https://i.imgur.com/kYKE2rI.png" },
  { name: "Relax", url: "https://i.imgur.com/BaOQ4I8.png" },
  { name: "Smart", url: "https://i.imgur.com/vKhMs2R.png" },
  { name: "Heart", url: "https://i.imgur.com/jtt9fjf.png" },
  { name: "Shrug", url: "https://i.imgur.com/UnzU96q.png" },
  { name: "Mmlol", url: "https://i.imgur.com/5t2q2eu.png" },
  { name: "Linux", url: "https://i.imgur.com/bN5rmiU.png" },
  { name: "Live", url: "https://i.imgur.com/qphbAuR.png" },
  { name: "Cool", url: "https://i.imgur.com/AdUBBHa.png" },
  { name: "Eyes", url: "https://i.imgur.com/lIa90i4.png" },
  { name: "Ohno", url: "https://i.imgur.com/7EkHsMr.png" },
  { name: "Tada", url: "https://i.imgur.com/nO8fd9v.png" },
  { name: "ESL", url: "https://i.imgur.com/F51eSEx.png" }
];
const brand$1 = [
  { name: "Facebook", url: "https://i.imgur.com/5Aab3v6.png" },
  { name: "Instagram", url: "https://i.imgur.com/1c5yuiD.png" },
  { name: "YouTube", url: "https://i.imgur.com/0Bvl6BU.png" },
  { name: "YouTube Dark", url: "https://i.imgur.com/mQQO1nv.jpg" },
  { name: "Netflix", url: "https://i.imgur.com/DkZQvkC.png" },
  { name: "Twitter", url: "https://i.imgur.com/AtV70mE.png" },
  { name: "Twitch", url: "https://i.imgur.com/bmIsItf.png" },
  { name: "Discord", url: "https://i.imgur.com/P6fs8jR.png" },
  { name: "Discord Templates", url: "https://i.imgur.com/zqdRKw4.png" }
];
const largeImages = [
  {
    name: "General",
    items: general$1
  },
  {
    name: "Brand",
    items: brand$1
  }
];
const general = [
  { name: "DoNotDisturb", url: "https://i.imgur.com/MvrnrMW.png" },
  { name: "Brilliance", url: "https://i.imgur.com/skclu5h.png" },
  { name: "VideoCall", url: "https://i.imgur.com/GwMdYmz.png" },
  { name: "Checkmark", url: "https://i.imgur.com/FH7OH6y.png" },
  { name: "Thinking", url: "https://i.imgur.com/mzlKBw3.png" },
  { name: "Windows", url: "https://i.imgur.com/YkOU4HD.png" },
  { name: "NoEntry", url: "https://i.imgur.com/jVidfcx.png" },
  { name: "Balance", url: "https://i.imgur.com/v0jG4vt.png" },
  { name: "Bravery", url: "https://i.imgur.com/etvIz6E.png" },
  { name: "Playing", url: "https://i.imgur.com/UHgwoyQ.png" },
  { name: "Writing", url: "https://i.imgur.com/4VcqgYA.png" },
  { name: "Reading", url: "https://i.imgur.com/tbSYfJV.png" },
  { name: "Coffee", url: "https://i.imgur.com/W5NIvJF.png" },
  { name: "Online", url: "https://i.imgur.com/8cel80u.png" },
  { name: "Please", url: "https://i.imgur.com/d10KCzD.png" },
  { name: "Paused", url: "https://i.imgur.com/TYvgF3M.png" },
  { name: "Search", url: "https://i.imgur.com/hnDIQO1.png" },
  { name: "Mmlol", url: "https://i.imgur.com/5t2q2eu.png" },
  { name: "Heart", url: "https://i.imgur.com/jtt9fjf.png" },
  { name: "Linux", url: "https://i.imgur.com/bN5rmiU.png" },
  { name: "Live", url: "https://i.imgur.com/qphbAuR.png" },
  { name: "Call", url: "https://i.imgur.com/0akjqyz.png" },
  { name: "Idle", url: "https://i.imgur.com/mKIQ8Zo.png" },
  { name: "Cool", url: "https://i.imgur.com/AdUBBHa.png" },
  { name: "Tada", url: "https://i.imgur.com/nO8fd9v.png" }
];
const brand = [
  { name: "YouTube", url: "https://i.imgur.com/0Bvl6BU.png" },
  { name: "YouTube Dark", url: "https://i.imgur.com/mQQO1nv.jpg" },
  { name: "Netflix", url: "https://i.imgur.com/DkZQvkC.png" },
  { name: "Twitter", url: "https://i.imgur.com/AtV70mE.png" },
  { name: "Twitch", url: "https://i.imgur.com/bmIsItf.png" },
  { name: "Discord", url: "https://i.imgur.com/P6fs8jR.png" }
];
const smallImages = [
  {
    name: "General",
    items: general
  },
  {
    name: "Brand",
    items: brand
  }
];
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Discord",
  __ssrInlineRender: true,
  props: {
    title: { default: "Custom Status" },
    largeImage: { default: "PreMiD" },
    smallImage: { default: null },
    smallImageText: { default: null },
    details: { default: "" },
    buttons: { default: () => [] },
    state: { default: "" },
    customImageUrl: { default: () => ({ small: "", large: "" }) },
    timestamp: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const componentReady = ref(false);
    const timers = ref({
      elapsed: {
        instance: null,
        string: ""
      },
      end: {
        instance: null,
        string: ""
      }
    });
    const getImages = computed(() => {
      var _a, _b;
      const { largeImage, smallImage } = props;
      const largeAll = [];
      const smallAll = [];
      largeImages.map((item) => item.items).forEach((category) => largeAll.push(...category));
      smallImages.map((item) => item.items).forEach((category) => smallAll.push(...category));
      return {
        largeImage: props.customImageUrl.large ? largeImage : ((_a = largeAll.find((item) => item.name === largeImage)) == null ? void 0 : _a.url) || "https://i.imgur.com/CuVtvKW.png",
        smallImage: props.customImageUrl.small ? smallImage : ((_b = smallAll.find((item) => item.name === smallImage)) == null ? void 0 : _b.url) || null
      };
    });
    const getText = computed(() => {
      const { smallImage, smallImageText, details, state } = props;
      let small;
      if (smallImage && smallImageText) small = smallImageText;
      else if (smallImage && !smallImageText) small = "[EMPTY]";
      return {
        details,
        state,
        small
      };
    });
    watchEffect(() => {
      var _a, _b, _c, _d;
      if (((_a = props.timestamp) == null ? void 0 : _a.start) && ((_b = props.timestamp) == null ? void 0 : _b.start.value)) {
        startElapsedTimer();
      } else if (((_c = props.timestamp) == null ? void 0 : _c.end.enabled) && ((_d = props.timestamp) == null ? void 0 : _d.end.value)) {
        startLeftTimer();
      } else {
        stopTimers();
      }
    });
    const isTimerEnabled = computed(() => {
      var _a, _b;
      const start = (_a = props == null ? void 0 : props.timestamp) == null ? void 0 : _a.start;
      const end = (_b = props == null ? void 0 : props.timestamp) == null ? void 0 : _b.end;
      return !!((start == null ? void 0 : start.enabled) && (start == null ? void 0 : start.value)) || !!((end == null ? void 0 : end.enabled) && (end == null ? void 0 : end.value));
    });
    const getTime = computed(() => {
      var _a, _b;
      if (isTimerEnabled.value === false) return null;
      else if ((_a = timers.value.elapsed) == null ? void 0 : _a.instance) return timers.value.elapsed.string;
      else if ((_b = timers.value.end) == null ? void 0 : _b.instance) return timers.value.end.string;
      else return null;
    });
    function stopTimers() {
      const { elapsed, end } = timers.value;
      if (typeof elapsed === "boolean" && typeof end === "boolean") return;
      clearInterval(elapsed.instance);
      elapsed.instance = null;
      elapsed.string = "";
      clearInterval(end.instance);
      end.instance = null;
      end.string = "";
    }
    function startElapsedTimer() {
      var _a, _b;
      const target = (_b = (_a = props == null ? void 0 : props.timestamp) == null ? void 0 : _a.start) == null ? void 0 : _b.value;
      const timer = timers == null ? void 0 : timers.value.elapsed;
      if (!target || !timer) return;
      stopTimers();
      timer.string = "00:00 elapsed";
      timer.instance = setInterval();
    }
    function startLeftTimer() {
      var _a, _b;
      const target = (_b = (_a = props == null ? void 0 : props.timestamp) == null ? void 0 : _a.end) == null ? void 0 : _b.value;
      const timer = timers == null ? void 0 : timers.value.end;
      if (!target || !timer) return;
      stopTimers();
      timer.string = "--:-- left";
      timer.instance = setInterval();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SmartImage = _sfc_main$a;
      const _component_SmartLink = _sfc_main$b;
      const _directive_tippy = resolveDirective("tippy");
      if (unref(componentReady)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-md bg-[#6c82cf] w-full py-4 px-6 overflow-x-hidden dark:bg-neutral-800/40" }, _attrs))}><div class="pt-2"><h1 class="font-semibold text-xs text-white uppercase dark:text-gray-100"> Playing a game </h1><div class="flex flex-col space-y-3 items-center justify-between overflow-x-hidden md:space-y-0 md:space-x-3 md:flex-row"><div class="${ssrRenderClass([__props.buttons.length > 0 && "md:w-2/3", "flex space-x-3 w-full py-2 items-center overflow-x-hidden md:space-x-5"])}"><div class="flex-shrink-0 h-32 w-32 relative">`);
        _push(ssrRenderComponent(_component_SmartImage, {
          key: unref(getImages).largeImage,
          src: unref(getImages).largeImage,
          class: "rounded-xl",
          alt: "large image",
          height: "256",
          width: "256"
        }, null, _parent));
        if (unref(getImages).smallImage) {
          _push(ssrRenderComponent(_component_SmartImage, mergeProps({
            key: unref(getImages).smallImage,
            src: unref(getImages).smallImage,
            alt: "small image",
            class: "rounded-full bg-[#6c82cf] h-9 -right-2 -bottom-2 ring-4 ring-[#6c82cf] w-9 overflow-y-hidden absolute box-border dark:bg-transparent dark:ring-transparent focus:outline-none"
          }, ssrGetDirectiveProps(_ctx, _directive_tippy, {
            content: unref(getText).small,
            placement: "top"
          })), null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="text-gray-100 overflow-x-hidden"><h1 class="font-medium text-xl text-white block">${ssrInterpolate(__props.title)}</h1><div class="leading-tight space-y-1"><span class="block truncate">${ssrInterpolate(unref(getText).details)}</span><span class="block truncate">${ssrInterpolate(unref(getText).state)}</span>`);
        if (unref(isTimerEnabled) === true) {
          _push(`<span class="block">${ssrInterpolate(unref(getTime))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
        if (__props.buttons.length > 0) {
          _push(`<div class="flex flex-col space-y-2 flex-shrink-0 md:w-1/3"><!--[-->`);
          ssrRenderList(__props.buttons, (button, index) => {
            _push(`<div class="flex justify-end">`);
            _push(ssrRenderComponent(_component_SmartLink, {
              href: button.url,
              title: button.url,
              class: "border rounded-sm cursor-pointer border-white/40 text-sm py-2 px-4 transition-colors text-gray-300 truncate select-none md:px-3 md:py-1 hover:text-white hover:border-white focus:bg-opacity-10 focus:bg-white",
              blank: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(button.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(button.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-md bg-[#6c82cf] h-[12.5rem] w-full animate-pulse" }, _attrs))}></div>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Discord.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "custom-status",
  __ssrInlineRender: true,
  setup(__props) {
    const { $prepareMeta } = useNuxtApp();
    const customLargeImage = ref(false);
    const customSmallImage = ref(false);
    ref(null);
    const presenceChecked = ref(false);
    const presence = reactive({
      installed: true,
      largeImageKey: "PreMiD",
      smallImageKey: "None",
      smallImageText: null,
      details: "",
      state: "",
      buttons: [
        {
          label: "",
          url: ""
        },
        {
          label: "",
          url: ""
        }
      ],
      timestamp: {
        start: {
          enabled: false,
          value: null
        },
        end: {
          enabled: false,
          value: null
        }
      }
    });
    useHead(() => {
      const title = "PreMiD Custom Status";
      const image = "https://i.imgur.com/CuVtvKW.png";
      const description = "Tool that allows you do display whatever you want on your Discord profile with PreMiD! Easy and free!";
      return {
        title: "Custom Status",
        meta: $prepareMeta({
          title,
          description,
          image,
          keywords: "premid, custom, status",
          url: "https://rrchs.fr/projects/premid/custom-status"
        }),
        link: [
          {
            rel: "canonical",
            href: "https://rrchs.fr/projects/premid/custom-status"
          },
          {
            rel: "prefetch",
            href: image
          }
        ]
      };
    });
    watch(
      () => presence,
      () => {
        if (presenceChecked.value === true) {
          localStorage.setItem(
            "presenceData",
            JSON.stringify({
              customLargeImage: customLargeImage.value,
              customSmallImage: customSmallImage.value,
              presence: toRaw(presence)
            })
          );
        }
      },
      { deep: true }
    );
    const getImages = computed(() => {
      return {
        large: largeImages,
        small: smallImages
      };
    });
    const getButtons = computed(() => {
      const firstButton = presence.buttons[0];
      const secondButton = presence.buttons[1];
      const isFirstButton = (firstButton == null ? void 0 : firstButton.label) && (firstButton == null ? void 0 : firstButton.url);
      const isSecondButton = (secondButton == null ? void 0 : secondButton.label) && (secondButton == null ? void 0 : secondButton.url);
      if (!isFirstButton && !isSecondButton) return [];
      const isUrl = {
        first: false,
        second: false
      };
      try {
        if (isFirstButton) isUrl.first = !!new URL(firstButton == null ? void 0 : firstButton.url);
      } catch (_) {
      }
      try {
        if (isSecondButton) isUrl.second = !!new URL(secondButton == null ? void 0 : secondButton.url);
      } catch (_) {
      }
      const buttonsArray = [];
      if (isFirstButton && isUrl.first)
        buttonsArray.push({
          label: firstButton.label.slice(0, 30),
          url: firstButton.url
        });
      if (isSecondButton && isUrl.second)
        buttonsArray.push({
          label: secondButton.label.slice(0, 30),
          url: secondButton.url
        });
      return buttonsArray;
    });
    const getPresenceData = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const timestamps = presence.timestamp;
      const object = {};
      if (presence.largeImageKey) object.largeImageKey = presence.largeImageKey;
      else object.largeImageKey = "premid";
      if (presence.smallImageKey) object.smallImageKey = presence.smallImageKey;
      if (presence.smallImageKey && presence.smallImageText)
        object.smallImageText = presence.smallImageText;
      object.largeImageKey = (_a = object.largeImageKey) == null ? void 0 : _a.replace(/\s/g, "");
      object.smallImageKey = (_b = object.smallImageKey) == null ? void 0 : _b.replace(/\s/g, "");
      if (!customLargeImage.value)
        object.largeImageKey = (_c = object.largeImageKey) == null ? void 0 : _c.toLowerCase();
      if (!customSmallImage.value)
        object.smallImageKey = (_d = object.smallImageKey) == null ? void 0 : _d.toLowerCase();
      if (presence.details) object.details = presence.details;
      if (presence.state) object.state = presence.state;
      if (timestamps.start.enabled && timestamps.start.value) {
        object.startTimestamp = timestamps.start.value;
      } else if (timestamps.end.enabled && timestamps.end.value) {
        object.endTimestamp = moment(timestamps.end.value, "HH:mm").valueOf();
      }
      if (getButtons.value.length > 0) {
        object.buttons = [];
        if (((_e = getButtons.value[0]) == null ? void 0 : _e.label) && ((_f = getButtons.value[0]) == null ? void 0 : _f.url))
          object.buttons.push({
            label: getButtons.value[0].label,
            url: getButtons.value[0].url
          });
        if (((_g = getButtons.value[1]) == null ? void 0 : _g.label) && ((_h = getButtons.value[1]) == null ? void 0 : _h.url))
          object.buttons.push({
            label: getButtons.value[1].label,
            url: getButtons.value[1].url
          });
      }
      object.smallImageText = presence.smallImageText || "NULL";
      if (object.smallImageText === "NULL") delete object.smallImageText;
      if (Object.keys(object).length < 1) return {};
      else return JSON.stringify(object);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogNotification = __nuxt_component_0;
      const _component_SmartLink = _sfc_main$b;
      const _component_CardDiscord = _sfc_main$1;
      const _component_PageTitle = _sfc_main$2$1;
      const _component_Icon = __nuxt_component_4$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2 mt-4" }, _attrs))} data-v-c28ee155><div id="object" class="text-gray-900 hidden dark:text-gray-100" data-v-c28ee155>${ssrInterpolate(unref(getPresenceData))}</div><div class="space-y-12" data-v-c28ee155><div class="space-y-4" data-v-c28ee155>`);
      if (unref(presence).installed === false) {
        _push(ssrRenderComponent(_component_BlogNotification, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` You need to install the Custom Status presence from the PreMiD Store to be able to use this page. `);
              _push2(ssrRenderComponent(_component_SmartLink, {
                href: "https://premid.app/store/presences/Custom%20Status",
                class: "text-blue-200",
                blank: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Click here`);
                  } else {
                    return [
                      createTextVNode("Click here")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(` ${ssrInterpolate("")} to visit the store. `);
            } else {
              return [
                createTextVNode(" You need to install the Custom Status presence from the PreMiD Store to be able to use this page. "),
                createVNode(_component_SmartLink, {
                  href: "https://premid.app/store/presences/Custom%20Status",
                  class: "text-blue-200",
                  blank: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("Click here")
                  ]),
                  _: 1
                }),
                createTextVNode(" " + toDisplayString("") + " to visit the store. ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BlogNotification, {
        type: "warning",
        class: "md:hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Are you on mobile? If you are you should know that PreMiD doesn&#39;t work on mobile, so you can&#39;t use this page in any way. `);
          } else {
            return [
              createTextVNode(" Are you on mobile? If you are you should know that PreMiD doesn't work on mobile, so you can't use this page in any way. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardDiscord, {
        "small-image-text": unref(presence).smallImageText,
        "large-image": unref(presence).largeImageKey,
        "small-image": unref(presence).smallImageKey,
        "custom-image-url": {
          large: unref(customLargeImage),
          small: unref(customSmallImage)
        },
        timestamp: unref(presence).timestamp,
        details: unref(presence).details,
        state: unref(presence).state,
        buttons: unref(getButtons),
        class: "shadow-lg"
      }, null, _parent));
      _push(`</div><div class="space-y-4 mt-4 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 md:space-y-0" data-v-c28ee155><div class="space-y-2" data-v-c28ee155>`);
      _push(ssrRenderComponent(_component_PageTitle, { padding: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Details (upper text) `);
          } else {
            return [
              createTextVNode(" Details (upper text) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input${ssrRenderAttr("value", unref(presence).details)} type="text" placeholder="Something nice" class="w-full" data-v-c28ee155></div><div class="space-y-2" data-v-c28ee155>`);
      _push(ssrRenderComponent(_component_PageTitle, { padding: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` State (lower text) `);
          } else {
            return [
              createTextVNode(" State (lower text) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input${ssrRenderAttr("value", unref(presence).state)} type="text" placeholder="This is neat!" class="w-full" data-v-c28ee155></div><div class="space-y-2" data-v-c28ee155><div class="flex space-x-2 items-center justify-between" data-v-c28ee155>`);
      _push(ssrRenderComponent(_component_PageTitle, { padding: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Large Image `);
          } else {
            return [
              createTextVNode(" Large Image ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="cursor-pointer flex space-x-1 transition-colors text-neutral-700/40 items-center dark:text-gray-100/40 hover:text-opacity-100 focus:outline-none" data-v-c28ee155><span class="text-sm" data-v-c28ee155>custom</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:arrow-path-solid",
        class: "h-5 w-5 focus:outline-none"
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(customLargeImage)) {
        _push(`<input${ssrRenderAttr("value", unref(presence).largeImageKey)} type="text" class="w-full" placeholder="Type an image url" data-v-c28ee155>`);
      } else {
        _push(`<select class="bg-white w-full dark:bg-neutral-700" data-v-c28ee155><option selected data-v-c28ee155>PreMiD</option><!--[-->`);
        ssrRenderList(unref(getImages).large, (category, index) => {
          _push(`<optgroup${ssrRenderAttr("label", category.name)} data-v-c28ee155><!--[-->`);
          ssrRenderList(category.items.sort(
            (a, b) => a.name.localeCompare(b.name)
          ), (item, i) => {
            _push(`<option data-v-c28ee155${ssrIncludeBooleanAttr(Array.isArray(unref(presence).largeImageKey) ? ssrLooseContain(unref(presence).largeImageKey, null) : ssrLooseEqual(unref(presence).largeImageKey, null)) ? " selected" : ""}>${ssrInterpolate(item.name)}</option>`);
          });
          _push(`<!--]--></optgroup>`);
        });
        _push(`<!--]--></select>`);
      }
      _push(`</div><div class="space-y-2" data-v-c28ee155><div class="flex space-x-2 items-center justify-between" data-v-c28ee155>`);
      _push(ssrRenderComponent(_component_PageTitle, { padding: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Small Image `);
          } else {
            return [
              createTextVNode(" Small Image ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="cursor-pointer flex space-x-1 transition-colors text-neutral-700/40 items-center dark:text-gray-100/40 hover:text-opacity-100 focus:outline-none" data-v-c28ee155><span class="text-sm" data-v-c28ee155>custom</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:arrow-path-solid",
        class: "h-5 w-5 focus:outline-none"
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(customSmallImage)) {
        _push(`<input${ssrRenderAttr("value", unref(presence).smallImageKey)} type="text" class="w-full" placeholder="Type an image url" data-v-c28ee155>`);
      } else {
        _push(`<select class="bg-white w-full dark:bg-neutral-700" data-v-c28ee155><option selected data-v-c28ee155>None</option><!--[-->`);
        ssrRenderList(unref(getImages).small, (category, index) => {
          _push(`<optgroup${ssrRenderAttr("label", category.name)} data-v-c28ee155><!--[-->`);
          ssrRenderList(category.items.sort(
            (a, b) => a.name.localeCompare(b.name)
          ), (item, i) => {
            _push(`<option data-v-c28ee155${ssrIncludeBooleanAttr(Array.isArray(unref(presence).smallImageKey) ? ssrLooseContain(unref(presence).smallImageKey, null) : ssrLooseEqual(unref(presence).smallImageKey, null)) ? " selected" : ""}>${ssrInterpolate(item.name)}</option>`);
          });
          _push(`<!--]--></optgroup>`);
        });
        _push(`<!--]--></select>`);
      }
      _push(`</div>`);
      if (unref(presence).smallImageKey !== "None") {
        _push(`<div class="space-y-2 w-full col-span-2" data-v-c28ee155><h3 class="font-medium w-full text-gray-700 dark:text-gray-100" data-v-c28ee155> Small Image Text </h3><input${ssrRenderAttr("value", unref(presence).smallImageText)} type="text" class="w-full" placeholder="[EMPTY]" data-v-c28ee155></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-4 col-span-2" data-v-c28ee155><div data-v-c28ee155>`);
      _push(ssrRenderComponent(_component_PageTitle, { padding: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Buttons `);
          } else {
            return [
              createTextVNode(" Buttons ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-black/50 dark:text-white/30 mt-4" data-v-c28ee155> You can&#39;t click your own buttons from your Discord profile. If they appear here, they should also be working for others, blame Discord. </p></div><div class="grid gap-4 grid-cols-1 md:grid-cols-2" data-v-c28ee155><div class="space-y-2" data-v-c28ee155><input${ssrRenderAttr("value", unref(presence).buttons[0].label)} type="text" class="w-full" placeholder="Visit This Cool Website" data-v-c28ee155><input${ssrRenderAttr("value", unref(presence).buttons[0].url)} type="text" class="w-full" placeholder="https://rrchs.fr" data-v-c28ee155></div><div class="space-y-2" data-v-c28ee155><input${ssrRenderAttr("value", unref(presence).buttons[1].label)} type="text" class="w-full" placeholder="Visit PreMiD" data-v-c28ee155><input${ssrRenderAttr("value", unref(presence).buttons[1].url)} type="text" class="w-full" placeholder="https://premid.app" data-v-c28ee155></div></div></div><div class="space-y-2 col-span-2" data-v-c28ee155>`);
      _push(ssrRenderComponent(_component_PageTitle, { padding: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Timestamps `);
          } else {
            return [
              createTextVNode(" Timestamps ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid gap-4 grid-cols-1 md:grid-cols-2" data-v-c28ee155><div class="${ssrRenderClass([{
        "active text-white dark:text-gray-100": unref(presence).timestamp.start.enabled === true
      }, "timestamp dark:text-gray-200"])}" data-v-c28ee155> Show Time Elapsed </div><div class="${ssrRenderClass([{
        active: unref(presence).timestamp.end.enabled === true
      }, "cursor-default timestamp"])}" data-v-c28ee155><span class="${ssrRenderClass([{
        "text-white dark:text-gray-100": unref(presence).timestamp.end.enabled === true
      }, "dark:text-gray-200"])}" data-v-c28ee155>Time To:</span><input${ssrRenderAttr("value", unref(presence).timestamp.end.value)} type="time" data-v-c28ee155></div></div></div></div><section class="space-y-12" data-v-c28ee155><div data-v-c28ee155>`);
      _push(ssrRenderComponent(_component_PageTitle, { padding: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Consider Donating! `);
          } else {
            return [
              createTextVNode(" Consider Donating! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-black/50 dark:text-white/30 mt-4" data-v-c28ee155> If you want to support my work and make me create better systems in the future, you can donate me through GitHub Sponsors, please visit `);
      _push(ssrRenderComponent(_component_SmartLink, {
        href: { name: "donate" },
        class: "font-medium hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`my donate page`);
          } else {
            return [
              createTextVNode("my donate page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` ${ssrInterpolate("")} for more information. </p></div><div class="grid gap-6 grid-cols-1 md:grid-cols-2" data-v-c28ee155><div data-v-c28ee155>`);
      _push(ssrRenderComponent(_component_PageTitle, { padding: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` How does it work? `);
          } else {
            return [
              createTextVNode(" How does it work? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-black/50 dark:text-white/30 mt-4" data-v-c28ee155> When you add our Presence from Presence Store which is on `);
      _push(ssrRenderComponent(_component_SmartLink, {
        href: "https://premid.app/store/presences/Custom%20Status",
        title: "PreMiD Store",
        blank: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`this page`);
          } else {
            return [
              createTextVNode("this page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, you will be able to use this page. You just have to set your settings and PreMiD will show those settings on your profile just like in the preview you see up here. </p></div><div data-v-c28ee155>`);
      _push(ssrRenderComponent(_component_PageTitle, { padding: false }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` It&#39;s not showing anything!? `);
          } else {
            return [
              createTextVNode(" It's not showing anything!? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-black/50 dark:text-white/30 mt-4" data-v-c28ee155> If the system isn&#39;t working or it isn&#39;t displaying anything on your profile, it&#39;s most likely about you. Please check `);
      _push(ssrRenderComponent(_component_SmartLink, {
        href: "https://docs.premid.app/troubleshooting",
        title: "PreMiD Docs",
        blank: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Troubleshooting Documentation`);
          } else {
            return [
              createTextVNode("Troubleshooting Documentation")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` ${ssrInterpolate("")} and see if those steps fixes your issue. If nothing works out, you can always find me on PreMiD&#39;s Discord server. </p></div></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/premid/custom-status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c28ee155"]]);

export { customStatus as default };
//# sourceMappingURL=custom-status-BUUeiWxc.mjs.map
