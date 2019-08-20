
// START JAVASCRIPT
;(function() {"use strict";

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, RS_unpack, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it4, ib4, b, __name__, strings, RS_Iter11, RS_Index11;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    build = function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
                        var RS_ls, b, k, j, i;
                        "35";
                        for (var RS_Index1 = L["-u"](); RS_Index1["<"](L["+"](1)); RS_Index1++) {
                            i = RS_Index1;
                            "36";
                            for (var RS_Index2 = L["-u"](); RS_Index2["<"](L["+"](1)); RS_Index2++) {
                                j = RS_Index2;
                                "37";
                                for (var RS_Index3 = L["-u"](); RS_Index3["<"](L["+"](1)); RS_Index3++) {
                                    k = RS_Index3;
                                    "39";
                                    if (RS_equals(L % 2, 1)) {
                                            "40";
                                            if (RS_equals(abs(i["+"](j)["+"](k)) % 2, 0)) {
                                                    "42";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: ra, color: color.gray(.9) })]);
                                                    "43";
                                                    ra_item.append(b);
                                                    "44";
                                                } else {
                                                    "45";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: color.green })]);
                                                    "46";
                                                    rb_item.append(b);
                                                }
                                            "48";
                                            if (i["+"](1)["<="](L)) {
                                                    "49";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                                    "50";
                                                    cylinder_item.append(b);
                                                }
                                            "51";
                                            if (j["+"](1)["<="](L)) {
                                                    "52";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                                    "53";
                                                    cylinder_item.append(b);
                                                }
                                            "54";
                                            if (k["+"](1)["<="](L)) {
                                                    "55";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                                    "56";
                                                    cylinder_item.append(b);
                                                    "58";
                                                }
                                        } else {
                                            "59";
                                            if (RS_equals(abs(i["+"](j)["+"](k)) % 2, 1)) {
                                                    "61";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: ra, color: color.gray(.9) })]);
                                                    "62";
                                                    ra_item.append(b);
                                                    "63";
                                                } else {
                                                    "64";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: color.green })]);
                                                    "65";
                                                    rb_item.append(b);
                                                }
                                            "66";
                                            if (i["<"](L)) {
                                                    "67";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                                    "68";
                                                    cylinder_item.append(b);
                                                }
                                            "69";
                                            if (j["<"](L)) {
                                                    "70";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                                    "71";
                                                    cylinder_item.append(b);
                                                }
                                            "72";
                                            if (k["<"](L)) {
                                                    "73";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                                    "74";
                                                    cylinder_item.append(b);
                                                }
                                        }
                                }
                            }
                        }
                        "76";
                        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
                        "78";
                        return [ra_item, rb_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "81";
                        "82";
                        "83";
                        "84";
                        "85";
                        "86";
                        running = !running;
                        "87";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "93";
                        var RS_Iter4 = RS_Iterable(ra_item);
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "94";
                            i.visible = false;
                            "95";
                            i = undefined;
                        }
                        "97";
                        var RS_Iter5 = RS_Iterable(rb_item);
                        for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                            i = RS_Iter5[RS_Index5];
                            "98";
                            i.visible = false;
                            "99";
                            i = undefined;
                        }
                        "101";
                        var RS_Iter6 = RS_Iterable(cylinder_item);
                        for (var RS_Index6 = 0; RS_Index6["<"](RS_Iter6.length); RS_Index6++) {
                            i = RS_Iter6[RS_Index6];
                            "102";
                            i.visible = false;
                            "103";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, RS_unpack;
                        "108";
                        "109";
                        "110";
                        "111";
                        "112";
                        clear();
                        "113";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(4, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        cylinder_item = RS_unpack[2];
                        total_item = RS_unpack[3];
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "118";
                        bond_ab = s.number;
                        "119";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "120";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "121";
                        var RS_Iter7 = RS_Iterable(ra_item);
                        for (var RS_Index7 = 0; RS_Index7["<"](RS_Iter7.length); RS_Index7++) {
                            x = RS_Iter7[RS_Index7];
                            "122";
                            x.radius = ra;
                        }
                        "123";
                        var RS_Iter8 = RS_Iterable(rb_item);
                        for (var RS_Index8 = 0; RS_Index8["<"](RS_Iter8.length); RS_Index8++) {
                            y = RS_Iter8[RS_Index8];
                            "124";
                            y.radius = rb;
                        }
                        "125";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "129";
                        ra_int = s.number;
                        "130";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "131";
                        var RS_Iter9 = RS_Iterable(ra_item);
                        for (var RS_Index9 = 0; RS_Index9["<"](RS_Iter9.length); RS_Index9++) {
                            x = RS_Iter9[RS_Index9];
                            "132";
                            x.radius = ra;
                        }
                        "133";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "136";
                        rb_int = s.number;
                        "137";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "138";
                        var RS_Iter10 = RS_Iterable(rb_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            y = RS_Iter10[RS_Index10];
                            "139";
                            y.radius = rb;
                        }
                        "140";
                        return rb;
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "143";
                        "144";
                        "145";
                        "146";
                        "147";
                        L = s.number;
                        "148";
                        clear();
                        "150";
                        scene5.camera.pos = vector(0, 0, 2["*"](L));
                        "151";
                        scene5.center = vector(0, 0, 0);
                        "153";
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
                    ra_int = 1.41;
                    "11";
                    rb_int = .79;
                    "13";
                    ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                    "14";
                    rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                    "18";
                    scene5.autoscale = true;
                    "28";
                    ra_item = RS_list_decorate([]);
                    "29";
                    rb_item = RS_list_decorate([]);
                    "30";
                    cylinder_item = RS_list_decorate([]);
                    "31";
                    total_item = RS_list_decorate([]);
                    "32";
                    running = false;
                    "34";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"] }
                    });

                    "80";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "92";
                    ;

                    "107";
                    ;

                    "117";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "128";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "135";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "142";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "159";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(4, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    cylinder_item = RS_unpack[2];
                    total_item = RS_unpack[3];
                    "164";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>FCC Lattice Example: Silver Chloride(AgCl) <\/h2><hr>", pos: scene5.title_anchor })]);
                    "168";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "Silver Chloride, with the chemical symbol \\(AgCl \\),  which contains \ntwo type of elements (Silver and Chloride). The two elements \nare arranged in a cubic structure with a Face Center Cubic(FCC) lattice.\nIt is commonly used in photography films and disinfectant products.\n", pos: scene5.title_anchor })]);
                    "174";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "182";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integar Only)</li><li><b>bond_ab</b>: Lattice Constant (\\(10^{-10} \\)meter)</li><li><b><font color = \"grey\">r_a<font color =\"black\"></b>: Atomic Radius of Silver [<font color = \"Grey\">Grey<font color =\"black\">] (\\(10^{-10} \\)meter)</li><li><b><font color = \"green\">r_b<font color =\"black\"></b>: Atomic Radius of Chloride [<font color = \"Green\">Green<font color =\"black\">] (\\(10^{-10} \\)meter)</li></ul>", pos: scene5.title_anchor })]);
                    "184";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "186";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the lattice constants below to construct another FCC material.\nPress <b>Enter key</b> after <b>every</b> changes to take effect.\n" })]);
                    "190";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "191";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "194";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "195";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "197";
                    scene5.append_to_caption("\n");
                    "199";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond_ab: " })]);
                    "200";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 2.77315 })]);
                    "202";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "203";
                    scene5.append_to_caption("\n");
                    "205";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "206";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: 1.41 })]);
                    "207";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "209";
                    scene5.append_to_caption("\n");
                    "211";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "212";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: .79 })]);
                    "213";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "215";
                    scene5.append_to_caption("\n");
                    "216";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "221";

                case 135:
                    if (!true) {
                            _context.next = 143;
                            break;
                        }

                    "222";
                    _context.next = 139;
                    return _streamline.await(_filename, 410, null, rate, 1, null, false, [100, true]);

                case 139:
                    "223";
                    if (running) {
                            "224";
                            RS_Iter11 = RS_Iterable(total_item);

                            for (RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                                b = RS_Iter11[RS_Index11];
                                "225";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0) })]);
                            }
                        }
                    _context.next = 135;
                    break;

                case 143:
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
