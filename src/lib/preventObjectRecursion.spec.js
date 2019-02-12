"use strict";
exports.__esModule = true;
// tslint:disable:no-expression-statement
var ava_1 = require("ava");
var index_1 = require("../index");
ava_1["default"]('remove recursive calls from a simple object', function (t) {
    var a = { hello: 'world', bb: {} };
    var b = { hello: a };
    // tslint:disable-next-line
    a.bb = b;
    t.is(JSON.stringify(index_1["default"](a)), JSON.stringify({ hello: 'world', bb: { hello: {} } }));
});
ava_1["default"]('remove recursive calls from an complex object', function (t) {
    var valentina = { name: 'Valentina', otherSon: {} };
    var invalidFamily = {
        name: 'Manuel',
        otherSon: {
            name: 'Valdir',
            otherSon: {
                name: 'Ricardo',
                son: valentina
            },
            son: valentina
        },
        son: valentina
    };
    // tslint:disable-next-line
    invalidFamily.son.otherSon = valentina;
    t.is(JSON.stringify(index_1["default"](invalidFamily)), JSON.stringify({
        name: 'Manuel',
        otherSon: {
            name: 'Valdir',
            otherSon: { name: 'Ricardo', son: { name: 'Valentina', otherSon: {} } },
            son: { name: 'Valentina', otherSon: {} }
        },
        son: { name: 'Valentina', otherSon: {} }
    }));
});
