// START JAVASCRIPT
;(function() {"use strict";

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_ro, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ro_int, ra, rb, ro, ra_item, rb_item, ro_item, cylinder_item, total_item, running, opatom, opbar, RS_unpack, b1, b2, it0, it1, ib1, it2, ib2, it3, ib3, it4, ib4, it5, ib5, b, __name__, strings, RS_Iter18, RS_Index18;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    build = function build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item) {
                        var RS_ls, L1, LB, LN1, v0, b, na, v, x, m, k, j, i;
                        "32";
                        L1 = L;
                        "33";
                        LB = L["-"](1);
                        "34";
                        LN1 = L["-"](1);
                        "36";
                        for (var RS_Index1 = L["-u"](); RS_Index1["<"](L1); RS_Index1++) {
                            i = RS_Index1;
                            "37";
                            for (var RS_Index2 = L["-u"](); RS_Index2["<"](L1); RS_Index2++) {
                                j = RS_Index2;
                                "38";
                                for (var RS_Index3 = L["-u"](); RS_Index3["<"](L1); RS_Index3++) {
                                    k = RS_Index3;
                                    "40";
                                    for (var RS_Index4 = 1["-u"](); RS_Index4["<"](0); RS_Index4++) {
                                        na = RS_Index4;
                                        "41";
                                        v0 = vector(i["+"](1["/"](2)["*"](na)), j["+"](1["/"](2)["*"](na)), k["+"](1["/"](2)["*"](na)));
                                        "42";
                                        b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: v0, radius: ra, color: color.green, opacity: opatom })]);
                                        "43";
                                        ra_item.append(b);
                                        "44";
                                        if (i["<"](LN1)) {
                                                "45";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(1, 0, 0), radius: .01, color: color.white, opacity: opbar })]);
                                                "46";
                                                cylinder_item.append(b);
                                            }
                                        "47";
                                        if (j["<"](LN1)) {
                                                "48";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(0, 1, 0), radius: .01, color: color.white, opacity: opbar })]);
                                                "49";
                                                cylinder_item.append(b);
                                            }
                                        "50";
                                        if (k["<"](LN1)) {
                                                "51";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(0, 0, 1), radius: .01, color: color.white, opacity: opbar })]);
                                                "52";
                                                cylinder_item.append(b);
                                            }
                                    }
                                    "54";
                                    if (i["<"](LB) && j["<"](LB) && k["<"](LB)) {
                                            "55";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: vector(0, .7, 1), opacity: opatom })]);
                                            "56";
                                            rb_item.append(b);
                                            "58";
                                            v = RS_list_decorate([vector(i["-"](1["/"](2)), j, k), vector(i["+"](1["/"](2)), j, k), vector(i, j["-"](1["/"](2)), k), vector(i, j["+"](1["/"](2)), k), vector(i, j, k["-"](1["/"](2))), vector(i, j, k["+"](1["/"](2)))]);
                                            "60";
                                            var RS_Iter5 = RS_Iterable(v);
                                            for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                                                x = RS_Iter5[RS_Index5];
                                                "61";
                                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: x, radius: ro, color: color.red, opacity: opatom })]);
                                                "62";
                                                ro_item.append(b);
                                            }
                                            "63";
                                            for (var RS_Index6 = 2; RS_Index6["<"](6); RS_Index6++) {
                                                m = RS_Index6;
                                                "64";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[0], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[0]), radius: .01, color: color.white, opacity: opbar })]);
                                                "65";
                                                cylinder_item.append(b);
                                                "66";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[1], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[1]), radius: .01, color: color.white, opacity: opbar })]);
                                                "67";
                                                cylinder_item.append(b);
                                            }
                                            "68";
                                            for (var RS_Index7 = 4; RS_Index7["<"](6); RS_Index7++) {
                                                m = RS_Index7;
                                                "69";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[2], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[2]), radius: .01, color: color.white, opacity: opbar })]);
                                                "70";
                                                cylinder_item.append(b);
                                                "71";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[3], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[3]), radius: .01, color: color.white, opacity: opbar })]);
                                                "72";
                                                cylinder_item.append(b);
                                            }
                                        }
                                }
                            }
                        }
                        "74";
                        total_item = ra_item["+"](rb_item)["+"](ro_item)["+"](cylinder_item);
                        "76";
                        return [ra_item, rb_item, ro_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "79";
                        "80";
                        "81";
                        "82";
                        "83";
                        "84";
                        "85";
                        running = !running;
                        "86";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "92";
                        var RS_Iter8 = RS_Iterable(ra_item);
                        for (var RS_Index8 = 0; RS_Index8["<"](RS_Iter8.length); RS_Index8++) {
                            i = RS_Iter8[RS_Index8];
                            "93";
                            i.visible = false;
                            "94";
                            i = undefined;
                        }
                        "95";
                        var RS_Iter9 = RS_Iterable(rb_item);
                        for (var RS_Index9 = 0; RS_Index9["<"](RS_Iter9.length); RS_Index9++) {
                            i = RS_Iter9[RS_Index9];
                            "96";
                            i.visible = false;
                            "97";
                            i = undefined;
                        }
                        "98";
                        var RS_Iter10 = RS_Iterable(ro_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            i = RS_Iter10[RS_Index10];
                            "99";
                            i.visible = false;
                            "100";
                            i = undefined;
                        }
                        "101";
                        var RS_Iter11 = RS_Iterable(cylinder_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            i = RS_Iter11[RS_Index11];
                            "102";
                            i.visible = false;
                            "103";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, RS_unpack;
                        "107";
                        "108";
                        "109";
                        "110";
                        "111";
                        "112";
                        clear();
                        "113";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(5, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        ro_item = RS_unpack[2];
                        cylinder_item = RS_unpack[3];
                        total_item = RS_unpack[4];
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, ro, x, y, z;
                        "117";
                        bond_ab = s.number;
                        "118";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "119";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "120";
                        ro = ro_int["/"](2)["/"](bond_ab)["*"](1);
                        "121";
                        var RS_Iter12 = RS_Iterable(ra_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            x = RS_Iter12[RS_Index12];
                            "122";
                            x.radius = ra;
                        }
                        "123";
                        var RS_Iter13 = RS_Iterable(rb_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            y = RS_Iter13[RS_Index13];
                            "124";
                            y.radius = rb;
                        }
                        "125";
                        var RS_Iter14 = RS_Iterable(ro_item);
                        for (var RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                            z = RS_Iter14[RS_Index14];
                            "126";
                            z.radius = ro;
                        }
                        "127";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "131";
                        ra_int = s.number;
                        "132";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "133";
                        var RS_Iter15 = RS_Iterable(ra_item);
                        for (var RS_Index15 = 0; RS_Index15["<"](RS_Iter15.length); RS_Index15++) {
                            x = RS_Iter15[RS_Index15];
                            "134";
                            x.radius = ra;
                        }
                        "135";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "138";
                        rb_int = s.number;
                        "139";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "140";
                        var RS_Iter16 = RS_Iterable(rb_item);
                        for (var RS_Index16 = 0; RS_Index16["<"](RS_Iter16.length); RS_Index16++) {
                            y = RS_Iter16[RS_Index16];
                            "141";
                            y.radius = rb;
                        }
                        "142";
                        return rb;
                    };

                    set_ro = function set_ro(s) {
                        var RS_ls, ro_int, ro, y;
                        "146";
                        ro_int = s.number;
                        "147";
                        ro = ro_int["/"](2)["/"](bond_ab)["*"](1);
                        "148";
                        var RS_Iter17 = RS_Iterable(ro_item);
                        for (var RS_Index17 = 0; RS_Index17["<"](RS_Iter17.length); RS_Index17++) {
                            y = RS_Iter17[RS_Index17];
                            "149";
                            y.radius = ro;
                        }
                        "150";
                        return ro;
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "154";
                        "155";
                        "156";
                        "157";
                        "158";
                        "159";
                        L = s.number;
                        "160";
                        clear();
                        "161";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(5, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        ro_item = RS_unpack[2];
                        cylinder_item = RS_unpack[3];
                        total_item = RS_unpack[4];
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
                    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({ background: color.black, width: 600, length: 600, center: vector(1["-u"](), 1["-u"](), 1["-u"]()) })]);
                    "8";
                    L = 1;
                    "9";
                    bond_ab = 3.905;
                    "10";
                    ra_int = 2.15;
                    "11";
                    rb_int = 1.47;
                    "12";
                    ro_int = .74;
                    "14";
                    ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                    "15";
                    rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                    "16";
                    ro = ro_int["/"](2)["/"](bond_ab)["*"](1);
                    "18";
                    ra_item = RS_list_decorate([]);
                    "19";
                    rb_item = RS_list_decorate([]);
                    "20";
                    ro_item = RS_list_decorate([]);
                    "21";
                    cylinder_item = RS_list_decorate([]);
                    "22";
                    total_item = RS_list_decorate([]);
                    "24";
                    running = false;
                    "26";
                    opatom = 1;
                    "27";
                    opbar = 1;
                    "31";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "ro_item", "cylinder_item", "total_item"] }
                    });

                    "78";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "91";
                    ;

                    "106";
                    ;

                    "116";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "130";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "137";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "145";
                    ;
                    if (!set_ro.__argnames__) Object.defineProperties(set_ro, {
                        __argnames__: { value: ["s"] }
                    });

                    "153";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "166";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(5, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    ro_item = RS_unpack[2];
                    cylinder_item = RS_unpack[3];
                    total_item = RS_unpack[4];
                    "171";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>Perovskite Example: Strontium titanate(SrTiO3)<\/h2><hr>", pos: scene5.title_anchor })]);
                    "175";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "Perovskite is used to represent any crystal structure with the same type as \\(CaTiO_{3} \\) It is a promising candidate material insolar cell and laser. \nThe default example below shows SrTiO3.\n", pos: scene5.title_anchor })]);
                    "181";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "190";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cell(Integar Only)</li><li><b>bond_ab</b>: Lattice Constant (\\(10^{-10} \\)meters)</li><li><b><font color = \"Green\">r_a<font color =\"black\"></b>: Atomic Radius of Strontium [<font color = \"Green\">Green<font color =\"black\">] (\\(10^{-10} \\)meter)</li><li><b><font color =\"Blue\">r_b<font color =\"black\"></b>: Atomic Radius of Titanium [<font color = \"Blue\">Green<font color =\"black\">] (\\(10^{-10} \\)meter)</li><li><b><font color =\"Red\">r_o<font color =\"black\"></b>: Atomic Radius of Oxygen [<font color =\"Red\">Red<font color =\"black\">] (\\(10^{-10} \\)meter)</li></ul>", pos: scene5.title_anchor })]);
                    "192";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "195";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "196";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "198";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press enter key after modifying parameters)\n" })]);
                    "206";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "207";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "209";
                    scene5.append_to_caption("\n");
                    "211";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond_ab: " })]);
                    "212";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 3.905 })]);
                    "214";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "215";
                    scene5.append_to_caption("\n");
                    "217";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "218";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: 2.15 })]);
                    "219";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "221";
                    scene5.append_to_caption("\n");
                    "223";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "224";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: 1.47 })]);
                    "225";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "227";
                    scene5.append_to_caption("\n");
                    "229";
                    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ro: " })]);
                    "230";
                    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ro, text: .74 })]);
                    "231";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(10^{-10} \\)meter)" })]);
                    "233";
                    scene5.append_to_caption("\n");
                    "235";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "238";

                case 156:
                    if (!true) {
                            _context.next = 164;
                            break;
                        }

                    "239";
                    _context.next = 160;
                    return _streamline.await(_filename, 473, null, rate, 1, null, false, [100, true]);

                case 160:
                    "240";
                    if (running) {
                            "241";
                            RS_Iter18 = RS_Iterable(total_item);

                            for (RS_Index18 = 0; RS_Index18["<"](RS_Iter18.length); RS_Index18++) {
                                b = RS_Iter18[RS_Index18];
                                "242";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(1["-u"](), 1["-u"](), 1["-u"]()) })]);
                            }
                        }
                    _context.next = 156;
                    break;

                case 164:
                case "end":
                    return _context.stop();
            }
        }
    }, _$$main$$, this);
}), 0, 1);

var RS_modules = {};
var ra_item, rb_item, ro_item, cylinder_item, total_item, running;
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
