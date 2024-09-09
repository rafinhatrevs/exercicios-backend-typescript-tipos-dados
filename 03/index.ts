const tabuada = (arrayNumeros: number[]): string => {
    let resultado: string = '';

    for (const numero of arrayNumeros) {
        for (let i = 0; i <= 10; i++) {
            resultado += `${numero} x ${i} = ${numero * i} \n`;

            if (i === 10) {
                resultado += '------------------- \n';
            }
        }
    }

    return resultado;
};

console.log(tabuada([1, 5, 2]));