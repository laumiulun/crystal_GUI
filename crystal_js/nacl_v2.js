// START JAVASCRIPT
;(function() {"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var axis_number, gen_csv, print_csv, del_csv, build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, RS_unpack, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it4, ib4, ib5, ib6, it5, b, __name__, strings, RS_Iter20, RS_Index20;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    axis_number = function axis_number(cylinder) {
                        var RS_ls, axis_num;
                        "24";
                        if (cylinder.axis.x === 1 || _typeof(cylinder.axis.x) === "object" && RS_equals(cylinder.axis.x, 1)) {
                                "26";
                                axis_num = 0;
                                "27";
                            } else if (cylinder.axis.y === 1 || _typeof(cylinder.axis.y) === "object" && RS_equals(cylinder.axis.y, 1)) {
                                "29";
                                axis_num = 1;
                                "30";
                            } else if (cylinder.axis.z === 1 || _typeof(cylinder.axis.z) === "object" && RS_equals(cylinder.axis.z, 1)) {
                                "32";
                                axis_num = 2;
                            }
                        "33";
                        return axis_num;
                    };

                    gen_csv = function gen_csv() {
                        var RS_ls, file, i, axis_num;
                        "36";
                        file = open("nacl_v1.csv", "w+");
                        "37";
                        file.write("#type,x,y,z,radius\n");
                        "39";
                        var RS_Iter1 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index1 = 0; RS_Index1["<"](RS_Iter1.length); RS_Index1++) {
                            i = RS_Iter1[RS_Index1];
                            "41";
                            file.write(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "43";
                        var RS_Iter2 = RS_Iterable(range(len(rb_item)));
                        for (var RS_Index2 = 0; RS_Index2["<"](RS_Iter2.length); RS_Index2++) {
                            i = RS_Iter2[RS_Index2];
                            "45";
                            file.write(str(0)["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "48";
                        file.write("#type,x,y,z,axis\n");
                        "49";
                        var RS_Iter3 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index3 = 0; RS_Index3["<"](RS_Iter3.length); RS_Index3++) {
                            i = RS_Iter3[RS_Index3];
                            "50";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "52";
                            file.write(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "53";
                        file.close();
                    };

                    print_csv = function print_csv() {
                        var RS_ls, string_list, i, axis_num;
                        "56";
                        "57";
                        "59";
                        if (it5.text !== "None" && (_typeof(it5.text) !== "object" || RS_not_equals(it5.text, "None"))) {
                                "60";
                                it5.remove();
                            }
                        "70";
                        string_list = RS_list_decorate([]);
                        "71";
                        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
                        "72";
                        string_list.append("#type,x,y,z,radius\n");
                        "75";
                        var RS_Iter4 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "76";
                            string_list.append(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "78";
                        var RS_Iter5 = RS_Iterable(range(len(rb_item)));
                        for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                            i = RS_Iter5[RS_Index5];
                            "79";
                            string_list.append(str(0)["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "82";
                        string_list.append("#type,x,y,z,axis,length\n");
                        "83";
                        var RS_Iter6 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index6 = 0; RS_Index6["<"](RS_Iter6.length); RS_Index6++) {
                            i = RS_Iter6[RS_Index6];
                            "84";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "85";
                            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "87";
                        string_list.append("<\/p>");
                        "88";
                        string = "".join(string_list);
                        "89";
                        it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: string })]);
                    };

                    del_csv = function del_csv() {
                        var RS_ls;
                        "92";
                        "93";
                        it5.text = "";
                    };

                    build = function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
                        var RS_ls, b, k, j, i;
                        "99";
                        for (var RS_Index7 = L["-u"]()["+"](1); RS_Index7["<"](L["+"](1)); RS_Index7++) {
                            i = RS_Index7;
                            "100";
                            for (var RS_Index8 = L["-u"]()["+"](1); RS_Index8["<"](L["+"](1)); RS_Index8++) {
                                j = RS_Index8;
                                "101";
                                for (var RS_Index9 = L["-u"]()["+"](1); RS_Index9["<"](L["+"](1)); RS_Index9++) {
                                    k = RS_Index9;
                                    "102";
                                    if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                            "103";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: ra, color: color.magenta })]);
                                            "104";
                                            ra_item.append(b);
                                            "105";
                                        } else {
                                            "106";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: rb, color: color.green })]);
                                            "107";
                                            rb_item.append(b);
                                        }
                                    "108";
                                    if (i["+"](1)["<="](L)) {
                                            "109";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                            "110";
                                            cylinder_item.append(b);
                                        }
                                    "111";
                                    if (j["+"](1)["<="](L)) {
                                            "112";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                            "113";
                                            cylinder_item.append(b);
                                        }
                                    "114";
                                    if (k["+"](1)["<="](L)) {
                                            "115";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                            "116";
                                            cylinder_item.append(b);
                                        }
                                }
                            }
                        }
                        "117";
                        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
                        "119";
                        return [ra_item, rb_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "122";
                        "123";
                        "124";
                        "125";
                        "126";
                        "127";
                        running = !running;
                        "128";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "134";
                        var RS_Iter10 = RS_Iterable(ra_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            i = RS_Iter10[RS_Index10];
                            "135";
                            i.visible = false;
                            "136";
                            i = undefined;
                        }
                        "137";
                        var RS_Iter11 = RS_Iterable(rb_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            i = RS_Iter11[RS_Index11];
                            "138";
                            i.visible = false;
                            "139";
                            i = undefined;
                        }
                        "140";
                        var RS_Iter12 = RS_Iterable(cylinder_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            i = RS_Iter12[RS_Index12];
                            "141";
                            i.visible = false;
                            "142";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, i, RS_unpack;
                        "146";
                        "147";
                        "148";
                        "149";
                        "150";
                        var RS_Iter13 = RS_Iterable(ra_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            i = RS_Iter13[RS_Index13];
                            "151";
                            i.visible = false;
                            "152";
                            i = undefined;
                        }
                        "153";
                        var RS_Iter14 = RS_Iterable(rb_item);
                        for (var RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                            i = RS_Iter14[RS_Index14];
                            "154";
                            i.visible = false;
                            "155";
                            i = undefined;
                        }
                        "156";
                        var RS_Iter15 = RS_Iterable(cylinder_item);
                        for (var RS_Index15 = 0; RS_Index15["<"](RS_Iter15.length); RS_Index15++) {
                            i = RS_Iter15[RS_Index15];
                            "157";
                            i.visible = false;
                            "158";
                            i = undefined;
                        }
                        "159";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(4, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        cylinder_item = RS_unpack[2];
                        total_item = RS_unpack[3];
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "163";
                        bond_ab = s.number;
                        "164";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "165";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "166";
                        var RS_Iter16 = RS_Iterable(ra_item);
                        for (var RS_Index16 = 0; RS_Index16["<"](RS_Iter16.length); RS_Index16++) {
                            x = RS_Iter16[RS_Index16];
                            "167";
                            x.radius = ra;
                        }
                        "168";
                        var RS_Iter17 = RS_Iterable(rb_item);
                        for (var RS_Index17 = 0; RS_Index17["<"](RS_Iter17.length); RS_Index17++) {
                            y = RS_Iter17[RS_Index17];
                            "169";
                            y.radius = rb;
                        }
                        "170";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "174";
                        ra_int = s.number;
                        "175";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "176";
                        var RS_Iter18 = RS_Iterable(ra_item);
                        for (var RS_Index18 = 0; RS_Index18["<"](RS_Iter18.length); RS_Index18++) {
                            x = RS_Iter18[RS_Index18];
                            "177";
                            x.radius = ra;
                        }
                        "178";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "181";
                        rb_int = s.number;
                        "182";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "183";
                        var RS_Iter19 = RS_Iterable(rb_item);
                        for (var RS_Index19 = 0; RS_Index19["<"](RS_Iter19.length); RS_Index19++) {
                            y = RS_Iter19[RS_Index19];
                            "184";
                            y.radius = rb;
                        }
                        "185";
                        return rb;
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "188";
                        "189";
                        "190";
                        "191";
                        "192";
                        L = s.number;
                        "193";
                        clear();
                        "194";
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
                    bond_ab = 2.7266;
                    "11";
                    ra_int = .99;
                    "12";
                    rb_int = 1.91;
                    "14";
                    ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                    "15";
                    rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                    "17";
                    ra_item = RS_list_decorate([]);
                    "18";
                    rb_item = RS_list_decorate([]);
                    "19";
                    cylinder_item = RS_list_decorate([]);
                    "20";
                    total_item = RS_list_decorate([]);
                    "21";
                    running = false;
                    "23";
                    ;
                    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
                        __argnames__: { value: ["cylinder"] }
                    });

                    "35";
                    ;

                    "55";
                    ;

                    "91";
                    ;

                    "97";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"] }
                    });

                    "121";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "133";
                    ;

                    "145";
                    ;

                    "162";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "173";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "180";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "187";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "199";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(4, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    cylinder_item = RS_unpack[2];
                    total_item = RS_unpack[3];
                    "204";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>FCC Lattice Example: Sodium Chloride (NaCl)</h2><hr>", pos: scene5.title_anchor })]);
                    "207";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "Sodium Cloride, occurs natually as white crystals of salt, is an ionic compound with the chemical symbol\n\\(NaCl \\). It is composed of two types of elements (Sodium and Chloride) forming Face Center Cubic (FCC) \nlattice structure by repeating each cubic unit cell.\n\n", pos: scene5.title_anchor })]);
                    "213";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "221";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integer Only)</li><li><b>bond_ab</b>: Lattice Constant(\\(   \\unicode{x212B}   \\))(1\\(   \\unicode{x212B}   \\) = \\(10^{-10} \\)meter)</li><li><b><font color = \"Purple\">r_a<font color = \"Black\"></b>: Atomic Radius of Sodium [<font color =\"Purple\">Purple<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li><li><b><font color = \"Green\">r_b<font color = \"Black\"></b>: Atomic Radius of Chloride [<font color =\"Green\">Green<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li></ul>", pos: scene5.title_anchor })]);
                    "223";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "225";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the lattice constants below to construct another FCC material.\nPress <b>Enter key</b> after <b>every</b> changes to take effect.\n" })]);
                    "229";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "230";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "233";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "234";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "236";
                    scene5.append_to_caption("\n");
                    "238";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond_ab: " })]);
                    "239";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 2.7266 })]);
                    "241";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "242";
                    scene5.append_to_caption("\n");
                    "244";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "245";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: .99 })]);
                    "246";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "248";
                    scene5.append_to_caption("\n");
                    "250";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "251";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: 1.91 })]);
                    "252";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "254";
                    scene5.append_to_caption("\n\n");
                    "268";
                    ib5 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: print_csv, text: "Generate CSV for STL conversion" })]);
                    "269";
                    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: del_csv, text: "Remove CSV Box" })]);
                    "270";
                    scene5.append_to_caption("\n\n\n");
                    "271";
                    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "" })]);
                    "273";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "276";

                case 154:
                    if (!true) {
                            _context.next = 162;
                            break;
                        }

                    "277";
                    _context.next = 158;
                    return _streamline.await(_filename, 514, null, rate, 1, null, false, [100, true]);

                case 158:
                    "278";
                    if (running) {
                            "279";
                            RS_Iter20 = RS_Iterable(total_item);

                            for (RS_Index20 = 0; RS_Index20["<"](RS_Iter20.length); RS_Index20++) {
                                b = RS_Iter20[RS_Index20];
                                "280";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0) })]);
                            }
                        }
                    _context.next = 154;
                    break;

                case 162:
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
