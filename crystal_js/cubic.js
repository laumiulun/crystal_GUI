// START JAVASCRIPT
;(function() {"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var axis_number, gen_csv, print_csv, del_csv, build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, b1, b2, it0, it1, ib1, it2, ib2, it3, ib3, ib5, ib6, b, __name__, strings, RS_Iter16, RS_Index16;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    axis_number = function axis_number(cylinder) {
                        var RS_ls, axis_num;
                        "32";
                        if (cylinder.axis.x !== 0 && (_typeof(cylinder.axis.x) !== "object" || RS_not_equals(cylinder.axis.x, 0))) {
                                "34";
                                axis_num = 0;
                                "35";
                            } else if (cylinder.axis.y !== 0 && (_typeof(cylinder.axis.y) !== "object" || RS_not_equals(cylinder.axis.y, 0))) {
                                "37";
                                axis_num = 1;
                                "38";
                            } else if (cylinder.axis.z !== 0 && (_typeof(cylinder.axis.z) !== "object" || RS_not_equals(cylinder.axis.z, 0))) {
                                "40";
                                axis_num = 2;
                            }
                        "41";
                        return axis_num;
                    };

                    gen_csv = function gen_csv() {
                        var RS_ls, file, i, axis_num;
                        "44";
                        file = open("nacl_v1.csv", "w+");
                        "45";
                        file.write("#type,x,y,z,radius\n");
                        "47";
                        var RS_Iter1 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index1 = 0; RS_Index1["<"](RS_Iter1.length); RS_Index1++) {
                            i = RS_Iter1[RS_Index1];
                            "49";
                            file.write(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "56";
                        file.write("#type,x,y,z,axis\n");
                        "57";
                        var RS_Iter2 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index2 = 0; RS_Index2["<"](RS_Iter2.length); RS_Index2++) {
                            i = RS_Iter2[RS_Index2];
                            "58";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "60";
                            file.write(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
                        }
                        "61";
                        file.close();
                    };

                    print_csv = function print_csv() {
                        var RS_ls, string_list, i, axis_num;
                        "64";
                        "65";
                        "67";
                        it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "" })]);
                        "68";
                        it5.text = "";
                        "79";
                        string_list = RS_list_decorate([]);
                        "80";
                        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
                        "81";
                        string_list.append("#type,x,y,z,radius\n");
                        "84";
                        var RS_Iter3 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index3 = 0; RS_Index3["<"](RS_Iter3.length); RS_Index3++) {
                            i = RS_Iter3[RS_Index3];
                            "85";
                            string_list.append(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
                        }
                        "91";
                        string_list.append("#type,x,y,z,axis,length\n");
                        "92";
                        var RS_Iter4 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
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
                        it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: string })]);
                    };

                    del_csv = function del_csv() {
                        var RS_ls;
                        "101";
                        "102";
                        it5.remove();
                        "103";
                        it5.text = "";
                    };

                    build = function build(L, ra) {
                        var RS_ls, L1, b, k, j, i;
                        "107";
                        "108";
                        "109";
                        "110";
                        "111";
                        L1 = L["+"](1);
                        "112";
                        for (var RS_Index5 = L1["-u"](); RS_Index5["<"](L1); RS_Index5++) {
                            i = RS_Index5;
                            "113";
                            for (var RS_Index6 = L1["-u"](); RS_Index6["<"](L1); RS_Index6++) {
                                j = RS_Index6;
                                "114";
                                for (var RS_Index7 = L1["-u"](); RS_Index7["<"](L1); RS_Index7++) {
                                    k = RS_Index7;
                                    "115";
                                    if (RS_equals(L % 2, 0)) {
                                            "116";
                                            if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                                    "117";
                                                    if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                            "118";
                                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: ra, color: color.green })]);
                                                            "119";
                                                            ra_item.append(b);
                                                        }
                                                }
                                            "120";
                                            if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                    "121";
                                                    if (i["+"](1)["<="](L1["-"](1))) {
                                                            "122";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(2, 0, 0), radius: .01, color: color.white })]);
                                                            "123";
                                                            cylinder_item.append(b);
                                                        }
                                                    "124";
                                                    if (j["+"](1)["<="](L1["-"](1))) {
                                                            "125";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 2, 0), radius: .01, color: color.white })]);
                                                            "126";
                                                            cylinder_item.append(b);
                                                        }
                                                    "127";
                                                    if (k["+"](1)["<="](L1["-"](1))) {
                                                            "128";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i, j, k), axis: vector(0, 0, 2), radius: .01, color: color.white })]);
                                                            "129";
                                                            cylinder_item.append(b);
                                                            "130";
                                                        }
                                                }
                                        } else {
                                            "131";
                                            if (RS_equals(i["+"](j)["+"](k) % 2, 0)) {
                                                    "132";
                                                    if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                            "133";
                                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), radius: ra, color: color.green })]);
                                                            "134";
                                                            ra_item.append(b);
                                                        }
                                                }
                                            "135";
                                            if (RS_equals(i % 2, 0) && RS_equals(j % 2, 0) && RS_equals(k % 2, 0)) {
                                                    "136";
                                                    if (i["<"](L1["-"](2))) {
                                                            "137";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(2, 0, 0), radius: .01, color: color.white })]);
                                                            "138";
                                                            cylinder_item.append(b);
                                                        }
                                                    "139";
                                                    if (j["<"](L1["-"](2))) {
                                                            "140";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(0, 2, 0), radius: .01, color: color.white })]);
                                                            "141";
                                                            cylinder_item.append(b);
                                                        }
                                                    "142";
                                                    if (k["<"](L1["-"](2))) {
                                                            "143";
                                                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(0, 0, 2), radius: .01, color: color.white })]);
                                                            "144";
                                                            cylinder_item.append(b);
                                                        }
                                                }
                                        }
                                }
                            }
                        }
                        "146";
                        total_item = ra_item["+"](cylinder_item);
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "152";
                        "153";
                        "154";
                        "155";
                        "156";
                        "157";
                        running = !running;
                        "158";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "164";
                        "165";
                        "166";
                        "167";
                        "168";
                        var RS_Iter8 = RS_Iterable(ra_item);
                        for (var RS_Index8 = 0; RS_Index8["<"](RS_Iter8.length); RS_Index8++) {
                            i = RS_Iter8[RS_Index8];
                            "169";
                            i.visible = false;
                            "170";
                            i = undefined;
                        }
                        "171";
                        var RS_Iter9 = RS_Iterable(rb_item);
                        for (var RS_Index9 = 0; RS_Index9["<"](RS_Iter9.length); RS_Index9++) {
                            i = RS_Iter9[RS_Index9];
                            "172";
                            i.visible = false;
                            "173";
                            i = undefined;
                        }
                        "174";
                        var RS_Iter10 = RS_Iterable(cylinder_item);
                        for (var RS_Index10 = 0; RS_Index10["<"](RS_Iter10.length); RS_Index10++) {
                            i = RS_Iter10[RS_Index10];
                            "175";
                            i.visible = false;
                            "176";
                            i = undefined;
                        }
                        "177";
                        var RS_Iter11 = RS_Iterable(total_item);
                        for (var RS_Index11 = 0; RS_Index11["<"](RS_Iter11.length); RS_Index11++) {
                            i = RS_Iter11[RS_Index11];
                            "178";
                            i.visible = false;
                            "179";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls;
                        "183";
                        "184";
                        "185";
                        "186";
                        "187";
                        "188";
                        clear();
                        "190";
                        build(L, ra);
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, x, y;
                        "195";
                        bond_ab = s.number;
                        "196";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "197";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "198";
                        var RS_Iter12 = RS_Iterable(ra_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            x = RS_Iter12[RS_Index12];
                            "199";
                            x.radius = ra;
                        }
                        "200";
                        var RS_Iter13 = RS_Iterable(rb_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            y = RS_Iter13[RS_Index13];
                            "201";
                            y.radius = rb;
                        }
                        "202";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "206";
                        ra_int = s.number;
                        "207";
                        ra = ra_int["/"](2)["/"](bond_ab)["*"](1);
                        "208";
                        var RS_Iter14 = RS_Iterable(ra_item);
                        for (var RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                            x = RS_Iter14[RS_Index14];
                            "209";
                            x.radius = ra;
                        }
                        "210";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "213";
                        rb_int = s.number;
                        "214";
                        rb = rb_int["/"](2)["/"](bond_ab)["*"](1);
                        "215";
                        var RS_Iter15 = RS_Iterable(rb_item);
                        for (var RS_Index15 = 0; RS_Index15["<"](RS_Iter15.length); RS_Index15++) {
                            y = RS_Iter15[RS_Index15];
                            "216";
                            y.radius = rb;
                        }
                        "217";
                        return rb;
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L;
                        "220";
                        "221";
                        "222";
                        "223";
                        "224";
                        "225";
                        L = s.number;
                        "226";
                        clear();
                        "227";
                        scene5.camera.pos = vector(0, 0, 2["*"](L));
                        "228";
                        scene5.center = vector(0, 0, 0);
                        "232";
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
                    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
                        __argnames__: { value: ["cylinder"] }
                    });

                    "43";
                    ;

                    "63";
                    ;

                    "100";
                    ;

                    "106";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra"] }
                    });

                    "151";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "163";
                    ;

                    "182";
                    ;

                    "194";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "205";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "212";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "219";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "239";
                    build(L, ra);
                    "244";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>Cubic Structure example</h2><hr>", pos: scene5.title_anchor })]);
                    "247";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "The cubic structure is the simplest example of a crystal lattice. Each cubic units cell have a one atom inside, with a coordinations number of \n8. ", pos: scene5.title_anchor })]);
                    "253";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "260";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integar Only)</li><li><b>bond_ab</b>: Lattice Constant(\\(   \\unicode{x212B}   \\))(1\\(   \\unicode{x212B}   \\) = \\(10^{-10} \\)meter)</li><li><b><font color = \"green\">r_a<font color =\"black\"></b>: Atomic Radius[<font color = \"Green\">Green<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li></ul>", pos: scene5.title_anchor })]);
                    "262";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "265";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "266";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "268";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n" })]);
                    "271";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "272";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "274";
                    scene5.append_to_caption("\n");
                    "276";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond_ab: " })]);
                    "277";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 2.77315 })]);
                    "279";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "280";
                    scene5.append_to_caption("\n");
                    "282";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "283";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: 1.44 })]);
                    "284";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "286";
                    scene5.append_to_caption("\n");
                    "292";
                    scene5.append_to_caption("\n\n");
                    "305";
                    ib5 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: print_csv, text: "Generate CSV for STL conversion" })]);
                    "306";
                    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: del_csv, text: "Remove CSV Box" })]);
                    "308";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "311";

                case 141:
                    if (!true) {
                            _context.next = 149;
                            break;
                        }

                    "312";
                    _context.next = 145;
                    return _streamline.await(_filename, 515, null, rate, 1, null, false, [100, true]);

                case 145:
                    "313";
                    if (running) {
                            "314";
                            RS_Iter16 = RS_Iterable(total_item);

                            for (RS_Index16 = 0; RS_Index16["<"](RS_Iter16.length); RS_Index16++) {
                                b = RS_Iter16[RS_Index16];
                                "315";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0) })]);
                            }
                        }
                    _context.next = 141;
                    break;

                case 149:
                case "end":
                    return _context.stop();
            }
        }
    }, _$$main$$, this);
}), 0, 1);

var RS_modules = {};
var string, it5, ra_item, rb_item, cylinder_item, total_item, running, scene5;
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
