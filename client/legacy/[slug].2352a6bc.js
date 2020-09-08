import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, M as globals, j as validate_slots, k as element, l as space, t as text, m as claim_element, o as children, n as claim_space, p as claim_text, q as detach_dev, T as HtmlTag, r as attr_dev, u as add_location, w as insert_dev, x as append_dev, O as listen_dev, z as set_data_dev, P as empty, y as _slicedToArray, A as noop, B as _asyncToGenerator, C as regenerator, D as create_component, E as query_selector_all, F as claim_component, K as set_style, G as mount_component, H as transition_in, I as transition_out, J as destroy_component } from './client.43b14e5b.js';
import { t as trackEvent, s as slugify } from './helpers.38afc14c.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Error_1 = globals.Error;
var file = "src/components/SocialLink.svelte"; // (60:0) {#if value}

function create_if_block(ctx) {
  var div;
  var html_tag;
  var t0;
  var a;
  var t1;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      t0 = space();
      a = element("a");
      t1 = text(
      /*text*/
      ctx[4]);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      t0 = claim_space(div_nodes);
      a = claim_element(div_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes,
      /*text*/
      ctx[4]);
      a_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      html_tag = new HtmlTag(t0);
      attr_dev(a, "href",
      /*url*/
      ctx[3]);
      attr_dev(a, "target", "_blank");
      attr_dev(a, "class", "svelte-e3veoz");
      add_location(a, file, 62, 4, 1720);
      attr_dev(div, "class", "social-profile");
      add_location(div, file, 60, 2, 1670);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      html_tag.m(
      /*icon*/
      ctx[2], div);
      append_dev(div, t0);
      append_dev(div, a);
      append_dev(a, t1);

      if (!mounted) {
        dispose = listen_dev(a, "click",
        /*click_handler*/
        ctx[5], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*icon*/
      4) html_tag.p(
      /*icon*/
      ctx[2]);
      if (dirty &
      /*text*/
      16) set_data_dev(t1,
      /*text*/
      ctx[4]);

      if (dirty &
      /*url*/
      8) {
        attr_dev(a, "href",
        /*url*/
        ctx[3]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(60:0) {#if value}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var if_block_anchor;
  var if_block =
  /*value*/
  ctx[1] && create_if_block(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*value*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
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
  var kind = $$props.kind;
  var value = $$props.value;
  var icon;
  var url;
  var text;

  switch (kind) {
    case "website":
      // icon = `<span class="icon"><i class="fas fa-external-link-alt"></i></span>`;
      icon = "<span class=\"icon\"><i class=\"fas fa-external-link-square-alt\"></i></span>";
      url = value;
      text = value;
      break;

    case "instagram":
      icon = "<span class=\"icon\"><i class=\"fab fa-instagram\"></i></span>";
      url = "https://instagram.com/".concat(value);
      text = "@".concat(value);
      break;

    case "twitter":
      icon = "<span class=\"icon\"><i class=\"fab fa-twitter\"></i></span>";
      url = "https://twitter.com/".concat(value);
      text = "@".concat(value);
      break;

    case "facebook":
      icon = "<span class=\"icon\"><i class=\"fab fa-facebook\"></i></span>";
      url = "https://www.facebook.com/".concat(value);
      text = url;
      break;

    case "twitch":
      icon = "<span class=\"icon\"><i class=\"fab fa-twitch\"></i></span>";
      url = "https://www.twitch.com/".concat(value);
      text = url;
      break;

    case "youtube":
      icon = "<span class=\"icon\"><i class=\"fab fa-youtube\"></i></span>";
      url = "https://www.youtube.com/channel/".concat(value);
      text = "YouTube Channel";
      break;

    case "vimeo":
      icon = "<span class=\"icon\"><i class=\"fab fa-vimeo\"></i></span>";
      url = "https://www.vimeo.com/".concat(value);
      text = url;
      break;

    default:
      throw new Error("Unknown social kind ".concat(kind));
  } // YouTube doesn't seem to have nice urls for channels


  var writable_props = ["kind", "value"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<SocialLink> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("SocialLink", $$slots, []);

  var click_handler = function click_handler() {
    return trackEvent("social", "click", "".concat(kind, ".").concat(value));
  };

  $$self.$set = function ($$props) {
    if ("kind" in $$props) $$invalidate(0, kind = $$props.kind);
    if ("value" in $$props) $$invalidate(1, value = $$props.value);
  };

  $$self.$capture_state = function () {
    return {
      trackEvent: trackEvent,
      kind: kind,
      value: value,
      icon: icon,
      url: url,
      text: text
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("kind" in $$props) $$invalidate(0, kind = $$props.kind);
    if ("value" in $$props) $$invalidate(1, value = $$props.value);
    if ("icon" in $$props) $$invalidate(2, icon = $$props.icon);
    if ("url" in $$props) $$invalidate(3, url = $$props.url);
    if ("text" in $$props) $$invalidate(4, text = $$props.text);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [kind, value, icon, url, text, click_handler];
}

var SocialLink = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(SocialLink, _SvelteComponentDev);

  var _super = _createSuper(SocialLink);

  function SocialLink(options) {
    var _this;

    _classCallCheck(this, SocialLink);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      kind: 0,
      value: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "SocialLink",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*kind*/
    ctx[0] === undefined && !("kind" in props)) {
      console.warn("<SocialLink> was created without expected prop 'kind'");
    }

    if (
    /*value*/
    ctx[1] === undefined && !("value" in props)) {
      console.warn("<SocialLink> was created without expected prop 'value'");
    }

    return _this;
  }

  _createClass(SocialLink, [{
    key: "kind",
    get: function get() {
      throw new Error_1("<SocialLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<SocialLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error_1("<SocialLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<SocialLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return SocialLink;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/artists/[slug].svelte"; // (108:12) {#if artist.otherName}

function create_if_block_3(ctx) {
  var t0;
  var t1_value =
  /*artist*/
  ctx[0].otherName + "";
  var t1;
  var t2;
  var block = {
    c: function create() {
      t0 = text("(");
      t1 = text(t1_value);
      t2 = text(")");
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "(");
      t1 = claim_text(nodes, t1_value);
      t2 = claim_text(nodes, ")");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, t2, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*artist*/
      1 && t1_value !== (t1_value =
      /*artist*/
      ctx[0].otherName + "")) set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(108:12) {#if artist.otherName}",
    ctx: ctx
  });
  return block;
} // (114:12) {:else}


function create_else_block_1(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text("No biography provided");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "No biography provided");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$1, 114, 14, 2400);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block_1.name,
    type: "else",
    source: "(114:12) {:else}",
    ctx: ctx
  });
  return block;
} // (112:12) {#if artist.bioHTML}


function create_if_block_2(ctx) {
  var html_tag;
  var raw_value =
  /*artist*/
  ctx[0].bioHTML + "";
  var html_anchor;
  var block = {
    c: function create() {
      html_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      html_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      html_tag = new HtmlTag(html_anchor);
    },
    m: function mount(target, anchor) {
      html_tag.m(raw_value, target, anchor);
      insert_dev(target, html_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*artist*/
      1 && raw_value !== (raw_value =
      /*artist*/
      ctx[0].bioHTML + "")) html_tag.p(raw_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(html_anchor);
      if (detaching) html_tag.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(112:12) {#if artist.bioHTML}",
    ctx: ctx
  });
  return block;
} // (151:14) {#if artist.otherName}


function create_if_block_1(ctx) {
  var t0;
  var t1_value =
  /*artist*/
  ctx[0].otherName + "";
  var t1;
  var t2;
  var block = {
    c: function create() {
      t0 = text("(");
      t1 = text(t1_value);
      t2 = text(")");
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "(");
      t1 = claim_text(nodes, t1_value);
      t2 = claim_text(nodes, ")");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, t2, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*artist*/
      1 && t1_value !== (t1_value =
      /*artist*/
      ctx[0].otherName + "")) set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(151:14) {#if artist.otherName}",
    ctx: ctx
  });
  return block;
} // (157:14) {:else}


function create_else_block(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text("No biography provided");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "No biography provided");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$1, 157, 16, 3863);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(157:14) {:else}",
    ctx: ctx
  });
  return block;
} // (155:14) {#if artist.bioHTML}


function create_if_block$1(ctx) {
  var html_tag;
  var raw_value =
  /*artist*/
  ctx[0].bioHTML + "";
  var html_anchor;
  var block = {
    c: function create() {
      html_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      html_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      html_tag = new HtmlTag(html_anchor);
    },
    m: function mount(target, anchor) {
      html_tag.m(raw_value, target, anchor);
      insert_dev(target, html_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*artist*/
      1 && raw_value !== (raw_value =
      /*artist*/
      ctx[0].bioHTML + "")) html_tag.p(raw_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(html_anchor);
      if (detaching) html_tag.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(155:14) {#if artist.bioHTML}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var title_value;
  var t0;
  var section;
  var div10;
  var div8;
  var div7;
  var div4;
  var div0;
  var t1;
  var div2;
  var h20;
  var t2_value =
  /*artist*/
  ctx[0].name + "";
  var t2;
  var t3;
  var t4;
  var div1;
  var t5;
  var div3;
  var h3;
  var t6;
  var t7;
  var sociallink0;
  var t8;
  var sociallink1;
  var t9;
  var sociallink2;
  var t10;
  var sociallink3;
  var t11;
  var sociallink4;
  var t12;
  var sociallink5;
  var t13;
  var sociallink6;
  var t14;
  var div6;
  var h21;
  var t15_value =
  /*artist*/
  ctx[0].name + "";
  var t15;
  var t16;
  var t17;
  var div5;
  var t18;
  var div9;
  var current;
  document.title = title_value = "" + (
  /*artist*/
  ctx[0].name + " - Final Show - 2020");
  var if_block0 =
  /*artist*/
  ctx[0].otherName && create_if_block_3(ctx);

  function select_block_type(ctx, dirty) {
    if (
    /*artist*/
    ctx[0].bioHTML) return create_if_block_2;
    return create_else_block_1;
  }

  var current_block_type = select_block_type(ctx);
  var if_block1 = current_block_type(ctx);
  sociallink0 = new SocialLink({
    props: {
      kind: "website",
      value:
      /*artist*/
      ctx[0].website
    },
    $$inline: true
  });
  sociallink1 = new SocialLink({
    props: {
      kind: "instagram",
      value:
      /*artist*/
      ctx[0].instagram
    },
    $$inline: true
  });
  sociallink2 = new SocialLink({
    props: {
      kind: "twitter",
      value:
      /*artist*/
      ctx[0].twitter
    },
    $$inline: true
  });
  sociallink3 = new SocialLink({
    props: {
      kind: "facebook",
      value:
      /*artist*/
      ctx[0].facebook
    },
    $$inline: true
  });
  sociallink4 = new SocialLink({
    props: {
      kind: "vimeo",
      value:
      /*artist*/
      ctx[0].vimeo
    },
    $$inline: true
  });
  sociallink5 = new SocialLink({
    props: {
      kind: "youtube",
      value:
      /*artist*/
      ctx[0].youtube
    },
    $$inline: true
  });
  sociallink6 = new SocialLink({
    props: {
      kind: "twitch",
      value:
      /*artist*/
      ctx[0].twitch
    },
    $$inline: true
  });
  var if_block2 =
  /*artist*/
  ctx[0].otherName && create_if_block_1(ctx);

  function select_block_type_1(ctx, dirty) {
    if (
    /*artist*/
    ctx[0].bioHTML) return create_if_block$1;
    return create_else_block;
  }

  var current_block_type_1 = select_block_type_1(ctx);
  var if_block3 = current_block_type_1(ctx);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      div10 = element("div");
      div8 = element("div");
      div7 = element("div");
      div4 = element("div");
      div0 = element("div");
      t1 = space();
      div2 = element("div");
      h20 = element("h2");
      t2 = text(t2_value);
      t3 = space();
      if (if_block0) if_block0.c();
      t4 = space();
      div1 = element("div");
      if_block1.c();
      t5 = space();
      div3 = element("div");
      h3 = element("h3");
      t6 = text("Social links");
      t7 = space();
      create_component(sociallink0.$$.fragment);
      t8 = space();
      create_component(sociallink1.$$.fragment);
      t9 = space();
      create_component(sociallink2.$$.fragment);
      t10 = space();
      create_component(sociallink3.$$.fragment);
      t11 = space();
      create_component(sociallink4.$$.fragment);
      t12 = space();
      create_component(sociallink5.$$.fragment);
      t13 = space();
      create_component(sociallink6.$$.fragment);
      t14 = space();
      div6 = element("div");
      h21 = element("h2");
      t15 = text(t15_value);
      t16 = space();
      if (if_block2) if_block2.c();
      t17 = space();
      div5 = element("div");
      if_block3.c();
      t18 = space();
      div9 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-ne3spu\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      div10 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      div8 = claim_element(div10_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      div4 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {
        class: true,
        style: true
      });
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h20 = claim_element(div2_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t2 = claim_text(h20_nodes, t2_value);
      t3 = claim_space(h20_nodes);
      if (if_block0) if_block0.l(h20_nodes);
      h20_nodes.forEach(detach_dev);
      t4 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      if_block1.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      h3 = claim_element(div3_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t6 = claim_text(h3_nodes, "Social links");
      h3_nodes.forEach(detach_dev);
      t7 = claim_space(div3_nodes);
      claim_component(sociallink0.$$.fragment, div3_nodes);
      t8 = claim_space(div3_nodes);
      claim_component(sociallink1.$$.fragment, div3_nodes);
      t9 = claim_space(div3_nodes);
      claim_component(sociallink2.$$.fragment, div3_nodes);
      t10 = claim_space(div3_nodes);
      claim_component(sociallink3.$$.fragment, div3_nodes);
      t11 = claim_space(div3_nodes);
      claim_component(sociallink4.$$.fragment, div3_nodes);
      t12 = claim_space(div3_nodes);
      claim_component(sociallink5.$$.fragment, div3_nodes);
      t13 = claim_space(div3_nodes);
      claim_component(sociallink6.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t14 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      h21 = claim_element(div6_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t15 = claim_text(h21_nodes, t15_value);
      t16 = claim_space(h21_nodes);
      if (if_block2) if_block2.l(h21_nodes);
      h21_nodes.forEach(detach_dev);
      t17 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      if_block3.l(div5_nodes);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t18 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", {
        style: true
      });
      children(div9).forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "bio-photo svelte-8iplde");
      set_style(div0, "background-image", "url(img/bios/" +
      /*artist*/
      ctx[0].username + ".jpeg)");
      add_location(div0, file$1, 97, 8, 1797);
      attr_dev(h20, "class", "artist-name svelte-8iplde");
      add_location(h20, file$1, 105, 10, 2133);
      attr_dev(div1, "class", "artist-bio");
      add_location(div1, file$1, 110, 10, 2271);
      attr_dev(div2, "class", "is-hidden-desktop is-hidden-tablet");
      add_location(div2, file$1, 104, 8, 2074);
      attr_dev(h3, "class", "svelte-8iplde");
      add_location(h3, file$1, 120, 10, 2525);
      attr_dev(div3, "class", "social-links svelte-8iplde");
      add_location(div3, file$1, 119, 8, 2488);
      attr_dev(div4, "class", "column");
      add_location(div4, file$1, 95, 6, 1767);
      attr_dev(h21, "class", "artist-name svelte-8iplde");
      add_location(h21, file$1, 148, 12, 3580);
      attr_dev(div5, "class", "artist-bio");
      add_location(div5, file$1, 153, 12, 3726);
      attr_dev(div6, "class", "column is-hidden-mobile");
      add_location(div6, file$1, 147, 6, 3530);
      attr_dev(div7, "class", "columns");
      add_location(div7, file$1, 94, 6, 1739);
      attr_dev(div8, "class", "content");
      add_location(div8, file$1, 93, 4, 1711);
      set_style(div9, "padding-top", "100px");
      add_location(div9, file$1, 163, 2, 3966);
      attr_dev(div10, "class", "container is-widescreen");
      add_location(div10, file$1, 91, 2, 1668);
      attr_dev(section, "class", "section bg-col-7");
      add_location(section, file$1, 90, 0, 1631);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, div10);
      append_dev(div10, div8);
      append_dev(div8, div7);
      append_dev(div7, div4);
      append_dev(div4, div0);
      append_dev(div4, t1);
      append_dev(div4, div2);
      append_dev(div2, h20);
      append_dev(h20, t2);
      append_dev(h20, t3);
      if (if_block0) if_block0.m(h20, null);
      append_dev(div2, t4);
      append_dev(div2, div1);
      if_block1.m(div1, null);
      append_dev(div4, t5);
      append_dev(div4, div3);
      append_dev(div3, h3);
      append_dev(h3, t6);
      append_dev(div3, t7);
      mount_component(sociallink0, div3, null);
      append_dev(div3, t8);
      mount_component(sociallink1, div3, null);
      append_dev(div3, t9);
      mount_component(sociallink2, div3, null);
      append_dev(div3, t10);
      mount_component(sociallink3, div3, null);
      append_dev(div3, t11);
      mount_component(sociallink4, div3, null);
      append_dev(div3, t12);
      mount_component(sociallink5, div3, null);
      append_dev(div3, t13);
      mount_component(sociallink6, div3, null);
      append_dev(div7, t14);
      append_dev(div7, div6);
      append_dev(div6, h21);
      append_dev(h21, t15);
      append_dev(h21, t16);
      if (if_block2) if_block2.m(h21, null);
      append_dev(div6, t17);
      append_dev(div6, div5);
      if_block3.m(div5, null);
      append_dev(div10, t18);
      append_dev(div10, div9);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*artist*/
      1) && title_value !== (title_value = "" + (
      /*artist*/
      ctx[0].name + " - Final Show - 2020"))) {
        document.title = title_value;
      }

      if (!current || dirty &
      /*artist*/
      1) {
        set_style(div0, "background-image", "url(img/bios/" +
        /*artist*/
        ctx[0].username + ".jpeg)");
      }

      if ((!current || dirty &
      /*artist*/
      1) && t2_value !== (t2_value =
      /*artist*/
      ctx[0].name + "")) set_data_dev(t2, t2_value);

      if (
      /*artist*/
      ctx[0].otherName) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_3(ctx);
          if_block0.c();
          if_block0.m(h20, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block1) {
        if_block1.p(ctx, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type(ctx);

        if (if_block1) {
          if_block1.c();
          if_block1.m(div1, null);
        }
      }

      var sociallink0_changes = {};
      if (dirty &
      /*artist*/
      1) sociallink0_changes.value =
      /*artist*/
      ctx[0].website;
      sociallink0.$set(sociallink0_changes);
      var sociallink1_changes = {};
      if (dirty &
      /*artist*/
      1) sociallink1_changes.value =
      /*artist*/
      ctx[0].instagram;
      sociallink1.$set(sociallink1_changes);
      var sociallink2_changes = {};
      if (dirty &
      /*artist*/
      1) sociallink2_changes.value =
      /*artist*/
      ctx[0].twitter;
      sociallink2.$set(sociallink2_changes);
      var sociallink3_changes = {};
      if (dirty &
      /*artist*/
      1) sociallink3_changes.value =
      /*artist*/
      ctx[0].facebook;
      sociallink3.$set(sociallink3_changes);
      var sociallink4_changes = {};
      if (dirty &
      /*artist*/
      1) sociallink4_changes.value =
      /*artist*/
      ctx[0].vimeo;
      sociallink4.$set(sociallink4_changes);
      var sociallink5_changes = {};
      if (dirty &
      /*artist*/
      1) sociallink5_changes.value =
      /*artist*/
      ctx[0].youtube;
      sociallink5.$set(sociallink5_changes);
      var sociallink6_changes = {};
      if (dirty &
      /*artist*/
      1) sociallink6_changes.value =
      /*artist*/
      ctx[0].twitch;
      sociallink6.$set(sociallink6_changes);
      if ((!current || dirty &
      /*artist*/
      1) && t15_value !== (t15_value =
      /*artist*/
      ctx[0].name + "")) set_data_dev(t15, t15_value);

      if (
      /*artist*/
      ctx[0].otherName) {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block_1(ctx);
          if_block2.c();
          if_block2.m(h21, null);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }

      if (current_block_type_1 === (current_block_type_1 = select_block_type_1(ctx)) && if_block3) {
        if_block3.p(ctx, dirty);
      } else {
        if_block3.d(1);
        if_block3 = current_block_type_1(ctx);

        if (if_block3) {
          if_block3.c();
          if_block3.m(div5, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(sociallink0.$$.fragment, local);
      transition_in(sociallink1.$$.fragment, local);
      transition_in(sociallink2.$$.fragment, local);
      transition_in(sociallink3.$$.fragment, local);
      transition_in(sociallink4.$$.fragment, local);
      transition_in(sociallink5.$$.fragment, local);
      transition_in(sociallink6.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(sociallink0.$$.fragment, local);
      transition_out(sociallink1.$$.fragment, local);
      transition_out(sociallink2.$$.fragment, local);
      transition_out(sociallink3.$$.fragment, local);
      transition_out(sociallink4.$$.fragment, local);
      transition_out(sociallink5.$$.fragment, local);
      transition_out(sociallink6.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      if (if_block0) if_block0.d();
      if_block1.d();
      destroy_component(sociallink0);
      destroy_component(sociallink1);
      destroy_component(sociallink2);
      destroy_component(sociallink3);
      destroy_component(sociallink4);
      destroy_component(sociallink5);
      destroy_component(sociallink6);
      if (if_block2) if_block2.d();
      if_block3.d();
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
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_ref3) {
    var params, res, artist;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params;
            _context.next = 3;
            return this.fetch("artists/".concat(params.slug, ".json"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            artist = _context.sent;
            return _context.abrupt("return", {
              artist: artist
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance$1($$self, $$props, $$invalidate) {
  var artist = $$props.artist;
  var writable_props = ["artist"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bslugu5D> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bslugu5D", $$slots, []);

  $$self.$set = function ($$props) {
    if ("artist" in $$props) $$invalidate(0, artist = $$props.artist);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      slugify: slugify,
      SocialLink: SocialLink,
      artist: artist
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("artist" in $$props) $$invalidate(0, artist = $$props.artist);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [artist];
}

var U5Bslugu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bslugu5D, _SvelteComponentDev);

  var _super = _createSuper$1(U5Bslugu5D);

  function U5Bslugu5D(options) {
    var _this;

    _classCallCheck(this, U5Bslugu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      artist: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bslugu5D",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*artist*/
    ctx[0] === undefined && !("artist" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'artist'");
    }

    return _this;
  }

  _createClass(U5Bslugu5D, [{
    key: "artist",
    get: function get() {
      throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bslugu5D;
}(SvelteComponentDev);

export default U5Bslugu5D;
export { preload };
