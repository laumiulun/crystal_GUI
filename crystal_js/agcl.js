
// START JAVASCRIPT
;(function() {"use strict";

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, RS_unpack, b1, b2, it0, it1, ib1, it2, ib2, it3, ib3, it4, ib4, b, __name__, strings, RS_Iter11, RS_Index11;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    build = function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
                        var RS_ls, b, k, j, i;
                        "23";
                        for (var RS_Index1 = L["-u"](); RS_Index1["<"](L["+"](1)); RS_Index1++) {
                            i = RS_Index1;
                            "24";
                            for (var RS_Index2 = L["-u"](); RS_Index2["<"](L["+"](1)); RS_Index2++) {
                                j = RS_Index2;
                                "25";
                                for (var RS_Index3 = L["-u"](); RS_Index3["<"](L["+"](1)); RS_Index3++) {
                                    k = RS_Index3;
                                    "26";
                                    if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                            "27";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: ra, color: color.gray(.9) })]);
                                            "28";
                                            ra_item.append(b);
                                            "29";
                                        } else {
                                            "30";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: color.green })]);
                                            "31";
                                            rb_item.append(b);
                                        }
                                    "32";
                                    if (i["+"](1)["<="](L)) {
                                            "33";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                            "34";
                                            cylinder_item.append(b);
                                        }
                                    "35";
                                    if (j["+"](1)["<="](L)) {
                                            "36";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                            "37";
                                            cylinder_item.append(b);
                                        }
                                    "38";
                                    if (k["+"](1)["<="](L)) {
                                            "39";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                            "40";
                                            cylinder_item.append(b);
                                        }
                                }
                            }
                        }
                        "41";
                        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
                        "43";
                        return [ra_item, rb_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "46";
                        "47";
                        "48";
                        "49";
                        "50";
                        "51";
                        running = !running;
                        "52";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "58";
                        var RS_Iter4 = RS_Iterable(ra_item);
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "59";
                            i.visible = false;
                            "60";
                            i = undefined;
                        }
                        "61";
                        var RS_Iter5 = RS_Iterable(rb_item);
                        for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                            i = RS_Iter5[RS_Index5];
                            "62";
                            i.visible = false;
                            "63";
                            i = undefined;
                        }
                        "64";
                        var RS_Iter6 = RS_Iterable(cylinder_item);
                        for (var RS_Index6 = 0; RS_Index6["<"](RS_Iter6.length); RS_Index6++) {
                            i = RS_Iter6[RS_Index6];
                            "65";
                            i.visible = false;
                            "66";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, RS_unpack;
                        "70";
                        "71";
                        "72";
                        "73";
                        "74";
                        clear();
                        "75";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(4, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        cylinder_item = RS_unpack[2];
                        total_item = RS_unpack[3];
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "79";
                        bond_ab = s.number;
                        "80";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "81";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "82";
                        var RS_Iter7 = RS_Iterable(ra_item);
                        for (var RS_Index7 = 0; RS_Index7["<"](RS_Iter7.length); RS_Index7++) {
                            x = RS_Iter7[RS_Index7];
                            "83";
                            x.radius = ra;
                        }
                        "84";
                        var RS_Iter8 = RS_Iterable(rb_item);
                        for (var RS_Index8 = 0; RS_Index8["<"](RS_Iter8.length); RS_Index8++) {
                            y = RS_Iter8[RS_Index8];
                            "85";
                            y.radius = rb;
                        }
                        "86";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "90";
                        ra_int = s.number;
                        "91";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "92";
                        var RS_Iter9 = RS_Iterable(ra_item);
                        for (var RS_Index9 = 0; RS_Index9["<"](RS_Iter9.length); RS_Index9++) {
                            x = RS_Iter9[RS_Index9];
                            "93";
                            x.radius = ra;
                        }
                        "94";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "97";
                        rb_int = s.number;
                        "98";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "99";
                        var RS_Iter10 = RS_Iterable(rb_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            y = RS_Iter10[RS_Index10];
                            "100";
                            y.radius = rb;
                        }
                        "101";
                        return rb;
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "104";
                        "105";
                        "106";
                        "107";
                        "108";
                        L = s.number;
                        "109";
                        clear();
                        "110";
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
                    "5";
                    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({ background: color.black, width: 600, length: 600, center: vector(0, 0, 0) })]);
                    "7";
                    L = 1;
                    "8";
                    bond_ab = 2.77315;
                    "9";
                    ra_int = 1.44;
                    "10";
                    rb_int = .99;
                    "12";
                    ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                    "13";
                    rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                    "15";
                    ra_item = RS_list_decorate([]);
                    "16";
                    rb_item = RS_list_decorate([]);
                    "17";
                    cylinder_item = RS_list_decorate([]);
                    "18";
                    total_item = RS_list_decorate([]);
                    "19";
                    running = false;
                    "21";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"] }
                    });

                    "45";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "57";
                    ;

                    "69";
                    ;

                    "78";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "89";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "96";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "103";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "115";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(4, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    cylinder_item = RS_unpack[2];
                    total_item = RS_unpack[3];
                    "120";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>FCC Lattice Example: Silver Chloride(AgCl) <\/h2><hr>", pos: scene5.title_anchor })]);
                    "124";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "Silver Chloride, with the chemical symbol \\(AgCl \\),  which contains \ntwo type of elements (Silver and Chloride). The two elements \nare arranged in a cubic structure with a Face Center Cubic(FCC) lattice.\nIt is commonly used in photography films and disinfectant products.\n", pos: scene5.title_anchor })]);
                    "130";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "138";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integar Only)</li><li><b>bond_ab</b>: Lattice Constant (\\(10^{-10} \\)meter)</li><li><b><font color = \"grey\">r_a<font color =\"black\"></b>: Atomic Radius of Silver [<font color = \"Grey\">Grey<font color =\"black\">] (\\(10^{-10} \\)meter)</li><li><b><font color = \"green\">r_b<font color =\"black\"></b>: Atomic Radius of Chloride [<font color = \"Green\">Green<font color =\"black\">] (\\(10^{-10} \\)meter)</li></ul>", pos: scene5.title_anchor })]);
                    "140";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "143";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "144";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "146";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n" })]);
                    "149";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "150";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "152";
                    scene5.append_to_caption("\n");
                    "154";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond_ab: " })]);
                    "155";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 2.77315 })]);
                    "157";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "158";
                    scene5.append_to_caption("\n");
                    "160";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "161";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: 1.44 })]);
                    "162";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "164";
                    scene5.append_to_caption("\n");
                    "166";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "167";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: .99 })]);
                    "168";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "170";
                    scene5.append_to_caption("\n");
                    "171";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "174";

                case 133:
                    if (!true) {
                            _context.next = 141;
                            break;
                        }

                    "175";
                    _context.next = 137;
                    return _streamline.await(_filename, 365, null, rate, 1, null, false, [100, true]);

                case 137:
                    "176";
                    if (running) {
                            "177";
                            RS_Iter11 = RS_Iterable(total_item);

                            for (RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                                b = RS_Iter11[RS_Index11];
                                "178";
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
