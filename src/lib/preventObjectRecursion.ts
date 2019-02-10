export default function preventObjectRecursion(obj: object): object {
  // tslint:disable-next-line
  console.log('hello world', obj);
  return { hello: 'world' };
}
