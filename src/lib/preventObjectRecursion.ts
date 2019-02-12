/**
 * Removes all recursive references in a object
 *
 * ### Example (es module)
 * ```js
 * import preventObjectRecursion from '@rxluz/prevent-object-recursion'
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
 * const preventObjectRecursion = require('@rxluz/prevent-object-recursion').default;
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

// tslint:disable-next-line:export-just-namespace

export default function preventObjectRecursion(root: any, list: any = []): any {
  // keys with null data or with string/function/boolean data couldn't create recursive data, in this case we simply return this data
  const rootIsNullOrNotAObject = !root || typeof root !== 'object';

  // this var will store the object without recursive data

  /* the list variable store the path from the root until this item, 
     what we need to do is compare this path with the current item, 
     if the item is the same of some item in the path, we don't add 
     this item in rootClean in order to avoid recursion */

  const hasRecursion =
    list.length > 0 && list.some((item: object) => item === root);

  /* we need add the current root in list array, 
      this will allow compare this root with its children, 
      this comparison will help us to find recursive data */
  // tslint:disable-next-line
  list.push(root);

  const rootClean = () =>
    !rootIsNullOrNotAObject && !hasRecursion
      ? Object.keys(root).reduce(
          (accumulator: object, key: string) => ({
            ...accumulator,
            // tslint:disable-next-line
            [key]: preventObjectRecursion(root[key], [...list])
          }),
          {}
        )
      : {};

  return rootIsNullOrNotAObject ? root : hasRecursion ? {} : rootClean();
}
