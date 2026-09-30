import { Carro } from "./src/models/Carro.js";
import { Moto } from "./src/models/Moto.js";

const carro = new Carro({
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2025,
    quantidadeDePortas: 4
});

console.log("CARRO");
console.log("Marca:", carro.getMarca);
console.log("Modelo:", carro.getModelo);
console.log("Ano:", carro.getAno);
console.log("Portas:", carro.getQuantidadeDePortas);

const moto = new Moto({
    marca: "Honda",
    modelo: "CG 160",
    ano: 2025,
    cilindradas: 160
});

console.log("\nMOTO");
console.log("Marca:", moto.getMarca);
console.log("Modelo:", moto.getModelo);
console.log("Ano:", moto.getAno);
console.log("Cilindradas:", moto.getCilindradas);