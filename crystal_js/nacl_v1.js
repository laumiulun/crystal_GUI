//NaCl v1
// START JAVASCRIPT
;(function() {"use strict";

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, RS_unpack, b1, b2, it0, it1, ib1, it2, ib2, it3, ib3, it4, ib4, b, __name__, strings, RS_Iter14, RS_Index14;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    build = function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
                        var RS_ls, b, k, j, i;
                        "24";
                        for (var RS_Index1 = L["-u"](); RS_Index1["<"](L["+"](1)); RS_Index1++) {
                            i = RS_Index1;
                            "25";
                            for (var RS_Index2 = L["-u"](); RS_Index2["<"](L["+"](1)); RS_Index2++) {
                                j = RS_Index2;
                                "26";
                                for (var RS_Index3 = L["-u"](); RS_Index3["<"](L["+"](1)); RS_Index3++) {
                                    k = RS_Index3;
                                    "27";
                                    if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                            "29";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: ra, color: color.magenta })]);
                                            "30";
                                            ra_item.append(b);
                                            "31";
                                        } else {
                                            "33";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: color.green })]);
                                            "34";
                                            rb_item.append(b);
                                        }
                                    "35";
                                    if (i["+"](1)["<="](L)) {
                                            "36";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                            "37";
                                            cylinder_item.append(b);
                                        }
                                    "38";
                                    if (j["+"](1)["<="](L)) {
                                            "39";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                            "40";
                                            cylinder_item.append(b);
                                        }
                                    "41";
                                    if (k["+"](1)["<="](L)) {
                                            "42";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                            "43";
                                            cylinder_item.append(b);
                                        }
                                }
                            }
                        }
                        "44";
                        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
                        "46";
                        return [ra_item, rb_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "49";
                        "50";
                        "51";
                        "52";
                        "53";
                        "54";
                        running = !running;
                        "55";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "61";
                        var RS_Iter4 = RS_Iterable(ra_item);
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "62";
                            i.visible = false;
                            "63";
                            i = undefined;
                        }
                        "64";
                        var RS_Iter5 = RS_Iterable(rb_item);
                        for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                            i = RS_Iter5[RS_Index5];
                            "65";
                            i.visible = false;
                            "66";
                            i = undefined;
                        }
                        "67";
                        var RS_Iter6 = RS_Iterable(cylinder_item);
                        for (var RS_Index6 = 0; RS_Index6["<"](RS_Iter6.length); RS_Index6++) {
                            i = RS_Iter6[RS_Index6];
                            "68";
                            i.visible = false;
                            "69";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, i, RS_unpack;
                        "73";
                        "74";
                        "75";
                        "76";
                        "77";
                        var RS_Iter7 = RS_Iterable(ra_item);
                        for (var RS_Index7 = 0; RS_Index7["<"](RS_Iter7.length); RS_Index7++) {
                            i = RS_Iter7[RS_Index7];
                            "78";
                            i.visible = false;
                            "79";
                            i = undefined;
                        }
                        "80";
                        var RS_Iter8 = RS_Iterable(rb_item);
                        for (var RS_Index8 = 0; RS_Index8["<"](RS_Iter8.length); RS_Index8++) {
                            i = RS_Iter8[RS_Index8];
                            "81";
                            i.visible = false;
                            "82";
                            i = undefined;
                        }
                        "83";
                        var RS_Iter9 = RS_Iterable(cylinder_item);
                        for (var RS_Index9 = 0; RS_Index9["<"](RS_Iter9.length); RS_Index9++) {
                            i = RS_Iter9[RS_Index9];
                            "84";
                            i.visible = false;
                            "85";
                            i = undefined;
                        }
                        "86";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(4, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        cylinder_item = RS_unpack[2];
                        total_item = RS_unpack[3];
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "90";
                        bond_ab = s.number;
                        "91";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "92";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "93";
                        var RS_Iter10 = RS_Iterable(ra_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            x = RS_Iter10[RS_Index10];
                            "94";
                            x.radius = ra;
                        }
                        "95";
                        var RS_Iter11 = RS_Iterable(rb_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            y = RS_Iter11[RS_Index11];
                            "96";
                            y.radius = rb;
                        }
                        "97";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "101";
                        ra_int = s.number;
                        "102";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "103";
                        var RS_Iter12 = RS_Iterable(ra_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            x = RS_Iter12[RS_Index12];
                            "104";
                            x.radius = ra;
                        }
                        "105";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "108";
                        rb_int = s.number;
                        "109";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "110";
                        var RS_Iter13 = RS_Iterable(rb_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            y = RS_Iter13[RS_Index13];
                            "111";
                            y.radius = rb;
                        }
                        "112";
                        return rb;
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "115";
                        "116";
                        "117";
                        "118";
                        "119";
                        L = s.number;
                        "120";
                        clear();
                        "121";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(4, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        cylinder_item = RS_unpack[2];
                        total_item = RS_unpack[3];
                    };

                    version = RS_list_decorate(["2.8", "glowscript"]);
                    Array.prototype['+'] = function (r) {
                        return this.concat(r);
                    };
                    Array.prototype['*'] = function (r) {
                        return __array_times_number(this, r);
                    };
                    __name__ = '__main__';

                    window.__GSlang = "vpython";
                    box = vp_box;
                    sphere = vp_sphere;
                    simple_sphere = vp_simple_sphere;
                    cylinder = vp_cylinder;
                    pyramid = vp_pyramid;
                    cone = vp_cone;
                    helix = vp_helix;
                    ellipsoid = vp_ellipsoid;
                    ring = vp_ring;
                    arrow = vp_arrow;
                    compound = vp_compound;
                    display = canvas;
                    vector = vec;
                    print = GSprint;
                    type = pytype;
                    scene = canvas();
                    strings = RS_modules.pythonize.strings;


                    strings();
                    "6";
                    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({ background: color.black, width: 600, length: 600, center: vector(0, 0, 0) })]);
                    "8";
                    L = 1;
                    "9";
                    bond_ab = 2.386;
                    "10";
                    ra_int = .79;
                    "11";
                    rb_int = 1.99;
                    "13";
                    ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                    "14";
                    rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                    "16";
                    ra_item = RS_list_decorate([]);
                    "17";
                    rb_item = RS_list_decorate([]);
                    "18";
                    cylinder_item = RS_list_decorate([]);
                    "19";
                    total_item = RS_list_decorate([]);
                    "20";
                    running = false;
                    "22";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"] }
                    });

                    "48";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "60";
                    ;

                    "72";
                    ;

                    "89";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "100";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "107";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "114";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "126";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(4, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    cylinder_item = RS_unpack[2];
                    total_item = RS_unpack[3];
                    "131";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>FCC Lattice Example: Sodium Cloride(NaCl)<\/h2><hr>", pos: scene5.title_anchor })]);
                    "134";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "Sodium Cloride, also known as salt is a ionic compound with the chemical symbol\n\\(NaCl \\), which contain two type of elements (Sodium and Cloride). The two elements \nare arranged in a cubic structure with a Face Center Cubic(FCC) lattice.\n", pos: scene5.title_anchor })]);
                    "140";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "148";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Repeating Structure(Integar Only)</li><li><b>bond_ab</b>: Lattice Constant (\\(10^{-10} \\)meter)</li><li><b><font color = \"Purple\">r_a<font color = \"Black\"></b>: Atomic Radius of Sodium [<font color =\"Purple\">Purple<font color =\"black\">] (\\(10^{-10} \\)meter)</li><li><b><font color = \"Green\">r_b<font color = \"Black\"></b>: Atomic Radius of Chloride [<font color =\"Green\">Green<font color =\"black\">] (\\(10^{-10} \\)meter)</li></ul>", pos: scene5.title_anchor })]);
                    "150";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "153";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "154";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "156";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n" })]);
                    "159";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "160";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "162";
                    scene5.append_to_caption("\n");
                    "164";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond_ab: " })]);
                    "165";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 2.7266 })]);
                    "167";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "168";
                    scene5.append_to_caption("\n");
                    "171";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "172";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: .79 })]);
                    "173";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "175";
                    scene5.append_to_caption("\n");
                    "178";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "179";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: 1.91 })]);
                    "180";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "182";
                    scene5.append_to_caption("\n");
                    "183";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "186";

                case 133:
                    if (!true) {
                            _context.next = 141;
                            break;
                        }

                    "187";
                    _context.next = 137;
                    return _streamline.await(_filename, 390, null, rate, 1, null, false, [100, true]);

                case 137:
                    "188";
                    if (running) {
                            "189";
                            RS_Iter14 = RS_Iterable(total_item);

                            for (RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                                b = RS_Iter14[RS_Index14];
                                "190";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0) })]);
                            }
                        }
                    _context.next = 133;
                    break;

                case 141:
                case "end":
                    return _context.stop();
            }
        }
    }, _$$main$$, this);
}), 0, 1);

