import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, j as validate_slots, l as space, k as element, t as text, E as query_selector_all, q as detach_dev, n as claim_space, m as claim_element, o as children, p as claim_text, r as attr_dev, K as set_style, u as add_location, w as insert_dev, x as append_dev, A as noop } from './client.43b14e5b.js';
import { R as REGISTER_URL } from './constants.8e4190be.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/getting-there.svelte";

function create_fragment(ctx) {
  var t0;
  var div0;
  var iframe;
  var iframe_src_value;
  var t1;
  var section4;
  var div18;
  var div17;
  var section0;
  var div5;
  var div4;
  var div1;
  var h20;
  var t2;
  var t3;
  var br0;
  var t4;
  var br1;
  var t5;
  var br2;
  var t6;
  var br3;
  var t7;
  var br4;
  var t8;
  var div3;
  var h21;
  var t9;
  var t10;
  var table;
  var tr0;
  var td0;
  var t11;
  var t12;
  var td1;
  var t13;
  var t14;
  var tr1;
  var td2;
  var t15;
  var t16;
  var td3;
  var t17;
  var t18;
  var tr2;
  var td4;
  var t19;
  var t20;
  var td5;
  var t21;
  var t22;
  var p0;
  var t23;
  var t24;
  var div2;
  var a0;
  var t25;
  var t26;
  var section1;
  var div7;
  var h22;
  var t27;
  var t28;
  var p1;
  var t29;
  var t30;
  var div6;
  var a1;
  var t31;
  var t32;
  var section2;
  var div8;
  var h1;
  var t33;
  var t34;
  var p2;
  var t35;
  var t36;
  var div14;
  var div13;
  var div12;
  var div9;
  var img;
  var img_src_value;
  var t37;
  var div11;
  var div10;
  var ul;
  var li0;
  var t38;
  var t39;
  var li1;
  var t40;
  var t41;
  var li2;
  var t42;
  var t43;
  var li3;
  var t44;
  var t45;
  var li4;
  var t46;
  var t47;
  var li5;
  var t48;
  var t49;
  var li6;
  var t50;
  var t51;
  var section3;
  var div16;
  var div15;
  var h23;
  var t52;
  var t53;
  var p3;
  var t54;
  var t55;
  var p4;
  var t56;
  var t57;
  var p5;
  var t58;
  var strong;
  var t59;
  var t60;
  var t61;
  var p6;
  var t62;
  var a2;
  var t63;
  var t64;
  var t65;
  var h24;
  var t66;
  var t67;
  var p7;
  var t68;
  var t69;
  var p8;
  var t70;
  var block = {
    c: function create() {
      t0 = space();
      div0 = element("div");
      iframe = element("iframe");
      t1 = space();
      section4 = element("section");
      div18 = element("div");
      div17 = element("div");
      section0 = element("section");
      div5 = element("div");
      div4 = element("div");
      div1 = element("div");
      h20 = element("h2");
      t2 = text("Location");
      t3 = text("\n            St. James Hatcham Building\n            ");
      br0 = element("br");
      t4 = text("\n            25 St James's\n            ");
      br1 = element("br");
      t5 = text("\n            Goldsmiths, University of London\n            ");
      br2 = element("br");
      t6 = text("\n            New Cross\n            ");
      br3 = element("br");
      t7 = text("\n            London SE14 6AD\n            ");
      br4 = element("br");
      t8 = space();
      div3 = element("div");
      h21 = element("h2");
      t9 = text("Opening Hours");
      t10 = space();
      table = element("table");
      tr0 = element("tr");
      td0 = element("td");
      t11 = text("Opening night Thursday 17th");
      t12 = space();
      td1 = element("td");
      t13 = text("5 pm - 9.30 pm");
      t14 = space();
      tr1 = element("tr");
      td2 = element("td");
      t15 = text("Friday 18th - Saturday 19th");
      t16 = space();
      td3 = element("td");
      t17 = text("11 am - 9.30 pm");
      t18 = space();
      tr2 = element("tr");
      td4 = element("td");
      t19 = text("Sunday 20th");
      t20 = space();
      td5 = element("td");
      t21 = text("11 am - 6 pm");
      t22 = space();
      p0 = element("p");
      t23 = text("Limited capacity, registration mandatory");
      t24 = space();
      div2 = element("div");
      a0 = element("a");
      t25 = text("Register");
      t26 = space();
      section1 = element("section");
      div7 = element("div");
      h22 = element("h2");
      t27 = text("How to visit the exhibition in person");
      t28 = space();
      p1 = element("p");
      t29 = text("To manage capacity all visitors must register to attend during a slot via\n        this Eventbrite. Please arrive at the beginning of your time slot, but\n        please be aware we have limited capacity inside the venue, you may be asked\n        to queue until space inside becomes available.");
      t30 = space();
      div6 = element("div");
      a1 = element("a");
      t31 = text("Register");
      t32 = space();
      section2 = element("section");
      div8 = element("div");
      h1 = element("h1");
      t33 = text("How to visit the garden - COVID Guidance");
      t34 = space();
      p2 = element("p");
      t35 = text("It is important to us that visitors and staff feel safe and comfortable\n            in the exhibition. To this end we are taking a number of precautions.\n            Please do follow the guidelines below to ensure you have a safe and\n            pleasant visit:");
      t36 = space();
      div14 = element("div");
      div13 = element("div");
      div12 = element("div");
      div9 = element("div");
      img = element("img");
      t37 = space();
      div11 = element("div");
      div10 = element("div");
      ul = element("ul");
      li0 = element("li");
      t38 = text("We have limited capacity inside the venue. You may be asked to queue\n                  until space inside becomes available.");
      t39 = space();
      li1 = element("li");
      t40 = text("Masks are required when indoors, unless you are exempt");
      t41 = space();
      li2 = element("li");
      t42 = text("You are encouraged to bring your own wired headphones to listen to\n                  exhibits");
      t43 = space();
      li3 = element("li");
      t44 = text("Please maintain 2m distance to other guests where possible");
      t45 = space();
      li4 = element("li");
      t46 = text("There will be sanitisation stations throughout the exhibition, exits,\n                  entrances and at interactive pieces");
      t47 = space();
      li5 = element("li");
      t48 = text("No refreshments will be permitted inside the venue");
      t49 = space();
      li6 = element("li");
      t50 = text("On the opening night (Thursday 17th), there will be outdoor space and\n                  bar available to socialise, maintaining social distancing.");
      t51 = space();
      section3 = element("section");
      div16 = element("div");
      div15 = element("div");
      h23 = element("h2");
      t52 = text("How to get here");
      t53 = space();
      p3 = element("p");
      t54 = text("Goldsmiths is in New Cross, South East London, five miles from\n                central London.");
      t55 = space();
      p4 = element("p");
      t56 = text("St. James Hatcham Building,\n                25 St James's,\n                Goldsmiths, University of London,\n                New Cross,\n                London SE14 6AD");
      t57 = space();
      p5 = element("p");
      t58 = text("When visiting St. James Hatcham Building, turn off New Cross road\n                and walk up St James. The St James Hatcham Building is the\n                ");
      strong = element("strong");
      t59 = text("church");
      t60 = text("\n                at the end of the road.");
      t61 = space();
      p6 = element("p");
      t62 = text("Find more information\n                ");
      a2 = element("a");
      t63 = text("here");
      t64 = text("\n                .");
      t65 = space();
      h24 = element("h2");
      t66 = text("Public Transport");
      t67 = space();
      p7 = element("p");
      t68 = text("The following buses stop outside Goldsmiths: 21, 36, 53, 136, 171,\n                172, 177, 225, 321, 343, 436 and 453.");
      t69 = space();
      p8 = element("p");
      t70 = text("Goldsmiths is less than five minutes’ walk from both New Cross and\n                New Cross Gate railway and overground stations.");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-zfd5wn\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      iframe = claim_element(div0_nodes, "IFRAME", {
        class: true,
        src: true,
        width: true,
        height: true,
        frameborder: true,
        style: true,
        allowfullscreen: true,
        "aria-hidden": true,
        tabindex: true,
        title: true
      });
      children(iframe).forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      section4 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section4_nodes = children(section4);
      div18 = claim_element(section4_nodes, "DIV", {
        class: true
      });
      var div18_nodes = children(div18);
      div17 = claim_element(div18_nodes, "DIV", {
        class: true
      });
      var div17_nodes = children(div17);
      section0 = claim_element(div17_nodes, "SECTION", {
        class: true
      });
      var section0_nodes = children(section0);
      div5 = claim_element(section0_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h20 = claim_element(div1_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t2 = claim_text(h20_nodes, "Location");
      h20_nodes.forEach(detach_dev);
      t3 = claim_text(div1_nodes, "\n            St. James Hatcham Building\n            ");
      br0 = claim_element(div1_nodes, "BR", {});
      t4 = claim_text(div1_nodes, "\n            25 St James's\n            ");
      br1 = claim_element(div1_nodes, "BR", {});
      t5 = claim_text(div1_nodes, "\n            Goldsmiths, University of London\n            ");
      br2 = claim_element(div1_nodes, "BR", {});
      t6 = claim_text(div1_nodes, "\n            New Cross\n            ");
      br3 = claim_element(div1_nodes, "BR", {});
      t7 = claim_text(div1_nodes, "\n            London SE14 6AD\n            ");
      br4 = claim_element(div1_nodes, "BR", {});
      div1_nodes.forEach(detach_dev);
      t8 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      h21 = claim_element(div3_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t9 = claim_text(h21_nodes, "Opening Hours");
      h21_nodes.forEach(detach_dev);
      t10 = claim_space(div3_nodes);
      table = claim_element(div3_nodes, "TABLE", {
        class: true
      });
      var table_nodes = children(table);
      tr0 = claim_element(table_nodes, "TR", {});
      var tr0_nodes = children(tr0);
      td0 = claim_element(tr0_nodes, "TD", {
        class: true
      });
      var td0_nodes = children(td0);
      t11 = claim_text(td0_nodes, "Opening night Thursday 17th");
      td0_nodes.forEach(detach_dev);
      t12 = claim_space(tr0_nodes);
      td1 = claim_element(tr0_nodes, "TD", {
        class: true
      });
      var td1_nodes = children(td1);
      t13 = claim_text(td1_nodes, "5 pm - 9.30 pm");
      td1_nodes.forEach(detach_dev);
      tr0_nodes.forEach(detach_dev);
      t14 = claim_space(table_nodes);
      tr1 = claim_element(table_nodes, "TR", {});
      var tr1_nodes = children(tr1);
      td2 = claim_element(tr1_nodes, "TD", {
        class: true
      });
      var td2_nodes = children(td2);
      t15 = claim_text(td2_nodes, "Friday 18th - Saturday 19th");
      td2_nodes.forEach(detach_dev);
      t16 = claim_space(tr1_nodes);
      td3 = claim_element(tr1_nodes, "TD", {
        class: true
      });
      var td3_nodes = children(td3);
      t17 = claim_text(td3_nodes, "11 am - 9.30 pm");
      td3_nodes.forEach(detach_dev);
      tr1_nodes.forEach(detach_dev);
      t18 = claim_space(table_nodes);
      tr2 = claim_element(table_nodes, "TR", {});
      var tr2_nodes = children(tr2);
      td4 = claim_element(tr2_nodes, "TD", {
        class: true
      });
      var td4_nodes = children(td4);
      t19 = claim_text(td4_nodes, "Sunday 20th");
      td4_nodes.forEach(detach_dev);
      t20 = claim_space(tr2_nodes);
      td5 = claim_element(tr2_nodes, "TD", {
        class: true
      });
      var td5_nodes = children(td5);
      t21 = claim_text(td5_nodes, "11 am - 6 pm");
      td5_nodes.forEach(detach_dev);
      tr2_nodes.forEach(detach_dev);
      table_nodes.forEach(detach_dev);
      t22 = claim_space(div3_nodes);
      p0 = claim_element(div3_nodes, "P", {});
      var p0_nodes = children(p0);
      t23 = claim_text(p0_nodes, "Limited capacity, registration mandatory");
      p0_nodes.forEach(detach_dev);
      t24 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      a0 = claim_element(div2_nodes, "A", {
        class: true,
        href: true
      });
      var a0_nodes = children(a0);
      t25 = claim_text(a0_nodes, "Register");
      a0_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      section0_nodes.forEach(detach_dev);
      t26 = claim_space(div17_nodes);
      section1 = claim_element(div17_nodes, "SECTION", {
        class: true
      });
      var section1_nodes = children(section1);
      div7 = claim_element(section1_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      h22 = claim_element(div7_nodes, "H2", {
        class: true
      });
      var h22_nodes = children(h22);
      t27 = claim_text(h22_nodes, "How to visit the exhibition in person");
      h22_nodes.forEach(detach_dev);
      t28 = claim_space(div7_nodes);
      p1 = claim_element(div7_nodes, "P", {});
      var p1_nodes = children(p1);
      t29 = claim_text(p1_nodes, "To manage capacity all visitors must register to attend during a slot via\n        this Eventbrite. Please arrive at the beginning of your time slot, but\n        please be aware we have limited capacity inside the venue, you may be asked\n        to queue until space inside becomes available.");
      p1_nodes.forEach(detach_dev);
      t30 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {});
      var div6_nodes = children(div6);
      a1 = claim_element(div6_nodes, "A", {
        class: true,
        href: true
      });
      var a1_nodes = children(a1);
      t31 = claim_text(a1_nodes, "Register");
      a1_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      section1_nodes.forEach(detach_dev);
      t32 = claim_space(div17_nodes);
      section2 = claim_element(div17_nodes, "SECTION", {
        class: true
      });
      var section2_nodes = children(section2);
      div8 = claim_element(section2_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      h1 = claim_element(div8_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t33 = claim_text(h1_nodes, "How to visit the garden - COVID Guidance");
      h1_nodes.forEach(detach_dev);
      t34 = claim_space(div8_nodes);
      p2 = claim_element(div8_nodes, "P", {});
      var p2_nodes = children(p2);
      t35 = claim_text(p2_nodes, "It is important to us that visitors and staff feel safe and comfortable\n            in the exhibition. To this end we are taking a number of precautions.\n            Please do follow the guidelines below to ensure you have a safe and\n            pleasant visit:");
      p2_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t36 = claim_space(section2_nodes);
      div14 = claim_element(section2_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      div13 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      div12 = claim_element(div13_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      div9 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      img = claim_element(div9_nodes, "IMG", {
        src: true
      });
      div9_nodes.forEach(detach_dev);
      t37 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      ul = claim_element(div10_nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      t38 = claim_text(li0_nodes, "We have limited capacity inside the venue. You may be asked to queue\n                  until space inside becomes available.");
      li0_nodes.forEach(detach_dev);
      t39 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      t40 = claim_text(li1_nodes, "Masks are required when indoors, unless you are exempt");
      li1_nodes.forEach(detach_dev);
      t41 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t42 = claim_text(li2_nodes, "You are encouraged to bring your own wired headphones to listen to\n                  exhibits");
      li2_nodes.forEach(detach_dev);
      t43 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      t44 = claim_text(li3_nodes, "Please maintain 2m distance to other guests where possible");
      li3_nodes.forEach(detach_dev);
      t45 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      t46 = claim_text(li4_nodes, "There will be sanitisation stations throughout the exhibition, exits,\n                  entrances and at interactive pieces");
      li4_nodes.forEach(detach_dev);
      t47 = claim_space(ul_nodes);
      li5 = claim_element(ul_nodes, "LI", {});
      var li5_nodes = children(li5);
      t48 = claim_text(li5_nodes, "No refreshments will be permitted inside the venue");
      li5_nodes.forEach(detach_dev);
      t49 = claim_space(ul_nodes);
      li6 = claim_element(ul_nodes, "LI", {});
      var li6_nodes = children(li6);
      t50 = claim_text(li6_nodes, "On the opening night (Thursday 17th), there will be outdoor space and\n                  bar available to socialise, maintaining social distancing.");
      li6_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      section2_nodes.forEach(detach_dev);
      t51 = claim_space(div17_nodes);
      section3 = claim_element(div17_nodes, "SECTION", {
        class: true
      });
      var section3_nodes = children(section3);
      div16 = claim_element(section3_nodes, "DIV", {
        class: true
      });
      var div16_nodes = children(div16);
      div15 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div15_nodes = children(div15);
      h23 = claim_element(div15_nodes, "H2", {
        class: true
      });
      var h23_nodes = children(h23);
      t52 = claim_text(h23_nodes, "How to get here");
      h23_nodes.forEach(detach_dev);
      t53 = claim_space(div15_nodes);
      p3 = claim_element(div15_nodes, "P", {});
      var p3_nodes = children(p3);
      t54 = claim_text(p3_nodes, "Goldsmiths is in New Cross, South East London, five miles from\n                central London.");
      p3_nodes.forEach(detach_dev);
      t55 = claim_space(div15_nodes);
      p4 = claim_element(div15_nodes, "P", {});
      var p4_nodes = children(p4);
      t56 = claim_text(p4_nodes, "St. James Hatcham Building,\n                25 St James's,\n                Goldsmiths, University of London,\n                New Cross,\n                London SE14 6AD");
      p4_nodes.forEach(detach_dev);
      t57 = claim_space(div15_nodes);
      p5 = claim_element(div15_nodes, "P", {});
      var p5_nodes = children(p5);
      t58 = claim_text(p5_nodes, "When visiting St. James Hatcham Building, turn off New Cross road\n                and walk up St James. The St James Hatcham Building is the\n                ");
      strong = claim_element(p5_nodes, "STRONG", {});
      var strong_nodes = children(strong);
      t59 = claim_text(strong_nodes, "church");
      strong_nodes.forEach(detach_dev);
      t60 = claim_text(p5_nodes, "\n                at the end of the road.");
      p5_nodes.forEach(detach_dev);
      t61 = claim_space(div15_nodes);
      p6 = claim_element(div15_nodes, "P", {});
      var p6_nodes = children(p6);
      t62 = claim_text(p6_nodes, "Find more information\n                ");
      a2 = claim_element(p6_nodes, "A", {
        href: true
      });
      var a2_nodes = children(a2);
      t63 = claim_text(a2_nodes, "here");
      a2_nodes.forEach(detach_dev);
      t64 = claim_text(p6_nodes, "\n                .");
      p6_nodes.forEach(detach_dev);
      t65 = claim_space(div15_nodes);
      h24 = claim_element(div15_nodes, "H2", {
        class: true
      });
      var h24_nodes = children(h24);
      t66 = claim_text(h24_nodes, "Public Transport");
      h24_nodes.forEach(detach_dev);
      t67 = claim_space(div15_nodes);
      p7 = claim_element(div15_nodes, "P", {});
      var p7_nodes = children(p7);
      t68 = claim_text(p7_nodes, "The following buses stop outside Goldsmiths: 21, 36, 53, 136, 171,\n                172, 177, 225, 321, 343, 436 and 453.");
      p7_nodes.forEach(detach_dev);
      t69 = claim_space(div15_nodes);
      p8 = claim_element(div15_nodes, "P", {});
      var p8_nodes = children(p8);
      t70 = claim_text(p8_nodes, "Goldsmiths is less than five minutes’ walk from both New Cross and\n                New Cross Gate railway and overground stations.");
      p8_nodes.forEach(detach_dev);
      div15_nodes.forEach(detach_dev);
      div16_nodes.forEach(detach_dev);
      section3_nodes.forEach(detach_dev);
      div17_nodes.forEach(detach_dev);
      div18_nodes.forEach(detach_dev);
      section4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Getting there";
      attr_dev(iframe, "class", "gmap svelte-zkby2k");
      if (iframe.src !== (iframe_src_value = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.2849271162139!2d-0.03870997075277533!3d51.47394983406136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603cdd0976f5b%3A0x370a516c5d8f1902!2sSt%20James%20Hatcham%20building%2C%20Goldsmiths%20University%20of%20London!5e0!3m2!1sen!2suk!4v1599344161499!5m2!1sen!2suk")) attr_dev(iframe, "src", iframe_src_value);
      attr_dev(iframe, "width", "100%");
      attr_dev(iframe, "height", "500");
      attr_dev(iframe, "frameborder", "0");
      set_style(iframe, "border", "0");
      iframe.allowFullscreen = "";
      attr_dev(iframe, "aria-hidden", "false");
      attr_dev(iframe, "tabindex", "0");
      attr_dev(iframe, "title", "Map");
      add_location(iframe, file, 48, 2, 626);
      attr_dev(div0, "class", "container is-desktop");
      add_location(div0, file, 47, 0, 589);
      attr_dev(h20, "class", "subtitle");
      add_location(h20, file, 72, 12, 1440);
      add_location(br0, file, 74, 12, 1526);
      add_location(br1, file, 76, 12, 1571);
      add_location(br2, file, 78, 12, 1635);
      add_location(br3, file, 80, 12, 1676);
      add_location(br4, file, 82, 12, 1723);
      attr_dev(div1, "class", "column");
      add_location(div1, file, 71, 10, 1407);
      attr_dev(h21, "class", "subtitle");
      add_location(h21, file, 87, 12, 1792);
      attr_dev(td0, "class", "svelte-zkby2k");
      add_location(td0, file, 91, 16, 1888);
      attr_dev(td1, "class", "svelte-zkby2k");
      add_location(td1, file, 92, 16, 1941);
      add_location(tr0, file, 90, 14, 1867);
      attr_dev(td2, "class", "svelte-zkby2k");
      add_location(td2, file, 95, 16, 2020);
      attr_dev(td3, "class", "svelte-zkby2k");
      add_location(td3, file, 96, 16, 2073);
      add_location(tr1, file, 94, 14, 1999);
      attr_dev(td4, "class", "svelte-zkby2k");
      add_location(td4, file, 99, 16, 2153);
      attr_dev(td5, "class", "svelte-zkby2k");
      add_location(td5, file, 100, 16, 2190);
      add_location(tr2, file, 98, 14, 2132);
      attr_dev(table, "class", "svelte-zkby2k");
      add_location(table, file, 89, 12, 1845);
      add_location(p0, file, 104, 12, 2266);
      attr_dev(a0, "class", "rounded-link col-2 bg-col-7");
      attr_dev(a0, "href", REGISTER_URL);
      add_location(a0, file, 106, 14, 2346);
      add_location(div2, file, 105, 12, 2326);
      attr_dev(div3, "class", "column");
      add_location(div3, file, 85, 10, 1758);
      attr_dev(div4, "class", "columns");
      add_location(div4, file, 69, 8, 1374);
      attr_dev(div5, "class", "container");
      add_location(div5, file, 67, 6, 1341);
      attr_dev(section0, "class", "section bg-col-2 garden-block svelte-zkby2k");
      add_location(section0, file, 66, 4, 1287);
      attr_dev(h22, "class", "subtitle");
      add_location(h22, file, 115, 8, 2588);
      add_location(p1, file, 116, 8, 2660);
      attr_dev(a1, "class", "rounded-link bg-col-3 col-7");
      attr_dev(a1, "href", REGISTER_URL);
      add_location(a1, file, 121, 10, 2983);
      add_location(div6, file, 120, 8, 2967);
      attr_dev(div7, "class", "container align-center svelte-zkby2k");
      add_location(div7, file, 114, 6, 2543);
      attr_dev(section1, "class", "section bg-col-7");
      add_location(section1, file, 113, 4, 2502);
      attr_dev(h1, "class", "title");
      add_location(h1, file, 128, 8, 3191);
      add_location(p2, file, 134, 10, 3458);
      attr_dev(div8, "class", "container align-center svelte-zkby2k");
      add_location(div8, file, 127, 6, 3146);
      if (img.src !== (img_src_value = "img/handsanitizer.png")) attr_dev(img, "src", img_src_value);
      add_location(img, file, 148, 12, 3941);
      attr_dev(div9, "class", "column");
      add_location(div9, file, 147, 10, 3908);
      add_location(li0, file, 154, 16, 4094);
      add_location(li1, file, 158, 16, 4280);
      add_location(li2, file, 159, 16, 4360);
      add_location(li3, file, 163, 16, 4515);
      add_location(li4, file, 164, 16, 4599);
      add_location(li5, file, 168, 16, 4784);
      add_location(li6, file, 169, 16, 4860);
      add_location(ul, file, 153, 14, 4073);
      attr_dev(div10, "class", "content");
      add_location(div10, file, 152, 12, 4037);
      attr_dev(div11, "class", "column");
      add_location(div11, file, 151, 10, 4004);
      attr_dev(div12, "class", "columns");
      add_location(div12, file, 145, 9, 3875);
      attr_dev(div13, "class", "content bg-col-8 garden-block sanitize-content svelte-zkby2k");
      add_location(div13, file, 143, 8, 3804);
      attr_dev(div14, "class", "container ");
      add_location(div14, file, 141, 6, 3770);
      attr_dev(section2, "class", "section is-white");
      add_location(section2, file, 126, 6, 3105);
      attr_dev(h23, "class", "subtitle");
      add_location(h23, file, 186, 14, 5299);
      add_location(p3, file, 187, 14, 5355);
      add_location(p4, file, 191, 14, 5503);
      add_location(strong, file, 201, 16, 5901);
      add_location(p5, file, 198, 14, 5724);
      attr_dev(a2, "href", "https://www.gold.ac.uk/find-us/places/st-james-hatcham-building/");
      add_location(a2, file, 206, 16, 6056);
      add_location(p6, file, 204, 14, 5998);
      attr_dev(h24, "class", "subtitle");
      add_location(h24, file, 213, 14, 6246);
      add_location(p7, file, 214, 14, 6303);
      add_location(p8, file, 218, 14, 6477);
      attr_dev(div15, "class", "content");
      add_location(div15, file, 185, 12, 5263);
      attr_dev(div16, "class", "container align-center svelte-zkby2k");
      add_location(div16, file, 183, 6, 5213);
      attr_dev(section3, "class", "section is-white");
      add_location(section3, file, 182, 4, 5172);
      attr_dev(div17, "class", "content");
      add_location(div17, file, 64, 4, 1260);
      attr_dev(div18, "class", "container is-widescreen");
      add_location(div18, file, 63, 2, 1218);
      attr_dev(section4, "class", "section bg-col-7 getting-there-section svelte-zkby2k");
      add_location(section4, file, 62, 0, 1159);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div0, anchor);
      append_dev(div0, iframe);
      insert_dev(target, t1, anchor);
      insert_dev(target, section4, anchor);
      append_dev(section4, div18);
      append_dev(div18, div17);
      append_dev(div17, section0);
      append_dev(section0, div5);
      append_dev(div5, div4);
      append_dev(div4, div1);
      append_dev(div1, h20);
      append_dev(h20, t2);
      append_dev(div1, t3);
      append_dev(div1, br0);
      append_dev(div1, t4);
      append_dev(div1, br1);
      append_dev(div1, t5);
      append_dev(div1, br2);
      append_dev(div1, t6);
      append_dev(div1, br3);
      append_dev(div1, t7);
      append_dev(div1, br4);
      append_dev(div4, t8);
      append_dev(div4, div3);
      append_dev(div3, h21);
      append_dev(h21, t9);
      append_dev(div3, t10);
      append_dev(div3, table);
      append_dev(table, tr0);
      append_dev(tr0, td0);
      append_dev(td0, t11);
      append_dev(tr0, t12);
      append_dev(tr0, td1);
      append_dev(td1, t13);
      append_dev(table, t14);
      append_dev(table, tr1);
      append_dev(tr1, td2);
      append_dev(td2, t15);
      append_dev(tr1, t16);
      append_dev(tr1, td3);
      append_dev(td3, t17);
      append_dev(table, t18);
      append_dev(table, tr2);
      append_dev(tr2, td4);
      append_dev(td4, t19);
      append_dev(tr2, t20);
      append_dev(tr2, td5);
      append_dev(td5, t21);
      append_dev(div3, t22);
      append_dev(div3, p0);
      append_dev(p0, t23);
      append_dev(div3, t24);
      append_dev(div3, div2);
      append_dev(div2, a0);
      append_dev(a0, t25);
      append_dev(div17, t26);
      append_dev(div17, section1);
      append_dev(section1, div7);
      append_dev(div7, h22);
      append_dev(h22, t27);
      append_dev(div7, t28);
      append_dev(div7, p1);
      append_dev(p1, t29);
      append_dev(div7, t30);
      append_dev(div7, div6);
      append_dev(div6, a1);
      append_dev(a1, t31);
      append_dev(div17, t32);
      append_dev(div17, section2);
      append_dev(section2, div8);
      append_dev(div8, h1);
      append_dev(h1, t33);
      append_dev(div8, t34);
      append_dev(div8, p2);
      append_dev(p2, t35);
      append_dev(section2, t36);
      append_dev(section2, div14);
      append_dev(div14, div13);
      append_dev(div13, div12);
      append_dev(div12, div9);
      append_dev(div9, img);
      append_dev(div12, t37);
      append_dev(div12, div11);
      append_dev(div11, div10);
      append_dev(div10, ul);
      append_dev(ul, li0);
      append_dev(li0, t38);
      append_dev(ul, t39);
      append_dev(ul, li1);
      append_dev(li1, t40);
      append_dev(ul, t41);
      append_dev(ul, li2);
      append_dev(li2, t42);
      append_dev(ul, t43);
      append_dev(ul, li3);
      append_dev(li3, t44);
      append_dev(ul, t45);
      append_dev(ul, li4);
      append_dev(li4, t46);
      append_dev(ul, t47);
      append_dev(ul, li5);
      append_dev(li5, t48);
      append_dev(ul, t49);
      append_dev(ul, li6);
      append_dev(li6, t50);
      append_dev(div17, t51);
      append_dev(div17, section3);
      append_dev(section3, div16);
      append_dev(div16, div15);
      append_dev(div15, h23);
      append_dev(h23, t52);
      append_dev(div15, t53);
      append_dev(div15, p3);
      append_dev(p3, t54);
      append_dev(div15, t55);
      append_dev(div15, p4);
      append_dev(p4, t56);
      append_dev(div15, t57);
      append_dev(div15, p5);
      append_dev(p5, t58);
      append_dev(p5, strong);
      append_dev(strong, t59);
      append_dev(p5, t60);
      append_dev(div15, t61);
      append_dev(div15, p6);
      append_dev(p6, t62);
      append_dev(p6, a2);
      append_dev(a2, t63);
      append_dev(p6, t64);
      append_dev(div15, t65);
      append_dev(div15, h24);
      append_dev(h24, t66);
      append_dev(div15, t67);
      append_dev(div15, p7);
      append_dev(p7, t68);
      append_dev(div15, t69);
      append_dev(div15, p8);
      append_dev(p8, t70);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(section4);
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Getting_there> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Getting_there", $$slots, []);

  $$self.$capture_state = function () {
    return {
      REGISTER_URL: REGISTER_URL
    };
  };

  return [];
}

var Getting_there = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Getting_there, _SvelteComponentDev);

  var _super = _createSuper(Getting_there);

  function Getting_there(options) {
    var _this;

    _classCallCheck(this, Getting_there);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Getting_there",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Getting_there;
}(SvelteComponentDev);

export default Getting_there;
