const papeis = [
    {
        ticker: "LWSA3",
        nome: "Locaweb",
        qtde: 650,
        indAtual: 23.40,
        logo: "LWSA3.png",
        pm: 24.15
    },
    {
        ticker: "CASH3",
        nome: "Meliuz",
        qtde: 200,
        indAtual: 33.93,
        logo: "CASH3.png",
        pm: 35.05
    },
    {
        ticker: "PETR4",
        nome: "Petrobrás",
        qtde: 600,
        indAtual: 26.21,
        logo: "PETR4.png",
        pm: 24.95
    },
    {
        ticker: "IGTA3",
        nome: "Iguatemi",
        qtde: 200,
        indAtual: 42,
        logo: "IGTA3.png",
        pm: 41.86
    },
    {
        ticker: "AMAR3",
        nome: "Lojas Marisa",
        qtde: 1500,
        indAtual: 6.44,
        logo: "AMAR3.png",
        pm: 6.51
    },
]

function exibir(){
    console.log(papeis.ticker)
}
console.log(papeis.forEach(exibir))