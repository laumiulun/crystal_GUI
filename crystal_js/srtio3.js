
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
                        "48";
                        L1 = L;
                        "49";
                        LB = L["-"](1);
                        "50";
                        LN1 = L["-"](1);
                        "52";
                        for (var RS_Index1 = L["-u"](); RS_Index1["<"](L1); RS_Index1++) {
                            i = RS_Index1;
                            "53";
                            for (var RS_Index2 = L["-u"](); RS_Index2["<"](L1); RS_Index2++) {
                                j = RS_Index2;
                                "54";
                                for (var RS_Index3 = L["-u"](); RS_Index3["<"](L1); RS_Index3++) {
                                    k = RS_Index3;
                                    "56";
                                    for (var RS_Index4 = 1["-u"](); RS_Index4["<"](0); RS_Index4++) {
                                        na = RS_Index4;
                                        "57";
                                        v0 = vector(i["+"](1["/"](2)["*"](na)), j["+"](1["/"](2)["*"](na)), k["+"](1["/"](2)["*"](na)));
                                        "58";
                                        b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: v0, radius: ra, color: color.green, opacity: opatom })]);
                                        "59";
                                        ra_item.append(b);
                                        "60";
                                        if (i["<"](LN1)) {
                                                "61";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(1, 0, 0), radius: .01, color: color.white, opacity: opbar })]);
                                                "62";
                                                cylinder_item.append(b);
                                            }
                                        "63";
                                        if (j["<"](LN1)) {
                                                "64";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(0, 1, 0), radius: .01, color: color.white, opacity: opbar })]);
                                                "65";
                                                cylinder_item.append(b);
                                            }
                                        "66";
                                        if (k["<"](LN1)) {
                                                "67";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(0, 0, 1), radius: .01, color: color.white, opacity: opbar })]);
                                                "68";
                                                cylinder_item.append(b);
                                            }
                                    }
                                    "70";
                                    if (i["<"](LB) && j["<"](LB) && k["<"](LB)) {
                                            "71";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: vector(0, .7, 1), opacity: opatom })]);
                                            "72";
                                            rb_item.append(b);
                                            "74";
                                            v = RS_list_decorate([vector(i["-"](1["/"](2)), j, k), vector(i["+"](1["/"](2)), j, k), vector(i, j["-"](1["/"](2)), k), vector(i, j["+"](1["/"](2)), k), vector(i, j, k["-"](1["/"](2))), vector(i, j, k["+"](1["/"](2)))]);
                                            "76";
                                            var RS_Iter5 = RS_Iterable(v);
                                            for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                                                x = RS_Iter5[RS_Index5];
                                                "77";
                                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: x, radius: ro, color: color.red, opacity: opatom })]);
                                                "78";
                                                ro_item.append(b);
                                            }
                                            "79";
                                            for (var RS_Index6 = 2; RS_Index6["<"](6); RS_Index6++) {
                                                m = RS_Index6;
                                                "80";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[0], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[0]), radius: .01, color: color.white, opacity: opbar })]);
                                                "81";
                                                cylinder_item.append(b);
                                                "82";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[1], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[1]), radius: .01, color: color.white, opacity: opbar })]);
                                                "83";
                                                cylinder_item.append(b);
                                            }
                                            "84";
                                            for (var RS_Index7 = 4; RS_Index7["<"](6); RS_Index7++) {
                                                m = RS_Index7;
                                                "85";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[2], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[2]), radius: .01, color: color.white, opacity: opbar })]);
                                                "86";
                                                cylinder_item.append(b);
                                                "87";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[3], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[3]), radius: .01, color: color.white, opacity: opbar })]);
                                                "88";
                                                cylinder_item.append(b);
                                            }
                                        }
                                }
                            }
                        }
                        "90";
                        total_item = ra_item["+"](rb_item)["+"](ro_item)["+"](cylinder_item);
                        "92";
                        return [ra_item, rb_item, ro_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "95";
                        "96";
                        "97";
                        "98";
                        "99";
                        "100";
                        "101";
                        running = !running;
                        "102";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "108";
                        var RS_Iter8 = RS_Iterable(ra_item);
                        for (var RS_Index8 = 0; RS_Index8["<"](RS_Iter8.length); RS_Index8++) {
                            i = RS_Iter8[RS_Index8];
                            "109";
                            i.visible = false;
                            "110";
                            i = undefined;
                        }
                        "111";
                        var RS_Iter9 = RS_Iterable(rb_item);
                        for (var RS_Index9 = 0; RS_Index9["<"](RS_Iter9.length); RS_Index9++) {
                            i = RS_Iter9[RS_Index9];
                            "112";
                            i.visible = false;
                            "113";
                            i = undefined;
                        }
                        "114";
                        var RS_Iter10 = RS_Iterable(ro_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            i = RS_Iter10[RS_Index10];
                            "115";
                            i.visible = false;
                            "116";
                            i = undefined;
                        }
                        "117";
                        var RS_Iter11 = RS_Iterable(cylinder_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            i = RS_Iter11[RS_Index11];
                            "118";
                            i.visible = false;
                            "119";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, RS_unpack;
                        "123";
                        "124";
                        "125";
                        "126";
                        "127";
                        "128";
                        clear();
                        "129";
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
                        "133";
                        bond_ab = s.number;
                        "134";
                        ra = ra_int["/"](bond_ab)["*"](scale_factor);
                        "135";
                        rb = rb_int["/"](bond_ab)["*"](scale_factor);
                        "136";
                        ro = ro_int["/"](bond_ab)["*"](scale_factor);
                        "137";
                        var RS_Iter12 = RS_Iterable(ra_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            x = RS_Iter12[RS_Index12];
                            "138";
                            x.radius = ra;
                        }
                        "139";
                        var RS_Iter13 = RS_Iterable(rb_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            y = RS_Iter13[RS_Index13];
                            "140";
                            y.radius = rb;
                        }
                        "141";
                        var RS_Iter14 = RS_Iterable(ro_item);
                        for (var RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                            z = RS_Iter14[RS_Index14];
                            "142";
                            z.radius = ro;
                        }
                        "143";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "147";
                        ra_int = s.number;
                        "148";
                        ra = ra_int["/"](bond_ab)["*"](scale_factor);
                        "149";
                        var RS_Iter15 = RS_Iterable(ra_item);
                        for (var RS_Index15 = 0; RS_Index15["<"](RS_Iter15.length); RS_Index15++) {
                            x = RS_Iter15[RS_Index15];
                            "150";
                            x.radius = ra;
                        }
                        "151";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "154";
                        rb_int = s.number;
                        "155";
                        rb = rb_int["/"](bond_ab)["*"](scale_factor);
                        "156";
                        var RS_Iter16 = RS_Iterable(rb_item);
                        for (var RS_Index16 = 0; RS_Index16["<"](RS_Iter16.length); RS_Index16++) {
                            y = RS_Iter16[RS_Index16];
                            "157";
                            y.radius = rb;
                        }
                        "158";
                        return rb;
                    };

                    set_ro = function set_ro(s) {
                        var RS_ls, ro_int, ro, y;
                        "162";
                        ro_int = s.number;
                        "163";
                        ro = ro_int["/"](bond_ab)["*"](scale_factor);
                        "164";
                        var RS_Iter17 = RS_Iterable(ro_item);
                        for (var RS_Index17 = 0; RS_Index17["<"](RS_Iter17.length); RS_Index17++) {
                            y = RS_Iter17[RS_Index17];
                            "165";
                            y.radius = ro;
                        }
                        "166";
                        return ro;
                    };

                    set_scale_factor = function set_scale_factor(s) {
                        var RS_ls, scale_factor, ra, rb, ro, x, y, z;
                        "169";
                        scale_factor = s.number;
                        "170";
                        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "171";
                        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "172";
                        ro = ro_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "173";
                        var RS_Iter18 = RS_Iterable(ra_item);
                        for (var RS_Index18 = 0; RS_Index18["<"](RS_Iter18.length); RS_Index18++) {
                            x = RS_Iter18[RS_Index18];
                            "174";
                            x.radius = ra;
                        }
                        "175";
                        var RS_Iter19 = RS_Iterable(rb_item);
                        for (var RS_Index19 = 0; RS_Index19["<"](RS_Iter19.length); RS_Index19++) {
                            y = RS_Iter19[RS_Index19];
                            "176";
                            y.radius = rb;
                        }
                        "177";
                        var RS_Iter20 = RS_Iterable(ro_item);
                        for (var RS_Index20 = 0; RS_Index20["<"](RS_Iter20.length); RS_Index20++) {
                            z = RS_Iter20[RS_Index20];
                            "178";
                            z.radius = ro;
                        }
                        "179";
                        return [scale_factor, ra, rb, ro];
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "183";
                        "184";
                        "185";
                        "186";
                        "187";
                        "188";
                        L = s.number;
                        "189";
                        clear();
                        "190";
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
                    "5";
                    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({ background: color.black, width: 600, length: 600, center: vector(1["-u"](), 1["-u"](), 1["-u"]()) })]);
                    "7";
                    L = 1;
                    "16";
                    bond_ab = 3.905;
                    "17";
                    ra_int = 1.32;
                    "18";
                    rb_int = .75;
                    "19";
                    ro_int = 1.21;
                    "21";
                    bond_default_text = str(bond_ab);
                    "22";
                    ra_default_text = str(ra_int);
                    "23";
                    rb_default_text = str(rb_int);
                    "24";
                    ro_default_text = str(ro_int);
                    "27";
                    scale_factor = .5;
                    "28";
                    scale_default_text = str(scale_factor);
                    "30";
                    ra = ra_int["/"](bond_ab)["*"](scale_factor);
                    "31";
                    rb = rb_int["/"](bond_ab)["*"](scale_factor);
                    "32";
                    ro = ro_int["/"](bond_ab)["*"](scale_factor);
                    "34";
                    ra_item = RS_list_decorate([]);
                    "35";
                    rb_item = RS_list_decorate([]);
                    "36";
                    ro_item = RS_list_decorate([]);
                    "37";
                    cylinder_item = RS_list_decorate([]);
                    "38";
                    total_item = RS_list_decorate([]);
                    "40";
                    running = false;
                    "42";
                    opatom = 1;
                    "43";
                    opbar = 1;
                    "47";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "ro_item", "cylinder_item", "total_item"] }
                    });

                    "94";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "107";
                    ;

                    "122";
                    ;

                    "132";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "146";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "153";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "161";
                    ;
                    if (!set_ro.__argnames__) Object.defineProperties(set_ro, {
                        __argnames__: { value: ["s"] }
                    });

                    "168";
                    ;
                    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
                        __argnames__: { value: ["s"] }
                    });

                    "182";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "195";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(5, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    ro_item = RS_unpack[2];
                    cylinder_item = RS_unpack[3];
                    total_item = RS_unpack[4];
                    "200";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>Perovskite Example: Calcium Titanate (<b> SrTiO<sub>3<\/sub> </b>)</h2><hr>", pos: scene5.title_anchor })]);
                    "231";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\nA <b>Perovskite</b> is a colourless mineral of Calcium Titanate with the chemical formula <b> CaTiO<sub>3</sub> </b>. \nIt is discovered by German mineralogist Gustave Rose who named it after a Russian mineralogist\nLev Alexeievitch Perovskite. Later, perovskites are referred to a family of materials with the \nsame crystal structure as <b> CaTiO<sub>3</sub> </b>. So the general chemical formula for this category \nof perovskite compounds is <b> ABX<sub>3</sub> </b>, where A is a metal cation (positively charged ion), \nB is a cation and X is an anion (negatively charged ion).  If X is oxygen, the sub-category can also be \nrepresented as <b> ABO<sub>3</sub> </b>.\n\n<b> CaTiO<sub>3</sub> </b> consists of three types of ions: positive Calcium ions (symbol: Ca+), Titanium \nions (symbol: Ti+) and negative Oxygen ions (symbol: O-) which alternate with each other in each of the \nthree dimensions. In a unit cell, Ca+ occupies the corners,  Ti+ occupies the center of the lattice and \nO- are at the center of faces. \n\nSimilarly, <b> SrTiO<sub>3</sub> </b> (Strontium Titanate) consists of three types of ions: positive \nStrontium ions (symbol: Sr+), Titanium ions (symbol: Ti+) and negative Oxygen ions (symbol: O-) in the \nsame way. It is one of the few materials with ideal perovskite structure (no slight distortion). \n\nPerovskites are of great importance in material science and can be widely applied to photovoltaics, laser, \nsemiconductors and so on. \n\n<b>Perovskite solar cells</b>: Solar cells with perovskite structures have shown remarkable progress in \nimproving energy conversion efficiency, from reports of about 3% in 2006 to over 24% in 2019 and thus are \nthought to be a frontier energy solution.  Department of Energy is of great interest in research to increase \nthe efficiency and lifetime of hybrid organic-inorganic perovskite solar cells. Targeted materials include \nmethylammonium lead halide, i.e., <b> CH<sub>3</sub>NH<sub>3</sub>PbX<sub>3</sub> </b>, where X = I, Br or Cl.\n\nThere are two GUI files for Ideal Perovskite Structure solids. One for Calcium Titanate (<b> CaTiO<sub>3</sub> </b>), and \none for Strontium Titanate (<b> SrTiO<sub>3</sub> </b>)\n\n", pos: scene5.title_anchor })]);
                    "237";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "246";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integar Only)</li><li><b>bond</b>: distance between two closest Ca+ ions </li><li><b><font color =\"Green\">r_a<font color =\"black\"></b>: ionic radius of Sr+ [<font color = \"Green\">Green<font color =\"black\">] </li><li><b><font color =\"Blue\">r_b<font color =\"black\"></b>: ionic radius of Ti+ [<font color =\"Blue\">Blue<font color =\"black\">] </li><li><b><font color =\"Red\">r_o<font color =\"black\"></b>: ionic radius of O- [<font color =\"Red\">Red<font color =\"black\">] </li></ul>", pos: scene5.title_anchor })]);
                    "248";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "251";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "252";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "254";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n" })]);
                    "258";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "259";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "260";
                    scene5.append_to_caption("\n");
                    "262";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond: " })]);
                    "263";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: bond_default_text })]);
                    "264";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "265";
                    scene5.append_to_caption("\n");
                    "267";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "268";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text })]);
                    "269";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "270";
                    scene5.append_to_caption("\n");
                    "272";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "273";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: rb_default_text })]);
                    "274";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "275";
                    scene5.append_to_caption("\n");
                    "277";
                    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ro: " })]);
                    "278";
                    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ro, text: ro_default_text })]);
                    "279";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "280";
                    scene5.append_to_caption("\n");
                    "284";
                    it6 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "scale: " })]);
                    "285";
                    ib6 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text })]);
                    "286";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "( Must be less than or equal to 1. A value less than 1 is used for an exploded view. )" })]);
                    "291";
                    scene5.append_to_caption("\n\n");
                    "294";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "297";

                case 180:
                    if (!true) {
                            _context.next = 188;
                            break;
                        }

                    "298";
                    _context.next = 184;
                    return _streamline.await(_filename, 532, null, rate, 1, null, false, [100, true]);

                case 184:
                    "299";
                    if (running) {
                            "300";
                            RS_Iter21 = RS_Iterable(total_item);

                            for (RS_Index21 = 0; RS_Index21["<"](RS_Iter21.length); RS_Index21++) {
                                b = RS_Iter21[RS_Index21];
                                "301";
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
