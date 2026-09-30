import { PessoaFisica } from "./PessoaFisica.js";
import { EstagiarioProps } from "../Interface/PessoaProps.js";

export class Estagiario extends PessoaFisica<EstagiarioProps> {

    public get getInstituicaoEnsino(): string {
        return this.props.instituicaoEnsino;
    }

    public get getBolsaAuxilio(): number {
        return this.props.bolsaAuxilio;
    }

    public set setInstituicaoEnsino(instituicao: string) {
        if (instituicao.trim().length === 0) {
            console.log("\nERRO: A instituição de ensino não pode ser vazia!");
            return;
        }

        this.props.instituicaoEnsino = instituicao;
    }

    public set setBolsaAuxilio(valor: number) {
        if (valor < 0) {
            console.log("\nERRO: A bolsa auxílio não pode ser negativa!");
            return;
        }

        this.props.bolsaAuxilio = valor;
    }
}