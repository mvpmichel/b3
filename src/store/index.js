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
                indAtual: 23.46,
                logo: "LWSA3.png",
                pm: 24.15
            },
            {
                ticker: "ELET6",
                nome: "Eletrobrás",
                qtde: 300,
                indAtual: 41,
                logo: "ELET6.png",
                pm: 41.54
            },
            {
                ticker: "PETR4",
                nome: "Petrobrás",
                qtde: 505,
                indAtual: 25.93,
                logo: "PETR4.png",
                pm: 25.22
            },
            {
                ticker: "IGTA3",
                nome: "Iguatemi",
                qtde: 100,
                indAtual: 43.07,
                logo: "IGTA3.png",
                pm: 41.93
            },
            {
                ticker: "AMAR3",
                nome: "Lojas Marisa",
                qtde: 1300,
                indAtual: 6.65,
                logo: "AMAR3.png",
                pm: 6.51
            },
            {
                ticker: "POSI3",
                nome: "Positivo",
                qtde: 100,
                indAtual: 12.57,
                logo: "POSI3.png",
                pm: 12.24
            },
        ],

        caixa: 
            {
                patrimonio: '',
                emCaixa: 2194.50
            },

        modal: {
            isAtivo: ''
        } 
    },
    getters: {
        calcValorAtual(state) {
            return state.papeis.map((valor) => valor.qtde * valor.indAtual);
        },
        calcValorPatTotal(state) {
            return state.papeis
                .map((valor) => valor.qtde * valor.indAtual)
                .reduce((ac, valorAtual) => ac + valorAtual);
        },
        valorCusto(state) {
            return state.papeis.map((valor) => valor.pm * valor.qtde)
        },
        calcLP(state) {
            return state.papeis.map((valor) => (valor.qtde * valor.indAtual) - (valor.pm * valor.qtde))
        },
        modalState(state){
            return state.modal.isAtivo
        }
    },
    mutations: {
        addPapel(state, papel) {
            state.papeis.push(papel);
        },
        abrirFecharModal(state) {
            state.modal.isAtivo = !state.modal.isAtivo
        }
    },
    actions: {
        addPapel(context, papel) {
            context.commit('addPapel',papel);
        },
        abrirFecharModal(context) {
            context.commit('abrirFecharModal')
        }
    },
    modules: {},
});
