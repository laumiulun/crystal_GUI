// START JAVASCRIPT
;(function() {"use strict";

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_ro, set_scale_factor, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ro_int, bond_default_text, ra_default_text, rb_default_text, ro_default_text, scale_factor, scale_default_text, ra, rb, ro, ra_item, rb_item, ro_item, cylinder_item, total_item, running, opatom, opbar, RS_unpack, b1, b2, it0, it1, ib1, it2, ib2, it3, ib3, it4, ib4, it5, ib5, it6, ib6, b, __name__, strings, RS_Iter21, RS_Index21;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    build = function build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item) {
                        var RS_ls, L1, LB, LN1, v0, b, na, v, x, m, k, j, i;
                        "49";
                        L1 = L;
                        "50";
                        LB = L["-"](1);
                        "51";
                        LN1 = L["-"](1);
                        "53";
                        for (var RS_Index1 = L["-u"](); RS_Index1["<"](L1); RS_Index1++) {
                            i = RS_Index1;
                            "54";
                            for (var RS_Index2 = L["-u"](); RS_Index2["<"](L1); RS_Index2++) {
                                j = RS_Index2;
                                "55";
                                for (var RS_Index3 = L["-u"](); RS_Index3["<"](L1); RS_Index3++) {
                                    k = RS_Index3;
                                    "57";
                                    for (var RS_Index4 = 1["-u"](); RS_Index4["<"](0); RS_Index4++) {
                                        na = RS_Index4;
                                        "58";
                                        v0 = vector(i["+"](1["/"](2)["*"](na)), j["+"](1["/"](2)["*"](na)), k["+"](1["/"](2)["*"](na)));
                                        "59";
                                        b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: v0, radius: ra, color: color.green, opacity: opatom })]);
                                        "60";
                                        ra_item.append(b);
                                        "61";
                                        if (i["<"](LN1)) {
                                                "62";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(1, 0, 0), radius: .01, color: color.white, opacity: opbar })]);
                                                "63";
                                                cylinder_item.append(b);
                                            }
                                        "64";
                                        if (j["<"](LN1)) {
                                                "65";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(0, 1, 0), radius: .01, color: color.white, opacity: opbar })]);
                                                "66";
                                                cylinder_item.append(b);
                                            }
                                        "67";
                                        if (k["<"](LN1)) {
                                                "68";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(0, 0, 1), radius: .01, color: color.white, opacity: opbar })]);
                                                "69";
                                                cylinder_item.append(b);
                                            }
                                    }
                                    "71";
                                    if (i["<"](LB) && j["<"](LB) && k["<"](LB)) {
                                            "72";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: vector(0, .7, 1), opacity: opatom })]);
                                            "73";
                                            rb_item.append(b);
                                            "75";
                                            v = RS_list_decorate([vector(i["-"](1["/"](2)), j, k), vector(i["+"](1["/"](2)), j, k), vector(i, j["-"](1["/"](2)), k), vector(i, j["+"](1["/"](2)), k), vector(i, j, k["-"](1["/"](2))), vector(i, j, k["+"](1["/"](2)))]);
                                            "77";
                                            var RS_Iter5 = RS_Iterable(v);
                                            for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                                                x = RS_Iter5[RS_Index5];
                                                "78";
                                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: x, radius: ro, color: color.red, opacity: opatom })]);
                                                "79";
                                                ro_item.append(b);
                                            }
                                            "80";
                                            for (var RS_Index6 = 2; RS_Index6["<"](6); RS_Index6++) {
                                                m = RS_Index6;
                                                "81";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[0], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[0]), radius: .01, color: color.white, opacity: opbar })]);
                                                "82";
                                                cylinder_item.append(b);
                                                "83";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[1], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[1]), radius: .01, color: color.white, opacity: opbar })]);
                                                "84";
                                                cylinder_item.append(b);
                                            }
                                            "85";
                                            for (var RS_Index7 = 4; RS_Index7["<"](6); RS_Index7++) {
                                                m = RS_Index7;
                                                "86";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[2], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[2]), radius: .01, color: color.white, opacity: opbar })]);
                                                "87";
                                                cylinder_item.append(b);
                                                "88";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[3], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[3]), radius: .01, color: color.white, opacity: opbar })]);
                                                "89";
                                                cylinder_item.append(b);
                                            }
                                        }
                                }
                            }
                        }
                        "91";
                        total_item = ra_item["+"](rb_item)["+"](ro_item)["+"](cylinder_item);
                        "93";
                        return [ra_item, rb_item, ro_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "96";
                        "97";
                        "98";
                        "99";
                        "100";
                        "101";
                        "102";
                        running = !running;
                        "103";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "109";
                        var RS_Iter8 = RS_Iterable(ra_item);
                        for (var RS_Index8 = 0; RS_Index8["<"](RS_Iter8.length); RS_Index8++) {
                            i = RS_Iter8[RS_Index8];
                            "110";
                            i.visible = false;
                            "111";
                            i = undefined;
                        }
                        "112";
                        var RS_Iter9 = RS_Iterable(rb_item);
                        for (var RS_Index9 = 0; RS_Index9["<"](RS_Iter9.length); RS_Index9++) {
                            i = RS_Iter9[RS_Index9];
                            "113";
                            i.visible = false;
                            "114";
                            i = undefined;
                        }
                        "115";
                        var RS_Iter10 = RS_Iterable(ro_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            i = RS_Iter10[RS_Index10];
                            "116";
                            i.visible = false;
                            "117";
                            i = undefined;
                        }
                        "118";
                        var RS_Iter11 = RS_Iterable(cylinder_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            i = RS_Iter11[RS_Index11];
                            "119";
                            i.visible = false;
                            "120";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, RS_unpack;
                        "124";
                        "125";
                        "126";
                        "127";
                        "128";
                        "129";
                        clear();
                        "130";
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
                        "134";
                        bond_ab = s.number;
                        "135";
                        ra = ra_int["/"](bond_ab)["*"](scale_factor);
                        "136";
                        rb = rb_int["/"](bond_ab)["*"](scale_factor);
                        "137";
                        ro = ro_int["/"](bond_ab)["*"](scale_factor);
                        "138";
                        var RS_Iter12 = RS_Iterable(ra_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            x = RS_Iter12[RS_Index12];
                            "139";
                            x.radius = ra;
                        }
                        "140";
                        var RS_Iter13 = RS_Iterable(rb_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            y = RS_Iter13[RS_Index13];
                            "141";
                            y.radius = rb;
                        }
                        "142";
                        var RS_Iter14 = RS_Iterable(ro_item);
                        for (var RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                            z = RS_Iter14[RS_Index14];
                            "143";
                            z.radius = ro;
                        }
                        "144";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "148";
                        ra_int = s.number;
                        "149";
                        ra = ra_int["/"](bond_ab)["*"](scale_factor);
                        "150";
                        var RS_Iter15 = RS_Iterable(ra_item);
                        for (var RS_Index15 = 0; RS_Index15["<"](RS_Iter15.length); RS_Index15++) {
                            x = RS_Iter15[RS_Index15];
                            "151";
                            x.radius = ra;
                        }
                        "152";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "155";
                        rb_int = s.number;
                        "156";
                        rb = rb_int["/"](bond_ab)["*"](scale_factor);
                        "157";
                        var RS_Iter16 = RS_Iterable(rb_item);
                        for (var RS_Index16 = 0; RS_Index16["<"](RS_Iter16.length); RS_Index16++) {
                            y = RS_Iter16[RS_Index16];
                            "158";
                            y.radius = rb;
                        }
                        "159";
                        return rb;
                    };

                    set_ro = function set_ro(s) {
                        var RS_ls, ro_int, ro, y;
                        "163";
                        ro_int = s.number;
                        "164";
                        ro = ro_int["/"](bond_ab)["*"](scale_factor);
                        "165";
                        var RS_Iter17 = RS_Iterable(ro_item);
                        for (var RS_Index17 = 0; RS_Index17["<"](RS_Iter17.length); RS_Index17++) {
                            y = RS_Iter17[RS_Index17];
                            "166";
                            y.radius = ro;
                        }
                        "167";
                        return ro;
                    };

                    set_scale_factor = function set_scale_factor(s) {
                        var RS_ls, scale_factor, ra, rb, ro, x, y, z;
                        "170";
                        scale_factor = s.number;
                        "171";
                        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "172";
                        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "173";
                        ro = ro_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "174";
                        var RS_Iter18 = RS_Iterable(ra_item);
                        for (var RS_Index18 = 0; RS_Index18["<"](RS_Iter18.length); RS_Index18++) {
                            x = RS_Iter18[RS_Index18];
                            "175";
                            x.radius = ra;
                        }
                        "176";
                        var RS_Iter19 = RS_Iterable(rb_item);
                        for (var RS_Index19 = 0; RS_Index19["<"](RS_Iter19.length); RS_Index19++) {
                            y = RS_Iter19[RS_Index19];
                            "177";
                            y.radius = rb;
                        }
                        "178";
                        var RS_Iter20 = RS_Iterable(ro_item);
                        for (var RS_Index20 = 0; RS_Index20["<"](RS_Iter20.length); RS_Index20++) {
                            z = RS_Iter20[RS_Index20];
                            "179";
                            z.radius = ro;
                        }
                        "180";
                        return [scale_factor, ra, rb, ro];
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "184";
                        "185";
                        "186";
                        "187";
                        "188";
                        "189";
                        L = s.number;
                        "190";
                        clear();
                        "191";
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
                    "16";
                    L = 1;
                    "17";
                    bond_ab = 3.79;
                    "18";
                    ra_int = 1.14;
                    "19";
                    rb_int = .75;
                    "20";
                    ro_int = 1.21;
                    "22";
                    bond_default_text = str(bond_ab);
                    "23";
                    ra_default_text = str(ra_int);
                    "24";
                    rb_default_text = str(rb_int);
                    "25";
                    ro_default_text = str(ro_int);
                    "28";
                    scale_factor = .5;
                    "29";
                    scale_default_text = str(scale_factor);
                    "31";
                    ra = ra_int["/"](bond_ab)["*"](scale_factor);
                    "32";
                    rb = rb_int["/"](bond_ab)["*"](scale_factor);
                    "33";
                    ro = ro_int["/"](bond_ab)["*"](scale_factor);
                    "35";
                    ra_item = RS_list_decorate([]);
                    "36";
                    rb_item = RS_list_decorate([]);
                    "37";
                    ro_item = RS_list_decorate([]);
                    "38";
                    cylinder_item = RS_list_decorate([]);
                    "39";
                    total_item = RS_list_decorate([]);
                    "41";
                    running = false;
                    "43";
                    opatom = 1;
                    "44";
                    opbar = 1;
                    "48";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "ro_item", "cylinder_item", "total_item"] }
                    });

                    "95";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "108";
                    ;

                    "123";
                    ;

                    "133";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "147";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "154";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "162";
                    ;
                    if (!set_ro.__argnames__) Object.defineProperties(set_ro, {
                        __argnames__: { value: ["s"] }
                    });

                    "169";
                    ;
                    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
                        __argnames__: { value: ["s"] }
                    });

                    "183";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "196";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(5, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    ro_item = RS_unpack[2];
                    cylinder_item = RS_unpack[3];
                    total_item = RS_unpack[4];
                    "201";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>Perovskite Example: Calcium Titanate (<b> CaTiO<sub>3<\/sub> </b>)</h2><hr>", pos: scene5.title_anchor })]);
                    "232";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\nA <b>Perovskite</b> is a colourless mineral of Calcium Titanate with the chemical formula <b> CaTiO<sub>3</sub> </b>. \nIt is discovered by German mineralogist Gustave Rose who named it after a Russian mineralogist\nLev Alexeievitch Perovskite. Later, perovskites are referred to a family of materials with the \nsame crystal structure as <b> CaTiO<sub>3</sub> </b>. So the general chemical formula for this category \nof perovskite compounds is <b> ABX<sub>3</sub> </b>, where A is a metal cation (positively charged ion), \nB is a cation and X is an anion (negatively charged ion).  If X is oxygen, the sub-category can also be \nrepresented as <b> ABO<sub>3</sub> </b>.\n\n<b> CaTiO<sub>3</sub> </b> consists of three types of ions: positive Calcium ions (symbol: Ca+), Titanium \nions (symbol: Ti+) and negative Oxygen ions (symbol: O-) which alternate with each other in each of the \nthree dimensions. In a unit cell, Ca+ occupies the corners,  Ti+ occupies the center of the lattice and \nO- are at the center of faces. \n\nSimilarly, <b> SrTiO<sub>3</sub> </b> (Strontium Titanate) consists of three types of ions: positive \nStrontium ions (symbol: Sr+), Titanium ions (symbol: Ti+) and negative Oxygen ions (symbol: O-) in the \nsame way. It is one of the few materials with ideal perovskite structure (no slight distortion). \n\nPerovskites are of great importance in material science and can be widely applied to photovoltaics, laser, \nsemiconductors and so on. \n\n<b>Perovskite solar cells</b>: Solar cells with perovskite structures have shown remarkable progress in \nimproving energy conversion efficiency, from reports of about 3% in 2006 to over 24% in 2019 and thus are \nthought to be a frontier energy solution.  Department of Energy is of great interest in research to increase \nthe efficiency and lifetime of hybrid organic-inorganic perovskite solar cells. Targeted materials include \nmethylammonium lead halide, i.e., <b> CH<sub>3</sub>NH<sub>3</sub>PbX<sub>3</sub> </b>, where X = I, Br or Cl.\n\nThere are two GUI files for Ideal Perovskite Structure solids. One for Calcium Titanate (<b> CaTiO<sub>3</sub> </b>), and \none for Strontium Titanate (<b> SrTiO<sub>3</sub> </b>)\n\n", pos: scene5.title_anchor })]);
                    "238";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "247";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integar Only)</li><li><b>bond</b>: distance between two closest Ca+ ions </li><li><b><font color =\"Green\">r_a<font color =\"black\"></b>: ionic radius of Ca+ [<font color = \"Green\">Green<font color =\"black\">] </li><li><b><font color =\"Blue\">r_b<font color =\"black\"></b>: ionic radius of Ti+ [<font color =\"Blue\">Blue<font color =\"black\">] </li><li><b><font color =\"Red\">r_o<font color =\"black\"></b>: ionic radius of O- [<font color =\"Red\">Red<font color =\"black\">] </li></ul>", pos: scene5.title_anchor })]);
                    "249";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "252";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "253";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "255";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n" })]);
                    "259";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "260";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "261";
                    scene5.append_to_caption("\n");
                    "263";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond: " })]);
                    "264";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: bond_default_text })]);
                    "265";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "266";
                    scene5.append_to_caption("\n");
                    "268";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "269";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text })]);
                    "270";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "271";
                    scene5.append_to_caption("\n");
                    "273";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "274";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: rb_default_text })]);
                    "275";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "276";
                    scene5.append_to_caption("\n");
                    "278";
                    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ro: " })]);
                    "279";
                    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ro, text: ro_default_text })]);
                    "280";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "281";
                    scene5.append_to_caption("\n");
                    "285";
                    it6 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "scale: " })]);
                    "286";
                    ib6 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text })]);
                    "287";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "( Must be less than or equal to 1. A value less than 1 is used for an exploded view. )" })]);
                    "292";
                    scene5.append_to_caption("\n\n");
                    "295";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "298";

                case 180:
                    if (!true) {
                            _context.next = 188;
                            break;
                        }

                    "299";
                    _context.next = 184;
                    return _streamline.await(_filename, 532, null, rate, 1, null, false, [100, true]);

                case 184:
                    "300";
                    if (running) {
                            "301";
                            RS_Iter21 = RS_Iterable(total_item);

                            for (RS_Index21 = 0; RS_Index21["<"](RS_Iter21.length); RS_Index21++) {
                                b = RS_Iter21[RS_Index21];
                                "302";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0) })]);
                            }
                        }
                    _context.next = 180;
                    break;

                case 188:
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
