import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, j as validate_slots, l as space, k as element, t as text, E as query_selector_all, q as detach_dev, n as claim_space, m as claim_element, o as children, p as claim_text, r as attr_dev, u as add_location, w as insert_dev, x as append_dev, A as noop } from './client.43b14e5b.js';
import { a as BASE_HOST } from './constants.8e4190be.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/live.svelte";

function create_fragment(ctx) {
  var t0;
  var section0;
  var div1;
  var div0;
  var h1;
  var t1;
  var t2;
  var section1;
  var div2;
  var iframe0;
  var iframe0_src_value;
  var t3;
  var section2;
  var div3;
  var h2;
  var t4;
  var t5;
  var iframe1;
  var iframe1_src_value;
  var block = {
    c: function create() {
      t0 = space();
      section0 = element("section");
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      t1 = text("Live");
      t2 = space();
      section1 = element("section");
      div2 = element("div");
      iframe0 = element("iframe");
      t3 = space();
      section2 = element("section");
      div3 = element("div");
      h2 = element("h2");
      t4 = text("Chat stream");
      t5 = space();
      iframe1 = element("iframe");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-17ktgzf\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section0 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section0_nodes = children(section0);
      div1 = claim_element(section0_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Live");
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      section0_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      section1 = claim_element(nodes, "SECTION", {});
      var section1_nodes = children(section1);
      div2 = claim_element(section1_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      iframe0 = claim_element(div2_nodes, "IFRAME", {
        id: true,
        title: true,
        src: true,
        frameborder: true,
        allowfullscreen: true,
        scrolling: true,
        height: true,
        width: true,
        class: true
      });
      children(iframe0).forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      section1_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      section2 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section2_nodes = children(section2);
      div3 = claim_element(section2_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      h2 = claim_element(div3_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t4 = claim_text(h2_nodes, "Chat stream");
      h2_nodes.forEach(detach_dev);
      t5 = claim_space(div3_nodes);
      iframe1 = claim_element(div3_nodes, "IFRAME", {
        id: true,
        title: true,
        src: true,
        height: true,
        width: true,
        class: true
      });
      children(iframe1).forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      section2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Live";
      attr_dev(h1, "class", "title");
      add_location(h1, file, 21, 6, 316);
      attr_dev(div0, "class", "container is-widescreen");
      add_location(div0, file, 20, 4, 272);
      attr_dev(div1, "class", "hero-body");
      add_location(div1, file, 19, 2, 244);
      attr_dev(section0, "class", "hero is-primary");
      add_location(section0, file, 18, 0, 208);
      attr_dev(iframe0, "id", "twitch-video");
      attr_dev(iframe0, "title", "Twitch video stream");
      if (iframe0.src !== (iframe0_src_value = "https://player.twitch.tv/?channel=goldsmiths_comparts&parent=" + BASE_HOST)) attr_dev(iframe0, "src", iframe0_src_value);
      attr_dev(iframe0, "frameborder", "0");
      iframe0.allowFullscreen = "true";
      attr_dev(iframe0, "scrolling", "no");
      attr_dev(iframe0, "height", "500");
      attr_dev(iframe0, "width", "900");
      attr_dev(iframe0, "class", "svelte-wjjmqy");
      add_location(iframe0, file, 28, 4, 416);
      attr_dev(div2, "class", "container");
      add_location(div2, file, 27, 2, 388);
      add_location(section1, file, 26, 0, 376);
      attr_dev(h2, "class", "subtitle");
      add_location(h2, file, 42, 4, 757);
      attr_dev(iframe1, "id", "twitch-chat");
      attr_dev(iframe1, "title", "Twitch chat");
      if (iframe1.src !== (iframe1_src_value = "https://www.twitch.tv/embed/goldsmiths_comparts/chat?parent=" + BASE_HOST)) attr_dev(iframe1, "src", iframe1_src_value);
      attr_dev(iframe1, "height", "500");
      attr_dev(iframe1, "width", "900");
      attr_dev(iframe1, "class", "svelte-wjjmqy");
      add_location(iframe1, file, 44, 4, 800);
      attr_dev(div3, "class", "container");
      add_location(div3, file, 41, 2, 729);
      attr_dev(section2, "class", "chat svelte-wjjmqy");
      add_location(section2, file, 40, 0, 704);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section0, anchor);
      append_dev(section0, div1);
      append_dev(div1, div0);
      append_dev(div0, h1);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, section1, anchor);
      append_dev(section1, div2);
      append_dev(div2, iframe0);
      insert_dev(target, t3, anchor);
      insert_dev(target, section2, anchor);
      append_dev(section2, div3);
      append_dev(div3, h2);
      append_dev(h2, t4);
      append_dev(div3, t5);
      append_dev(div3, iframe1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section0);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(section1);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(section2);
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
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Live> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Live", $$slots, []);

  $$self.$capture_state = function () {
    return {
      BASE_HOST: BASE_HOST
    };
  };

  return [];
}

var Live = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Live, _SvelteComponentDev);

  var _super = _createSuper(Live);

  function Live(options) {
    var _this;

    _classCallCheck(this, Live);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Live",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Live;
}(SvelteComponentDev);

export default Live;
