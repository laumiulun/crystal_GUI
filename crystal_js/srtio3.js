// START JAVASCRIPT
;(function() {;
var RS_modules = {};
var string, it9, ra_item, rb_item, ro_item, cylinder_item, total_item, running;
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
    var version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, arange, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ro_int, bond_default_text, ra_default_text, rb_default_text, ro_default_text, scale_factor, scale_default_text, ra, rb, ro, ra_item, rb_item, ro_item, cylinder_item, total_item, running, opatom, opbar, RS_unpack, b1, b2, it0, it1, ib1, it2, ib2, it3, ib3, it4, ib4, it5, ib5, it6, ib6, ib7, ib8, it9, b;
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
    "5";
    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({background: color.black, width: 600, length: 600, center: vector(1["-u"](), 1["-u"](), 1["-u"]())})]);
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
    "48";
    async function axis_number(cylinder) {
        var RS_ls, axis_num;
        "49";
        if ((cylinder.axis.x !== 0 && (typeof cylinder.axis.x !== "object" || RS_not_equals(cylinder.axis.x, 0)))) {
            "51";
            axis_num = 0;
            "52";
        } else if ((cylinder.axis.y !== 0 && (typeof cylinder.axis.y !== "object" || RS_not_equals(cylinder.axis.y, 0)))) {
            "54";
            axis_num = 1;
            "55";
        } else if ((cylinder.axis.z !== 0 && (typeof cylinder.axis.z !== "object" || RS_not_equals(cylinder.axis.z, 0)))) {
            "57";
            axis_num = 2;
        }
        "58";
        return axis_num;
    };
    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
        __argnames__ : {value: ["cylinder"]}
    });

    "60";
    async function print_csv() {
        var RS_ls, string_list, i, axis_num;
        "61";
        "62";
        "64";
        if (RS_not_equals(len(it9.text), 0)) {
            "65";
            it9 = (await del_csv());
        }
        "76";
        string_list = RS_list_decorate([]);
        "77";
        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
        "78";
        string_list.append("#type,x,y,z,radius\n");
        "81";
        var RS_Iter1 = range(len(ra_item));
        RS_Iter1 = ((typeof RS_Iter1[Symbol.iterator] === "function") ? (RS_Iter1 instanceof Map ? RS_Iter1.keys() : RS_Iter1) : Object.keys(RS_Iter1));
        for (var RS_Index1 of RS_Iter1) {
            i = RS_Index1;
            "82";
            string_list.append(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"](",nan\n"));
        }
        "84";
        var RS_Iter2 = range(len(rb_item));
        RS_Iter2 = ((typeof RS_Iter2[Symbol.iterator] === "function") ? (RS_Iter2 instanceof Map ? RS_Iter2.keys() : RS_Iter2) : Object.keys(RS_Iter2));
        for (var RS_Index2 of RS_Iter2) {
            i = RS_Index2;
            "85";
            string_list.append(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"](",nan\n"));
        }
        "87";
        var RS_Iter3 = range(len(ro_item));
        RS_Iter3 = ((typeof RS_Iter3[Symbol.iterator] === "function") ? (RS_Iter3 instanceof Map ? RS_Iter3.keys() : RS_Iter3) : Object.keys(RS_Iter3));
        for (var RS_Index3 of RS_Iter3) {
            i = RS_Index3;
            "88";
            string_list.append(str(0)["+"](",")["+"](str(ro_item[(typeof i === "number" && i["<"](0)) ? ro_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ro_item[(typeof i === "number" && i["<"](0)) ? ro_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ro_item[(typeof i === "number" && i["<"](0)) ? ro_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ro_item[(typeof i === "number" && i["<"](0)) ? ro_item.length["+"](i) : i].radius))["+"](",nan\n"));
        }
        "91";
        string_list.append("#type,x,y,z,axis,length\n");
        "92";
        var RS_Iter4 = range(len(cylinder_item));
        RS_Iter4 = ((typeof RS_Iter4[Symbol.iterator] === "function") ? (RS_Iter4 instanceof Map ? RS_Iter4.keys() : RS_Iter4) : Object.keys(RS_Iter4));
        for (var RS_Index4 of RS_Iter4) {
            i = RS_Index4;
            "93";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "94";
            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n"));
        }
        "96";
        string_list.append("<\/p>");
        "97";
        string = "".join(string_list);
        "98";
        it9 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: string})]);
    };

    "100";
    async function del_csv() {
        "101";
        "103";
        it9.text = "";
        "104";
        return it9;
    };

    "108";
    async function build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item) {
        var RS_ls, L1, LB, LN1, v0, b, na, v, x, m, k, j, i;
        "109";
        L1 = L;
        "110";
        LB = L["-"](1);
        "111";
        LN1 = L["-"](1);
        "113";
        for (var RS_Index5 = L["-u"](); RS_Index5["<"](L1); RS_Index5++) {
            i = RS_Index5;
            "114";
            for (var RS_Index6 = L["-u"](); RS_Index6["<"](L1); RS_Index6++) {
                j = RS_Index6;
                "115";
                for (var RS_Index7 = L["-u"](); RS_Index7["<"](L1); RS_Index7++) {
                    k = RS_Index7;
                    "117";
                    for (var RS_Index8 = 1["-u"](); RS_Index8["<"](0); RS_Index8++) {
                        na = RS_Index8;
                        "118";
                        v0 = vector(i["+"](1["/"](2)["*"](na)), j["+"](1["/"](2)["*"](na)), k["+"](1["/"](2)["*"](na)));
                        "119";
                        b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: v0, radius: ra, color: color.green, opacity: opatom})]);
                        "120";
                        ra_item.append(b);
                        "121";
                        if (i["<"](LN1)) {
                            "122";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: v0, axis: vector(1, 0, 0), radius: .01, color: color.white, opacity: opbar})]);
                            "123";
                            cylinder_item.append(b);
                            "124";
                        }
                        if (j["<"](LN1)) {
                            "125";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: v0, axis: vector(0, 1, 0), radius: .01, color: color.white, opacity: opbar})]);
                            "126";
                            cylinder_item.append(b);
                            "127";
                        }
                        if (k["<"](LN1)) {
                            "128";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: v0, axis: vector(0, 0, 1), radius: .01, color: color.white, opacity: opbar})]);
                            "129";
                            cylinder_item.append(b);
                            "131";
                        }
                    }
                    if (i["<"](LB) && j["<"](LB) && k["<"](LB)) {
                        "132";
                        b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i, j, k), radius: rb, color: vector(0, .7, 1), opacity: opatom})]);
                        "133";
                        rb_item.append(b);
                        "136";
                        v = RS_list_decorate([ vector(i["-"](1["/"](2)), j, k), vector(i["+"](1["/"](2)), j, k), vector(i, j["-"](1["/"](2)), k), vector(i, j["+"](1["/"](2)), k), vector(i, j, k["-"](1["/"](2))), vector(i, j, k["+"](1["/"](2))) ]);
                        "137";
                        var RS_Iter9 = v;
                        RS_Iter9 = ((typeof RS_Iter9[Symbol.iterator] === "function") ? (RS_Iter9 instanceof Map ? RS_Iter9.keys() : RS_Iter9) : Object.keys(RS_Iter9));
                        for (var RS_Index9 of RS_Iter9) {
                            x = RS_Index9;
                            "138";
                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: x, radius: ro, color: color.red, opacity: opatom})]);
                            "139";
                            ro_item.append(b);
                        }
                        "140";
                        for (var RS_Index10 = 2; RS_Index10["<"](6); RS_Index10++) {
                            m = RS_Index10;
                            "141";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: v[0], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[0]), radius: .01, color: color.white, opacity: opbar})]);
                            "142";
                            cylinder_item.append(b);
                            "143";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: v[1], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[1]), radius: .01, color: color.white, opacity: opbar})]);
                            "144";
                            cylinder_item.append(b);
                        }
                        "145";
                        for (var RS_Index11 = 4; RS_Index11["<"](6); RS_Index11++) {
                            m = RS_Index11;
                            "146";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: v[2], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[2]), radius: .01, color: color.white, opacity: opbar})]);
                            "147";
                            cylinder_item.append(b);
                            "148";
                            b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: v[3], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[3]), radius: .01, color: color.white, opacity: opbar})]);
                            "149";
                            cylinder_item.append(b);
                        }
                    }
                }
            }
        }
        "151";
        total_item = ra_item["+"](rb_item)["+"](ro_item)["+"](cylinder_item);
        "153";
        return [ra_item, rb_item, ro_item, cylinder_item, total_item];
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra", "rb", "ra_item", "rb_item", "ro_item", "cylinder_item", "total_item"]}
    });

    "155";
    async function build_button(s) {
        "156";
        "157";
        "158";
        "159";
        "160";
        "161";
        "162";
        running = !running;
        "163";
        if (running) {
            s.text = "Pause";
        } else {
            s.text = "Run";
        }
    };
    if (!build_button.__argnames__) Object.defineProperties(build_button, {
        __argnames__ : {value: ["s"]}
    });

    "168";
    async function clear() {
        var RS_ls, i;
        "169";
        var RS_Iter12 = ra_item;
        RS_Iter12 = ((typeof RS_Iter12[Symbol.iterator] === "function") ? (RS_Iter12 instanceof Map ? RS_Iter12.keys() : RS_Iter12) : Object.keys(RS_Iter12));
        for (var RS_Index12 of RS_Iter12) {
            i = RS_Index12;
            "170";
            i.visible = false;
            "171";
            i = undefined;
        }
        "172";
        var RS_Iter13 = rb_item;
        RS_Iter13 = ((typeof RS_Iter13[Symbol.iterator] === "function") ? (RS_Iter13 instanceof Map ? RS_Iter13.keys() : RS_Iter13) : Object.keys(RS_Iter13));
        for (var RS_Index13 of RS_Iter13) {
            i = RS_Index13;
            "173";
            i.visible = false;
            "174";
            i = undefined;
        }
        "175";
        var RS_Iter14 = ro_item;
        RS_Iter14 = ((typeof RS_Iter14[Symbol.iterator] === "function") ? (RS_Iter14 instanceof Map ? RS_Iter14.keys() : RS_Iter14) : Object.keys(RS_Iter14));
        for (var RS_Index14 of RS_Iter14) {
            i = RS_Index14;
            "176";
            i.visible = false;
            "177";
            i = undefined;
        }
        "178";
        var RS_Iter15 = cylinder_item;
        RS_Iter15 = ((typeof RS_Iter15[Symbol.iterator] === "function") ? (RS_Iter15 instanceof Map ? RS_Iter15.keys() : RS_Iter15) : Object.keys(RS_Iter15));
        for (var RS_Index15 of RS_Iter15) {
            i = RS_Index15;
            "179";
            i.visible = false;
            "180";
            i = undefined;
        }
    };

    "183";
    async function reset() {
        var RS_ls, RS_unpack;
        "184";
        "185";
        "186";
        "187";
        "188";
        "189";
        ;(await clear());
        "190";
        RS_unpack = (await build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(5, RS_unpack);
        ra_item = RS_unpack[0];
        rb_item = RS_unpack[1];
        ro_item = RS_unpack[2];
        cylinder_item = RS_unpack[3];
        total_item = RS_unpack[4];
    };

    "193";
    async function set_bondab(s) {
        var RS_ls, bond_ab, ra, rb, ro, x, y, z;
        "194";
        bond_ab = s.number;
        "195";
        ra = ra_int["/"](bond_ab)["*"](scale_factor);
        "196";
        rb = rb_int["/"](bond_ab)["*"](scale_factor);
        "197";
        ro = ro_int["/"](bond_ab)["*"](scale_factor);
        "198";
        var RS_Iter16 = ra_item;
        RS_Iter16 = ((typeof RS_Iter16[Symbol.iterator] === "function") ? (RS_Iter16 instanceof Map ? RS_Iter16.keys() : RS_Iter16) : Object.keys(RS_Iter16));
        for (var RS_Index16 of RS_Iter16) {
            x = RS_Index16;
            "199";
            x.radius = ra;
        }
        "200";
        var RS_Iter17 = rb_item;
        RS_Iter17 = ((typeof RS_Iter17[Symbol.iterator] === "function") ? (RS_Iter17 instanceof Map ? RS_Iter17.keys() : RS_Iter17) : Object.keys(RS_Iter17));
        for (var RS_Index17 of RS_Iter17) {
            y = RS_Index17;
            "201";
            y.radius = rb;
        }
        "202";
        var RS_Iter18 = ro_item;
        RS_Iter18 = ((typeof RS_Iter18[Symbol.iterator] === "function") ? (RS_Iter18 instanceof Map ? RS_Iter18.keys() : RS_Iter18) : Object.keys(RS_Iter18));
        for (var RS_Index18 of RS_Iter18) {
            z = RS_Index18;
            "203";
            z.radius = ro;
        }
        "204";
        return bond_ab;
    };
    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
        __argnames__ : {value: ["s"]}
    });

    "207";
    async function set_ra(s) {
        var RS_ls, ra_int, ra, x;
        "208";
        ra_int = s.number;
        "209";
        ra = ra_int["/"](bond_ab)["*"](scale_factor);
        "210";
        var RS_Iter19 = ra_item;
        RS_Iter19 = ((typeof RS_Iter19[Symbol.iterator] === "function") ? (RS_Iter19 instanceof Map ? RS_Iter19.keys() : RS_Iter19) : Object.keys(RS_Iter19));
        for (var RS_Index19 of RS_Iter19) {
            x = RS_Index19;
            "211";
            x.radius = ra;
        }
        "212";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]}
    });

    "214";
    async function set_rb(s) {
        var RS_ls, rb_int, rb, y;
        "215";
        rb_int = s.number;
        "216";
        rb = rb_int["/"](bond_ab)["*"](scale_factor);
        "217";
        var RS_Iter20 = rb_item;
        RS_Iter20 = ((typeof RS_Iter20[Symbol.iterator] === "function") ? (RS_Iter20 instanceof Map ? RS_Iter20.keys() : RS_Iter20) : Object.keys(RS_Iter20));
        for (var RS_Index20 of RS_Iter20) {
            y = RS_Index20;
            "218";
            y.radius = rb;
        }
        "219";
        return rb;
    };
    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
        __argnames__ : {value: ["s"]}
    });

    "222";
    async function set_ro(s) {
        var RS_ls, ro_int, ro, y;
        "223";
        ro_int = s.number;
        "224";
        ro = ro_int["/"](bond_ab)["*"](scale_factor);
        "225";
        var RS_Iter21 = ro_item;
        RS_Iter21 = ((typeof RS_Iter21[Symbol.iterator] === "function") ? (RS_Iter21 instanceof Map ? RS_Iter21.keys() : RS_Iter21) : Object.keys(RS_Iter21));
        for (var RS_Index21 of RS_Iter21) {
            y = RS_Index21;
            "226";
            y.radius = ro;
        }
        "227";
        return ro;
    };
    if (!set_ro.__argnames__) Object.defineProperties(set_ro, {
        __argnames__ : {value: ["s"]}
    });

    "229";
    async function set_scale_factor(s) {
        var RS_ls, scale_factor, ra, rb, ro, x, y, z;
        "230";
        scale_factor = s.number;
        "231";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "232";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "233";
        ro = ro_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "234";
        var RS_Iter22 = ra_item;
        RS_Iter22 = ((typeof RS_Iter22[Symbol.iterator] === "function") ? (RS_Iter22 instanceof Map ? RS_Iter22.keys() : RS_Iter22) : Object.keys(RS_Iter22));
        for (var RS_Index22 of RS_Iter22) {
            x = RS_Index22;
            "235";
            x.radius = ra;
        }
        "236";
        var RS_Iter23 = rb_item;
        RS_Iter23 = ((typeof RS_Iter23[Symbol.iterator] === "function") ? (RS_Iter23 instanceof Map ? RS_Iter23.keys() : RS_Iter23) : Object.keys(RS_Iter23));
        for (var RS_Index23 of RS_Iter23) {
            y = RS_Index23;
            "237";
            y.radius = rb;
        }
        "238";
        var RS_Iter24 = ro_item;
        RS_Iter24 = ((typeof RS_Iter24[Symbol.iterator] === "function") ? (RS_Iter24 instanceof Map ? RS_Iter24.keys() : RS_Iter24) : Object.keys(RS_Iter24));
        for (var RS_Index24 of RS_Iter24) {
            z = RS_Index24;
            "239";
            z.radius = ro;
        }
        "240";
        return [scale_factor, ra, rb, ro];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]}
    });

    "243";
    async function set_L(s) {
        var RS_ls, L, RS_unpack;
        "244";
        "245";
        "246";
        "247";
        "248";
        "249";
        L = s.number;
        "250";
        ;(await clear());
        "251";
        RS_unpack = (await build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(5, RS_unpack);
        ra_item = RS_unpack[0];
        rb_item = RS_unpack[1];
        ro_item = RS_unpack[2];
        cylinder_item = RS_unpack[3];
        total_item = RS_unpack[4];
    };
    if (!set_L.__argnames__) Object.defineProperties(set_L, {
        __argnames__ : {value: ["s"]}
    });

    "256";
    RS_unpack = (await build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(5, RS_unpack);
    ra_item = RS_unpack[0];
    rb_item = RS_unpack[1];
    ro_item = RS_unpack[2];
    cylinder_item = RS_unpack[3];
    total_item = RS_unpack[4];
    "261";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h2>Perovskite Example: Calcium Titanate (<b> SrTiO<sub>3</sub> </b>)</h2><hr>", pos: scene5.title_anchor})]);
    "292";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "\nA <b>Perovskite</b> is a colourless mineral of Calcium Titanate with the chemical formula <b> CaTiO<sub>3</sub> </b>. \nIt is discovered by German mineralogist Gustave Rose who named it after a Russian mineralogist\nLev Alexeievitch Perovskite. Later, perovskites are referred to a family of materials with the \nsame crystal structure as <b> CaTiO<sub>3</sub> </b>. So the general chemical formula for this category \nof perovskite compounds is <b> ABX<sub>3</sub> </b>, where A is a metal cation (positively charged ion), \nB is a cation and X is an anion (negatively charged ion).  If X is oxygen, the sub-category can also be \nrepresented as <b> ABO<sub>3</sub> </b>.\n\n<b> CaTiO<sub>3</sub> </b> consists of three types of ions: positive Calcium ions (symbol: Ca+), Titanium \nions (symbol: Ti+) and negative Oxygen ions (symbol: O-) which alternate with each other in each of the \nthree dimensions. In a unit cell, Ca+ occupies the corners,  Ti+ occupies the center of the lattice and \nO- are at the center of faces. \n\nSimilarly, <b> SrTiO<sub>3</sub> </b> (Strontium Titanate) consists of three types of ions: positive \nStrontium ions (symbol: Sr+), Titanium ions (symbol: Ti+) and negative Oxygen ions (symbol: O-) in the \nsame way. It is one of the few materials with ideal perovskite structure (no slight distortion). \n\nPerovskites are of great importance in material science and can be widely applied to photovoltaics, laser, \nsemiconductors and so on. \n\n<b>Perovskite solar cells</b>: Solar cells with perovskite structures have shown remarkable progress in \nimproving energy conversion efficiency, from reports of about 3% in 2006 to over 24% in 2019 and thus are \nthought to be a frontier energy solution.  Department of Energy is of great interest in research to increase \nthe efficiency and lifetime of hybrid organic-inorganic perovskite solar cells. Targeted materials include \nmethylammonium lead halide, i.e., <b> CH<sub>3</sub>NH<sub>3</sub>PbX<sub>3</sub> </b>, where X = I, Br or Cl.\n\nThere are two GUI files for Ideal Perovskite Structure solids. One for Calcium Titanate (<b> CaTiO<sub>3</sub> </b>), and \none for Strontium Titanate (<b> SrTiO<sub>3</sub> </b>)\n\n", pos: scene5.title_anchor})]);
    "298";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor})]);
    "307";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integar Only)</li><li><b>bond</b>: distance between two closest Ca+ ions </li><li><b><font color =\"Green\">r_a<font color =\"black\"></b>: ionic radius of Sr+ [<font color = \"Green\">Green<font color =\"black\">] </li><li><b><font color =\"Blue\">r_b<font color =\"black\"></b>: ionic radius of Ti+ [<font color =\"Blue\">Blue<font color =\"black\">] </li><li><b><font color =\"Red\">r_o<font color =\"black\"></b>: ionic radius of O- [<font color =\"Red\">Red<font color =\"black\">] </li></ul>", pos: scene5.title_anchor})]);
    "309";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "312";
    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Run", pos: scene5.title_anchor, bind: build_button})]);
    "313";
    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Reset", pos: scene5.title_anchor, bind: reset})]);
    ;(await sleep(.2));
    "315";
    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n"})]);
    "319";
    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "L: "})]);
    ;(await sleep(.2));
    "320";
    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "321";
    scene5.append_to_caption("\n");
    "323";
    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "bond: "})]);
    ;(await sleep(.2));
    "324";
    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: bond_default_text})]);
    "325";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "326";
    scene5.append_to_caption("\n");
    "328";
    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "ra: "})]);
    ;(await sleep(.2));
    "329";
    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text})]);
    "330";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "331";
    scene5.append_to_caption("\n");
    "333";
    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "rb: "})]);
    ;(await sleep(.2));
    "334";
    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: rb_default_text})]);
    "335";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "336";
    scene5.append_to_caption("\n");
    "338";
    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "ro: "})]);
    ;(await sleep(.2));
    "339";
    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ro, text: ro_default_text})]);
    "340";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "341";
    scene5.append_to_caption("\n");
    "345";
    it6 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "scale: "})]);
    ;(await sleep(.2));
    "346";
    ib6 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "347";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "( Must be less than or equal to 1. A value less than 1 is used for an exploded view. )"})]);
    "349";
    scene5.append_to_caption("\n\n");
    "352";
    ib7 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: print_csv, text: "Generate CSV for STL conversion"})]);
    "353";
    ib8 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: del_csv, text: "Remove CSV Box"})]);
    "354";
    scene5.append_to_caption("\n\n\n");
    "355";
    it9 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: ""})]);
    "358";
    scene5.append_to_caption("\n\n");
    "361";
    MathJax.Hub.Queue(RS_list_decorate([ "Typeset", MathJax.Hub ]));
    "364";
    while (true) {
        "365";
        ;(await rate(100));
        "366";
        if (running) {
            "367";
            var RS_Iter25 = total_item;
            RS_Iter25 = ((typeof RS_Iter25[Symbol.iterator] === "function") ? (RS_Iter25 instanceof Map ? RS_Iter25.keys() : RS_Iter25) : Object.keys(RS_Iter25));
            for (var RS_Index25 of RS_Iter25) {
                b = RS_Index25;
                "368";
                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({angle: .01, axis: vector(0, 1, 0), origin: vector(1["-u"](), 1["-u"](), 1["-u"]())})]);
            }
        }
    }
};

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT
