// START JAVASCRIPT
;(function() {;
var RS_modules = {};
var string, it8, ra_item, rb_item, cylinder_item, total_item, running, scene5;
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
    var version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, arange, type, scene, RS_ls, scene5, L, ra_int, bond_ab, rb_int, bond_default_text, ra_default_text, rb_default_text, scale_factor, scale_default_text, ra, ra_item, rb_item, cylinder_item, total_item, running, b1, b2, it0, it1, ib1, it2, ib2, it3, ib3, it5, ib5, ib6, ib7, it8, b;
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
    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({background: color.black, width: 600, length: 600, center: vector(0, 0, 0)})]);
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
    async function axis_number(cylinder) {
        var RS_ls, axis_num;
        "41";
        if ((cylinder.axis.x !== 0 && (typeof cylinder.axis.x !== "object" || RS_not_equals(cylinder.axis.x, 0)))) {
            "43";
            axis_num = 0;
            "44";
        } else if ((cylinder.axis.y !== 0 && (typeof cylinder.axis.y !== "object" || RS_not_equals(cylinder.axis.y, 0)))) {
            "46";
            axis_num = 1;
            "47";
        } else if ((cylinder.axis.z !== 0 && (typeof cylinder.axis.z !== "object" || RS_not_equals(cylinder.axis.z, 0)))) {
            "49";
            axis_num = 2;
        }
        "50";
        return axis_num;
    };
    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
        __argnames__ : {value: ["cylinder"]}
    });

    "52";
    async function print_csv() {
        var RS_ls, string_list, i, axis_num;
        "53";
        "54";
        "56";
        if (RS_not_equals(len(it8.text), 0)) {
            "57";
            it8 = (await del_csv());
        }
        "68";
        string_list = RS_list_decorate([]);
        "69";
        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
        "70";
        string_list.append("#type,x,y,z,radius\n");
        "73";
        var RS_Iter1 = range(len(ra_item));
        RS_Iter1 = ((typeof RS_Iter1[Symbol.iterator] === "function") ? (RS_Iter1 instanceof Map ? RS_Iter1.keys() : RS_Iter1) : Object.keys(RS_Iter1));
        for (var RS_Index1 of RS_Iter1) {
            i = RS_Index1;
            "74";
            string_list.append(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"](",nan\n"));
        }
        "80";
        string_list.append("#type,x,y,z,axis,length\n");
        "81";
        var RS_Iter2 = range(len(cylinder_item));
        RS_Iter2 = ((typeof RS_Iter2[Symbol.iterator] === "function") ? (RS_Iter2 instanceof Map ? RS_Iter2.keys() : RS_Iter2) : Object.keys(RS_Iter2));
        for (var RS_Index2 of RS_Iter2) {
            i = RS_Index2;
            "82";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "83";
            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n"));
        }
        "85";
        string_list.append("<\/p>");
        "86";
        string = "".join(string_list);
        "87";
        it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: string})]);
    };

    "89";
    async function del_csv() {
        "90";
        "92";
        it8.text = "";
        "93";
        return it8;
    };

    "95";
    async function build(L, ra) {
        var RS_ls, L1, b, k, j, i;
        "96";
        "97";
        "98";
        "99";
        "100";
        L1 = L["+"](1);
        "101";
        for (var RS_Index3 = L1["-u"](); RS_Index3["<"](L1); RS_Index3++) {
            i = RS_Index3;
            "102";
            for (var RS_Index4 = L1["-u"](); RS_Index4["<"](L1); RS_Index4++) {
                j = RS_Index4;
                "103";
                for (var RS_Index5 = L1["-u"](); RS_Index5["<"](L1); RS_Index5++) {
                    k = RS_Index5;
                    "104";
                    if (RS_equals(L["%"](2), 0)) {
                        "105";
                        if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                            "106";
                            if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                                "107";
                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: color.green})]);
                                "108";
                                ra_item.append(b);
                                "109";
                            }
                        }
                        if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                            "110";
                            if (i["+"](1)["<="](L1["-"](1))) {
                                "111";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(2, 0, 0), radius: .01, color: color.white})]);
                                "112";
                                cylinder_item.append(b);
                                "113";
                            }
                            if (j["+"](1)["<="](L1["-"](1))) {
                                "114";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 2, 0), radius: .01, color: color.white})]);
                                "115";
                                cylinder_item.append(b);
                                "116";
                            }
                            if (k["+"](1)["<="](L1["-"](1))) {
                                "117";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, 2), radius: .01, color: color.white})]);
                                "118";
                                cylinder_item.append(b);
                                "119";
                            }
                        }
                    } else {
                        "120";
                        if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                            "121";
                            if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                                "122";
                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), radius: ra, color: color.green})]);
                                "123";
                                ra_item.append(b);
                                "124";
                            }
                        }
                        if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                            "125";
                            if (i["<"](L1["-"](2))) {
                                "126";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(2, 0, 0), radius: .01, color: color.white})]);
                                "127";
                                cylinder_item.append(b);
                                "128";
                            }
                            if (j["<"](L1["-"](2))) {
                                "129";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(0, 2, 0), radius: .01, color: color.white})]);
                                "130";
                                cylinder_item.append(b);
                                "131";
                            }
                            if (k["<"](L1["-"](2))) {
                                "132";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(0, 0, 2), radius: .01, color: color.white})]);
                                "133";
                                cylinder_item.append(b);
                            }
                        }
                    }
                }
            }
        }
        "135";
        total_item = ra_item["+"](cylinder_item);
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra"]}
    });

    "140";
    async function build_button(s) {
        "141";
        "142";
        "143";
        "144";
        "145";
        "146";
        running = !running;
        "147";
        if (running) {
            s.text = "Pause";
        } else {
            s.text = "Run";
        }
    };
    if (!build_button.__argnames__) Object.defineProperties(build_button, {
        __argnames__ : {value: ["s"]}
    });

    "152";
    async function clear() {
        var RS_ls, i;
        "153";
        "154";
        "155";
        "156";
        "157";
        var RS_Iter6 = ra_item;
        RS_Iter6 = ((typeof RS_Iter6[Symbol.iterator] === "function") ? (RS_Iter6 instanceof Map ? RS_Iter6.keys() : RS_Iter6) : Object.keys(RS_Iter6));
        for (var RS_Index6 of RS_Iter6) {
            i = RS_Index6;
            "158";
            i.visible = false;
            "159";
            i = undefined;
        }
        "160";
        var RS_Iter7 = rb_item;
        RS_Iter7 = ((typeof RS_Iter7[Symbol.iterator] === "function") ? (RS_Iter7 instanceof Map ? RS_Iter7.keys() : RS_Iter7) : Object.keys(RS_Iter7));
        for (var RS_Index7 of RS_Iter7) {
            i = RS_Index7;
            "161";
            i.visible = false;
            "162";
            i = undefined;
        }
        "163";
        var RS_Iter8 = cylinder_item;
        RS_Iter8 = ((typeof RS_Iter8[Symbol.iterator] === "function") ? (RS_Iter8 instanceof Map ? RS_Iter8.keys() : RS_Iter8) : Object.keys(RS_Iter8));
        for (var RS_Index8 of RS_Iter8) {
            i = RS_Index8;
            "164";
            i.visible = false;
            "165";
            i = undefined;
        }
        "166";
        var RS_Iter9 = total_item;
        RS_Iter9 = ((typeof RS_Iter9[Symbol.iterator] === "function") ? (RS_Iter9 instanceof Map ? RS_Iter9.keys() : RS_Iter9) : Object.keys(RS_Iter9));
        for (var RS_Index9 of RS_Iter9) {
            i = RS_Index9;
            "167";
            i.visible = false;
            "168";
            i = undefined;
        }
    };

    "171";
    async function reset() {
        "172";
        "173";
        "174";
        "175";
        "176";
        "177";
        ;(await clear());
        "179";
        ;(await build(L, ra));
    };

    "183";
    async function set_bondab(s) {
        var RS_ls, bond_ab, ra, rb, x, y;
        "184";
        bond_ab = s.number;
        "185";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "186";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "187";
        var RS_Iter10 = ra_item;
        RS_Iter10 = ((typeof RS_Iter10[Symbol.iterator] === "function") ? (RS_Iter10 instanceof Map ? RS_Iter10.keys() : RS_Iter10) : Object.keys(RS_Iter10));
        for (var RS_Index10 of RS_Iter10) {
            x = RS_Index10;
            "188";
            x.radius = ra;
        }
        "189";
        var RS_Iter11 = rb_item;
        RS_Iter11 = ((typeof RS_Iter11[Symbol.iterator] === "function") ? (RS_Iter11 instanceof Map ? RS_Iter11.keys() : RS_Iter11) : Object.keys(RS_Iter11));
        for (var RS_Index11 of RS_Iter11) {
            y = RS_Index11;
            "190";
            y.radius = rb;
        }
        "191";
        return bond_ab;
    };
    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
        __argnames__ : {value: ["s"]}
    });

    "194";
    async function set_ra(s) {
        var RS_ls, ra_int, ra, x;
        "195";
        ra_int = s.number;
        "196";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "197";
        var RS_Iter12 = ra_item;
        RS_Iter12 = ((typeof RS_Iter12[Symbol.iterator] === "function") ? (RS_Iter12 instanceof Map ? RS_Iter12.keys() : RS_Iter12) : Object.keys(RS_Iter12));
        for (var RS_Index12 of RS_Iter12) {
            x = RS_Index12;
            "198";
            x.radius = ra;
        }
        "199";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]}
    });

    "201";
    async function set_rb(s) {
        var RS_ls, rb_int, rb, y;
        "202";
        rb_int = s.number;
        "203";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "204";
        var RS_Iter13 = rb_item;
        RS_Iter13 = ((typeof RS_Iter13[Symbol.iterator] === "function") ? (RS_Iter13 instanceof Map ? RS_Iter13.keys() : RS_Iter13) : Object.keys(RS_Iter13));
        for (var RS_Index13 of RS_Iter13) {
            y = RS_Index13;
            "205";
            y.radius = rb;
        }
        "206";
        return rb;
    };
    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
        __argnames__ : {value: ["s"]}
    });

    "208";
    async function set_scale_factor(s) {
        var RS_ls, scale_factor, ra, rb, x, y;
        "209";
        scale_factor = s.number;
        "210";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "211";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "212";
        var RS_Iter14 = ra_item;
        RS_Iter14 = ((typeof RS_Iter14[Symbol.iterator] === "function") ? (RS_Iter14 instanceof Map ? RS_Iter14.keys() : RS_Iter14) : Object.keys(RS_Iter14));
        for (var RS_Index14 of RS_Iter14) {
            x = RS_Index14;
            "213";
            x.radius = ra;
        }
        "214";
        var RS_Iter15 = rb_item;
        RS_Iter15 = ((typeof RS_Iter15[Symbol.iterator] === "function") ? (RS_Iter15 instanceof Map ? RS_Iter15.keys() : RS_Iter15) : Object.keys(RS_Iter15));
        for (var RS_Index15 of RS_Iter15) {
            y = RS_Index15;
            "215";
            y.radius = rb;
        }
        "216";
        return [scale_factor, ra, rb];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]}
    });

    "219";
    async function set_L(s) {
        var RS_ls, L;
        "220";
        "221";
        "222";
        "223";
        "224";
        "225";
        L = s.number;
        "226";
        ;(await clear());
        "227";
        scene5.camera.pos = vector(0, 0, 2["*"](L));
        "228";
        scene5.center = vector(0, 0, 0);
        "232";
        ;(await build(L, ra));
    };
    if (!set_L.__argnames__) Object.defineProperties(set_L, {
        __argnames__ : {value: ["s"]}
    });

    "239";
    ;(await build(L, ra));
    "244";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h2>Primitive Cubic Crystal System: metal Polonium</h2><hr>", pos: scene5.title_anchor})]);
    "247";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "The primitive cubic or the simple cubic structure is the simplest crystal structure but also rare crystal structure.\nIt consists of the smallest repeating pattern of the cube with one lattice point on each corner of the cube.", pos: scene5.title_anchor})]);
    "253";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor})]);
    "260";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Structure Parameters</h3><ul><li><b>L</b>: Number of cells (Integer Only)</li><li><b>bond</b>: Distance between 2 closest atoms/ions </li><li><b><font color = \"green\">r_a<font color =\"black\"></b>: Atomic/ionic radius[<font color = \"Green\">Green<font color =\"black\">] </li></ul>", pos: scene5.title_anchor})]);
    "262";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "265";
    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Run", pos: scene5.title_anchor, bind: build_button})]);
    "266";
    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Reset", pos: scene5.title_anchor, bind: reset})]);
    ;(await sleep(.2));
    "268";
    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n"})]);
    "271";
    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "L: "})]);
    ;(await sleep(.2));
    "272";
    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "274";
    scene5.append_to_caption("\n");
    "276";
    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "bond: "})]);
    ;(await sleep(.2));
    "277";
    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: bond_default_text})]);
    "279";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "280";
    scene5.append_to_caption("\n");
    "282";
    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "ra: "})]);
    ;(await sleep(.2));
    "283";
    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text})]);
    "284";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "286";
    scene5.append_to_caption("\n");
    "294";
    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "scale: "})]);
    ;(await sleep(.2));
    "295";
    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "296";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "(Must be less than or equal to 1. A value less than 1 is used for an exploded view.)"})]);
    "298";
    scene5.append_to_caption("\n\n");
    "311";
    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: print_csv, text: "Generate CSV for STL conversion"})]);
    "312";
    ib7 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: del_csv, text: "Remove CSV Box"})]);
    "313";
    scene5.append_to_caption("\n\n\n");
    "314";
    it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: ""})]);
    "317";
    MathJax.Hub.Queue(RS_list_decorate([ "Typeset", MathJax.Hub ]));
    "320";
    while (true) {
        "321";
        ;(await rate(100));
        "322";
        if (running) {
            "323";
            var RS_Iter16 = total_item;
            RS_Iter16 = ((typeof RS_Iter16[Symbol.iterator] === "function") ? (RS_Iter16 instanceof Map ? RS_Iter16.keys() : RS_Iter16) : Object.keys(RS_Iter16));
            for (var RS_Index16 of RS_Iter16) {
                b = RS_Index16;
                "324";
                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0)})]);
            }
        }
    }
};

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT
