import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interfaces/VeiculoProps.js";

export class Carro extends Veiculo<CarroProps> {

    getQuantidadeDePortas(): number {
        return this.props.quantidadeDePortas;
    }

    setQuantidadeDePortas(qtd: number): void {
        this.props.quantidadeDePortas = qtd;
    }
}