import { VeiculoProps } from "../Interfaces/VeiculoProps.js";

export class Veiculo<T extends VeiculoProps = VeiculoProps> {

    constructor(protected props: T) {}

    public get getMarca(): string {
        return this.props.marca;
    }

    public get getModelo(): string {
        return this.props.modelo;
    }

    public get getAno(): number {
        return this.props.ano;
    }

    public set setMarca(marca: string) {
        this.props.marca = marca;
    }

    public set setModelo(modelo: string) {
        this.props.modelo = modelo;
    }
}