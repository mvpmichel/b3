import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        papeis: [],
        caixa: 
            {
                investimento: 57363.43,
                patrimonio: 0,
                custo:0,
                sobrando: 0
            },

        modal: {
            isAtivo: false
        },
    },
    getters: {
        modalState(state){
            return state.modal.isAtivo
        },
        getPapeis(state) {
            return state.papeis
        },        
    },
    mutations: {
        addPapel(state, papel) {
            state.papeis = papel
        },
        abrirFecharModal(state) {
            state.modal.isAtivo = !state.modal.isAtivo
        },
        valorPatrimonio(state, payload) {
            state.caixa.patrimonio = payload
        },
        valorCusto(state, payload) {
            state.caixa.custo = payload
        }
    },
    actions: {
        addPapel(context, papel) {
            context.commit('addPapel',papel);         
        },
        abrirFecharModal(context) {
            context.commit('abrirFecharModal')
        },
        valorPatrimonio(context, payload) {
            context.commit('valorPatrimonio', payload)
        },
        valorCusto(context, payload) {
            context.commit('valorCusto', payload)
        }
    }
});
