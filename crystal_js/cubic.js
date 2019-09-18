// START JAVASCRIPT
;(function() {"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var axis_number, gen_csv, print_csv, del_csv, build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_scale_factor, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, ra_int, bond_ab, rb_int, bond_default_text, ra_default_text, rb_default_text, scale_factor, scale_default_text, ra, ra_item, rb_item, cylinder_item, total_item, running, b1, b2, it0, it1, ib1, it2, ib2, it3, ib3, it5, ib5, ib6, ib7, it8, b, __name__, strings, RS_Iter18, RS_Index18;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    axis_number = function axis_number(cylinder) {
                        var RS_ls, axis_num;
                        "41";
                        if (cylinder.axis.x !== 0 && (_typeof(cylinder.axis.x) !== "object" || RS_not_equals(cylinder.axis.x, 0))) {
                                "43";
                                axis_num = 0;
                                "44";
                            } else if (cylinder.axis.y !== 0 && (_typeof(cylinder.axis.y) !== "object" || RS_not_equals(cylinder.axis.y, 0))) {
                                "46";
                                axis_num = 1;
                                "47";
                            } else if (cylinder.axis.z !== 0 && (_typeof(cylinder.axis.z) !== "object" || RS_not_equals(cylinder.axis.z, 0))) {
                                "49";
                                axis_num = 2;
                            }
                        "50";
                        return axis_num;
                    };

                    gen_csv = function gen_csv() {
                        var RS_ls, file, i, axis_num;
                        "53";
                        file = open("nacl_v1.csv", "w+");
                        "54";
                        file.write("#type,x,y,z,radius\n");
                        "56";
                        var RS_Iter1 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index1 = 0; RS_Index1["<"](RS_Iter1.length); RS_Index1++) {
                            i = RS_Iter1[RS_Index1];
                            "58";
                            file.write(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "65";
                        file.write("#type,x,y,z,axis\n");
                        "66";
                        var RS_Iter2 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index2 = 0; RS_Index2["<"](RS_Iter2.length); RS_Index2++) {
                            i = RS_Iter2[RS_Index2];
                            "67";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "69";
                            file.write(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "70";
                        file.close();
                    };

                    print_csv = function print_csv() {
                        var RS_ls, string_list, i, axis_num;
                        "73";
                        "74";
                        "76";
                        if (it8.text !== "None" && (_typeof(it8.text) !== "object" || RS_not_equals(it8.text, "None"))) {
                                "77";
                                del_csv();
                            }
                        "88";
                        string_list = RS_list_decorate([]);
                        "89";
                        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
                        "90";
                        string_list.append("#type,x,y,z,radius\n");
                        "93";
                        var RS_Iter3 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index3 = 0; RS_Index3["<"](RS_Iter3.length); RS_Index3++) {
                            i = RS_Iter3[RS_Index3];
                            "94";
                            string_list.append(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "100";
                        string_list.append("#type,x,y,z,axis,length\n");
                        "101";
                        var RS_Iter4 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "102";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "103";
                            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "105";
                        string_list.append("<\/p>");
                        "106";
                        string = "".join(string_list);
                        "107";
                        it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: string })]);
                    };

                    del_csv = function del_csv() {
                        var RS_ls;
                        "110";
                        "112";
                        it8.text = "";
                    };

                    build = function build(L, ra) {
                        var RS_ls, L1, b, k, j, i;
                        "116";
                        "117";
                        "118";
                        "119";
                        "120";
                        L1 = L["+"](1);
                        "121";
                        for (var RS_Index5 = L1["-u"](); RS_Index5["<"](L1); RS_Index5++) {
                            i = RS_Index5;
                            "122";
                            for (var RS_Index6 = L1["-u"](); RS_Index6["<"](L1); RS_Index6++) {
                                j = RS_Index6;
                                "123";
                                for (var RS_Index7 = L1["-u"](); RS_Index7["<"](L1); RS_Index7++) {
                                    k = RS_Index7;
                                    "124";
                                    if (RS_equals(L % 2, 0)) {
                                            "125";
                                            if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                                    "126";
                                                    if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                            "127";
                                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: ra, color: color.green })]);
                                                            "128";
                                                            ra_item.append(b);
                                                        }
                                                }
                                            "129";
                                            if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                    "130";
                                                    if (i["+"](1)["<="](L1["-"](1))) {
                                                            "131";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(2, 0, 0), radius: .01, color: color.white })]);
                                                            "132";
                                                            cylinder_item.append(b);
                                                        }
                                                    "133";
                                                    if (j["+"](1)["<="](L1["-"](1))) {
                                                            "134";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 2, 0), radius: .01, color: color.white })]);
                                                            "135";
                                                            cylinder_item.append(b);
                                                        }
                                                    "136";
                                                    if (k["+"](1)["<="](L1["-"](1))) {
                                                            "137";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 0, 2), radius: .01, color: color.white })]);
                                                            "138";
                                                            cylinder_item.append(b);
                                                            "139";
                                                        }
                                                }
                                        } else {
                                            "140";
                                            if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                                    "141";
                                                    if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                            "142";
                                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), radius: ra, color: color.green })]);
                                                            "143";
                                                            ra_item.append(b);
                                                        }
                                                }
                                            "144";
                                            if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                    "145";
                                                    if (i["<"](L1["-"](2))) {
                                                            "146";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(2, 0, 0), radius: .01, color: color.white })]);
                                                            "147";
                                                            cylinder_item.append(b);
                                                        }
                                                    "148";
                                                    if (j["<"](L1["-"](2))) {
                                                            "149";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(0, 2, 0), radius: .01, color: color.white })]);
                                                            "150";
                                                            cylinder_item.append(b);
                                                        }
                                                    "151";
                                                    if (k["<"](L1["-"](2))) {
                                                            "152";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(0, 0, 2), radius: .01, color: color.white })]);
                                                            "153";
                                                            cylinder_item.append(b);
                                                        }
                                                }
                                        }
                                }
                            }
                        }
                        "155";
                        total_item = ra_item["+"](cylinder_item);
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "161";
                        "162";
                        "163";
                        "164";
                        "165";
                        "166";
                        running = !running;
                        "167";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "173";
                        "174";
                        "175";
                        "176";
                        "177";
                        var RS_Iter8 = RS_Iterable(ra_item);
                        for (var RS_Index8 = 0; RS_Index8["<"](RS_Iter8.length); RS_Index8++) {
                            i = RS_Iter8[RS_Index8];
                            "178";
                            i.visible = false;
                            "179";
                            i = undefined;
                        }
                        "180";
                        var RS_Iter9 = RS_Iterable(rb_item);
                        for (var RS_Index9 = 0; RS_Index9["<"](RS_Iter9.length); RS_Index9++) {
                            i = RS_Iter9[RS_Index9];
                            "181";
                            i.visible = false;
                            "182";
                            i = undefined;
                        }
                        "183";
                        var RS_Iter10 = RS_Iterable(cylinder_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            i = RS_Iter10[RS_Index10];
                            "184";
                            i.visible = false;
                            "185";
                            i = undefined;
                        }
                        "186";
                        var RS_Iter11 = RS_Iterable(total_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            i = RS_Iter11[RS_Index11];
                            "187";
                            i.visible = false;
                            "188";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls;
                        "192";
                        "193";
                        "194";
                        "195";
                        "196";
                        "197";
                        clear();
                        "199";
                        build(L, ra);
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "204";
                        bond_ab = s.number;
                        "205";
                        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "206";
                        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "207";
                        var RS_Iter12 = RS_Iterable(ra_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            x = RS_Iter12[RS_Index12];
                            "208";
                            x.radius = ra;
                        }
                        "209";
                        var RS_Iter13 = RS_Iterable(rb_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            y = RS_Iter13[RS_Index13];
                            "210";
                            y.radius = rb;
                        }
                        "211";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "215";
                        ra_int = s.number;
                        "216";
                        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "217";
                        var RS_Iter14 = RS_Iterable(ra_item);
                        for (var RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                            x = RS_Iter14[RS_Index14];
                            "218";
                            x.radius = ra;
                        }
                        "219";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "222";
                        rb_int = s.number;
                        "223";
                        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "224";
                        var RS_Iter15 = RS_Iterable(rb_item);
                        for (var RS_Index15 = 0; RS_Index15["<"](RS_Iter15.length); RS_Index15++) {
                            y = RS_Iter15[RS_Index15];
                            "225";
                            y.radius = rb;
                        }
                        "226";
                        return rb;
                    };

                    set_scale_factor = function set_scale_factor(s) {
                        var RS_ls, scale_factor, ra, rb, x, y;
                        "229";
                        scale_factor = s.number;
                        "230";
                        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "231";
                        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "232";
                        var RS_Iter16 = RS_Iterable(ra_item);
                        for (var RS_Index16 = 0; RS_Index16["<"](RS_Iter16.length); RS_Index16++) {
                            x = RS_Iter16[RS_Index16];
                            "233";
                            x.radius = ra;
                        }
                        "234";
                        var RS_Iter17 = RS_Iterable(rb_item);
                        for (var RS_Index17 = 0; RS_Index17["<"](RS_Iter17.length); RS_Index17++) {
                            y = RS_Iter17[RS_Index17];
                            "235";
                            y.radius = rb;
                        }
                        "236";
                        return [scale_factor, ra, rb];
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L;
                        "240";
                        "241";
                        "242";
                        "243";
                        "244";
                        "245";
                        L = s.number;
                        "246";
                        clear();
                        "247";
                        scene5.camera.pos = vector(0, 0, 2["*"](L));
                        "248";
                        scene5.center = vector(0, 0, 0);
                        "252";
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
                    ra_int = 1.67;
                    "9";
                    bond_ab = ra_int;
                    "10";
                    rb_int = 1;
                    "12";
                    bond_default_text = str(bond_ab);
                    "13";
                    ra_default_text = str(ra_int);
                    "14";
                    rb_default_text = str(rb_int);
                    "16";
                    scale_factor = .5;
                    "17";
                    scale_default_text = str(scale_factor);
                    "20";
                    ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                    "25";
                    scene5.autoscale = true;
                    "34";
                    ra_item = RS_list_decorate([]);
                    "35";
                    rb_item = RS_list_decorate([]);
                    "36";
                    cylinder_item = RS_list_decorate([]);
                    "37";
                    total_item = RS_list_decorate([]);
                    "38";
                    running = false;
                    "40";
                    ;
                    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
                        __argnames__: { value: ["cylinder"] }
                    });

                    "52";
                    ;

                    "72";
                    ;

                    "109";
                    ;

                    "115";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra"] }
                    });

                    "160";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "172";
                    ;

                    "191";
                    ;

                    "203";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "214";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "221";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "228";
                    ;
                    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
                        __argnames__: { value: ["s"] }
                    });

                    "239";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "259";
                    build(L, ra);
                    "264";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>Primitive Cubic Crystal System: metal Polonium</h2><hr>", pos: scene5.title_anchor })]);
                    "267";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "The primitive cubic or the simple cubic structure is the simplest crystal structure but also rare crystal structure. \nIt consists of the smallest repeating pattern of the cube with one lattice point on each corner of the cube.", pos: scene5.title_anchor })]);
                    "273";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "280";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Structure Parameters</h3><ul><li><b>L</b>: Number of cells (Integer Only)</li><li><b>bond</b>: Distance between 2 closest atoms/ions </li><li><b><font color = \"green\">r_a<font color =\"black\"></b>: Atomic/ionic radius[<font color = \"Green\">Green<font color =\"black\">] </li></ul>", pos: scene5.title_anchor })]);
                    "282";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "285";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "286";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "288";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n" })]);
                    "291";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "292";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "294";
                    scene5.append_to_caption("\n");
                    "296";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond: " })]);
                    "297";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: bond_default_text })]);
                    "299";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "300";
                    scene5.append_to_caption("\n");
                    "302";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "303";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text })]);
                    "304";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "306";
                    scene5.append_to_caption("\n");
                    "314";
                    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "scale: " })]);
                    "315";
                    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text })]);
                    "316";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "(Must be less than or equal to 1. A value less than 1 is used for an exploded view.)" })]);
                    "318";
                    scene5.append_to_caption("\n\n");
                    "331";
                    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: print_csv, text: "Generate CSV for STL conversion" })]);
                    "332";
                    ib7 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: del_csv, text: "Remove CSV Box" })]);
                    "333";
                    scene5.append_to_caption("\n\n\n");
                    "334";
                    it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "" })]);
                    "337";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "340";

                case 163:
                    if (!true) {
                            _context.next = 171;
                            break;
                        }

                    "341";
                    _context.next = 167;
                    return _streamline.await(_filename, 562, null, rate, 1, null, false, [100, true]);

                case 167:
                    "342";
                    if (running) {
                            "343";
                            RS_Iter18 = RS_Iterable(total_item);

                            for (RS_Index18 = 0; RS_Index18["<"](RS_Iter18.length); RS_Index18++) {
                                b = RS_Iter18[RS_Index18];
                                "344";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0) })]);
                            }
                        }
                    _context.next = 163;
                    break;

                case 171:
                case "end":
                    return _context.stop();
            }
        }
    }, _$$main$$, this);
}), 0, 1);

var RS_modules = {};
var string, it8, ra_item, rb_item, cylinder_item, total_item, running, scene5;
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
