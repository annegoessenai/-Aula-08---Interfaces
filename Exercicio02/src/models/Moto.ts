import { Veiculo } from "./Veiculo.js";
import { VeiculoProps } from "../Interfaces/VeiculoProps.js";

export class Moto extends Veiculo<VeiculoProps> {

    public get getCilindradas(): number {
        return this.props.cilindradas!;
    }

    public set setCilindradas(cc: number) {
        this.props.cilindradas = cc;
    }
}