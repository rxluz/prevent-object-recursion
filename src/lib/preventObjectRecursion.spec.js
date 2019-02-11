"use strict";
exports.__esModule = true;
// tslint:disable:no-expression-statement
var ava_1 = require("ava");
var preventObjectRecursion_1 = require("./preventObjectRecursion");
ava_1["default"]('remove recursive calls from a simple object', function (t) {
    var a = { hello: 'world', bb: {} };
    var b = { hello: a };
    // tslint:disable-next-line
    a.bb = b;
    t.is(JSON.stringify(preventObjectRecursion_1["default"](a)), JSON.stringify({ hello: 'world', bb: { hello: {} } }));
});
ava_1["default"]('remove recursive calls from a complext object', function (t) {
    var valentina = { name: 'Valentina', otherSon: null };
    var invalidFamily = {
        name: 'Manuel',
        son: valentina,
        otherSon: {
            name: 'Valdir',
            son: valentina,
            otherSon: {
                name: 'Ricardo',
                son: valentina
            }
        }
    };
    invalidFamily.son.otherSon = valentina;
    t.is(JSON.stringify(preventObjectRecursion_1["default"](invalidFamily)), JSON.stringify({
        name: 'Manuel',
        son: { name: 'Valentina', otherSon: {} },
        otherSon: {
            name: 'Valdir',
            son: { name: 'Valentina', otherSon: {} },
            otherSon: { name: 'Ricardo', son: { name: 'Valentina', otherSon: {} } }
        }
    }));
});
