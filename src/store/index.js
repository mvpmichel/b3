import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        papeis: [
            {
                ticker: "LWSA3",
                nome: "Locaweb",
                qtde: 600,
                indAtual: 22.65,
                logo: "LWSA3.png",
            },
            {
                ticker: "CASH3",
                nome: "Meliuz",
                qtde: 200,
                indAtual: 33.57,
                logo: "CASH3.png",
            },
            {
                ticker: "PETR4",
                nome: "Petrobrás",
                qtde: 600,
                indAtual: 26.66,
                logo: "PETR4.png",
            },
            {
                ticker: "IGTA3",
                nome: "Iguatemi",
                qtde: 100,
                indAtual: 43.1,
                logo: "IGTA3.png",
            },
            {
                ticker: "LJQQ3",
                nome: "Quero Quero",
                qtde: 100,
                indAtual: 19.8,
                logo: "LJQQ3.png",
            },
            {
                ticker: "AMAR3",
                nome: "Lojas Marisa",
                qtde: 1000,
                indAtual: 6.64,
                logo: "AMAR3.png",
            },
            {
                ticker: "B3SA3",
                nome: "Brasil Bolsa Balcão",
                qtde: 200,
                indAtual: 17.6,
                logo: "B3SA3.png",
            },
        ],

        caixa: 
            {
                patrimonio: 100000,
                emCaixa: 4487.42
            },
    },
    getters: {
        valorAtual(state) {
            return state.papeis.map((valor) => valor.qtde * valor.indAtual);
        },
        valorPatTotal(state) {
            return state.papeis
                .map((valor) => valor.qtde * valor.indAtual)
                .reduce((ac, valorAtual) => ac + valorAtual);
        },
    },
    mutations: {},
    actions: {},
    modules: {},
});
