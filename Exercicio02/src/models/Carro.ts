import { Veiculo } from "./Veiculo.js";
import { VeiculoProps } from "../Interfaces/VeiculoProps.js";

export class Carro extends Veiculo<VeiculoProps> {

    public get getQuantidadeDePortas(): number {
        return this.props.quantidadeDePortas!;
    }

    public set setQuantidadeDePortas(qtd: number) {
        this.props.quantidadeDePortas = qtd;
    }
}