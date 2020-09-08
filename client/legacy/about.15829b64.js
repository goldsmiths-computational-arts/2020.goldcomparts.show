import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, j as validate_slots, l as space, k as element, t as text, E as query_selector_all, q as detach_dev, n as claim_space, m as claim_element, o as children, p as claim_text, r as attr_dev, u as add_location, w as insert_dev, x as append_dev, A as noop } from './client.5e9a2189.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/about.svelte";

function create_fragment(ctx) {
  var t0;
  var section;
  var div3;
  var div2;
  var div0;
  var h2;
  var t1;
  var t2;
  var div1;
  var t3;
  var t4;
  var p;
  var t5;
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t1 = text("Positioning Statement");
      t2 = space();
      div1 = element("div");
      t3 = text("The exhibition presents a collection of assemblages we’ve\n\t      cultivated under the extraordinary and global conditions of these\n\t      troubled months. Fantastic fusions of technology, ideas, humans\n\t      and other creatures, these works have emerged, flourishing, from a\n\t      twisted reality of seismic chaos and confusion.");
      t4 = space();
      p = element("p");
      t5 = text("The Goldsmiths MA/MFA in Computational Art invites you to step into\n        Chimera Garden and walk among the collection of assemblages we’ve\n        cultivated under the extraordinary conditions of these troubled months.\n        Fantastic fusions of technology, ideas, humans and other creatures,\n        these works have emerged, flourishing, from a twisted reality of seismic\n        chaos and confusion. In our current place of epochal chaos and\n        transformation, the foundations on which we’ve built the seemingly\n        monolithic and unquestionable have been disturbed. We are not on solid\n        ground, but we never really were. Exposed fault lines have thrown\n        societal inequalities and injustices into brutal relief, emitting new\n        framings for old questions. At the same time, as individuals we’ve been\n        distanced, physically and socially, into unique states of alienation.\n        It’s a liminal space, where computation now mediates our lives in ways\n        unseen just a few months ago. So as a cohort, we’re uniquely situated to\n        re-imagine, to re-world - making new connections to each other and the\n        world around us, building new possibilities of being.");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1myew8g\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      div3 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Positioning Statement");
      h2_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t3 = claim_text(div1_nodes, "The exhibition presents a collection of assemblages we’ve\n\t      cultivated under the extraordinary and global conditions of these\n\t      troubled months. Fantastic fusions of technology, ideas, humans\n\t      and other creatures, these works have emerged, flourishing, from a\n\t      twisted reality of seismic chaos and confusion.");
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div2_nodes);
      p = claim_element(div2_nodes, "P", {});
      var p_nodes = children(p);
      t5 = claim_text(p_nodes, "The Goldsmiths MA/MFA in Computational Art invites you to step into\n        Chimera Garden and walk among the collection of assemblages we’ve\n        cultivated under the extraordinary conditions of these troubled months.\n        Fantastic fusions of technology, ideas, humans and other creatures,\n        these works have emerged, flourishing, from a twisted reality of seismic\n        chaos and confusion. In our current place of epochal chaos and\n        transformation, the foundations on which we’ve built the seemingly\n        monolithic and unquestionable have been disturbed. We are not on solid\n        ground, but we never really were. Exposed fault lines have thrown\n        societal inequalities and injustices into brutal relief, emitting new\n        framings for old questions. At the same time, as individuals we’ve been\n        distanced, physically and socially, into unique states of alienation.\n        It’s a liminal space, where computation now mediates our lives in ways\n        unseen just a few months ago. So as a cohort, we’re uniquely situated to\n        re-imagine, to re-world - making new connections to each other and the\n        world around us, building new possibilities of being.");
      p_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "About";
      attr_dev(h2, "class", "subtitle svelte-1p8ghtn");
      add_location(h2, file, 75, 8, 1462);
      add_location(div0, file, 73, 5, 1383);
      attr_dev(div1, "class", "introBody svelte-1p8ghtn");
      add_location(div1, file, 78, 5, 1604);
      add_location(p, file, 85, 6, 1984);
      attr_dev(div2, "class", "content svelte-1p8ghtn");
      add_location(div2, file, 72, 4, 1356);
      attr_dev(div3, "class", "container");
      add_location(div3, file, 71, 2, 1328);
      attr_dev(section, "class", "section");
      add_location(section, file, 69, 0, 1299);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, div3);
      append_dev(div3, div2);
      append_dev(div2, div0);
      append_dev(div0, h2);
      append_dev(h2, t1);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, t3);
      append_dev(div2, t4);
      append_dev(div2, p);
      append_dev(p, t5);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
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

function instance($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("About", $$slots, []);
  return [];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;
