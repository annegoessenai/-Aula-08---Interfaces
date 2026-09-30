import readLine from "readline-sync";
import { Carro } from "./src/models/Carro.js";
import { Moto } from "./src/models/Moto.js";

console.log("=== CADASTRO DE VEÍCULOS ===");

// Instanciando o carro
const carro = new Carro({
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2025,
    quantidadeDePortas: 4
});

console.log(`\nCarro cadastrado: ${carro.getModelo}`);
console.log(`Marca: ${carro.getMarca}`);

// Alterando dados pelo teclado
carro.setMarca = readLine.question("\nDigite a nova marca do carro: ");
carro.setModelo = readLine.question("Digite o novo modelo do carro: ");
carro.setAno = Number(readLine.question("Digite o novo ano do carro: "));
carro.setQuantidadeDePortas = Number(
    readLine.question("Digite a quantidade de portas: ")
);

// Exibindo todos os dados
console.log("\n================================================");
console.log("              DADOS DO CARRO");
console.log("================================================");
console.log(`Marca:                 ${carro.getMarca}`);
console.log(`Modelo:                ${carro.getModelo}`);
console.log(`Ano:                   ${carro.getAno}`);
console.log(`Quantidade de portas:  ${carro.getQuantidadeDePortas}`);
console.log("================================================\n");


// Instanciando a moto
const moto = new Moto({
    marca: "Honda",
    modelo: "CG 160",
    ano: 2025,
    cilindradas: 160
});

console.log(`Moto cadastrada: ${moto.getModelo}`);
console.log(`Marca: ${moto.getMarca}`);

// Alterando dados pelo teclado
moto.setMarca = readLine.question("\nDigite a nova marca da moto: ");
moto.setModelo = readLine.question("Digite o novo modelo da moto: ");
moto.setAno = Number(readLine.question("Digite o novo ano da moto: "));
moto.setCilindradas = Number(
    readLine.question("Digite as cilindradas da moto: ")
);

// Exibindo todos os dados
console.log("\n================================================");
console.log("              DADOS DA MOTO");
console.log("================================================");
console.log(`Marca:                 ${moto.getMarca}`);
console.log(`Modelo:                ${moto.getModelo}`);
console.log(`Ano:                   ${moto.getAno}`);
console.log(`Cilindradas:           ${moto.getCilindradas}`);
console.log("================================================\n");