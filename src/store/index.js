import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        papeis: '',


        caixa: 
            {
                patrimonio: '',
                emCaixa: 535.47
            },

        modal: {
            isAtivo: ''
        },
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
        porcLP(state) {
            return state.papeis.map((valor) => (((valor.qtde * valor.indAtual)*100)/(valor.pm * valor.qtde))-100)
        },
        modalState(state){
            return state.modal.isAtivo
        },
        getPapeis(state) {
            return state.papeis
        }
    },
    mutations: {
        addPapel(state, papel) {
            state.papeis = papel
        },
        abrirFecharModal(state) {
            state.modal.isAtivo = !state.modal.isAtivo
        },
        setComponentKey(state) {
            state.componentKey += 1
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
