import { _ as _sfc_main$1 } from './PageLayout-DbkzbJM8.mjs';
import { h as _export_sfc, c as useNuxtApp, u as useHead, e as _sfc_main$2, _ as __nuxt_component_4$1, f as _sfc_main$9, b as _sfc_main$b } from './server.mjs';
import { _ as _sfc_main$3 } from './Index-0AfarMpg.mjs';
import { defineComponent, ref, reactive, computed, resolveDirective, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, createBlock, createCommentVNode, withDirectives, vModelText, openBlock, Fragment, renderList, vModelSelect, withKeys, Transition, vShow, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrGetDirectiveProps, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "mdcreator",
  __ssrInlineRender: true,
  setup(__props) {
    const initialService = {
      author: {
        name: "",
        id: ""
      },
      contributors: {
        inputs: {
          name: "",
          id: ""
        },
        list: []
      },
      name: "",
      altnames: {
        input: "",
        list: []
      },
      category: {
        selected: "Select a category",
        options: ["Anime", "Games", "Music", "Socials", "Videos", "Other"]
      },
      description: {
        inputs: {
          langCode: "",
          content: ""
        },
        list: []
      },
      version: "1.0.0",
      logo: "",
      thumbnail: "",
      color: "",
      url: {
        input: "",
        list: []
      },
      tags: {
        input: "",
        list: []
      },
      regexp: {
        url: null,
        iframe: null
      },
      // This won't be available to be manipulated with this tool, but if a user imports a presence with settings, we will overwrite this array.
      settings: [],
      iframe: false,
      warning: false,
      readLogs: false
    };
    const { $prepareMeta } = useNuxtApp();
    const service = ref(Object.assign({}, initialService));
    const color = ref();
    const descriptionInput = ref();
    const contributorsIdInput = ref();
    const state = reactive({
      lastSchemaUrl: "https://schemas.premid.app/metadata/1.10",
      additionalSettings: false,
      importLoading: false,
      resultWindow: false
    });
    useHead(() => {
      const title = "Presence Metadata Creator";
      const image = "https://i.imgur.com/CuVtvKW.png";
      const description = "Easy and free to use tool to create PreMiD Presence metadata files easily, without even opening your code editor!";
      return {
        title,
        link: [
          {
            rel: "canonical",
            href: "https://rrchs.fr/projects/premid/mdcreator"
          }
        ],
        meta: $prepareMeta({
          title,
          description,
          image,
          keywords: "premid, custom, status",
          url: "https://rrchs.fr/projects/premid/mdcreator"
        })
      };
    });
    const getMetadata = computed(() => {
      const imageRegex = {
        logo: /^https?:\/\/?(?:[a-z0-9-]+\.)*[0-9a-z_-]+(?:\.[a-z]+)+\/.*$/g,
        thumbnail: /^https?:\/\/?([a-z0-9-]+\.)*[0-9a-z_-]+(\.[a-z]+)+\/.*$/g
      };
      const errors = [];
      let object = {};
      const requiredFields = [
        "name",
        "url",
        "logo",
        "thumbnail",
        "version",
        "color"
      ];
      for (const field of requiredFields) {
        if (!service.value[field])
          errors.push(`Missing field: ${field}`);
      }
      if (service.value.url.list.length === 0) errors.push("Missing field: url");
      if (service.value.description.list.length === 0)
        errors.push("Missing field: description");
      else if (!service.value.description.list.find((d) => d.langCode === "en"))
        errors.push("Missing field: english description");
      if (service.value.logo && imageRegex.logo.test(service.value.logo) === false)
        errors.push("Not an image: logo");
      if (service.value.thumbnail && imageRegex.thumbnail.test(service.value.thumbnail) === false)
        errors.push("Not an image: thumbnail");
      if (!service.value.author.name) errors.push("Missing field: author name");
      if (!service.value.author.id) errors.push("Missing field: author id");
      if (service.value.category.selected === "Select a category")
        errors.push("Missing field: category");
      if (service.value.version && service.value.version.split(".").filter((i) => i).length !== 3)
        errors.push("Wrong versioning format");
      if (errors.length === 0) {
        object = {
          $schema: state.lastSchemaUrl,
          author: service.value.author,
          contributors: service.value.contributors.list.length ? service.value.contributors.list : null,
          service: service.value.name,
          altnames: service.value.altnames.list.length ? service.value.altnames.list : null,
          description: {},
          url: service.value.url.list.length === 1 ? service.value.url.list[0] : service.value.url.list,
          regExp: service.value.regexp.url,
          version: service.value.version,
          logo: service.value.logo,
          thumbnail: service.value.thumbnail,
          color: service.value.color,
          category: service.value.category.selected.toLowerCase(),
          tags: service.value.tags.list.length ? service.value.tags.list : null,
          iframe: service.value.iframe,
          iFrameRegExp: service.value.regexp.iframe,
          readLogs: service.value.readLogs,
          settings: service.value.settings.length ? service.value.settings : null
        };
        const descriptionObject = {
          en: service.value.description.list.find((d) => d.langCode === "en").content
        };
        for (const description of service.value.description.list.filter(
          (d) => d.langCode !== "en"
        )) {
          descriptionObject[description.langCode] = description.content;
        }
        object.description = descriptionObject;
        for (const [k, v] of Object.entries(object)) if (!v) delete object[k];
      }
      return {
        error: errors.length > 0,
        result: object,
        errors
      };
    });
    const addItem = (type = "url") => {
      var _a, _b;
      const { url, tags, description, altnames, contributors } = service.value;
      try {
        if (type === "url" && !url.list.includes(new URL(url.input).hostname) && url.input) {
          const testUrl = new URL(url.input);
          url.list.push(testUrl.hostname);
          url.input = "";
        } else if (type === "tag" && !tags.list.includes(tags.input) && tags.input) {
          const tag = tags.input.replace(/\s/g, "-");
          tags.list.push(tag);
          tags.input = "";
        } else if (type === "altname" && altnames.input && !altnames.list.includes(altnames.input)) {
          altnames.list.push(altnames.input);
          altnames.input = "";
        } else if (type === "description" && description.inputs.langCode && description.inputs.content && !((_a = Object.keys(
          description.list.find(
            (desc) => desc.langCode === description.inputs.langCode
          ) || {}
        )) == null ? void 0 : _a.length)) {
          description.list.push({
            langCode: description.inputs.langCode,
            content: description.inputs.content
          });
          description.inputs.langCode = "";
          description.inputs.content = "";
        } else if (type === "contributor" && contributors.inputs.name && contributors.inputs.id && !((_b = Object.keys(
          contributors.list.find(
            (contributor) => contributor.id === contributors.inputs.id
          ) || {}
        )) == null ? void 0 : _b.length)) {
          contributors.list.push({
            name: contributors.inputs.name,
            id: contributors.inputs.id
          });
          contributors.inputs.name = "";
          contributors.inputs.id = "";
        }
      } catch (err) {
        if (err instanceof Error) {
          alert(err.message);
          console.error(err);
        }
      }
    };
    const removeItem = (target, type = "url") => {
      if (type === "url")
        service.value.url.list = service.value.url.list.filter(
          (url) => url !== target
        );
      else if (type === "tag")
        service.value.tags.list = service.value.tags.list.filter(
          (tag) => tag !== target
        );
      else if (type === "altname")
        service.value.altnames.list = service.value.altnames.list.filter(
          (altname) => altname !== target
        );
      else if (type === "description")
        service.value.description.list = service.value.description.list.filter(
          (description) => description.langCode !== target
        );
      else if (type === "contributor")
        service.value.contributors.list = service.value.contributors.list.filter(
          (contributor) => contributor.id !== target
        );
    };
    const importFromStore = async () => {
      var _a, _b, _c, _d, _e, _f;
      const input = prompt(
        "Enter the name of the Presence you want to import. Name should match the capitalization of the original name."
      );
      if (!input) return;
      state.importLoading = true;
      try {
        const { data } = await fetch("https://api.premid.app/v3/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query: `query {
              presences(service: "${input}", limit: 1) {
                metadata {
                  service,
                  author {id, name},
                  version,
                  settings {id,title,icon,if{propretyNames,,patternProprties}placeholder,value,values,multiLanguage}
                  category,
                  logo,
                  thumbnail,
                  color,
                  tags,
                  contributors {id, name},
                  altnames,
                  description,
                  regExp,
                  url,
                  iframeRegExp,
                  iframe,
                  readLogs,
                  warning,
                }
              }
            }`
          })
        }).then((res) => res.json());
        const metadata = (_b = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.presences[0]) == null ? void 0 : _b.metadata;
        if (!metadata) {
          state.importLoading = false;
          return;
        }
        resetService();
        service.value.name = metadata.service;
        service.value.author = metadata.author;
        service.value.version = metadata.version;
        service.value.settings = metadata.settings || [];
        service.value.category.selected = metadata.category ? `${(_d = (_c = metadata.category) == null ? void 0 : _c[0]) == null ? void 0 : _d.toUpperCase()}${(_f = (_e = metadata.category) == null ? void 0 : _e.slice(1)) == null ? void 0 : _f.toLowerCase()}` : "Select a category";
        service.value.logo = metadata.logo || "";
        service.value.thumbnail = metadata.thumbnail || "";
        service.value.color = metadata.color || "";
        service.value.tags.list = metadata.tags || [];
        service.value.contributors.list = metadata.contributors || [];
        service.value.altnames.list = metadata.altnames || [];
        service.value.description.list = parseDescriptionObject(
          metadata.description
        );
        service.value.regexp.url = metadata.regExp || null;
        service.value.regexp.iframe = metadata.iFrameRegExp || null;
        service.value.iframe = metadata.iframe || false;
        service.value.readLogs = metadata.readLogs || false;
        service.value.warning = metadata.warning || false;
        if (typeof metadata.url === "string")
          service.value.url.list.push(metadata.url);
        else if (typeof metadata.url === "object")
          service.value.url.list = metadata.url;
        state.importLoading = false;
      } catch (err) {
        state.importLoading = false;
        console.error(err);
      }
    };
    const parseDescriptionObject = (object) => {
      const inLocaleDataFormat = [];
      for (const key in object)
        inLocaleDataFormat.push({
          langCode: key,
          content: object[key]
        });
      return inLocaleDataFormat;
    };
    const resetService = () => {
      service.value = Object.assign({}, initialService);
      service.value.url.list = [];
      service.value.tags.list = [];
      service.value.description.list = [];
      service.value.contributors.list = [];
      service.value.altnames.list = [];
      service.value.category.selected = "Select a category";
      service.value.regexp.iframe = null;
      service.value.regexp.url = null;
      service.value.iframe = false;
      service.value.warning = false;
      service.value.readLogs = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageLayout = _sfc_main$1;
      const _component_PageTitle = _sfc_main$2;
      const _component_Icon = __nuxt_component_4$1;
      const _component_Button = _sfc_main$9;
      const _component_SmartLink = _sfc_main$b;
      const _component_Card = _sfc_main$3;
      const _directive_tippy = resolveDirective("tippy");
      _push(ssrRenderComponent(_component_PageLayout, mergeProps({
        title: "Presence Metadata Creator",
        description: "Create a metadata.json file for your amazing and new PreMiD service with an easy to use and free graphical user interface! Worry. You will still need to code the presence to get it working! Machines can't do everything \u{1F605}"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div class="space-y-12 mt-2" data-v-573afc41${_scopeId}><div data-v-573afc41${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Author Information`);
                } else {
                  return [
                    createTextVNode("Author Information")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 grid gap-3 sm:grid-cols-2" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).author.name)} class="input" placeholder="Your Discord username, without the #tag" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).author.id)} class="input" placeholder="Your Discord ID" data-v-573afc41${_scopeId}></div></div><div data-v-573afc41${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Service Information`);
                } else {
                  return [
                    createTextVNode("Service Information")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 grid gap-3 sm:grid-cols-2" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).name)} class="input" placeholder="Name of the service" data-v-573afc41${_scopeId}><select class="input" data-v-573afc41${_scopeId}><option value="Select a category" selected disabled data-v-573afc41${_scopeId}> Select a category </option><!--[-->`);
            ssrRenderList(unref(service).category.options, (option, index) => {
              _push2(`<option${ssrRenderAttr("value", option)} data-v-573afc41${ssrIncludeBooleanAttr(Array.isArray(unref(service).category.selected) ? ssrLooseContain(unref(service).category.selected, option) : ssrLooseEqual(unref(service).category.selected, option)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(option)}</option>`);
            });
            _push2(`<!--]--></select><input${ssrRenderAttr("value", unref(service).logo)} class="input" placeholder="Logo of the service, 512x512 is recommended" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).thumbnail)} class="input" placeholder="Thumbnail of the service, usually a screenshot of the service" data-v-573afc41${_scopeId}></div><div class="mt-3 grid gap-3 grid-cols-2" data-v-573afc41${_scopeId}><div class="relative" data-v-573afc41${_scopeId}><input readonly class="w-full input" placeholder="Service color"${ssrRenderAttr("value", unref(service).color)} data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).color)} class="top-0 right-0 bottom-0 left-0 absolute invisible" type="color" placeholder="Service color" data-v-573afc41${_scopeId}></div><input${ssrRenderAttr("value", unref(service).version)} class="input" placeholder="Service version" data-v-573afc41${_scopeId}></div><div class="mt-3 grid gap-3 sm:grid-cols-3" data-v-573afc41${_scopeId}><div class="rounded-md space-y-2 bg-gray-100 h-56 ring overflow-y-hidden dark:bg-neutral-800" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).url.input)} class="rounded-tl-md rounded-tr-md h-1/5 w-full py-2 px-4 dark:bg-neutral-700 dark:text-gray-200 focus:outline-none" placeholder="URL(s) of the service" data-v-573afc41${_scopeId}><div class="h-4/5 overflow-y-auto scrollbar" data-v-573afc41${_scopeId}><div class="${ssrRenderClass([{
              "h-full flex justify-center items-center": unref(service).url.list.length === 0
            }, "space-y-1 px-2 pb-4 text-gray-800 dark:text-gray-200"])}" data-v-573afc41${_scopeId}><!--[-->`);
            ssrRenderList(unref(service).url.list, (url, index) => {
              _push2(`<div class="flex space-x-4 items-center" data-v-573afc41${_scopeId}><span class="flex-grow truncate" data-v-573afc41${_scopeId}>${ssrInterpolate(url)}</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:times",
                title: "Click to remove this URL",
                onClick: ($event) => removeItem(url, "url")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
            if (unref(service).url.list.length === 0) {
              _push2(`<div class="text-sm text-center text-gray-500 select-none dark:text-gray-400" data-v-573afc41${_scopeId}> Enter URL and hit enter </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="rounded-md space-y-2 bg-gray-100 h-56 ring overflow-y-hidden dark:bg-neutral-800" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).tags.input)} class="rounded-tl-md rounded-tr-md h-1/5 w-full py-2 px-4 dark:bg-neutral-700 dark:text-gray-200 focus:outline-none" placeholder="Tags for the service" data-v-573afc41${_scopeId}><div class="h-4/5 overflow-y-auto scrollbar" data-v-573afc41${_scopeId}><div class="${ssrRenderClass([{
              "h-full flex justify-center items-center": unref(service).tags.list.length === 0
            }, "space-y-1 px-2 pb-4 text-gray-800 dark:text-gray-200"])}" data-v-573afc41${_scopeId}><!--[-->`);
            ssrRenderList(unref(service).tags.list, (tag, index) => {
              _push2(`<div class="flex space-x-4 items-center" data-v-573afc41${_scopeId}><span class="flex-grow truncate" data-v-573afc41${_scopeId}>${ssrInterpolate(tag)}</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:times",
                title: "Click to remove this tag",
                onClick: ($event) => removeItem(tag, "tag")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
            if (unref(service).tags.list.length === 0) {
              _push2(`<div class="text-sm text-center text-gray-500 select-none dark:text-gray-400" data-v-573afc41${_scopeId}> Enter tag name and hit enter </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="rounded-md bg-gray-100 h-56 ring overflow-y-hidden dark:bg-neutral-800" data-v-573afc41${_scopeId}><div class="h-full space-y-2" data-v-573afc41${_scopeId}><div class="h-1/3" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).description.inputs.langCode)} class="rounded-tl-md rounded-tr-md h-1/2 w-full py-2 px-4 dark:bg-neutral-700 dark:text-gray-200 focus:outline-none" placeholder="Language code, e.g. en" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).description.inputs.content)} class="h-1/2 w-full py-2 px-4 dark:bg-neutral-700 dark:text-gray-200 focus:outline-none" placeholder="Localized description" data-v-573afc41${_scopeId}></div><div class="h-2/3 overflow-y-auto scrollbar" data-v-573afc41${_scopeId}><div class="${ssrRenderClass([{
              "h-full flex justify-center items-center": unref(service).description.list.length === 0
            }, "space-y-1 px-2 pb-4 text-gray-800 dark:text-gray-200"])}" data-v-573afc41${_scopeId}><!--[-->`);
            ssrRenderList(unref(service).description.list, (description, index) => {
              _push2(`<div class="flex space-x-4 items-center" data-v-573afc41${_scopeId}><div class="flex-grow overflow-x-hidden" data-v-573afc41${_scopeId}><span class="truncate" data-v-573afc41${_scopeId}>${ssrInterpolate(description.langCode)}</span><p class="text-xs line-clamp-2" data-v-573afc41${_scopeId}>${ssrInterpolate(description.content)}</p></div>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:times",
                onClick: ($event) => removeItem(description.langCode, "description")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
            if (unref(service).description.list.length === 0) {
              _push2(`<div class="text-sm text-center text-gray-500 select-none dark:text-gray-400" data-v-573afc41${_scopeId}> Fill the inputs and hit enter </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div></div></div><div class="space-y-8" data-v-573afc41${_scopeId}><div data-v-573afc41${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Additional Settings <span class="cursor-pointer font-normal text-xs hover:underline" data-v-573afc41${_scopeId2}>\uFF0D ${ssrInterpolate(unref(state).additionalSettings ? "hide" : "show")}</span>`);
                } else {
                  return [
                    createTextVNode(" Additional Settings "),
                    createVNode("span", {
                      class: "cursor-pointer font-normal text-xs hover:underline",
                      onClick: ($event) => unref(state).additionalSettings = !unref(state).additionalSettings
                    }, "\uFF0D " + toDisplayString(unref(state).additionalSettings ? "hide" : "show"), 9, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="mt-4" data-v-573afc41${_scopeId}> Settings under this title are not necessary, only fill these if you know what you are doing, otherwise, you can just skip this section. </p></div>`);
            if (unref(state).additionalSettings) {
              _push2(`<div class="space-y-6 mt-4" data-v-573afc41${_scopeId}><div class="grid gap-3 sm:grid-cols-2" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).regexp.url)} class="input" placeholder="URL regex" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).regexp.iframe)} class="input" placeholder="Iframe regex" data-v-573afc41${_scopeId}></div><div class="grid gap-x-3 gap-y-2 sm:grid-cols-3" data-v-573afc41${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, mergeProps({
                block: "",
                onClick: ($event) => unref(service).iframe = !unref(service).iframe
              }, ssrGetDirectiveProps(_ctx, _directive_tippy, {
                content: "To be able to read data from iframe sources",
                placement: "top"
              })), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(service).iframe ? "Disable" : "Enable")} Iframe Support `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(service).iframe ? "Disable" : "Enable") + " Iframe Support ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, mergeProps({
                block: "",
                elevated: unref(service).warning,
                onClick: ($event) => unref(service).warning = !unref(service).warning
              }, ssrGetDirectiveProps(_ctx, _directive_tippy, {
                content: "Small warning icon that will take place next to your Presence on Store"
              })), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(service).warning ? "Disable" : "Enable")} Warning Icon `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(service).warning ? "Disable" : "Enable") + " Warning Icon ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, mergeProps({
                block: "",
                elevated: unref(service).readLogs,
                onClick: ($event) => unref(service).readLogs = !unref(service).readLogs
              }, ssrGetDirectiveProps(_ctx, _directive_tippy, {
                content: "Required permission to be able to read Console entries"
              })), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(service).readLogs ? "Disable" : "Enable")} Read Logs `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(service).readLogs ? "Disable" : "Enable") + " Read Logs ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="rounded-md ring grid sm:grid-cols-2" data-v-573afc41${_scopeId}><div class="rounded-tl-md rounded-bl-md h-full bg-gray-100 ring dark:bg-neutral-800" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).contributors.inputs.name)} class="rounded-none rounded-tl-md h-1/2 w-full ring-0 input" placeholder="Contributor name" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).contributors.inputs.id)} class="rounded-none rounded-bl-md h-1/2 w-full ring-0 input" placeholder="Contributor ID" data-v-573afc41${_scopeId}></div><div class="rounded-tr-md rounded-br-md space-y-2 bg-gray-100 overflow-y-hidden dark:bg-neutral-800" data-v-573afc41${_scopeId}><div class="${ssrRenderClass([{
                "flex items-center justify-center w-full": unref(service).contributors.list.length === 0,
                "py-2": unref(service).contributors.list.length > 0
              }, "flex h-full mx-auto space-x-6 px-4 items-center overflow-x-auto scrollbar"])}" data-v-573afc41${_scopeId}><!--[-->`);
              ssrRenderList(unref(service).contributors.list, (contributor, index) => {
                _push2(`<div class="flex space-x-2 flex-shrink-0 text-gray-900 items-center truncate dark:text-gray-100" data-v-573afc41${_scopeId}><span class="flex-shrink-0" data-v-573afc41${_scopeId}>${ssrInterpolate(contributor.name)}</span>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "mdi:times",
                  title: "Click to remove this tag",
                  onClick: ($event) => removeItem(contributor.id, "contributor")
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
              if (unref(service).contributors.list.length === 0) {
                _push2(`<div class="text-sm text-center text-gray-500 select-none dark:text-gray-400" data-v-573afc41${_scopeId}> Fill the inputs and hit enter </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div><div class="rounded-md ring grid sm:grid-cols-2" data-v-573afc41${_scopeId}><div class="rounded-tl-md rounded-bl-md bg-gray-100 dark:bg-neutral-800" data-v-573afc41${_scopeId}><input${ssrRenderAttr("value", unref(service).altnames.input)} class="rounded-none rounded-tl-md rounded-bl-md w-full ring-0 input" placeholder="Alternative name(s), e.g. \u7CBE\u9748\u5BF6\u53EF\u5922 (Pok\xE9mon)" data-v-573afc41${_scopeId}></div><div class="rounded-tr-md rounded-br-md space-y-2 bg-gray-100 overflow-y-hidden dark:bg-neutral-800" data-v-573afc41${_scopeId}><div class="${ssrRenderClass([{
                "flex items-center justify-center w-full": unref(service).contributors.list.length === 0,
                "py-2": unref(service).altnames.list.length > 0
              }, "flex h-full mx-auto space-x-6 px-4 items-center overflow-x-auto scrollbar"])}" data-v-573afc41${_scopeId}><!--[-->`);
              ssrRenderList(unref(service).altnames.list, (altname, index) => {
                _push2(`<div class="flex space-x-2 flex-shrink-0 text-gray-900 items-center truncate dark:text-gray-100" data-v-573afc41${_scopeId}><span class="flex-shrink-0" data-v-573afc41${_scopeId}>${ssrInterpolate(altname)}</span>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "mdi:times",
                  title: "Click to remove this alternative name",
                  onClick: ($event) => removeItem(altname, "altname")
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
              if (unref(service).altnames.list.length === 0) {
                _push2(`<div class="text-sm text-center text-gray-500 select-none dark:text-gray-400" data-v-573afc41${_scopeId}> Enter a name and hit enter </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div><div class="space-y-4 text-sm" data-v-573afc41${_scopeId}><p data-v-573afc41${_scopeId}><strong class="font-medium" data-v-573afc41${_scopeId}>P.S.</strong> You can&#39;t configure Presence Settings with this tool. You have to take a look at the docs from this point. I am not able to produce it since there are many possibilities and more to be added in the future. It&#39;s best if you just follow the Documentation. </p><p data-v-573afc41${_scopeId}> \u{1F41B} If you wish to report a bug, a feature request or contact me in general, you can visit my website&#39;s GitHub repository and leave an issue. </p><p data-v-573afc41${_scopeId}> \u{1F389} If you liked my work, please consider donating to see more tools like this. Visit `);
              _push2(ssrRenderComponent(_component_SmartLink, {
                href: { name: "donate" },
                class: "font-medium underline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`donation`);
                  } else {
                    return [
                      createTextVNode("donation")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(` ${ssrInterpolate("")} page for more information. </p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-2 flex items-center sm:space-y-0 sm:space-x-4" data-v-573afc41${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              icon: "heroicons:cog",
              onClick: ($event) => unref(state).resultWindow = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Generate `);
                } else {
                  return [
                    createTextVNode(" Generate ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              icon: "heroicons:inbox-arrow-down",
              disabled: unref(state).importLoading,
              onClick: importFromStore
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(state).importLoading ? "Importing..." : "Import From Store")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(state).importLoading ? "Importing..." : "Import From Store"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              icon: "mdi:times",
              onClick: resetService
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Clear `);
                } else {
                  return [
                    createTextVNode(" Clear ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            if (unref(state).resultWindow === true) {
              _push2(`<div class="bg-black bg-opacity-50 top-0 right-0 bottom-0 left-0 fixed hidden sm:block" data-v-573afc41${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="min-h-full bg-gray-100 top-0 right-0 bottom-0 fixed overflow-y-auto scrollbar sm:ml-auto sm:shadow-md sm:w-8/12 dark:bg-neutral-900" style="${ssrRenderStyle(unref(state).resultWindow === true ? null : { display: "none" })}" data-v-573afc41${_scopeId}><div class="space-y-8 p-2 sm:py-10 sm:px-8 sm:w-10/12" data-v-573afc41${_scopeId}><div class="space-y-1" data-v-573afc41${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageTitle, { class: "flex space-x-2 items-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "heroicons:cog",
                    class: "h-5 w-5 no-style"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-573afc41${_scopeId2}>Metadata Result</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "heroicons:cog",
                      class: "h-5 w-5 no-style"
                    }),
                    createVNode("span", null, "Metadata Result")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="!text-black/50 pt-4 block dark:!text-white/30" data-v-573afc41${_scopeId}> The result of your metadata.json, you can see your issues, and download your config from this window. Make sure to fill every and each required input correctly before doing anything! </p></div><div class="space-y-4" data-v-573afc41${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageTitle, { class: "flex space-x-2 items-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: unref(getMetadata).error ? "heroicons:exclamation-circle" : "heroicons:fire",
                    class: "h-5 w-5 no-style"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-573afc41${_scopeId2}>${ssrInterpolate(unref(getMetadata).error ? "Errors" : "Result")}</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: unref(getMetadata).error ? "heroicons:exclamation-circle" : "heroicons:fire",
                      class: "h-5 w-5 no-style"
                    }, null, 8, ["name"]),
                    createVNode("span", null, toDisplayString(unref(getMetadata).error ? "Errors" : "Result"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(getMetadata).error !== null) {
              _push2(`<div class="grid gap-2 sm:grid-cols-2" data-v-573afc41${_scopeId}><!--[-->`);
              ssrRenderList(unref(getMetadata).errors, (error, index) => {
                _push2(ssrRenderComponent(_component_Card, {
                  key: `error-${index}`,
                  class: { "col-span-2": unref(getMetadata).errors.length === 1 },
                  type: "danger"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u{1F6A8} ${ssrInterpolate(error)}`);
                    } else {
                      return [
                        createTextVNode(" \u{1F6A8} " + toDisplayString(error), 1)
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
            _push2(`</div><div class="space-y-1" data-v-573afc41${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageTitle, { class: "flex space-x-2 items-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "heroicons:fire",
                    class: "h-5 w-5 no-style"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-573afc41${_scopeId2}>Your Metadata File </span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "heroicons:fire",
                      class: "h-5 w-5 no-style"
                    }),
                    createVNode("span", null, "Your Metadata File ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(getMetadata).error === false) {
              _push2(`<pre class="rounded-md h-96 shadow w-full overflow-y-auto language-json scrollbar" data-v-573afc41${_scopeId}>${(_a = JSON.stringify(unref(getMetadata).result, null, 2)) != null ? _a : ""}</pre>`);
            } else {
              _push2(`<span class="text-black/50 pt-4 block dark:text-white/30" data-v-573afc41${_scopeId}> You have to fix the errors before you can access the metadata JSON. </span>`);
            }
            _push2(`</div><div class="space-y-2 sm:flex sm:space-y-0 sm:space-x-4 sm:items-center" data-v-573afc41${_scopeId}>`);
            if (unref(getMetadata).error === false) {
              _push2(ssrRenderComponent(_component_Button, {
                icon: "heroicons:inbox-arrow-down",
                download: "metadata.json",
                href: `data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify(unref(getMetadata).result, null, 2)
                )}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Download `);
                  } else {
                    return [
                      createTextVNode(" Download ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Button, {
              icon: "mdi:times",
              onClick: ($event) => unref(state).resultWindow = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-573afc41${_scopeId2}>Close</span>`);
                } else {
                  return [
                    createVNode("span", null, "Close")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-12 mt-2" }, [
                createVNode("div", null, [
                  createVNode(_component_PageTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Author Information")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-1 grid gap-3 sm:grid-cols-2" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(service).author.name = $event,
                      class: "input",
                      placeholder: "Your Discord username, without the #tag"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(service).author.name]
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(service).author.id = $event,
                      class: "input",
                      placeholder: "Your Discord ID"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(service).author.id]
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode(_component_PageTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Service Information")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-1 grid gap-3 sm:grid-cols-2" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(service).name = $event,
                      class: "input",
                      placeholder: "Name of the service"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(service).name]
                    ]),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => unref(service).category.selected = $event,
                      class: "input"
                    }, [
                      createVNode("option", {
                        value: "Select a category",
                        selected: "",
                        disabled: ""
                      }, " Select a category "),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(service).category.options, (option, index) => {
                        return openBlock(), createBlock("option", {
                          key: `category-option-${index}`,
                          value: option
                        }, toDisplayString(option), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, unref(service).category.selected]
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(service).logo = $event,
                      class: "input",
                      placeholder: "Logo of the service, 512x512 is recommended"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(service).logo]
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(service).thumbnail = $event,
                      class: "input",
                      placeholder: "Thumbnail of the service, usually a screenshot of the service"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(service).thumbnail]
                    ])
                  ]),
                  createVNode("div", { class: "mt-3 grid gap-3 grid-cols-2" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode("input", {
                        readonly: "",
                        class: "w-full input",
                        placeholder: "Service color",
                        value: unref(service).color,
                        onClick: ($event) => {
                          var _a2;
                          return (_a2 = unref(color)) == null ? void 0 : _a2.click();
                        }
                      }, null, 8, ["value", "onClick"]),
                      withDirectives(createVNode("input", {
                        ref_key: "color",
                        ref: color,
                        "onUpdate:modelValue": ($event) => unref(service).color = $event,
                        class: "top-0 right-0 bottom-0 left-0 absolute invisible",
                        type: "color",
                        placeholder: "Service color"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(service).color]
                      ])
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(service).version = $event,
                      class: "input",
                      placeholder: "Service version"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(service).version]
                    ])
                  ]),
                  createVNode("div", { class: "mt-3 grid gap-3 sm:grid-cols-3" }, [
                    createVNode("div", { class: "rounded-md space-y-2 bg-gray-100 h-56 ring overflow-y-hidden dark:bg-neutral-800" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(service).url.input = $event,
                        class: "rounded-tl-md rounded-tr-md h-1/5 w-full py-2 px-4 dark:bg-neutral-700 dark:text-gray-200 focus:outline-none",
                        placeholder: "URL(s) of the service",
                        onKeyup: withKeys(($event) => addItem("url"), ["enter"])
                      }, null, 40, ["onUpdate:modelValue", "onKeyup"]), [
                        [vModelText, unref(service).url.input]
                      ]),
                      createVNode("div", { class: "h-4/5 overflow-y-auto scrollbar" }, [
                        createVNode("div", {
                          class: ["space-y-1 px-2 pb-4 text-gray-800 dark:text-gray-200", {
                            "h-full flex justify-center items-center": unref(service).url.list.length === 0
                          }]
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(service).url.list, (url, index) => {
                            return openBlock(), createBlock("div", {
                              key: `url-${index}`,
                              class: "flex space-x-4 items-center"
                            }, [
                              createVNode("span", { class: "flex-grow truncate" }, toDisplayString(url), 1),
                              createVNode(_component_Icon, {
                                name: "mdi:times",
                                title: "Click to remove this URL",
                                onClick: ($event) => removeItem(url, "url")
                              }, null, 8, ["onClick"])
                            ]);
                          }), 128)),
                          unref(service).url.list.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm text-center text-gray-500 select-none dark:text-gray-400"
                          }, " Enter URL and hit enter ")) : createCommentVNode("", true)
                        ], 2)
                      ])
                    ]),
                    createVNode("div", { class: "rounded-md space-y-2 bg-gray-100 h-56 ring overflow-y-hidden dark:bg-neutral-800" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(service).tags.input = $event,
                        class: "rounded-tl-md rounded-tr-md h-1/5 w-full py-2 px-4 dark:bg-neutral-700 dark:text-gray-200 focus:outline-none",
                        placeholder: "Tags for the service",
                        onKeyup: withKeys(($event) => addItem("tag"), ["enter"])
                      }, null, 40, ["onUpdate:modelValue", "onKeyup"]), [
                        [vModelText, unref(service).tags.input]
                      ]),
                      createVNode("div", { class: "h-4/5 overflow-y-auto scrollbar" }, [
                        createVNode("div", {
                          class: ["space-y-1 px-2 pb-4 text-gray-800 dark:text-gray-200", {
                            "h-full flex justify-center items-center": unref(service).tags.list.length === 0
                          }]
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(service).tags.list, (tag, index) => {
                            return openBlock(), createBlock("div", {
                              key: `tag-${index}`,
                              class: "flex space-x-4 items-center"
                            }, [
                              createVNode("span", { class: "flex-grow truncate" }, toDisplayString(tag), 1),
                              createVNode(_component_Icon, {
                                name: "mdi:times",
                                title: "Click to remove this tag",
                                onClick: ($event) => removeItem(tag, "tag")
                              }, null, 8, ["onClick"])
                            ]);
                          }), 128)),
                          unref(service).tags.list.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm text-center text-gray-500 select-none dark:text-gray-400"
                          }, " Enter tag name and hit enter ")) : createCommentVNode("", true)
                        ], 2)
                      ])
                    ]),
                    createVNode("div", { class: "rounded-md bg-gray-100 h-56 ring overflow-y-hidden dark:bg-neutral-800" }, [
                      createVNode("div", { class: "h-full space-y-2" }, [
                        createVNode("div", { class: "h-1/3" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(service).description.inputs.langCode = $event,
                            class: "rounded-tl-md rounded-tr-md h-1/2 w-full py-2 px-4 dark:bg-neutral-700 dark:text-gray-200 focus:outline-none",
                            placeholder: "Language code, e.g. en",
                            onKeyup: withKeys(($event) => {
                              var _a2;
                              return (_a2 = unref(descriptionInput)) == null ? void 0 : _a2.focus();
                            }, ["enter"])
                          }, null, 40, ["onUpdate:modelValue", "onKeyup"]), [
                            [vModelText, unref(service).description.inputs.langCode]
                          ]),
                          withDirectives(createVNode("input", {
                            ref_key: "descriptionInput",
                            ref: descriptionInput,
                            "onUpdate:modelValue": ($event) => unref(service).description.inputs.content = $event,
                            class: "h-1/2 w-full py-2 px-4 dark:bg-neutral-700 dark:text-gray-200 focus:outline-none",
                            placeholder: "Localized description",
                            onKeyup: withKeys(($event) => addItem("description"), ["enter"])
                          }, null, 40, ["onUpdate:modelValue", "onKeyup"]), [
                            [vModelText, unref(service).description.inputs.content]
                          ])
                        ]),
                        createVNode("div", { class: "h-2/3 overflow-y-auto scrollbar" }, [
                          createVNode("div", {
                            class: ["space-y-1 px-2 pb-4 text-gray-800 dark:text-gray-200", {
                              "h-full flex justify-center items-center": unref(service).description.list.length === 0
                            }]
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(service).description.list, (description, index) => {
                              return openBlock(), createBlock("div", {
                                key: `description-${index}`,
                                class: "flex space-x-4 items-center"
                              }, [
                                createVNode("div", { class: "flex-grow overflow-x-hidden" }, [
                                  createVNode("span", { class: "truncate" }, toDisplayString(description.langCode), 1),
                                  createVNode("p", { class: "text-xs line-clamp-2" }, toDisplayString(description.content), 1)
                                ]),
                                createVNode(_component_Icon, {
                                  name: "mdi:times",
                                  onClick: ($event) => removeItem(description.langCode, "description")
                                }, null, 8, ["onClick"])
                              ]);
                            }), 128)),
                            unref(service).description.list.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-sm text-center text-gray-500 select-none dark:text-gray-400"
                            }, " Fill the inputs and hit enter ")) : createCommentVNode("", true)
                          ], 2)
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-8" }, [
                  createVNode("div", null, [
                    createVNode(_component_PageTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(" Additional Settings "),
                        createVNode("span", {
                          class: "cursor-pointer font-normal text-xs hover:underline",
                          onClick: ($event) => unref(state).additionalSettings = !unref(state).additionalSettings
                        }, "\uFF0D " + toDisplayString(unref(state).additionalSettings ? "hide" : "show"), 9, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "mt-4" }, " Settings under this title are not necessary, only fill these if you know what you are doing, otherwise, you can just skip this section. ")
                  ]),
                  createVNode(Transition, {
                    name: "fade",
                    mode: "out-in"
                  }, {
                    default: withCtx(() => [
                      unref(state).additionalSettings ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "space-y-6 mt-4"
                      }, [
                        createVNode("div", { class: "grid gap-3 sm:grid-cols-2" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(service).regexp.url = $event,
                            class: "input",
                            placeholder: "URL regex"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(service).regexp.url]
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(service).regexp.iframe = $event,
                            class: "input",
                            placeholder: "Iframe regex"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(service).regexp.iframe]
                          ])
                        ]),
                        createVNode("div", { class: "grid gap-x-3 gap-y-2 sm:grid-cols-3" }, [
                          withDirectives((openBlock(), createBlock(_component_Button, {
                            block: "",
                            onClick: ($event) => unref(service).iframe = !unref(service).iframe
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(service).iframe ? "Disable" : "Enable") + " Iframe Support ", 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"])), [
                            [_directive_tippy, {
                              content: "To be able to read data from iframe sources",
                              placement: "top"
                            }]
                          ]),
                          withDirectives((openBlock(), createBlock(_component_Button, {
                            block: "",
                            elevated: unref(service).warning,
                            onClick: ($event) => unref(service).warning = !unref(service).warning
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(service).warning ? "Disable" : "Enable") + " Warning Icon ", 1)
                            ]),
                            _: 1
                          }, 8, ["elevated", "onClick"])), [
                            [_directive_tippy, {
                              content: "Small warning icon that will take place next to your Presence on Store"
                            }]
                          ]),
                          withDirectives((openBlock(), createBlock(_component_Button, {
                            block: "",
                            elevated: unref(service).readLogs,
                            onClick: ($event) => unref(service).readLogs = !unref(service).readLogs
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(service).readLogs ? "Disable" : "Enable") + " Read Logs ", 1)
                            ]),
                            _: 1
                          }, 8, ["elevated", "onClick"])), [
                            [_directive_tippy, {
                              content: "Required permission to be able to read Console entries"
                            }]
                          ])
                        ]),
                        createVNode("div", { class: "rounded-md ring grid sm:grid-cols-2" }, [
                          createVNode("div", { class: "rounded-tl-md rounded-bl-md h-full bg-gray-100 ring dark:bg-neutral-800" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(service).contributors.inputs.name = $event,
                              class: "rounded-none rounded-tl-md h-1/2 w-full ring-0 input",
                              placeholder: "Contributor name",
                              onKeyup: withKeys(($event) => {
                                var _a2;
                                return (_a2 = unref(contributorsIdInput)) == null ? void 0 : _a2.focus();
                              }, ["enter"])
                            }, null, 40, ["onUpdate:modelValue", "onKeyup"]), [
                              [vModelText, unref(service).contributors.inputs.name]
                            ]),
                            withDirectives(createVNode("input", {
                              ref_key: "contributorsIdInput",
                              ref: contributorsIdInput,
                              "onUpdate:modelValue": ($event) => unref(service).contributors.inputs.id = $event,
                              class: "rounded-none rounded-bl-md h-1/2 w-full ring-0 input",
                              placeholder: "Contributor ID",
                              onKeyup: withKeys(($event) => addItem("contributor"), ["enter"])
                            }, null, 40, ["onUpdate:modelValue", "onKeyup"]), [
                              [vModelText, unref(service).contributors.inputs.id]
                            ])
                          ]),
                          createVNode("div", { class: "rounded-tr-md rounded-br-md space-y-2 bg-gray-100 overflow-y-hidden dark:bg-neutral-800" }, [
                            createVNode("div", {
                              class: ["flex h-full mx-auto space-x-6 px-4 items-center overflow-x-auto scrollbar", {
                                "flex items-center justify-center w-full": unref(service).contributors.list.length === 0,
                                "py-2": unref(service).contributors.list.length > 0
                              }]
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(service).contributors.list, (contributor, index) => {
                                return openBlock(), createBlock("div", {
                                  key: `contributor-${index}`,
                                  class: "flex space-x-2 flex-shrink-0 text-gray-900 items-center truncate dark:text-gray-100"
                                }, [
                                  createVNode("span", { class: "flex-shrink-0" }, toDisplayString(contributor.name), 1),
                                  createVNode(_component_Icon, {
                                    name: "mdi:times",
                                    title: "Click to remove this tag",
                                    onClick: ($event) => removeItem(contributor.id, "contributor")
                                  }, null, 8, ["onClick"])
                                ]);
                              }), 128)),
                              unref(service).contributors.list.length === 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-sm text-center text-gray-500 select-none dark:text-gray-400"
                              }, " Fill the inputs and hit enter ")) : createCommentVNode("", true)
                            ], 2)
                          ])
                        ]),
                        createVNode("div", { class: "rounded-md ring grid sm:grid-cols-2" }, [
                          createVNode("div", { class: "rounded-tl-md rounded-bl-md bg-gray-100 dark:bg-neutral-800" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(service).altnames.input = $event,
                              class: "rounded-none rounded-tl-md rounded-bl-md w-full ring-0 input",
                              placeholder: "Alternative name(s), e.g. \u7CBE\u9748\u5BF6\u53EF\u5922 (Pok\xE9mon)",
                              onKeyup: withKeys(($event) => addItem("altname"), ["enter"])
                            }, null, 40, ["onUpdate:modelValue", "onKeyup"]), [
                              [vModelText, unref(service).altnames.input]
                            ])
                          ]),
                          createVNode("div", { class: "rounded-tr-md rounded-br-md space-y-2 bg-gray-100 overflow-y-hidden dark:bg-neutral-800" }, [
                            createVNode("div", {
                              class: ["flex h-full mx-auto space-x-6 px-4 items-center overflow-x-auto scrollbar", {
                                "flex items-center justify-center w-full": unref(service).contributors.list.length === 0,
                                "py-2": unref(service).altnames.list.length > 0
                              }]
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(service).altnames.list, (altname, index) => {
                                return openBlock(), createBlock("div", {
                                  key: `altname-${index}`,
                                  class: "flex space-x-2 flex-shrink-0 text-gray-900 items-center truncate dark:text-gray-100"
                                }, [
                                  createVNode("span", { class: "flex-shrink-0" }, toDisplayString(altname), 1),
                                  createVNode(_component_Icon, {
                                    name: "mdi:times",
                                    title: "Click to remove this alternative name",
                                    onClick: ($event) => removeItem(altname, "altname")
                                  }, null, 8, ["onClick"])
                                ]);
                              }), 128)),
                              unref(service).altnames.list.length === 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-sm text-center text-gray-500 select-none dark:text-gray-400"
                              }, " Enter a name and hit enter ")) : createCommentVNode("", true)
                            ], 2)
                          ])
                        ]),
                        createVNode("div", { class: "space-y-4 text-sm" }, [
                          createVNode("p", null, [
                            createVNode("strong", { class: "font-medium" }, "P.S."),
                            createTextVNode(" You can't configure Presence Settings with this tool. You have to take a look at the docs from this point. I am not able to produce it since there are many possibilities and more to be added in the future. It's best if you just follow the Documentation. ")
                          ]),
                          createVNode("p", null, " \u{1F41B} If you wish to report a bug, a feature request or contact me in general, you can visit my website's GitHub repository and leave an issue. "),
                          createVNode("p", null, [
                            createTextVNode(" \u{1F389} If you liked my work, please consider donating to see more tools like this. Visit "),
                            createVNode(_component_SmartLink, {
                              href: { name: "donate" },
                              class: "font-medium underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("donation")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString("") + " page for more information. ")
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "space-y-2 flex items-center sm:space-y-0 sm:space-x-4" }, [
                    createVNode(_component_Button, {
                      icon: "heroicons:cog",
                      onClick: ($event) => unref(state).resultWindow = true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Generate ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_Button, {
                      icon: "heroicons:inbox-arrow-down",
                      disabled: unref(state).importLoading,
                      onClick: importFromStore
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(state).importLoading ? "Importing..." : "Import From Store"), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(_component_Button, {
                      icon: "mdi:times",
                      onClick: resetService
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Clear ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              unref(state).resultWindow === true ? (openBlock(), createBlock("div", {
                key: 0,
                class: "bg-black bg-opacity-50 top-0 right-0 bottom-0 left-0 fixed hidden sm:block",
                onClick: ($event) => unref(state).resultWindow = false
              }, null, 8, ["onClick"])) : createCommentVNode("", true),
              createVNode(Transition, {
                name: "slide-left",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  withDirectives(createVNode("div", { class: "min-h-full bg-gray-100 top-0 right-0 bottom-0 fixed overflow-y-auto scrollbar sm:ml-auto sm:shadow-md sm:w-8/12 dark:bg-neutral-900" }, [
                    createVNode("div", { class: "space-y-8 p-2 sm:py-10 sm:px-8 sm:w-10/12" }, [
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode(_component_PageTitle, { class: "flex space-x-2 items-center" }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "heroicons:cog",
                              class: "h-5 w-5 no-style"
                            }),
                            createVNode("span", null, "Metadata Result")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "!text-black/50 pt-4 block dark:!text-white/30" }, " The result of your metadata.json, you can see your issues, and download your config from this window. Make sure to fill every and each required input correctly before doing anything! ")
                      ]),
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode(_component_PageTitle, { class: "flex space-x-2 items-center" }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: unref(getMetadata).error ? "heroicons:exclamation-circle" : "heroicons:fire",
                              class: "h-5 w-5 no-style"
                            }, null, 8, ["name"]),
                            createVNode("span", null, toDisplayString(unref(getMetadata).error ? "Errors" : "Result"), 1)
                          ]),
                          _: 1
                        }),
                        unref(getMetadata).error !== null ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "grid gap-2 sm:grid-cols-2"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(getMetadata).errors, (error, index) => {
                            return openBlock(), createBlock(_component_Card, {
                              key: `error-${index}`,
                              class: { "col-span-2": unref(getMetadata).errors.length === 1 },
                              type: "danger"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u{1F6A8} " + toDisplayString(error), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode(_component_PageTitle, { class: "flex space-x-2 items-center" }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "heroicons:fire",
                              class: "h-5 w-5 no-style"
                            }),
                            createVNode("span", null, "Your Metadata File ")
                          ]),
                          _: 1
                        }),
                        unref(getMetadata).error === false ? (openBlock(), createBlock("pre", {
                          key: 0,
                          class: "rounded-md h-96 shadow w-full overflow-y-auto language-json scrollbar",
                          innerHTML: JSON.stringify(unref(getMetadata).result, null, 2)
                        }, null, 8, ["innerHTML"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-black/50 pt-4 block dark:text-white/30"
                        }, " You have to fix the errors before you can access the metadata JSON. "))
                      ]),
                      createVNode("div", { class: "space-y-2 sm:flex sm:space-y-0 sm:space-x-4 sm:items-center" }, [
                        unref(getMetadata).error === false ? (openBlock(), createBlock(_component_Button, {
                          key: 0,
                          icon: "heroicons:inbox-arrow-down",
                          download: "metadata.json",
                          href: `data:text/json;charset=utf-8,${encodeURIComponent(
                            JSON.stringify(unref(getMetadata).result, null, 2)
                          )}`
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Download ")
                          ]),
                          _: 1
                        }, 8, ["href"])) : createCommentVNode("", true),
                        createVNode(_component_Button, {
                          icon: "mdi:times",
                          onClick: ($event) => unref(state).resultWindow = false
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Close")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ], 512), [
                    [vShow, unref(state).resultWindow === true]
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/premid/mdcreator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mdcreator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-573afc41"]]);

export { mdcreator as default };
//# sourceMappingURL=mdcreator-DvReA-iL.mjs.map
