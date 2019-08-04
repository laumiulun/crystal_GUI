// Cubic structure
// START JAVASCRIPT
;(function() {"use strict";

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, b1, b2, it0, it1, ib1, it2, ib2, it3, ib3, b, __name__, strings, RS_Iter12, RS_Index12;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    build = function build(L, ra) {
                        var RS_ls, L1, b, k, j, i;
                        "32";
                        "33";
                        "34";
                        "35";
                        "36";
                        L1 = L["+"](1);
                        "37";
                        for (var RS_Index1 = L1["-u"](); RS_Index1["<"](L1); RS_Index1++) {
                            i = RS_Index1;
                            "38";
                            for (var RS_Index2 = L1["-u"](); RS_Index2["<"](L1); RS_Index2++) {
                                j = RS_Index2;
                                "39";
                                for (var RS_Index3 = L1["-u"](); RS_Index3["<"](L1); RS_Index3++) {
                                    k = RS_Index3;
                                    "40";
                                    if (RS_equals(L % 2, 0)) {
                                            "41";
                                            if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                                    "42";
                                                    if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                            "43";
                                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: ra, color: color.green })]);
                                                            "44";
                                                            ra_item.append(b);
                                                        }
                                                }
                                            "45";
                                            if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                    "46";
                                                    if (i["+"](1)["<="](L1["-"](1))) {
                                                            "47";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(2, 0, 0), radius: .01, color: color.white })]);
                                                            "48";
                                                            cylinder_item.append(b);
                                                        }
                                                    "49";
                                                    if (j["+"](1)["<="](L1["-"](1))) {
                                                            "50";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 2, 0), radius: .01, color: color.white })]);
                                                            "51";
                                                            cylinder_item.append(b);
                                                        }
                                                    "52";
                                                    if (k["+"](1)["<="](L1["-"](1))) {
                                                            "53";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 0, 2), radius: .01, color: color.white })]);
                                                            "54";
                                                            cylinder_item.append(b);
                                                            "55";
                                                        }
                                                }
                                        } else {
                                            "56";
                                            if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                                    "57";
                                                    if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                            "58";
                                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), radius: ra, color: color.green })]);
                                                            "59";
                                                            ra_item.append(b);
                                                        }
                                                }
                                            "60";
                                            if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                    "61";
                                                    if (i["<"](L1["-"](2))) {
                                                            "62";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(2, 0, 0), radius: .01, color: color.white })]);
                                                            "63";
                                                            cylinder_item.append(b);
                                                        }
                                                    "64";
                                                    if (j["<"](L1["-"](2))) {
                                                            "65";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(0, 2, 0), radius: .01, color: color.white })]);
                                                            "66";
                                                            cylinder_item.append(b);
                                                        }
                                                    "67";
                                                    if (k["<"](L1["-"](2))) {
                                                            "68";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(0, 0, 2), radius: .01, color: color.white })]);
                                                            "69";
                                                            cylinder_item.append(b);
                                                        }
                                                }
                                        }
                                }
                            }
                        }
                        "71";
                        total_item = ra_item["+"](cylinder_item);
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "77";
                        "78";
                        "79";
                        "80";
                        "81";
                        "82";
                        running = !running;
                        "83";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "89";
                        "90";
                        "91";
                        "92";
                        "93";
                        var RS_Iter4 = RS_Iterable(ra_item);
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "94";
                            i.visible = false;
                            "95";
                            i = undefined;
                        }
                        "96";
                        var RS_Iter5 = RS_Iterable(rb_item);
                        for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                            i = RS_Iter5[RS_Index5];
                            "97";
                            i.visible = false;
                            "98";
                            i = undefined;
                        }
                        "99";
                        var RS_Iter6 = RS_Iterable(cylinder_item);
                        for (var RS_Index6 = 0; RS_Index6["<"](RS_Iter6.length); RS_Index6++) {
                            i = RS_Iter6[RS_Index6];
                            "100";
                            i.visible = false;
                            "101";
                            i = undefined;
                        }
                        "102";
                        var RS_Iter7 = RS_Iterable(total_item);
                        for (var RS_Index7 = 0; RS_Index7["<"](RS_Iter7.length); RS_Index7++) {
                            i = RS_Iter7[RS_Index7];
                            "103";
                            i.visible = false;
                            "104";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls;
                        "108";
                        "109";
                        "110";
                        "111";
                        "112";
                        "113";
                        clear();
                        "114";
                        scene5.forward = vector(0, 0, 1.7["-u"]());
                        "116";
                        build(L, ra);
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "121";
                        bond_ab = s.number;
                        "122";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "123";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "124";
                        var RS_Iter8 = RS_Iterable(ra_item);
                        for (var RS_Index8 = 0; RS_Index8["<"](RS_Iter8.length); RS_Index8++) {
                            x = RS_Iter8[RS_Index8];
                            "125";
                            x.radius = ra;
                        }
                        "126";
                        var RS_Iter9 = RS_Iterable(rb_item);
                        for (var RS_Index9 = 0; RS_Index9["<"](RS_Iter9.length); RS_Index9++) {
                            y = RS_Iter9[RS_Index9];
                            "127";
                            y.radius = rb;
                        }
                        "128";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "132";
                        ra_int = s.number;
                        "133";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "134";
                        var RS_Iter10 = RS_Iterable(ra_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            x = RS_Iter10[RS_Index10];
                            "135";
                            x.radius = ra;
                        }
                        "136";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "139";
                        rb_int = s.number;
                        "140";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "141";
                        var RS_Iter11 = RS_Iterable(rb_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            y = RS_Iter11[RS_Index11];
                            "142";
                            y.radius = rb;
                        }
                        "143";
                        return rb;
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L;
                        "146";
                        "147";
                        "148";
                        "149";
                        "150";
                        "151";
                        L = s.number;
                        "152";
                        clear();
                        "153";
                        scene5.camera.pos = vector(0, 0, 2["*"](L));
                        "154";
                        scene5.center = vector(0, 0, 0);
                        "155";
                        print("Center", scene5.center);
                        "156";
                        print("Camera", scene5.camera.pos);
                        "158";
                        build(L, ra);
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
                    "16";
                    scene5.autoscale = true;
                    "25";
                    ra_item = RS_list_decorate([]);
                    "26";
                    rb_item = RS_list_decorate([]);
                    "27";
                    cylinder_item = RS_list_decorate([]);
                    "28";
                    total_item = RS_list_decorate([]);
                    "29";
                    running = false;
                    "31";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra"] }
                    });

                    "76";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "88";
                    ;

                    "107";
                    ;

                    "120";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "131";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "138";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "145";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "165";
                    build(L, ra);
                    "170";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>Cubic Structure Example<\/h2><hr>", pos: scene5.title_anchor })]);
                    "173";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "The cubic structure is the simplest example of a crystal lattice. Each cubic units cell have a one atom inside, with a coordinations number of \n8. ", pos: scene5.title_anchor })]);
                    "179";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "186";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integar Only)</li><li><b>bond_ab</b>: Lattice Constant(\\(   \\unicode{x212B}   \\))</li><li><b><font color = \"green\">r_a<font color =\"black\"></b>: Atomic Radius[<font color = \"Green\">Green<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li></ul>", pos: scene5.title_anchor })]);
                    "188";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "191";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "192";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "194";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n" })]);
                    "197";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "198";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "200";
                    scene5.append_to_caption("\n");
                    "202";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond_ab: " })]);
                    "203";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 2.77315 })]);
                    "205";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "206";
                    scene5.append_to_caption("\n");
                    "208";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "209";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: 1.44 })]);
                    "210";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "212";
                    scene5.append_to_caption("\n");
                    "218";
                    scene5.append_to_caption("\n");
                    "219";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "222";

                case 124:
                    if (!true) {
                            _context.next = 132;
                            break;
                        }

                    "223";
                    _context.next = 128;
                    return _streamline.await(_filename, 414, null, rate, 1, null, false, [100, true]);

                case 128:
                    "224";
                    if (running) {
                            "225";
                            RS_Iter12 = RS_Iterable(total_item);

                            for (RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                                b = RS_Iter12[RS_Index12];
                                "226";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0) })]);
                            }
                        }
                    _context.next = 124;
                    break;

                case 132:
                case "end":
                    return _context.stop();
            }
        }
    }, _$$main$$, this);
}), 0, 1);

var RS_modules = {};
var ra_item, rb_item, cylinder_item, total_item, running, scene5;
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
