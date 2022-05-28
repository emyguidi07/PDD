import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts" //arquivo de importações no Deno

let aluno = 'Emily Guidi'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecido Cano']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Emily Guidi"); //pega dois atributos : o que você quer, o que você tem 
    assertStringIncludes(aluno, "Emily");    // se aluno tem a string ex: Emily tem E, testa string ou variavel simples
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, //testa arrays
        ["Davi", "Lais", "Allan"],
        "Opa! Algo deu errado!"); //mensagem  caso haja erro
})


//colocar deno test testeapi_test.js