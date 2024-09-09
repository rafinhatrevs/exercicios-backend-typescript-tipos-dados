const imprimirEtiquetas = (dadosProduto: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    let resultado: string[] = [];

    for (let i = 1; i <= dadosProduto.qtd; i++) {
        resultado.push(`${dadosProduto.lote}-${dadosProduto.ano}-${i.toString().padStart(3, '0')}`);
    }

    return resultado;
};

const produto1 = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
};

console.log(imprimirEtiquetas(produto1));