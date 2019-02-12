"use strict";
/**
 * Removes all recursive references in a object
 *
 * ### Example (es module)
 * ```js
 * import preventObjectRecursion from 'prevent-object-recursion'
 *
 * const a = { hello: 'world' }
 * const b = { hey: 'hey', hello: a }
 * a.newProp = b
 *
 * console.log(preventObjectRecursion(a))
 * // => { hello: 'world', newProp: { hey: 'hey' }}
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * const preventObjectRecursion = require('prevent-object-recursion');
 *
 * const a = { hello: 'world' }
 * const b = { hey: 'hey', hello: a }
 * a.newProp = b
 *
 * console.log(preventObjectRecursion(a))
 * // => { hello: 'world', newProp: { hey: 'hey' }}
 * ```
 *
 * @param obj     The object with recursive references.
 * @returns       Returns a new object without the recursive references.
 * @anotherNote   Works in the browser as well as node.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function preventObjectRecursion(root, list) {
    if (list === void 0) { list = []; }
    // keys with null data or with string/function/boolean data couldn't create recursive data, in this case we simply return this data
    var rootIsNullOrNotAObject = !root || typeof root !== 'object';
    // this var will store the object without recursive data
    /* the list variable store the path from the root until this item,
       what we need to do is compare this path with the current item,
       if the item is the same of some item in the path, we don't add
       this item in rootClean in order to avoid recursion */
    var hasRecursion = list.length > 0 && list.some(function (item) { return item === root; });
    /* we need add the current root in list array,
        this will allow compare this root with its children,
        this comparison will help us to find recursive data */
    // tslint:disable-next-line
    list.push(root);
    var rootClean = function () {
        return !rootIsNullOrNotAObject && !hasRecursion
            ? Object.keys(root).reduce(function (accumulator, key) {
                var _a;
                return (__assign({}, accumulator, (_a = {}, _a[key] = preventObjectRecursion(root[key], list.slice()), _a)));
            }, {})
            : {};
    };
    return rootIsNullOrNotAObject ? root : hasRecursion ? {} : rootClean();
}
exports["default"] = preventObjectRecursion;
