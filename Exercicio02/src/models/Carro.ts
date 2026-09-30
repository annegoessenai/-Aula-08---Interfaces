import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interfaces/VeiculoProps.js";

export class Carro extends Veiculo<CarroProps> {

    public get getQuantidadeDePortas(): number {
        return this.props.quantidadeDePortas;
    }

    public set setQuantidadeDePortas(qtd: number) {
        if (qtd <= 0) {
            console.log("\nERRO: A quantidade de portas deve ser maior que zero!");
            return;
        }

        this.props.quantidadeDePortas = qtd;
    }
}