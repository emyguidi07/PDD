import {
    assertAlmostEquals,
    assertExists
} from "http://deno.land/std/testing/asserts.ts" //arquivo de importações no Deno
let num1 = 5
let existir =" "
Deno.test("Teste de assert almost", () => {
    assertAlmostEquals(num1, "5"); //Make an assertion that actual and expected are almost equal numbers through a given tolerance
})
Deno.test("Teste de assert exists", () => {
    if (existir === undefined || existir === null) {
        if (!msg) {
          msg = `actual: "${Existir}" expected to not be null or undefined`;
        }
        throw new AssertionError(msg);
      }
})
