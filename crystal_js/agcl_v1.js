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
                        "37";
                        if (cylinder.axis.x === 1 || _typeof(cylinder.axis.x) === "object" && RS_equals(cylinder.axis.x, 1)) {
                                "39";
                                axis_num = 0;
                                "40";
                            } else if (cylinder.axis.y === 1 || _typeof(cylinder.axis.y) === "object" && RS_equals(cylinder.axis.y, 1)) {
                                "42";
                                axis_num = 1;
                                "43";
                            } else if (cylinder.axis.z === 1 || _typeof(cylinder.axis.z) === "object" && RS_equals(cylinder.axis.z, 1)) {
                                "45";
                                axis_num = 2;
                            }
                        "46";
                        return axis_num;
                    };

                    gen_csv = function gen_csv() {
                        var RS_ls, file, i, axis_num;
                        "49";
                        file = open("nacl_v1.csv", "w+");
                        "50";
                        file.write("#type,x,y,z,radius\n");
                        "52";
                        var RS_Iter1 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index1 = 0; RS_Index1["<"](RS_Iter1.length); RS_Index1++) {
                            i = RS_Iter1[RS_Index1];
                            "54";
                            file.write(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "56";
                        var RS_Iter2 = RS_Iterable(range(len(rb_item)));
                        for (var RS_Index2 = 0; RS_Index2["<"](RS_Iter2.length); RS_Index2++) {
                            i = RS_Iter2[RS_Index2];
                            "58";
                            file.write(str(0)["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "61";
                        file.write("#type,x,y,z,axis\n");
                        "62";
                        var RS_Iter3 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index3 = 0; RS_Index3["<"](RS_Iter3.length); RS_Index3++) {
                            i = RS_Iter3[RS_Index3];
                            "63";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "65";
                            file.write(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "66";
                        file.close();
                    };

                    print_csv = function print_csv() {
                        var RS_ls, string_list, i, axis_num;
                        "69";
                        "70";
                        "72";
                        if (it5.text !== "None" && (_typeof(it5.text) !== "object" || RS_not_equals(it5.text, "None"))) {
                                "73";
                                del_csv();
                            }
                        "89";
                        string_list = RS_list_decorate([]);
                        "90";
                        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
                        "91";
                        string_list.append("#type,x,y,z,radius\n");
                        "94";
                        var RS_Iter4 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "95";
                            string_list.append(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "98";
                        var RS_Iter5 = RS_Iterable(range(len(rb_item)));
                        for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                            i = RS_Iter5[RS_Index5];
                            "99";
                            string_list.append(str(0)["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "103";
                        string_list.append("#type,x,y,z,axis,length\n");
                        "104";
                        var RS_Iter6 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index6 = 0; RS_Index6["<"](RS_Iter6.length); RS_Index6++) {
                            i = RS_Iter6[RS_Index6];
                            "105";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "108";
                            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "111";
                        string_list.append("<\/p>");
                        "112";
                        string = "".join(string_list);
                        "113";
                        it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: string })]);
                    };

                    del_csv = function del_csv() {
                        var RS_ls;
                        "118";
                        "120";
                        it5.text = "";
                    };

                    build = function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
                        var RS_ls, b, k, j, i;
                        "124";
                        for (var RS_Index7 = L["-u"](); RS_Index7["<"](L["+"](1)); RS_Index7++) {
                            i = RS_Index7;
                            "125";
                            for (var RS_Index8 = L["-u"](); RS_Index8["<"](L["+"](1)); RS_Index8++) {
                                j = RS_Index8;
                                "126";
                                for (var RS_Index9 = L["-u"](); RS_Index9["<"](L["+"](1)); RS_Index9++) {
                                    k = RS_Index9;
                                    "128";
                                    if (RS_equals(L % 2, 1)) {
                                            "129";
                                            if (RS_equals(abs(i["+"](j)["+"](k)) % 2, 0)) {
                                                    "131";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: ra, color: color.gray(.9) })]);
                                                    "132";
                                                    ra_item.append(b);
                                                    "133";
                                                } else {
                                                    "134";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: color.green })]);
                                                    "135";
                                                    rb_item.append(b);
                                                }
                                            "137";
                                            if (i["+"](1)["<="](L)) {
                                                    "138";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                                    "139";
                                                    cylinder_item.append(b);
                                                }
                                            "140";
                                            if (j["+"](1)["<="](L)) {
                                                    "141";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                                    "142";
                                                    cylinder_item.append(b);
                                                }
                                            "143";
                                            if (k["+"](1)["<="](L)) {
                                                    "144";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                                    "145";
                                                    cylinder_item.append(b);
                                                    "147";
                                                }
                                        } else {
                                            "148";
                                            if (RS_equals(abs(i["+"](j)["+"](k)) % 2, 1)) {
                                                    "150";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: ra, color: color.gray(.9) })]);
                                                    "151";
                                                    ra_item.append(b);
                                                    "152";
                                                } else {
                                                    "153";
                                                    b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: color.green })]);
                                                    "154";
                                                    rb_item.append(b);
                                                }
                                            "155";
                                            if (i["<"](L)) {
                                                    "156";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                                    "157";
                                                    cylinder_item.append(b);
                                                }
                                            "158";
                                            if (j["<"](L)) {
                                                    "159";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                                    "160";
                                                    cylinder_item.append(b);
                                                }
                                            "161";
                                            if (k["<"](L)) {
                                                    "162";
                                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                                    "163";
                                                    cylinder_item.append(b);
                                                }
                                        }
                                }
                            }
                        }
                        "165";
                        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
                        "167";
                        return [ra_item, rb_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "170";
                        "171";
                        "172";
                        "173";
                        "174";
                        "175";
                        running = !running;
                        "176";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "182";
                        var RS_Iter10 = RS_Iterable(ra_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            i = RS_Iter10[RS_Index10];
                            "183";
                            i.visible = false;
                            "184";
                            i = undefined;
                        }
                        "186";
                        var RS_Iter11 = RS_Iterable(rb_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            i = RS_Iter11[RS_Index11];
                            "187";
                            i.visible = false;
                            "188";
                            i = undefined;
                        }
                        "190";
                        var RS_Iter12 = RS_Iterable(cylinder_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            i = RS_Iter12[RS_Index12];
                            "191";
                            i.visible = false;
                            "192";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, RS_unpack;
                        "197";
                        "198";
                        "199";
                        "200";
                        "201";
                        clear();
                        "202";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(4, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        cylinder_item = RS_unpack[2];
                        total_item = RS_unpack[3];
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "207";
                        bond_ab = s.number;
                        "208";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "209";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "210";
                        var RS_Iter13 = RS_Iterable(ra_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            x = RS_Iter13[RS_Index13];
                            "211";
                            x.radius = ra;
                        }
                        "212";
                        var RS_Iter14 = RS_Iterable(rb_item);
                        for (var RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                            y = RS_Iter14[RS_Index14];
                            "213";
                            y.radius = rb;
                        }
                        "214";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "218";
                        ra_int = s.number;
                        "219";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "220";
                        var RS_Iter15 = RS_Iterable(ra_item);
                        for (var RS_Index15 = 0; RS_Index15["<"](RS_Iter15.length); RS_Index15++) {
                            x = RS_Iter15[RS_Index15];
                            "221";
                            x.radius = ra;
                        }
                        "222";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "225";
                        rb_int = s.number;
                        "226";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "227";
                        var RS_Iter16 = RS_Iterable(rb_item);
                        for (var RS_Index16 = 0; RS_Index16["<"](RS_Iter16.length); RS_Index16++) {
                            y = RS_Iter16[RS_Index16];
                            "228";
                            y.radius = rb;
                        }
                        "229";
                        return rb;
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "232";
                        "233";
                        "234";
                        "235";
                        "236";
                        L = s.number;
                        "237";
                        clear();
                        "239";
                        scene5.camera.pos = vector(0, 0, 2["*"](L));
                        "240";
                        scene5.center = vector(0, 0, 0);
                        "242";
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
                    "36";
                    ;
                    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
                        __argnames__: { value: ["cylinder"] }
                    });

                    "48";
                    ;

                    "68";
                    ;

                    "117";
                    ;

                    "123";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"] }
                    });

                    "169";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "181";
                    ;

                    "196";
                    ;

                    "206";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "217";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "224";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "231";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "248";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(4, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    cylinder_item = RS_unpack[2];
                    total_item = RS_unpack[3];
                    "254";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>FCC Lattice Example: Silver Chloride(AgCl) </h2><hr>", pos: scene5.title_anchor })]);
                    "258";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "Silver Chloride, with the chemical symbol \\(AgCl \\),  which contains \ntwo type of elements (Silver and Chloride). The two elements \nare arranged in a cubic structure with a Face Center Cubic(FCC) lattice.\nIt is commonly used in photography films and disinfectant products.\n\n", pos: scene5.title_anchor })]);
                    "261";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<b>This version of animation adopts trinary atoms in each dimensions to illustrate the FCC structure . \n</b>", pos: scene5.title_anchor })]);
                    "267";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "275";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integer Only)</li><li><b>bond_ab</b>: Lattice Constant(\\(   \\unicode{x212B}   \\))(1\\(   \\unicode{x212B}   \\) = \\(10^{-10} \\)meter)</li><li><b><font color = \"grey\">r_a<font color =\"black\"></b>: Atomic Radius of Silver [<font color = \"Grey\">Grey<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li><li><b><font color = \"green\">r_b<font color =\"black\"></b>: Atomic Radius of Chloride [<font color = \"Green\">Green<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li></ul>", pos: scene5.title_anchor })]);
                    "277";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "279";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the lattice constants below to construct another FCC material.\nPress <b>Enter key</b> after <b>every</b> changes to take effect.\n" })]);
                    "283";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "284";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "287";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "288";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "290";
                    scene5.append_to_caption("\n");
                    "292";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond_ab: " })]);
                    "293";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 2.386 })]);
                    "295";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "296";
                    scene5.append_to_caption("\n");
                    "298";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "299";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: 1.41 })]);
                    "300";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "302";
                    scene5.append_to_caption("\n");
                    "304";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "305";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: .79 })]);
                    "306";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "308";
                    scene5.append_to_caption("\n\n");
                    "321";
                    ib5 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: print_csv, text: "Generate CSV for STL conversion" })]);
                    "322";
                    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: del_csv, text: "Remove CSV Box" })]);
                    "323";
                    scene5.append_to_caption("\n\n\n");
                    "324";
                    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "" })]);
                    "326";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "331";

                case 158:
                    if (!true) {
                            _context.next = 166;
                            break;
                        }

                    "332";
                    _context.next = 162;
                    return _streamline.await(_filename, 536, null, rate, 1, null, false, [100, true]);

                case 162:
                    "333";
                    if (running) {
                            "334";
                            RS_Iter17 = RS_Iterable(total_item);

                            for (RS_Index17 = 0; RS_Index17["<"](RS_Iter17.length); RS_Index17++) {
                                b = RS_Iter17[RS_Index17];
                                "335";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0) })]);
                            }
                        }
                    _context.next = 158;
                    break;

                case 166:
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