var RS_modules = {};
var ra_item, rb_item, cylinder_item, total_item, running;
RS_modules.pythonize = {};

(function () {
    var strings = function strings() {
        var string_funcs, exclude, name;
        string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
        if (!arguments.length) {
                exclude = function () {
                    var s = RS_set();
                    s.jsset.add("split");
                    s.jsset.add("replace");
                    return s;
                }();
            } else if (arguments[0]) {
                exclude = Array.prototype.slice.call(arguments);
            } else {
                exclude = null;
            }
        if (exclude) {
                string_funcs = string_funcs.difference(set(exclude));
            }
        var RS_Iter0 = RS_Iterable(string_funcs);
        for (var RS_Index0 = 0; RS_Index0["<"](RS_Iter0.length); RS_Index0++) {
            name = RS_Iter0[RS_Index0];
            (RS_expr_temp = String.prototype)[typeof name === "number" && name["<"](0) ? RS_expr_temp.length["+"](name) : name] = (RS_expr_temp = RS_str.prototype)[typeof name === "number" && name["<"](0) ? RS_expr_temp.length["+"](name) : name];
        }
    };

    ;

    RS_modules.pythonize.strings = strings;
})();
;
if (!main.__argnames__) Object.defineProperties(main, {
    __argnames__: { value: ["_"] }
});
;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; main(function(err) {;}) })})()
// END JAVASCRIPT
