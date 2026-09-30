import { VeiculoProps } from "../interfaces/VeiculoProps.js";

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
        if (marca.trim().length === 0) {
            console.log("\nERRO: A marca não pode ser vazia!");
            return;
        }

        this.props.marca = marca;
    }

    public set setModelo(modelo: string) {
        if (modelo.trim().length === 0) {
            console.log("\nERRO: O modelo não pode ser vazio!");
            return;
        }

        this.props.modelo = modelo;
    }

    public set setAno(ano: number) {
        if (ano <= 0) {
            console.log("\nERRO: O ano deve ser maior que zero!");
            return;
        }

        this.props.ano = ano;
    }
}