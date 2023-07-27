// enums in TS are one of the fundamental data structures to enclose  constatnsts of similar types.
// to declare ana enum we use the following syntax:
var colors;
(function (colors) {
    colors[colors["RED"] = 0] = "RED";
    colors[colors["GREEN"] = 1] = "GREEN";
    colors[colors["BLUE"] = 2] = "BLUE";
    colors[colors["YELLOW"] = 3] = "YELLOW";
    colors[colors["INDIGO"] = 4] = "INDIGO";
    colors[colors["VIOLET"] = 5] = "VIOLET";
})(colors || (colors = {}));
console.log(colors.RED, colors.GREEN, colors.BLUE);
