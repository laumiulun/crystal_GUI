
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
                        for (var RS_Index1 = L["-u"]()["+"](1); RS_Index1["<"](L["+"](1)); RS_Index1++) {
                            i = RS_Index1;
                            "25";
                            for (var RS_Index2 = L["-u"]()["+"](1); RS_Index2["<"](L["+"](1)); RS_Index2++) {
                                j = RS_Index2;
                                "26";
                                for (var RS_Index3 = L["-u"]()["+"](1); RS_Index3["<"](L["+"](1)); RS_Index3++) {
                                    k = RS_Index3;
                                    "27";
                                    if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                            "28";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: ra, color: color.magenta })]);
                                            "29";
                                            ra_item.append(b);
                                            "30";
                                        } else {
                                            "31";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: rb, color: color.green })]);
                                            "32";
                                            rb_item.append(b);
                                        }
                                    "33";
                                    if (i["+"](1)["<="](L)) {
                                            "34";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                            "35";
                                            cylinder_item.append(b);
                                        }
                                    "36";
                                    if (j["+"](1)["<="](L)) {
                                            "37";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                            "38";
                                            cylinder_item.append(b);
                                        }
                                    "39";
                                    if (k["+"](1)["<="](L)) {
                                            "40";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                            "41";
                                            cylinder_item.append(b);
                                        }
                                }
                            }
                        }
                        "42";
                        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
                        "44";
                        return [ra_item, rb_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "47";
                        "48";
                        "49";
                        "50";
                        "51";
                        "52";
                        running = !running;
                        "53";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "59";
                        var RS_Iter4 = RS_Iterable(ra_item);
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "60";
                            i.visible = false;
                            "61";
                            i = undefined;
                        }
                        "62";
                        var RS_Iter5 = RS_Iterable(rb_item);
                        for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                            i = RS_Iter5[RS_Index5];
                            "63";
                            i.visible = false;
                            "64";
                            i = undefined;
                        }
                        "65";
                        var RS_Iter6 = RS_Iterable(cylinder_item);
                        for (var RS_Index6 = 0; RS_Index6["<"](RS_Iter6.length); RS_Index6++) {
                            i = RS_Iter6[RS_Index6];
                            "66";
                            i.visible = false;
                            "67";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, i, RS_unpack;
                        "71";
                        "72";
                        "73";
                        "74";
                        "75";
                        var RS_Iter7 = RS_Iterable(ra_item);
                        for (var RS_Index7 = 0; RS_Index7["<"](RS_Iter7.length); RS_Index7++) {
                            i = RS_Iter7[RS_Index7];
                            "76";
                            i.visible = false;
                            "77";
                            i = undefined;
                        }
                        "78";
                        var RS_Iter8 = RS_Iterable(rb_item);
                        for (var RS_Index8 = 0; RS_Index8["<"](RS_Iter8.length); RS_Index8++) {
                            i = RS_Iter8[RS_Index8];
                            "79";
                            i.visible = false;
                            "80";
                            i = undefined;
                        }
                        "81";
                        var RS_Iter9 = RS_Iterable(cylinder_item);
                        for (var RS_Index9 = 0; RS_Index9["<"](RS_Iter9.length); RS_Index9++) {
                            i = RS_Iter9[RS_Index9];
                            "82";
                            i.visible = false;
                            "83";
                            i = undefined;
                        }
                        "84";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(4, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        cylinder_item = RS_unpack[2];
                        total_item = RS_unpack[3];
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "88";
                        bond_ab = s.number;
                        "89";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "90";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "91";
                        var RS_Iter10 = RS_Iterable(ra_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            x = RS_Iter10[RS_Index10];
                            "92";
                            x.radius = ra;
                        }
                        "93";
                        var RS_Iter11 = RS_Iterable(rb_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            y = RS_Iter11[RS_Index11];
                            "94";
                            y.radius = rb;
                        }
                        "95";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "99";
                        ra_int = s.number;
                        "100";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "101";
                        var RS_Iter12 = RS_Iterable(ra_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            x = RS_Iter12[RS_Index12];
                            "102";
                            x.radius = ra;
                        }
                        "103";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "106";
                        rb_int = s.number;
                        "107";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "108";
                        var RS_Iter13 = RS_Iterable(rb_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            y = RS_Iter13[RS_Index13];
                            "109";
                            y.radius = rb;
                        }
                        "110";
                        return rb;
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "113";
                        "114";
                        "115";
                        "116";
                        "117";
                        L = s.number;
                        "118";
                        clear();
                        "119";
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
                    bond_ab = 2.7266;
                    "10";
                    ra_int = .99;
                    "11";
                    rb_int = 1.91;
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

                    "46";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "58";
                    ;

                    "70";
                    ;

                    "87";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "98";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "105";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "112";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "124";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(4, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    cylinder_item = RS_unpack[2];
                    total_item = RS_unpack[3];
                    "129";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>FCC Lattice Example: Sodium Cloride(NaCl)<\/h2><hr>", pos: scene5.title_anchor })]);
                    "132";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "Sodium Cloride, also known as salt is a ionic compound with the chemical symbol\n\\(NaCl \\), which contain two type of elements (Sodium and Cloride). The two elements \nare arranged in a cubic structure with a Face Center Cubic(FCC) lattice.\n", pos: scene5.title_anchor })]);
                    "138";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "147";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integar Only)</li><li><b>bond_ab</b>: Lattice Constant (\\(10^{-10} \\)meters)</li><li><b><font color = \"Purple\">r_a<font color = \"Black\"></b>: Atomic Radius of Sodium [<font color =\"Purple\">Purple<font color =\"black\">](\\(10^{-10} \\)meters)</li><li><b><font color = \"Green\">r_b<font color = \"Black\"></b>: Atomic Radius of Chloride [<font color =\"Green\">Green<font color =\"black\">](\\(10^{-10} \\)meters)</li></ul>", pos: scene5.title_anchor })]);
                    "149";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "152";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "153";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "155";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n" })]);
                    "158";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "159";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "161";
                    scene5.append_to_caption("\n");
                    "163";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond_ab: " })]);
                    "164";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 2.7266 })]);
                    "166";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "167";
                    scene5.append_to_caption("\n");
                    "169";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "170";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: .99 })]);
                    "171";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "173";
                    scene5.append_to_caption("\n");
                    "175";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "176";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: 1.91 })]);
                    "177";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "179";
                    scene5.append_to_caption("\n");
                    "180";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "183";

                case 133:
                    if (!true) {
                            _context.next = 141;
                            break;
                        }

                    "184";
                    _context.next = 137;
                    return _streamline.await(_filename, 390, null, rate, 1, null, false, [100, true]);

                case 137:
                    "185";
                    if (running) {
                            "186";
                            RS_Iter14 = RS_Iterable(total_item);

                            for (RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                                b = RS_Iter14[RS_Index14];
                                "187";
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
