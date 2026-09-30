export interface VeiculoProps {
    marca: string;
    modelo: string;
    ano: number;
}
export interface CarroProps extends VeiculoProps {
    quantidadeDePortas: number;
}
export interface MotoProps extends VeiculoProps {
    cilindradas: number;
}