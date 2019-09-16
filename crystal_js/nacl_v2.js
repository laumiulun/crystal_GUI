// START JAVASCRIPT
;(function() {"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var axis_number, gen_csv, print_csv, del_csv, build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, RS_unpack, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it4, ib4, ib5, ib6, b, __name__, strings, RS_Iter20, RS_Index20;

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
                        it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "" })]);
                        "60";
                        it5.text = "";
                        "71";
                        string_list = RS_list_decorate([]);
                        "72";
                        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
                        "73";
                        string_list.append("#type,x,y,z,radius\n");
                        "76";
                        var RS_Iter4 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "77";
                            string_list.append(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "79";
                        var RS_Iter5 = RS_Iterable(range(len(rb_item)));
                        for (var RS_Index5 = 0; RS_Index5["<"](RS_Iter5.length); RS_Index5++) {
                            i = RS_Iter5[RS_Index5];
                            "80";
                            string_list.append(str(0)["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "83";
                        string_list.append("#type,x,y,z,axis,length\n");
                        "84";
                        var RS_Iter6 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index6 = 0; RS_Index6["<"](RS_Iter6.length); RS_Index6++) {
                            i = RS_Iter6[RS_Index6];
                            "85";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "86";
                            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "88";
                        string_list.append("<\/p>");
                        "89";
                        string = "".join(string_list);
                        "90";
                        it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: string })]);
                    };

                    del_csv = function del_csv() {
                        var RS_ls;
                        "93";
                        "94";
                        it5.remove();
                        "95";
                        it5.text = "";
                    };

                    build = function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
                        var RS_ls, b, k, j, i;
                        "101";
                        for (var RS_Index7 = L["-u"]()["+"](1); RS_Index7["<"](L["+"](1)); RS_Index7++) {
                            i = RS_Index7;
                            "102";
                            for (var RS_Index8 = L["-u"]()["+"](1); RS_Index8["<"](L["+"](1)); RS_Index8++) {
                                j = RS_Index8;
                                "103";
                                for (var RS_Index9 = L["-u"]()["+"](1); RS_Index9["<"](L["+"](1)); RS_Index9++) {
                                    k = RS_Index9;
                                    "104";
                                    if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                            "105";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: ra, color: color.magenta })]);
                                            "106";
                                            ra_item.append(b);
                                            "107";
                                        } else {
                                            "108";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: rb, color: color.green })]);
                                            "109";
                                            rb_item.append(b);
                                        }
                                    "110";
                                    if (i["+"](1)["<="](L)) {
                                            "111";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(1, 0, 0), radius: .01, color: color.white })]);
                                            "112";
                                            cylinder_item.append(b);
                                        }
                                    "113";
                                    if (j["+"](1)["<="](L)) {
                                            "114";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 1, 0), radius: .01, color: color.white })]);
                                            "115";
                                            cylinder_item.append(b);
                                        }
                                    "116";
                                    if (k["+"](1)["<="](L)) {
                                            "117";
                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 0, 1), radius: .01, color: color.white })]);
                                            "118";
                                            cylinder_item.append(b);
                                        }
                                }
                            }
                        }
                        "119";
                        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
                        "121";
                        return [ra_item, rb_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "124";
                        "125";
                        "126";
                        "127";
                        "128";
                        "129";
                        running = !running;
                        "130";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "136";
                        var RS_Iter10 = RS_Iterable(ra_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            i = RS_Iter10[RS_Index10];
                            "137";
                            i.visible = false;
                            "138";
                            i = undefined;
                        }
                        "139";
                        var RS_Iter11 = RS_Iterable(rb_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            i = RS_Iter11[RS_Index11];
                            "140";
                            i.visible = false;
                            "141";
                            i = undefined;
                        }
                        "142";
                        var RS_Iter12 = RS_Iterable(cylinder_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            i = RS_Iter12[RS_Index12];
                            "143";
                            i.visible = false;
                            "144";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, i, RS_unpack;
                        "148";
                        "149";
                        "150";
                        "151";
                        "152";
                        var RS_Iter13 = RS_Iterable(ra_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            i = RS_Iter13[RS_Index13];
                            "153";
                            i.visible = false;
                            "154";
                            i = undefined;
                        }
                        "155";
                        var RS_Iter14 = RS_Iterable(rb_item);
                        for (var RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                            i = RS_Iter14[RS_Index14];
                            "156";
                            i.visible = false;
                            "157";
                            i = undefined;
                        }
                        "158";
                        var RS_Iter15 = RS_Iterable(cylinder_item);
                        for (var RS_Index15 = 0; RS_Index15["<"](RS_Iter15.length); RS_Index15++) {
                            i = RS_Iter15[RS_Index15];
                            "159";
                            i.visible = false;
                            "160";
                            i = undefined;
                        }
                        "161";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(4, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        cylinder_item = RS_unpack[2];
                        total_item = RS_unpack[3];
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "165";
                        bond_ab = s.number;
                        "166";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "167";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "168";
                        var RS_Iter16 = RS_Iterable(ra_item);
                        for (var RS_Index16 = 0; RS_Index16["<"](RS_Iter16.length); RS_Index16++) {
                            x = RS_Iter16[RS_Index16];
                            "169";
                            x.radius = ra;
                        }
                        "170";
                        var RS_Iter17 = RS_Iterable(rb_item);
                        for (var RS_Index17 = 0; RS_Index17["<"](RS_Iter17.length); RS_Index17++) {
                            y = RS_Iter17[RS_Index17];
                            "171";
                            y.radius = rb;
                        }
                        "172";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "176";
                        ra_int = s.number;
                        "177";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "178";
                        var RS_Iter18 = RS_Iterable(ra_item);
                        for (var RS_Index18 = 0; RS_Index18["<"](RS_Iter18.length); RS_Index18++) {
                            x = RS_Iter18[RS_Index18];
                            "179";
                            x.radius = ra;
                        }
                        "180";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "183";
                        rb_int = s.number;
                        "184";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "185";
                        var RS_Iter19 = RS_Iterable(rb_item);
                        for (var RS_Index19 = 0; RS_Index19["<"](RS_Iter19.length); RS_Index19++) {
                            y = RS_Iter19[RS_Index19];
                            "186";
                            y.radius = rb;
                        }
                        "187";
                        return rb;
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "190";
                        "191";
                        "192";
                        "193";
                        "194";
                        L = s.number;
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

                    "92";
                    ;

                    "99";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"] }
                    });

                    "123";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "135";
                    ;

                    "147";
                    ;

                    "164";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "175";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "182";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "189";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "201";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(4, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    cylinder_item = RS_unpack[2];
                    total_item = RS_unpack[3];
                    "206";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>FCC Lattice Example: Sodium Chloride (NaCl)</h2><hr>", pos: scene5.title_anchor })]);
                    "209";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "Sodium Cloride, occurs natually as white crystals of salt, is an ionic compound with the chemical symbol\n\\(NaCl \\). It is composed of two types of elements (Sodium and Chloride) forming Face Center Cubic (FCC) \nlattice structure by repeating each cubic unit cell.\n\n", pos: scene5.title_anchor })]);
                    "215";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "223";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integar Only)</li><li><b>bond_ab</b>: Lattice Constant(\\(   \\unicode{x212B}   \\))(1\\(   \\unicode{x212B}   \\) = \\(10^{-10} \\)meter)</li><li><b><font color = \"Purple\">r_a<font color = \"Black\"></b>: Atomic Radius of Sodium [<font color =\"Purple\">Purple<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li><li><b><font color = \"Green\">r_b<font color = \"Black\"></b>: Atomic Radius of Chloride [<font color =\"Green\">Green<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li></ul>", pos: scene5.title_anchor })]);
                    "225";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "227";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the lattice constants below to construct another FCC material.\nPress <b>Enter key</b> after <b>every</b> changes to take effect.\n" })]);
                    "231";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "232";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "235";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "236";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "238";
                    scene5.append_to_caption("\n");
                    "240";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond_ab: " })]);
                    "241";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 2.7266 })]);
                    "243";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "244";
                    scene5.append_to_caption("\n");
                    "246";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "247";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: .99 })]);
                    "248";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "250";
                    scene5.append_to_caption("\n");
                    "252";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "253";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: 1.91 })]);
                    "254";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(\\(   \\unicode{x212B}   \\))" })]);
                    "256";
                    scene5.append_to_caption("\n\n");
                    "270";
                    ib5 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: print_csv, text: "Generate CSV for STL conversion" })]);
                    "271";
                    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: del_csv, text: "Remove CSV Box" })]);
                    "275";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "278";

                case 150:
                    if (!true) {
                            _context.next = 158;
                            break;
                        }

                    "279";
                    _context.next = 154;
                    return _streamline.await(_filename, 511, null, rate, 1, null, false, [100, true]);

                case 154:
                    "280";
                    if (running) {
                            "281";
                            RS_Iter20 = RS_Iterable(total_item);

                            for (RS_Index20 = 0; RS_Index20["<"](RS_Iter20.length); RS_Index20++) {
                                b = RS_Iter20[RS_Index20];
                                "282";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0) })]);
                            }
                        }
                    _context.next = 150;
                    break;

                case 158:
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
