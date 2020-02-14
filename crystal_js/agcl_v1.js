// START JAVASCRIPT
;(function() {;
var RS_modules = {};
var string, it8, ra_item, rb_item, cylinder_item, total_item, running;
RS_modules.pythonize = {};

(function(){
    function strings() {
        var string_funcs, exclude, name;
        string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
        if (!arguments.length) {
            exclude = (function(){
                var s = RS_set();
                s.jsset.add("split");
                s.jsset.add("replace");
                return s;
            })();
        } else if (arguments[0]) {
            exclude = Array.prototype.slice.call(arguments);
        } else {
            exclude = null;
        }
        if (exclude) {
            string_funcs = string_funcs.difference(set(exclude));
        }
        var RS_Iter0 = string_funcs;
        RS_Iter0 = ((typeof RS_Iter0[Symbol.iterator] === "function") ? (RS_Iter0 instanceof Map ? RS_Iter0.keys() : RS_Iter0) : Object.keys(RS_Iter0));
        for (var RS_Index0 of RS_Iter0) {
            name = RS_Index0;
            (RS_expr_temp = String.prototype)[(typeof name === "number" && name < 0) ? RS_expr_temp.length + name : name] = (RS_expr_temp = RS_str.prototype)[(typeof name === "number" && name < 0) ? RS_expr_temp.length + name : name];
        }
    };

    RS_modules.pythonize.strings = strings;
})();
async function __main__() {
    var version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, arange, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, bond_default_text, ra_default_text, rb_default_text, scale_factor, scale_default_text, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, RS_unpack, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it4, ib4, it5, ib5, ib6, ib7, it8, b;
    version = RS_list_decorate([ "2.9", "glowscript" ]);
    Array.prototype['+']=function(r) {return this.concat(r)}
    Array.prototype['*']=function(r) {return __array_times_number(this, r)}
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
    arange = range;
    type = pytype;
    scene = canvas();
    var strings = RS_modules.pythonize.strings;

    strings();
    "6";
    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({background: color.black, width: 600, length: 600, center: vector(0, 0, 0)})]);
    "8";
    L = 1;
    "9";
    bond_ab = 2.77;
    "10";
    ra_int = 1.29;
    "11";
    rb_int = 1.67;
    "13";
    bond_default_text = str(bond_ab);
    "14";
    ra_default_text = str(ra_int);
    "15";
    rb_default_text = str(rb_int);
    "17";
    scale_factor = .5;
    "18";
    scale_default_text = str(scale_factor);
    "21";
    ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
    "22";
    rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
    "26";
    scene5.autoscale = true;
    "36";
    ra_item = RS_list_decorate([]);
    "37";
    rb_item = RS_list_decorate([]);
    "38";
    cylinder_item = RS_list_decorate([]);
    "39";
    total_item = RS_list_decorate([]);
    "40";
    running = false;
    "44";
    async function axis_number(cylinder) {
        var RS_ls, axis_num;
        "45";
        if ((cylinder.axis.x === 1 || typeof cylinder.axis.x === "object" && RS_equals(cylinder.axis.x, 1))) {
            "47";
            axis_num = 0;
            "48";
        } else if ((cylinder.axis.y === 1 || typeof cylinder.axis.y === "object" && RS_equals(cylinder.axis.y, 1))) {
            "50";
            axis_num = 1;
            "51";
        } else if ((cylinder.axis.z === 1 || typeof cylinder.axis.z === "object" && RS_equals(cylinder.axis.z, 1))) {
            "53";
            axis_num = 2;
        }
        "54";
        return axis_num;
    };
    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
        __argnames__ : {value: ["cylinder"]}
    });

    "57";
    async function print_csv() {
        var RS_ls, string_list, i, axis_num;
        "58";
        "59";
        "61";
        if (RS_not_equals(len(it8.text), 0)) {
            "62";
            it8 = (await del_csv());
        }
        "73";
        string_list = RS_list_decorate([]);
        "74";
        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
        "75";
        string_list.append("#type,x,y,z,radius\n");
        "78";
        var RS_Iter1 = range(len(ra_item));
        RS_Iter1 = ((typeof RS_Iter1[Symbol.iterator] === "function") ? (RS_Iter1 instanceof Map ? RS_Iter1.keys() : RS_Iter1) : Object.keys(RS_Iter1));
        for (var RS_Index1 of RS_Iter1) {
            i = RS_Index1;
            "79";
            string_list.append(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"](",nan\n"));
        }
        "81";
        var RS_Iter2 = range(len(rb_item));
        RS_Iter2 = ((typeof RS_Iter2[Symbol.iterator] === "function") ? (RS_Iter2 instanceof Map ? RS_Iter2.keys() : RS_Iter2) : Object.keys(RS_Iter2));
        for (var RS_Index2 of RS_Iter2) {
            i = RS_Index2;
            "82";
            string_list.append(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"](",nan\n"));
        }
        "85";
        string_list.append("#type,x,y,z,axis,length\n");
        "86";
        var RS_Iter3 = range(len(cylinder_item));
        RS_Iter3 = ((typeof RS_Iter3[Symbol.iterator] === "function") ? (RS_Iter3 instanceof Map ? RS_Iter3.keys() : RS_Iter3) : Object.keys(RS_Iter3));
        for (var RS_Index3 of RS_Iter3) {
            i = RS_Index3;
            "87";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "88";
            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n"));
        }
        "90";
        string_list.append("<\/p>");
        "91";
        string = "".join(string_list);
        "92";
        it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: string})]);
    };

    "94";
    async function del_csv() {
        "95";
        "97";
        it8.text = "";
        "98";
        return it8;
    };

    "101";
    async function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
        var RS_ls, b, k, j, i;
        "102";
        for (var RS_Index4 = L["-u"](); RS_Index4["<"](L["+"](1)); RS_Index4++) {
            i = RS_Index4;
            "103";
            for (var RS_Index5 = L["-u"](); RS_Index5["<"](L["+"](1)); RS_Index5++) {
                j = RS_Index5;
                "104";
                for (var RS_Index6 = L["-u"](); RS_Index6["<"](L["+"](1)); RS_Index6++) {
                    k = RS_Index6;
                    "106";
                    if (RS_equals(L["%"](2), 1)) {
                        "107";
                        if (RS_equals(abs(i["+"](j)["+"](k))["%"](2), 0)) {
                            "109";
                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: color.gray(.9)})]);
                            "110";
                            ra_item.append(b);
                            "111";
                        } else {
                            "112";
                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i, j, k), radius: rb, color: color.green})]);
                            "113";
                            rb_item.append(b);
                            "115";
                        }
                        if (i["+"](1)["<="](L)) {
                            "116";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(1, 0, 0), radius: .01, color: color.white})]);
                            "117";
                            cylinder_item.append(b);
                            "118";
                        }
                        if (j["+"](1)["<="](L)) {
                            "119";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 1, 0), radius: .01, color: color.white})]);
                            "120";
                            cylinder_item.append(b);
                            "121";
                        }
                        if (k["+"](1)["<="](L)) {
                            "122";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, 1), radius: .01, color: color.white})]);
                            "123";
                            cylinder_item.append(b);
                            "125";
                        }
                    } else {
                        "126";
                        if (RS_equals(abs(i["+"](j)["+"](k))["%"](2), 1)) {
                            "128";
                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: color.gray(.9)})]);
                            "129";
                            ra_item.append(b);
                            "130";
                        } else {
                            "131";
                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i, j, k), radius: rb, color: color.green})]);
                            "132";
                            rb_item.append(b);
                            "133";
                        }
                        if (i["<"](L)) {
                            "134";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(1, 0, 0), radius: .01, color: color.white})]);
                            "135";
                            cylinder_item.append(b);
                            "136";
                        }
                        if (j["<"](L)) {
                            "137";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 1, 0), radius: .01, color: color.white})]);
                            "138";
                            cylinder_item.append(b);
                            "139";
                        }
                        if (k["<"](L)) {
                            "140";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, 1), radius: .01, color: color.white})]);
                            "141";
                            cylinder_item.append(b);
                        }
                    }
                }
            }
        }
        "143";
        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
        "145";
        return [ra_item, rb_item, cylinder_item, total_item];
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"]}
    });

    "147";
    async function build_button(s) {
        "148";
        "149";
        "150";
        "151";
        "152";
        "153";
        running = !running;
        "154";
        if (running) {
            s.text = "Pause";
        } else {
            s.text = "Run";
        }
    };
    if (!build_button.__argnames__) Object.defineProperties(build_button, {
        __argnames__ : {value: ["s"]}
    });

    "159";
    async function clear() {
        var RS_ls, i;
        "160";
        var RS_Iter7 = ra_item;
        RS_Iter7 = ((typeof RS_Iter7[Symbol.iterator] === "function") ? (RS_Iter7 instanceof Map ? RS_Iter7.keys() : RS_Iter7) : Object.keys(RS_Iter7));
        for (var RS_Index7 of RS_Iter7) {
            i = RS_Index7;
            "161";
            i.visible = false;
            "162";
            i = undefined;
        }
        "164";
        var RS_Iter8 = rb_item;
        RS_Iter8 = ((typeof RS_Iter8[Symbol.iterator] === "function") ? (RS_Iter8 instanceof Map ? RS_Iter8.keys() : RS_Iter8) : Object.keys(RS_Iter8));
        for (var RS_Index8 of RS_Iter8) {
            i = RS_Index8;
            "165";
            i.visible = false;
            "166";
            i = undefined;
        }
        "168";
        var RS_Iter9 = cylinder_item;
        RS_Iter9 = ((typeof RS_Iter9[Symbol.iterator] === "function") ? (RS_Iter9 instanceof Map ? RS_Iter9.keys() : RS_Iter9) : Object.keys(RS_Iter9));
        for (var RS_Index9 of RS_Iter9) {
            i = RS_Index9;
            "169";
            i.visible = false;
            "170";
            i = undefined;
        }
    };

    "174";
    async function reset() {
        var RS_ls, RS_unpack;
        "175";
        "176";
        "177";
        "178";
        "179";
        ;(await clear());
        "180";
        RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
        ra_item = RS_unpack[0];
        rb_item = RS_unpack[1];
        cylinder_item = RS_unpack[2];
        total_item = RS_unpack[3];
    };

    "184";
    async function set_bondab(s) {
        var RS_ls, bond_ab, ra, rb, x, y;
        "185";
        bond_ab = s.number;
        "186";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "187";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "188";
        var RS_Iter10 = ra_item;
        RS_Iter10 = ((typeof RS_Iter10[Symbol.iterator] === "function") ? (RS_Iter10 instanceof Map ? RS_Iter10.keys() : RS_Iter10) : Object.keys(RS_Iter10));
        for (var RS_Index10 of RS_Iter10) {
            x = RS_Index10;
            "189";
            x.radius = ra;
        }
        "190";
        var RS_Iter11 = rb_item;
        RS_Iter11 = ((typeof RS_Iter11[Symbol.iterator] === "function") ? (RS_Iter11 instanceof Map ? RS_Iter11.keys() : RS_Iter11) : Object.keys(RS_Iter11));
        for (var RS_Index11 of RS_Iter11) {
            y = RS_Index11;
            "191";
            y.radius = rb;
        }
        "192";
        return bond_ab;
    };
    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
        __argnames__ : {value: ["s"]}
    });

    "195";
    async function set_ra(s) {
        var RS_ls, ra_int, ra, x;
        "196";
        ra_int = s.number;
        "197";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "198";
        var RS_Iter12 = ra_item;
        RS_Iter12 = ((typeof RS_Iter12[Symbol.iterator] === "function") ? (RS_Iter12 instanceof Map ? RS_Iter12.keys() : RS_Iter12) : Object.keys(RS_Iter12));
        for (var RS_Index12 of RS_Iter12) {
            x = RS_Index12;
            "199";
            x.radius = ra;
        }
        "200";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]}
    });

    "202";
    async function set_rb(s) {
        var RS_ls, rb_int, rb, y;
        "203";
        rb_int = s.number;
        "204";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "205";
        var RS_Iter13 = rb_item;
        RS_Iter13 = ((typeof RS_Iter13[Symbol.iterator] === "function") ? (RS_Iter13 instanceof Map ? RS_Iter13.keys() : RS_Iter13) : Object.keys(RS_Iter13));
        for (var RS_Index13 of RS_Iter13) {
            y = RS_Index13;
            "206";
            y.radius = rb;
        }
        "207";
        return rb;
    };
    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
        __argnames__ : {value: ["s"]}
    });

    "209";
    async function set_scale_factor(s) {
        var RS_ls, scale_factor, ra, rb, x, y;
        "210";
        scale_factor = s.number;
        "211";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "212";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "213";
        var RS_Iter14 = ra_item;
        RS_Iter14 = ((typeof RS_Iter14[Symbol.iterator] === "function") ? (RS_Iter14 instanceof Map ? RS_Iter14.keys() : RS_Iter14) : Object.keys(RS_Iter14));
        for (var RS_Index14 of RS_Iter14) {
            x = RS_Index14;
            "214";
            x.radius = ra;
        }
        "215";
        var RS_Iter15 = rb_item;
        RS_Iter15 = ((typeof RS_Iter15[Symbol.iterator] === "function") ? (RS_Iter15 instanceof Map ? RS_Iter15.keys() : RS_Iter15) : Object.keys(RS_Iter15));
        for (var RS_Index15 of RS_Iter15) {
            y = RS_Index15;
            "216";
            y.radius = rb;
        }
        "217";
        return [scale_factor, ra, rb];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]}
    });

    "219";
    async function set_L(s) {
        var RS_ls, L, RS_unpack;
        "220";
        "221";
        "222";
        "223";
        "224";
        L = s.number;
        "225";
        ;(await clear());
        "227";
        scene5.camera.pos = vector(0, 0, 2["*"](L));
        "228";
        scene5.center = vector(0, 0, 0);
        "230";
        RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
        ra_item = RS_unpack[0];
        rb_item = RS_unpack[1];
        cylinder_item = RS_unpack[2];
        total_item = RS_unpack[3];
    };
    if (!set_L.__argnames__) Object.defineProperties(set_L, {
        __argnames__ : {value: ["s"]}
    });

    "236";
    RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
    ra_item = RS_unpack[0];
    rb_item = RS_unpack[1];
    cylinder_item = RS_unpack[2];
    total_item = RS_unpack[3];
    "242";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h2>fcc Lattice Example: Silver Chloride (AgCl)</h2><hr>", pos: scene5.title_anchor})]);
    "247";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "Silver Chloride with the chemical symbol \\(AgCl \\) is an ionic compound similar to Sodium Chloride.\nIt consists of two types of ions: sodium ions and chloride ions which alternate with each other in each of \nthe three dimensions. The repeating pattern is in a shape of of cube, and there are lattice points on the \nfaces of the cube. Such a sytems is called the face-centered cubic (fcc) system. \n\n", pos: scene5.title_anchor})]);
    "250";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<b> This version of animation adopts trinary atoms in each dimensions to illustrate the fcc structure.\n</b>", pos: scene5.title_anchor})]);
    "256";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor})]);
    "264";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Structure Parameters</h3><ul><li><b>L</b>: Number of cells (Integer Only)</li><li><b>bond</b>: bond length </li><li><b><font color = \"grey\">r_a<font color =\"black\"></b>: Ionic radius of Silver [<font color = \"Grey\">Grey<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li><li><b><font color = \"green\">r_b<font color =\"black\"></b>: Ionic radius of Chloride [<font color = \"Green\">Green<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li></ul>", pos: scene5.title_anchor})]);
    "266";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "268";
    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h5>Parameters:</h5>Adjust the lattice constants below to construct another FCC material.\nPress <b>Enter key</b> after <b>every</b> changes to take effect.\n"})]);
    "273";
    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Run", pos: scene5.title_anchor, bind: build_button})]);
    "274";
    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Reset", pos: scene5.title_anchor, bind: reset})]);
    "277";
    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "L: "})]);
    ;(await sleep(.2));
    "278";
    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "280";
    scene5.append_to_caption("\n");
    "282";
    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "bond: "})]);
    ;(await sleep(.2));
    "283";
    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: bond_default_text})]);
    "285";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "286";
    scene5.append_to_caption("\n");
    "288";
    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "ra: "})]);
    ;(await sleep(.2));
    "289";
    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text})]);
    "290";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "292";
    scene5.append_to_caption("\n");
    "294";
    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "rb: "})]);
    ;(await sleep(.2));
    "295";
    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: rb_default_text})]);
    "296";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "298";
    scene5.append_to_caption("\n");
    "301";
    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "scale: "})]);
    ;(await sleep(.2));
    "302";
    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "303";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "( Must be less than or equal to 1. A value less than 1 is used for an exploded view. )"})]);
    "305";
    scene5.append_to_caption("\n\n");
    "321";
    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: print_csv, text: "Generate CSV for STL conversion"})]);
    "322";
    ib7 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: del_csv, text: "Remove CSV Box"})]);
    "323";
    scene5.append_to_caption("\n\n\n");
    "324";
    it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: ""})]);
    "326";
    MathJax.Hub.Queue(RS_list_decorate([ "Typeset", MathJax.Hub ]));
    "331";
    while (true) {
        "332";
        ;(await rate(100));
        "333";
        if (running) {
            "334";
            var RS_Iter16 = total_item;
            RS_Iter16 = ((typeof RS_Iter16[Symbol.iterator] === "function") ? (RS_Iter16 instanceof Map ? RS_Iter16.keys() : RS_Iter16) : Object.keys(RS_Iter16));
            for (var RS_Index16 of RS_Iter16) {
                b = RS_Index16;
                "335";
                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0)})]);
            }
        }
    }
};

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT
