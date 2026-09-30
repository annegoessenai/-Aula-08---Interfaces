import { VeiculoProps } from "../interfaces/VeiculoProps.js";

export class Veiculo<T extends VeiculoProps> {

    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    getMarca(): string {
        return this.props.marca;
    }

    getModelo(): string {
        return this.props.modelo;
    }

    getAno(): number {
        return this.props.ano;
    }

    setMarca(marca: string): void {
        this.props.marca = marca;
    }

    setModelo(modelo: string): void {
        this.props.modelo = modelo;
    }
}