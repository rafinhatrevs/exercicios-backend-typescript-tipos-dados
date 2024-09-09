const filtrarUsuarios = (
    listaUsuarios: {
        nome: string,
        idade: number,
        status: boolean
    }[],
    nomeUsuario: string
): {
    nome: string,
    idade: number,
    status: boolean
}[] => {
    const resultado = listaUsuarios.filter((usuario) => {
        return usuario.nome.toLowerCase().includes(nomeUsuario.toLowerCase());
    });

    return resultado;
};

const array2 = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];

console.log(filtrarUsuarios(array2, 'jo'));