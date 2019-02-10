// tslint:disable:no-expression-statement
import test from 'ava';
import preventObjectRecursion from './preventObjectRecursion';

test('remove recursive calls from a simple object', t => {
  const a = { hello: 'world', bb: {} };
  const b = { hello: a };
  // tslint:disable-next-line
  a.bb = b;

  t.is(
    JSON.stringify(preventObjectRecursion(a)),
    JSON.stringify({ hello: 'world' })
  );
});
