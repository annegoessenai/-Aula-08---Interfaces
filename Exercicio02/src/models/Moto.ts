import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interfaces/VeiculoProps.js";

export class Moto extends Veiculo<MotoProps> {

    public get getCilindradas(): number {
        return this.props.cilindradas;
    }

    public set setCilindradas(cc: number) {
        if (cc <= 0) {
            console.log("\nERRO: As cilindradas devem ser maiores que zero!");
            return;
        }

        this.props.cilindradas = cc;
    }
}