import { B as _asyncToGenerator, C as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, N as validate_each_argument, j as validate_slots, k as element, l as space, t as text, m as claim_element, o as children, q as detach_dev, n as claim_space, p as claim_text, r as attr_dev, K as set_style, u as add_location, w as insert_dev, x as append_dev, z as set_data_dev, E as query_selector_all, y as _slicedToArray, A as noop, Q as destroy_each } from './client.43b14e5b.js';
import { t as tsvParse } from './tsv.c906c42a.js';
import { s as slugify } from './helpers.38afc14c.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/artists/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
} // (81:8) {#each artists as artist}


function create_each_block(ctx) {
  var div1;
  var a;
  var div0;
  var t0;
  var h6;
  var t1_value =
  /*artist*/
  ctx[2].name + "";
  var t1;
  var t2;
  var t3_value = (
  /*artist*/
  ctx[2].otherName ? "  (".concat(
  /*artist*/
  ctx[2].otherName, ")") : "") + "";
  var t3;
  var a_href_value;
  var t4;
  var block = {
    c: function create() {
      div1 = element("div");
      a = element("a");
      div0 = element("div");
      t0 = space();
      h6 = element("h6");
      t1 = text(t1_value);
      t2 = space();
      t3 = text(t3_value);
      t4 = space();
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      a = claim_element(div1_nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      div0 = claim_element(a_nodes, "DIV", {
        class: true,
        style: true
      });
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(a_nodes);
      h6 = claim_element(a_nodes, "H6", {
        class: true
      });
      var h6_nodes = children(h6);
      t1 = claim_text(h6_nodes, t1_value);
      t2 = claim_space(h6_nodes);
      t3 = claim_text(h6_nodes, t3_value);
      h6_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      t4 = claim_space(div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "bio-photo svelte-ex8ylq");
      set_style(div0, "background-image", "url(img/bios/" +
      /*artist*/
      ctx[2].username + ".jpeg)");
      add_location(div0, file, 83, 14, 1750);
      attr_dev(h6, "class", "svelte-ex8ylq");
      add_location(h6, file, 87, 14, 1903);
      attr_dev(a, "href", a_href_value = "artists/" + slugify(
      /*artist*/
      ctx[2].name));
      add_location(a, file, 82, 12, 1694);
      attr_dev(div1, "class", "bio-box svelte-ex8ylq");
      add_location(div1, file, 81, 10, 1660);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, a);
      append_dev(a, div0);
      append_dev(a, t0);
      append_dev(a, h6);
      append_dev(h6, t1);
      append_dev(h6, t2);
      append_dev(h6, t3);
      append_dev(div1, t4);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*artists*/
      1) {
        set_style(div0, "background-image", "url(img/bios/" +
        /*artist*/
        ctx[2].username + ".jpeg)");
      }

      if (dirty &
      /*artists*/
      1 && t1_value !== (t1_value =
      /*artist*/
      ctx[2].name + "")) set_data_dev(t1, t1_value);
      if (dirty &
      /*artists*/
      1 && t3_value !== (t3_value = (
      /*artist*/
      ctx[2].otherName ? "  (".concat(
      /*artist*/
      ctx[2].otherName, ")") : "") + "")) set_data_dev(t3, t3_value);

      if (dirty &
      /*artists*/
      1 && a_href_value !== (a_href_value = "artists/" + slugify(
      /*artist*/
      ctx[2].name))) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(81:8) {#each artists as artist}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t;
  var section;
  var div2;
  var div1;
  var div0;
  var each_value =
  /*artists*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      t = space();
      section = element("section");
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1xemdmz\"]", document.head);
      head_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      div2 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div0_nodes);
      }

      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Final Show - 2020";
      attr_dev(div0, "class", "bio-boxes svelte-ex8ylq");
      add_location(div0, file, 78, 6, 1591);
      attr_dev(div1, "class", "content");
      add_location(div1, file, 76, 4, 1562);
      attr_dev(div2, "class", "container");
      add_location(div2, file, 75, 2, 1534);
      attr_dev(section, "class", "section bg-col-7");
      add_location(section, file, 74, 0, 1497);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, div2);
      append_dev(div2, div1);
      append_dev(div1, div0);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div0, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*slugify, artists*/
      1) {
        each_value =
        /*artists*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(div0, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(section);
      destroy_each(each_blocks, detaching);
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

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_ref3) {
    var params, artistsRows;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params;
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

function instance($$self, $$props, $$invalidate) {
  var artistsRows = $$props.artistsRows;
  var writable_props = ["artistsRows"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Artists> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Artists", $$slots, []);

  $$self.$set = function ($$props) {
    if ("artistsRows" in $$props) $$invalidate(1, artistsRows = $$props.artistsRows);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      tsvParse: tsvParse,
      slugify: slugify,
      artistsRows: artistsRows,
      artists: artists
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("artistsRows" in $$props) $$invalidate(1, artistsRows = $$props.artistsRows);
    if ("artists" in $$props) $$invalidate(0, artists = $$props.artists);
  };

  var artists;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*artistsRows*/
    2) {
      // Make a list of unique artist names
       $$invalidate(0, artists = tsvParse(artistsRows).sort(function (a, b) {
        return a.name.localeCompare(b.name, "en", {
          sensitivity: "base"
        });
      }));
    }
  };

  return [artists, artistsRows];
}

var Artists = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Artists, _SvelteComponentDev);

  var _super = _createSuper(Artists);

  function Artists(options) {
    var _this;

    _classCallCheck(this, Artists);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      artistsRows: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Artists",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*artistsRows*/
    ctx[1] === undefined && !("artistsRows" in props)) {
      console.warn("<Artists> was created without expected prop 'artistsRows'");
    }

    return _this;
  }

  _createClass(Artists, [{
    key: "artistsRows",
    get: function get() {
      throw new Error("<Artists>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Artists>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Artists;
}(SvelteComponentDev);

export default Artists;
export { preload };
