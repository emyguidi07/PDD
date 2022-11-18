import {
  assertStrictEquals, 
  assertAlmostEquals,
  assertThrows,
  assertNotEquals
} from "http://deno.land/std/testing/asserts.ts" //arquivo de importações no Deno
Deno.test("Assert de elementos não estritamente iguais", () => {
  const a = "3";
  const b = "3";
  assertStrictEquals(a, b);
}); 
Deno.test("Assert para números aproximados com throw", () => {
  assertAlmostEquals(0.1 + 0.2, 0.3, 1e-16);
  assertThrows(() => assertAlmostEquals(0.1 + 0.2, 0.3, 1e-17));
});
Deno.test("Assert de elementos que não são iguais", () => {
  assertNotEquals(1, 2);
});
