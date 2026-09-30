import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interfaces/VeiculoProps.js";

export class Moto extends Veiculo<MotoProps> {

    getCilindradas(): number {
        return this.props.cilindradas;
    }

    setCilindradas(cc: number): void {
        this.props.cilindradas = cc;
    }
}