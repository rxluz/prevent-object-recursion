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
    JSON.stringify({ hello: 'world', bb: { hello: {} } })
  );
});

test('remove recursive calls from an complex object', t => {
  const valentina = { name: 'Valentina', otherSon: {} };
  const invalidFamily = {
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

  t.is(
    JSON.stringify(preventObjectRecursion(invalidFamily)),
    JSON.stringify({
      name: 'Manuel',
      otherSon: {
        name: 'Valdir',
        otherSon: { name: 'Ricardo', son: { name: 'Valentina', otherSon: {} } },
        son: { name: 'Valentina', otherSon: {} }
      },
      son: { name: 'Valentina', otherSon: {} }
    })
  );
});
