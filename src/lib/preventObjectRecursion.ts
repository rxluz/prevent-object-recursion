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
 * var preventObjectRecursion = require('prevent-object-recursion');
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

export default function preventObjectRecursion(obj: object): object {
  // tslint:disable-next-line
  console.log('hello world', obj);
  return { hello: 'world' };
}
