
// START JAVASCRIPT
;(function() {"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var axis_number, gen_csv, print_csv, del_csv, build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, RS_unpack, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it4, ib4, ib5, ib6, it5, b, __name__, strings, RS_Iter17, RS_Index17;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    axis_number = function axis_number(cylinder) {
                        var RS_ls, axis_num;
                        "36";
                        if (cylinder.axis.x === 1 || _typeof(cylinder.axis.x) === "object" && RS_equals(cylinder.axis.x, 1)) {
                                "38";
                                axis_num = 0;
                                "39";
                            } else if (cylinder.axis.y === 1 || _typeof(cylinder.axis.y) === "object" && RS_equals(cylinder.axis.y, 1)) {
                                "41";
                                axis_num = 1;
                                "42";
                            } else if (cylinder.axis.z === 1 || _typeof(cylinder.axis.z) === "object" && RS_equals(cylinder.axis.z, 1)) {
                                "44";
                                axis_num = 2;
                            }
                        "45";
                        return axis_num;
                    };

                    gen_csv = function gen_csv() {
                        var RS_ls, file, i, axis_num;
                        "48";
                        file = open("nacl_v1.csv", "w+");
                        "49";
                        file.write("#type,x,y,z,radius\n");
                        "51";
                        var RS_Iter1 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index1 = 0; RS_Index1["<"](RS_Iter1.length); RS_Index1++) {
                            i = RS_Iter1[RS_Index1];
                            "53";
                            file.write(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "55";
                        var RS_Iter2 = RS_Iterable(range(len(rb_item)));
                        for (var RS_Index2 = 0; RS_Index2["<"](RS_Iter2.length); RS_Index2++) {
                            i = RS_Iter2[RS_Index2];
                            "57";
                            file.write(str(0)["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "60";
                        file.write("#type,x,y,z,axis\n");
                        "61";
                        var RS_Iter3 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index3 = 0; RS_Index3["<"](RS_Iter3.length); RS_Index3++) {
                            i = RS_Iter3[RS_Index3];
                            "62";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "64";
                            file.write(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "65";
                        file.close();
                    };

                    print_csv = function print_csv() {
                        var RS_ls, string_list, i, axis_num;
                        "68";
                        "69";
                        "71";
                        if (it5.text !== "None" && (_typeof(it5.text) !== "object" || RS_not_equals(it5.text, "None"))) {
                                "72";
                                it5.remove();
                            }
                        "85";
                        string_list = RS_list_decorate([]);
                        "86";
                        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
                        "87";
                        string_list.append("#type,x,y,z,radius\n");
                        "90";
                        var RS_Iter4 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "91";
                            string_list.append(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "94";
                        var RS_Iter5 = RS_Iterable(range(len(rb_item)));
                        for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                            i = RS_Iter5[RS_Index5];
                            "95";
                            string_list.append(str(0)["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "99";
                        string_list.append("#type,x,y,z,axis,length\n");
                        "100";
                        var RS_Iter6 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index6 = 0; RS_Index6["<"](RS_Iter6.length); RS_Index6++) {
                            i = RS_Iter6[RS_Index6];
                            "101";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "104";
                            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "107";
                        string_list.append("<\/p>");
                        "108";
                        string = "".join(string_list);
                        "109";
                        it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: string })]);
                    };

                    del_csv = function del_csv() {
                        var RS_ls;
                        "114";
                        "115";
                        it5.text = "";
                    };

                    build = function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
                        var RS_ls, b, k, j, i;
                        "118";
                        for (var RS_Index7 = L["-u"](); RS_Index7["<"](L["+"](1)); RS_Index7++) {
                            i = RS_Index7;
                            "119";
                            for (var RS_Index8 = L["-u"](); RS_Index8["<"](L["+"](1)); RS_Index8++) {
                                j = RS_Index8;
                                "120";
                                for (var RS_Index9 = L["-u"](); RS_Index9["<"](L["+"](1)); RS_Index9++) {
                                    k = RS_Index9;
                                    "122";
                                    if (RS_equals(L % 2, 1)) {
                                            "123";
                                            if (RS_equals(abs(i["+"](j)["+"](k)) % 2, 0)) {
                                                    "125";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: ra, color: color.magenta })]);
                                                    "126";
                                                    ra_item.append(b);
                                                    "127";
                                                } else {
                                                    "128";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: color.green })]);
                                                    "129";
                                                    rb_item.append(b);
                                                }
                                            "131";
                                            if (i["+"](1)["<="](L)) {
                                                    "132";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                                    "133";
                                                    cylinder_item.append(b);
                                                }
                                            "134";
                                            if (j["+"](1)["<="](L)) {
                                                    "135";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                                    "136";
                                                    cylinder_item.append(b);
                                                }
                                            "137";
                                            if (k["+"](1)["<="](L)) {
                                                    "138";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                                    "139";
                                                    cylinder_item.append(b);
                                                    "141";
                                                }
                                        } else {
                                            "142";
                                            if (RS_equals(abs(i["+"](j)["+"](k)) % 2, 1)) {
                                                    "144";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: ra, color: color.magenta })]);
                                                    "145";
                                                    ra_item.append(b);
                                                    "146";
                                                } else {
                                                    "147";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: color.green })]);
                                                    "148";
                                                    rb_item.append(b);
                                                }
                                            "149";
                                            if (i["<"](L)) {
                                                    "150";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                                    "151";
                                                    cylinder_item.append(b);
                                                }
                                            "152";
                                            if (j["<"](L)) {
                                                    "153";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                                    "154";
                                                    cylinder_item.append(b);
                                                }
                                            "155";
                                            if (k["<"](L)) {
                                                    "156";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                                    "157";
                                                    cylinder_item.append(b);
                                                }
                                        }
                                }
                            }
                        }
                        "159";
                        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
                        "161";
                        return [ra_item, rb_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "164";
                        "165";
                        "166";
                        "167";
                        "168";
                        "169";
                        running = !running;
                        "170";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "176";
                        var RS_Iter10 = RS_Iterable(ra_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            i = RS_Iter10[RS_Index10];
                            "177";
                            i.visible = false;
                            "178";
                            i = undefined;
                        }
                        "180";
                        var RS_Iter11 = RS_Iterable(rb_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            i = RS_Iter11[RS_Index11];
                            "181";
                            i.visible = false;
                            "182";
                            i = undefined;
                        }
                        "184";
                        var RS_Iter12 = RS_Iterable(cylinder_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            i = RS_Iter12[RS_Index12];
                            "185";
                            i.visible = false;
                            "186";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, RS_unpack;
                        "191";
                        "192";
                        "193";
                        "194";
                        "195";
                        clear();
                        "196";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(4, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        cylinder_item = RS_unpack[2];
                        total_item = RS_unpack[3];
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "201";
                        bond_ab = s.number;
                        "202";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "203";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "204";
                        var RS_Iter13 = RS_Iterable(ra_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            x = RS_Iter13[RS_Index13];
                            "205";
                            x.radius = ra;
                        }
                        "206";
                        var RS_Iter14 = RS_Iterable(rb_item);
                        for (var RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                            y = RS_Iter14[RS_Index14];
                            "207";
                            y.radius = rb;
                        }
                        "208";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "212";
                        ra_int = s.number;
                        "213";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "214";
                        var RS_Iter15 = RS_Iterable(ra_item);
                        for (var RS_Index15 = 0; RS_Index15["<"](RS_Iter15.length); RS_Index15++) {
                            x = RS_Iter15[RS_Index15];
                            "215";
                            x.radius = ra;
                        }
                        "216";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "219";
                        rb_int = s.number;
                        "220";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "221";
                        var RS_Iter16 = RS_Iterable(rb_item);
                        for (var RS_Index16 = 0; RS_Index16["<"](RS_Iter16.length); RS_Index16++) {
                            y = RS_Iter16[RS_Index16];
                            "222";
                            y.radius = rb;
                        }
                        "223";
                        return rb;
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "226";
                        "227";
                        "228";
                        "229";
                        "230";
                        L = s.number;
                        "231";
                        clear();
                        "233";
                        scene5.camera.pos = vector(0, 0, 2["*"](L));
                        "234";
                        scene5.center = vector(0, 0, 0);
                        "236";
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
                    "35";
                    ;
                    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
                        __argnames__: { value: ["cylinder"] }
                    });

                    "47";
                    ;

                    "67";
                    ;

                    "113";
                    ;

                    "117";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"] }
                    });

                    "163";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "175";
                    ;

                    "190";
                    ;

                    "200";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "211";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "218";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "225";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "244";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(4, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    cylinder_item = RS_unpack[2];
                    total_item = RS_unpack[3];
                    "249";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>FCC Lattice Example: Sodium Chloride (NaCl)</h2><hr>", pos: scene5.title_anchor })]);
                    "252";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "Sodium Cloride, occurs natually as white crystals of salt, is an ionic compound with the chemical symbol\n\\(NaCl \\). It is composed of two types of elements (Sodium and Chloride) forming Face Center Cubic (FCC) \nlattice structure by repeating each cubic unit cell.\n", pos: scene5.title_anchor })]);
                    "255";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<b>\nThis version of animation adopts trinary atoms in each dimensions to illustrate the FCC structure. \n</b>", pos: scene5.title_anchor })]);
                    "261";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "269";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integer Only)</li><li><b>bond_ab</b>: Lattice Constant(\\(   \\unicode{x212B}   \\))(1\\(   \\unicode{x212B}   \\) = \\(10^{-10} \\)meter)</li><li><b><font color = \"Purple\">r_a<font color = \"Black\"></b>: Atomic Radius of Sodium [<font color =\"Purple\">Purple<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li><li><b><font color = \"Green\">r_b<font color = \"Black\"></b>: Atomic Radius of Chloride [<font color =\"Green\">Green<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li></ul>", pos: scene5.title_anchor })]);
                    "271";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "273";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>\nAdjust the lattice constants below to construct another FCC material.\nPress <b>Enter key</b> after <b>every</b> changes to take effect." })]);
                    "277";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "278";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "280";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n" })]);
                    "283";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "284";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "286";
                    scene5.append_to_caption("\n");
                    "288";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond_ab: " })]);
                    "289";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 2.7266 })]);
                    "291";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "292";
                    scene5.append_to_caption("\n");
                    "295";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "296";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: .79 })]);
                    "297";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "299";
                    scene5.append_to_caption("\n");
                    "302";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "303";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: 1.91 })]);
                    "304";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "306";
                    scene5.append_to_caption("\n\n");
                    "320";
                    ib5 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: print_csv, text: "Generate CSV for STL conversion" })]);
                    "321";
                    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: del_csv, text: "Remove CSV Box" })]);
                    "322";
                    scene5.append_to_caption("\n\n\n");
                    "323";
                    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "" })]);
                    "324";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "329";

                case 160:
                    if (!true) {
                            _context.next = 168;
                            break;
                        }

                    "330";
                    _context.next = 164;
                    return _streamline.await(_filename, 538, null, rate, 1, null, false, [100, true]);

                case 164:
                    "331";
                    if (running) {
                            "332";
                            RS_Iter17 = RS_Iterable(total_item);

                            for (RS_Index17 = 0; RS_Index17["<"](RS_Iter17.length); RS_Index17++) {
                                b = RS_Iter17[RS_Index17];
                                "333";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0) })]);
                            }
                        }
                    _context.next = 160;
                    break;

                case 168:
                case "end":
                    return _context.stop();
            }
        }
    }, _$$main$$, this);
}), 0, 1);

var RS_modules = {};
var string, it5, ra_item, rb_item, cylinder_item, total_item, running;
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
