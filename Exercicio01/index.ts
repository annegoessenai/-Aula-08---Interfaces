import { Estagiario } from "./src/models/Estagiario.js";

const estagiario = new Estagiario({
    cpf: "123.456.789-00",
    nome: "Amanda",
    telefone: "11999999999",
    email: "amanda@email.com",
    dataNascimento: "10/05/2008",
    instituicaoEnsino: "SENAI",
    bolsaAuxilio: 1200
});

console.log("CPF:", estagiario.getCpf());
console.log("Nome:", estagiario.getNome());
console.log("Instituição:", estagiario.getInstituicaoEnsino());
console.log("Bolsa auxílio:", estagiario.getBolsaAuxilio());

estagiario.setNome("Ana");
estagiario.setCpf("987.654.321-00");
estagiario.setInstituicaoEnsino("SENAI - Itu");
estagiario.setBolsaAuxilio(1500);

console.log("\nDepois das alterações:");

console.log("CPF:", estagiario.getCpf());
console.log("Nome:", estagiario.getNome());
console.log("Instituição:", estagiario.getInstituicaoEnsino());
console.log("Bolsa auxílio:", estagiario.getBolsaAuxilio());