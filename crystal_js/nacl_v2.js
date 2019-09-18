// START JAVASCRIPT
;(function() {"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var axis_number, gen_csv, print_csv, del_csv, build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_scale_factor, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, bond_default_text, ra_default_text, rb_default_text, scale_factor, scale_default_text, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, RS_unpack, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it4, ib4, it5, ib5, ib6, ib7, it8, b, __name__, strings, RS_Iter22, RS_Index22;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    axis_number = function axis_number(cylinder) {
                        var RS_ls, axis_num;
                        "33";
                        if (cylinder.axis.x === 1 || _typeof(cylinder.axis.x) === "object" && RS_equals(cylinder.axis.x, 1)) {
                                "35";
                                axis_num = 0;
                                "36";
                            } else if (cylinder.axis.y === 1 || _typeof(cylinder.axis.y) === "object" && RS_equals(cylinder.axis.y, 1)) {
                                "38";
                                axis_num = 1;
                                "39";
                            } else if (cylinder.axis.z === 1 || _typeof(cylinder.axis.z) === "object" && RS_equals(cylinder.axis.z, 1)) {
                                "41";
                                axis_num = 2;
                            }
                        "42";
                        return axis_num;
                    };

                    gen_csv = function gen_csv() {
                        var RS_ls, file, i, axis_num;
                        "45";
                        file = open("nacl_v1.csv", "w+");
                        "46";
                        file.write("#type,x,y,z,radius\n");
                        "48";
                        var RS_Iter1 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index1 = 0; RS_Index1["<"](RS_Iter1.length); RS_Index1++) {
                            i = RS_Iter1[RS_Index1];
                            "50";
                            file.write(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "52";
                        var RS_Iter2 = RS_Iterable(range(len(rb_item)));
                        for (var RS_Index2 = 0; RS_Index2["<"](RS_Iter2.length); RS_Index2++) {
                            i = RS_Iter2[RS_Index2];
                            "54";
                            file.write(str(0)["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "57";
                        file.write("#type,x,y,z,axis\n");
                        "58";
                        var RS_Iter3 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index3 = 0; RS_Index3["<"](RS_Iter3.length); RS_Index3++) {
                            i = RS_Iter3[RS_Index3];
                            "59";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "61";
                            file.write(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "62";
                        file.close();
                    };

                    print_csv = function print_csv() {
                        var RS_ls, string_list, i, axis_num;
                        "65";
                        "66";
                        "68";
                        if (it8.text !== "None" && (_typeof(it8.text) !== "object" || RS_not_equals(it8.text, "None"))) {
                                "69";
                                del_csv();
                            }
                        "79";
                        string_list = RS_list_decorate([]);
                        "80";
                        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
                        "81";
                        string_list.append("#type,x,y,z,radius\n");
                        "84";
                        var RS_Iter4 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "85";
                            string_list.append(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "87";
                        var RS_Iter5 = RS_Iterable(range(len(rb_item)));
                        for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                            i = RS_Iter5[RS_Index5];
                            "88";
                            string_list.append(str(0)["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "91";
                        string_list.append("#type,x,y,z,axis,length\n");
                        "92";
                        var RS_Iter6 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index6 = 0; RS_Index6["<"](RS_Iter6.length); RS_Index6++) {
                            i = RS_Iter6[RS_Index6];
                            "93";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "94";
                            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "96";
                        string_list.append("<\/p>");
                        "97";
                        string = "".join(string_list);
                        "98";
                        it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: string })]);
                    };

                    del_csv = function del_csv() {
                        var RS_ls;
                        "102";
                        "104";
                        it8.text = "";
                    };

                    build = function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
                        var RS_ls, b, k, j, i;
                        "111";
                        for (var RS_Index7 = L["-u"]()["+"](1); RS_Index7["<"](L["+"](1)); RS_Index7++) {
                            i = RS_Index7;
                            "112";
                            for (var RS_Index8 = L["-u"]()["+"](1); RS_Index8["<"](L["+"](1)); RS_Index8++) {
                                j = RS_Index8;
                                "113";
                                for (var RS_Index9 = L["-u"]()["+"](1); RS_Index9["<"](L["+"](1)); RS_Index9++) {
                                    k = RS_Index9;
                                    "114";
                                    if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                            "115";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: ra, color: color.magenta })]);
                                            "116";
                                            ra_item.append(b);
                                            "117";
                                        } else {
                                            "118";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: rb, color: color.green })]);
                                            "119";
                                            rb_item.append(b);
                                        }
                                    "120";
                                    if (i["+"](1)["<="](L)) {
                                            "121";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                            "122";
                                            cylinder_item.append(b);
                                        }
                                    "123";
                                    if (j["+"](1)["<="](L)) {
                                            "124";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                            "125";
                                            cylinder_item.append(b);
                                        }
                                    "126";
                                    if (k["+"](1)["<="](L)) {
                                            "127";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                            "128";
                                            cylinder_item.append(b);
                                        }
                                }
                            }
                        }
                        "129";
                        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
                        "131";
                        return [ra_item, rb_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "134";
                        "135";
                        "136";
                        "137";
                        "138";
                        "139";
                        running = !running;
                        "140";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "146";
                        var RS_Iter10 = RS_Iterable(ra_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            i = RS_Iter10[RS_Index10];
                            "147";
                            i.visible = false;
                            "148";
                            i = undefined;
                        }
                        "149";
                        var RS_Iter11 = RS_Iterable(rb_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            i = RS_Iter11[RS_Index11];
                            "150";
                            i.visible = false;
                            "151";
                            i = undefined;
                        }
                        "152";
                        var RS_Iter12 = RS_Iterable(cylinder_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            i = RS_Iter12[RS_Index12];
                            "153";
                            i.visible = false;
                            "154";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, i, RS_unpack;
                        "158";
                        "159";
                        "160";
                        "161";
                        "162";
                        var RS_Iter13 = RS_Iterable(ra_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            i = RS_Iter13[RS_Index13];
                            "163";
                            i.visible = false;
                            "164";
                            i = undefined;
                        }
                        "165";
                        var RS_Iter14 = RS_Iterable(rb_item);
                        for (var RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                            i = RS_Iter14[RS_Index14];
                            "166";
                            i.visible = false;
                            "167";
                            i = undefined;
                        }
                        "168";
                        var RS_Iter15 = RS_Iterable(cylinder_item);
                        for (var RS_Index15 = 0; RS_Index15["<"](RS_Iter15.length); RS_Index15++) {
                            i = RS_Iter15[RS_Index15];
                            "169";
                            i.visible = false;
                            "170";
                            i = undefined;
                        }
                        "171";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(4, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        cylinder_item = RS_unpack[2];
                        total_item = RS_unpack[3];
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "175";
                        bond_ab = s.number;
                        "176";
                        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "177";
                        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "178";
                        var RS_Iter16 = RS_Iterable(ra_item);
                        for (var RS_Index16 = 0; RS_Index16["<"](RS_Iter16.length); RS_Index16++) {
                            x = RS_Iter16[RS_Index16];
                            "179";
                            x.radius = ra;
                        }
                        "180";
                        var RS_Iter17 = RS_Iterable(rb_item);
                        for (var RS_Index17 = 0; RS_Index17["<"](RS_Iter17.length); RS_Index17++) {
                            y = RS_Iter17[RS_Index17];
                            "181";
                            y.radius = rb;
                        }
                        "182";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "186";
                        ra_int = s.number;
                        "187";
                        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "188";
                        var RS_Iter18 = RS_Iterable(ra_item);
                        for (var RS_Index18 = 0; RS_Index18["<"](RS_Iter18.length); RS_Index18++) {
                            x = RS_Iter18[RS_Index18];
                            "189";
                            x.radius = ra;
                        }
                        "190";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "193";
                        rb_int = s.number;
                        "194";
                        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "195";
                        var RS_Iter19 = RS_Iterable(rb_item);
                        for (var RS_Index19 = 0; RS_Index19["<"](RS_Iter19.length); RS_Index19++) {
                            y = RS_Iter19[RS_Index19];
                            "196";
                            y.radius = rb;
                        }
                        "197";
                        return rb;
                    };

                    set_scale_factor = function set_scale_factor(s) {
                        var RS_ls, scale_factor, ra, rb, x, y;
                        "201";
                        scale_factor = s.number;
                        "202";
                        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "203";
                        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "204";
                        var RS_Iter20 = RS_Iterable(ra_item);
                        for (var RS_Index20 = 0; RS_Index20["<"](RS_Iter20.length); RS_Index20++) {
                            x = RS_Iter20[RS_Index20];
                            "205";
                            x.radius = ra;
                        }
                        "206";
                        var RS_Iter21 = RS_Iterable(rb_item);
                        for (var RS_Index21 = 0; RS_Index21["<"](RS_Iter21.length); RS_Index21++) {
                            y = RS_Iter21[RS_Index21];
                            "207";
                            y.radius = rb;
                        }
                        "208";
                        return [scale_factor, ra, rb];
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "212";
                        "213";
                        "214";
                        "215";
                        "216";
                        L = s.number;
                        "217";
                        clear();
                        "218";
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
                    "7";
                    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({ background: color.black, width: 600, length: 600, center: vector(0, 0, 0) })]);
                    "9";
                    L = 1;
                    "10";
                    bond_ab = 2.83;
                    "11";
                    ra_int = 1.16;
                    "12";
                    rb_int = 1.67;
                    "14";
                    bond_default_text = str(bond_ab);
                    "15";
                    ra_default_text = str(ra_int);
                    "16";
                    rb_default_text = str(rb_int);
                    "18";
                    scale_factor = .5;
                    "19";
                    scale_default_text = str(scale_factor);
                    "22";
                    ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                    "23";
                    rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                    "26";
                    ra_item = RS_list_decorate([]);
                    "27";
                    rb_item = RS_list_decorate([]);
                    "28";
                    cylinder_item = RS_list_decorate([]);
                    "29";
                    total_item = RS_list_decorate([]);
                    "30";
                    running = false;
                    "32";
                    ;
                    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
                        __argnames__: { value: ["cylinder"] }
                    });

                    "44";
                    ;

                    "64";
                    ;

                    "101";
                    ;

                    "109";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"] }
                    });

                    "133";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "145";
                    ;

                    "157";
                    ;

                    "174";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "185";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "192";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "200";
                    ;
                    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
                        __argnames__: { value: ["s"] }
                    });

                    "211";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "223";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(4, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    cylinder_item = RS_unpack[2];
                    total_item = RS_unpack[3];
                    "228";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>fcc Lattice Example: Sodium Chloride (NaCl)</h2><hr>", pos: scene5.title_anchor })]);
                    "233";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "Sodium Chloride, occurs natually as white crystals of salt, is an ionic compound with the \nchemical symbol \\(NaCl \\). It consists of two types of ions: sodium ions and chloride ions which \nalternate with each other in each of the three dimensions. The repeating pattern is in a shape of of cube,\nand there are lattice points on the faces of the cube. Such a sytems is called the face-centered cubic (fcc) system. \n\n", pos: scene5.title_anchor })]);
                    "236";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<b> This version of animation doesn't present the smallest repeating pattern, i.e. unit cell. \n</b>", pos: scene5.title_anchor })]);
                    "242";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "250";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Structure Parameters</h3><ul><li><b>L</b>: Number of cells (Integer Only)</li><li><b>bond</b>: bond length </li><li><b><font color = \"Purple\">r_a<font color = \"Black\"></b>: Ironic radius of Sodium [<font color =\"Purple\">Purple<font color =\"black\">] </li><li><b><font color = \"Green\">r_b<font color = \"Black\"></b>: Ironic Radius of Chloride [<font color =\"Green\">Green<font color =\"black\">] </li></ul>", pos: scene5.title_anchor })]);
                    "252";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "254";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the lattice constants below to construct another fcc material.\nPress <b>Enter key</b> after <b>every</b> change to take effect.\n" })]);
                    "260";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "261";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "265";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "266";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "268";
                    scene5.append_to_caption("\n");
                    "270";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond: " })]);
                    "271";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: bond_default_text })]);
                    "273";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "274";
                    scene5.append_to_caption("\n");
                    "277";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "278";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text })]);
                    "279";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "281";
                    scene5.append_to_caption("\n");
                    "284";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "285";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: rb_default_text })]);
                    "286";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "287";
                    scene5.append_to_caption("\n");
                    "291";
                    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "scale: " })]);
                    "292";
                    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text })]);
                    "293";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "( Must be less than or equal to 1. A value less than 1 is used for an exploded view. )" })]);
                    "298";
                    scene5.append_to_caption("\n\n");
                    "312";
                    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: print_csv, text: "Generate CSV for STL conversion" })]);
                    "313";
                    ib7 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: del_csv, text: "Remove CSV Box" })]);
                    "315";
                    scene5.append_to_caption("\n\n\n");
                    "316";
                    it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "" })]);
                    "320";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "323";

                case 178:
                    if (!true) {
                            _context.next = 186;
                            break;
                        }

                    "324";
                    _context.next = 182;
                    return _streamline.await(_filename, 564, null, rate, 1, null, false, [100, true]);

                case 182:
                    "325";
                    if (running) {
                            "326";
                            RS_Iter22 = RS_Iterable(total_item);

                            for (RS_Index22 = 0; RS_Index22["<"](RS_Iter22.length); RS_Index22++) {
                                b = RS_Iter22[RS_Index22];
                                "327";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0) })]);
                            }
                        }
                    _context.next = 178;
                    break;

                case 186:
                case "end":
                    return _context.stop();
            }
        }
    }, _$$main$$, this);
}), 0, 1);

var RS_modules = {};
var string, it8, ra_item, rb_item, cylinder_item, total_item, running;
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
