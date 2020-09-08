import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, g as stores$1, v as validate_store, h as component_subscribe, j as validate_slots, k as element, l as space, t as text, m as claim_element, n as claim_space, o as children, p as claim_text, q as detach_dev, r as attr_dev, u as add_location, w as insert_dev, x as append_dev, y as _slicedToArray, z as set_data_dev, A as noop, B as _asyncToGenerator, C as regenerator, D as create_component, E as query_selector_all, F as claim_component, G as mount_component, H as transition_in, I as transition_out, J as destroy_component } from './client.7792818e.js';
import { t as tsvParse } from './tsv.c906c42a.js';
import { s as slugify } from './helpers.38afc14c.js';
import { B as BASE_URL } from './constants.8e4190be.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Meta.svelte";

function create_fragment(ctx) {
  var link;
  var t0;
  var title_1;
  var t1;
  var t2;
  var meta0;
  var t3;
  var meta1;
  var meta1_content_value;
  var t4;
  var meta2;
  var t5;
  var meta3;
  var meta3_content_value;
  var t6;
  var meta4;
  var t7;
  var meta5;
  var block = {
    c: function create() {
      link = element("link");
      t0 = space();
      title_1 = element("title");
      t1 = text(
      /*title*/
      ctx[1]);
      t2 = space();
      meta0 = element("meta");
      t3 = space();
      meta1 = element("meta");
      t4 = space();
      meta2 = element("meta");
      t5 = space();
      meta3 = element("meta");
      t6 = space();
      meta4 = element("meta");
      t7 = space();
      meta5 = element("meta");
      this.h();
    },
    l: function claim(nodes) {
      link = claim_element(nodes, "LINK", {
        rel: true,
        href: true
      });
      t0 = claim_space(nodes);
      title_1 = claim_element(nodes, "TITLE", {});
      var title_1_nodes = children(title_1);
      t1 = claim_text(title_1_nodes,
      /*title*/
      ctx[1]);
      title_1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      meta0 = claim_element(nodes, "META", {
        property: true,
        content: true
      });
      t3 = claim_space(nodes);
      meta1 = claim_element(nodes, "META", {
        property: true,
        content: true
      });
      t4 = claim_space(nodes);
      meta2 = claim_element(nodes, "META", {
        property: true,
        content: true
      });
      t5 = claim_space(nodes);
      meta3 = claim_element(nodes, "META", {
        property: true,
        content: true
      });
      t6 = claim_space(nodes);
      meta4 = claim_element(nodes, "META", {
        property: true,
        content: true
      });
      t7 = claim_space(nodes);
      meta5 = claim_element(nodes, "META", {
        property: true,
        content: true
      });
      this.h();
    },
    h: function hydrate() {
      attr_dev(link, "rel", "stylesheet");
      attr_dev(link, "href", "css/global.css");
      add_location(link, file, 14, 0, 361);
      add_location(title_1, file, 16, 0, 408);
      attr_dev(meta0, "property", "og:title");
      attr_dev(meta0, "content",
      /*title*/
      ctx[1]);
      add_location(meta0, file, 17, 0, 431);
      attr_dev(meta1, "property", "og:url");
      attr_dev(meta1, "content", meta1_content_value = BASE_URL +
      /*url*/
      ctx[0]);
      add_location(meta1, file, 18, 0, 476);
      attr_dev(meta2, "property", "og:description");
      attr_dev(meta2, "content",
      /*description*/
      ctx[2]);
      add_location(meta2, file, 19, 0, 528);
      attr_dev(meta3, "property", "og:image");
      attr_dev(meta3, "content", meta3_content_value = BASE_URL +
      /*image*/
      ctx[3]);
      add_location(meta3, file, 20, 0, 585);
      attr_dev(meta4, "property", "og:image:width");
      attr_dev(meta4, "content",
      /*imageWidth*/
      ctx[4]);
      add_location(meta4, file, 21, 0, 641);
      attr_dev(meta5, "property", "og:image:height");
      attr_dev(meta5, "content",
      /*imageHeight*/
      ctx[5]);
      add_location(meta5, file, 22, 0, 697);
    },
    m: function mount(target, anchor) {
      insert_dev(target, link, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, title_1, anchor);
      append_dev(title_1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, meta0, anchor);
      insert_dev(target, t3, anchor);
      insert_dev(target, meta1, anchor);
      insert_dev(target, t4, anchor);
      insert_dev(target, meta2, anchor);
      insert_dev(target, t5, anchor);
      insert_dev(target, meta3, anchor);
      insert_dev(target, t6, anchor);
      insert_dev(target, meta4, anchor);
      insert_dev(target, t7, anchor);
      insert_dev(target, meta5, anchor);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*title*/
      2) set_data_dev(t1,
      /*title*/
      ctx[1]);

      if (dirty &
      /*title*/
      2) {
        attr_dev(meta0, "content",
        /*title*/
        ctx[1]);
      }

      if (dirty &
      /*url*/
      1 && meta1_content_value !== (meta1_content_value = BASE_URL +
      /*url*/
      ctx[0])) {
        attr_dev(meta1, "content", meta1_content_value);
      }

      if (dirty &
      /*description*/
      4) {
        attr_dev(meta2, "content",
        /*description*/
        ctx[2]);
      }

      if (dirty &
      /*image*/
      8 && meta3_content_value !== (meta3_content_value = BASE_URL +
      /*image*/
      ctx[3])) {
        attr_dev(meta3, "content", meta3_content_value);
      }

      if (dirty &
      /*imageWidth*/
      16) {
        attr_dev(meta4, "content",
        /*imageWidth*/
        ctx[4]);
      }

      if (dirty &
      /*imageHeight*/
      32) {
        attr_dev(meta5, "content",
        /*imageHeight*/
        ctx[5]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(link);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(title_1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(meta0);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(meta1);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(meta2);
      if (detaching) detach_dev(t5);
      if (detaching) detach_dev(meta3);
      if (detaching) detach_dev(t6);
      if (detaching) detach_dev(meta4);
      if (detaching) detach_dev(t7);
      if (detaching) detach_dev(meta5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var $page;

  var _stores = stores$1(),
      page = _stores.page;

  validate_store(page, "page");
  component_subscribe($$self, page, function (value) {
    return $$invalidate(7, $page = value);
  });
  var _$$props$url = $$props.url,
      url = _$$props$url === void 0 ? $page.path : _$$props$url;
  var title = $$props.title;
  var _$$props$description = $$props.description,
      description = _$$props$description === void 0 ? "17-20 September 2020" : _$$props$description;
  var _$$props$image = $$props.image,
      image = _$$props$image === void 0 ? "/img/social/facebook_1200x630.jpg" : _$$props$image;
  var _$$props$imageWidth = $$props.imageWidth,
      imageWidth = _$$props$imageWidth === void 0 ? 1200 : _$$props$imageWidth;
  var _$$props$imageHeight = $$props.imageHeight,
      imageHeight = _$$props$imageHeight === void 0 ? 630 : _$$props$imageHeight;
  var writable_props = ["url", "title", "description", "image", "imageWidth", "imageHeight"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Meta> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Meta", $$slots, []);

  $$self.$set = function ($$props) {
    if ("url" in $$props) $$invalidate(0, url = $$props.url);
    if ("title" in $$props) $$invalidate(1, title = $$props.title);
    if ("description" in $$props) $$invalidate(2, description = $$props.description);
    if ("image" in $$props) $$invalidate(3, image = $$props.image);
    if ("imageWidth" in $$props) $$invalidate(4, imageWidth = $$props.imageWidth);
    if ("imageHeight" in $$props) $$invalidate(5, imageHeight = $$props.imageHeight);
  };

  $$self.$capture_state = function () {
    return {
      stores: stores$1,
      page: page,
      BASE_URL: BASE_URL,
      url: url,
      title: title,
      description: description,
      image: image,
      imageWidth: imageWidth,
      imageHeight: imageHeight,
      $page: $page
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("url" in $$props) $$invalidate(0, url = $$props.url);
    if ("title" in $$props) $$invalidate(1, title = $$props.title);
    if ("description" in $$props) $$invalidate(2, description = $$props.description);
    if ("image" in $$props) $$invalidate(3, image = $$props.image);
    if ("imageWidth" in $$props) $$invalidate(4, imageWidth = $$props.imageWidth);
    if ("imageHeight" in $$props) $$invalidate(5, imageHeight = $$props.imageHeight);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [url, title, description, image, imageWidth, imageHeight, page];
}

var Meta = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Meta, _SvelteComponentDev);

  var _super = _createSuper(Meta);

  function Meta(options) {
    var _this;

    _classCallCheck(this, Meta);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      url: 0,
      title: 1,
      description: 2,
      image: 3,
      imageWidth: 4,
      imageHeight: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Meta",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*title*/
    ctx[1] === undefined && !("title" in props)) {
      console.warn("<Meta> was created without expected prop 'title'");
    }

    return _this;
  }

  _createClass(Meta, [{
    key: "url",
    get: function get() {
      throw new Error("<Meta>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Meta>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "title",
    get: function get() {
      throw new Error("<Meta>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Meta>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "description",
    get: function get() {
      throw new Error("<Meta>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Meta>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "image",
    get: function get() {
      throw new Error("<Meta>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Meta>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "imageWidth",
    get: function get() {
      throw new Error("<Meta>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Meta>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "imageHeight",
    get: function get() {
      throw new Error("<Meta>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Meta>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Meta;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/index.svelte";

function create_fragment$1(ctx) {
  var meta;
  var t0;
  var div8;
  var section;
  var div7;
  var div6;
  var div5;
  var div0;
  var t1;
  var div4;
  var div1;
  var h20;
  var t2;
  var t3;
  var h21;
  var t4;
  var t5;
  var h22;
  var t6;
  var t7;
  var div2;
  var t8;
  var t9;
  var div3;
  var a0;
  var t10;
  var t11;
  var a1;
  var t12;
  var current;
  meta = new Meta({
    props: {
      title: "Chimera Garden - Computational Arts MA/MFA Degree Show Goldsmiths"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(meta.$$.fragment);
      t0 = space();
      div8 = element("div");
      section = element("section");
      div7 = element("div");
      div6 = element("div");
      div5 = element("div");
      div0 = element("div");
      t1 = space();
      div4 = element("div");
      div1 = element("div");
      h20 = element("h2");
      t2 = text("17-20 September 2020");
      t3 = space();
      h21 = element("h2");
      t4 = text("The Computational Arts MA/MFA Degree Show");
      t5 = space();
      h22 = element("h2");
      t6 = text("Goldsmiths, University of London");
      t7 = space();
      div2 = element("div");
      t8 = text("Chimera Garden is a ​celebration of Computational Art now​, a\n              blend of physical and online installation and performance, a\n              four-day festival open to all via free ticket registration at this\n              site soon.");
      t9 = space();
      div3 = element("div");
      a0 = element("a");
      t10 = text("EVENTS SCHEDULE");
      t11 = space();
      a1 = element("a");
      t12 = text("VISIT ON-SITE");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1vrppua\"]", document.head);
      claim_component(meta.$$.fragment, head_nodes);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div8 = claim_element(nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      section = claim_element(div8_nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      div7 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", {});
      var div1_nodes = children(div1);
      h20 = claim_element(div1_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t2 = claim_text(h20_nodes, "17-20 September 2020");
      h20_nodes.forEach(detach_dev);
      t3 = claim_space(div1_nodes);
      h21 = claim_element(div1_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t4 = claim_text(h21_nodes, "The Computational Arts MA/MFA Degree Show");
      h21_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      h22 = claim_element(div1_nodes, "H2", {
        class: true
      });
      var h22_nodes = children(h22);
      t6 = claim_text(h22_nodes, "Goldsmiths, University of London");
      h22_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t7 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t8 = claim_text(div2_nodes, "Chimera Garden is a ​celebration of Computational Art now​, a\n              blend of physical and online installation and performance, a\n              four-day festival open to all via free ticket registration at this\n              site soon.");
      div2_nodes.forEach(detach_dev);
      t9 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {});
      var div3_nodes = children(div3);
      a0 = claim_element(div3_nodes, "A", {
        href: true,
        class: true
      });
      var a0_nodes = children(a0);
      t10 = claim_text(a0_nodes, "EVENTS SCHEDULE");
      a0_nodes.forEach(detach_dev);
      t11 = claim_space(div3_nodes);
      a1 = claim_element(div3_nodes, "A", {
        href: true,
        class: true
      });
      var a1_nodes = children(a1);
      t12 = claim_text(a1_nodes, "VISIT ON-SITE");
      a1_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "column is-6 leftColumn svelte-cagsns");
      add_location(div0, file$1, 119, 10, 2563);
      attr_dev(h20, "class", "showDates svelte-cagsns");
      add_location(h20, file$1, 124, 14, 2690);
      attr_dev(h21, "class", "subtitle svelte-cagsns");
      add_location(h21, file$1, 125, 14, 2752);
      attr_dev(h22, "class", "location svelte-cagsns");
      add_location(h22, file$1, 126, 14, 2834);
      add_location(div1, file$1, 123, 12, 2670);
      attr_dev(div2, "class", "introBodyStrong svelte-cagsns");
      add_location(div2, file$1, 128, 12, 2924);
      attr_dev(a0, "href", "/schedule");
      attr_dev(a0, "class", "rounded-link col-7 bd-col-7");
      add_location(a0, file$1, 135, 14, 3262);
      attr_dev(a1, "href", "/getting-there");
      attr_dev(a1, "class", "rounded-link col-7 bd-col-7");
      add_location(a1, file$1, 136, 14, 3352);
      add_location(div3, file$1, 134, 12, 3242);
      attr_dev(div4, "class", "column is-6");
      add_location(div4, file$1, 122, 10, 2632);
      attr_dev(div5, "class", "columns");
      add_location(div5, file$1, 118, 8, 2531);
      attr_dev(div6, "class", "container");
      add_location(div6, file$1, 117, 6, 2499);
      attr_dev(div7, "class", "hero-body");
      add_location(div7, file$1, 116, 4, 2469);
      attr_dev(section, "class", "hero");
      add_location(section, file$1, 115, 2, 2442);
      attr_dev(div8, "class", "hero-container");
      add_location(div8, file$1, 114, 0, 2411);
    },
    m: function mount(target, anchor) {
      mount_component(meta, document.head, null);
      insert_dev(target, t0, anchor);
      insert_dev(target, div8, anchor);
      append_dev(div8, section);
      append_dev(section, div7);
      append_dev(div7, div6);
      append_dev(div6, div5);
      append_dev(div5, div0);
      append_dev(div5, t1);
      append_dev(div5, div4);
      append_dev(div4, div1);
      append_dev(div1, h20);
      append_dev(h20, t2);
      append_dev(div1, t3);
      append_dev(div1, h21);
      append_dev(h21, t4);
      append_dev(div1, t5);
      append_dev(div1, h22);
      append_dev(h22, t6);
      append_dev(div4, t7);
      append_dev(div4, div2);
      append_dev(div2, t8);
      append_dev(div4, t9);
      append_dev(div4, div3);
      append_dev(div3, a0);
      append_dev(a0, t10);
      append_dev(div3, t11);
      append_dev(div3, a1);
      append_dev(a1, t12);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(meta);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div8);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_ref) {
    var params, artistsRows;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref.params;
            _context.next = 3;
            return this.fetch("artists.tsv").then(function (d) {
              return d.text();
            });

          case 3:
            artistsRows = _context.sent;
            return _context.abrupt("return", {
              artistsRows: artistsRows
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance$1($$self, $$props, $$invalidate) {
  var artistsRows = $$props.artistsRows;
  var writable_props = ["artistsRows"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", $$slots, []);

  $$self.$set = function ($$props) {
    if ("artistsRows" in $$props) $$invalidate(0, artistsRows = $$props.artistsRows);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      tsvParse: tsvParse,
      slugify: slugify,
      Meta: Meta,
      artistsRows: artistsRows,
      artists: artists
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("artistsRows" in $$props) $$invalidate(0, artistsRows = $$props.artistsRows);
    if ("artists" in $$props) artists = $$props.artists;
  };

  var artists;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*artistsRows*/
    1) {
      // console.log(artistsRows);
       artists = tsvParse(artistsRows).sort(function (a, b) {
        return a.name.localeCompare(b.name, "en", {
          sensitivity: "base"
        });
      });
    }
  };

  return [artistsRows];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper$1(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      artistsRows: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*artistsRows*/
    ctx[0] === undefined && !("artistsRows" in props)) {
      console.warn("<Routes> was created without expected prop 'artistsRows'");
    }

    return _this;
  }

  _createClass(Routes, [{
    key: "artistsRows",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Routes;
}(SvelteComponentDev);

export default Routes;
export { preload };
