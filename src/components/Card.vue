<template>
    <div class="container-card-geral">
        <div
            class="container-card mt-5 mr-1"
            v-for="(ativo, index) in ativos"
            :key="ativo.ticker"
        >
            <div class="leftSide-container">
                <div class="leftSideTop-container">
                    <div class="leftTopCard">
                        <div class="logoCard">
                            <img
                                :src="require(`@/assets/logos/${ativo.logo}`)"
                            />
                        </div>
                    </div>
                    <div class="empresaInfo ml-2">
                        <span>{{ ativo.ticker }}</span>
                        <p>{{ ativo.nome }}</p>
                    </div>
                </div>
                <div class="leftSideBottom-container mt-6">
                    <div class="infosLP ml-2">
                        <h4>Lucro/Prejuízo</h4>
                        <h2>R$ 425 (5%)</h2>
                    </div>
                </div>
            </div>
            <div class="rightSide-container">
                <div style="width: 100%">
                    <div class="qtde separar">
                        <span>Quantidade</span>
                        <span>{{ ativo.qtde }}</span>
                        
                    </div>
                    <div class="pm separar mt-1">
                        <span>Preço Médio</span>
                        <span>R$ 24,95</span>
                    </div>
                    <div class="precoAtual separar mt-1">
                        <span>Preço Atual</span>
                        <span>{{ ativo.indAtual | dinheiro }}</span>
                    </div>
                    <div class="valorCusto separar mt-1">
                        <span>Valor de Custo</span>
                        <span>R$ 10</span>
                    </div>
                    <div class="valorAtual separar mt-1">
                        <span>Valor Atual</span>
                        <span>{{ PatAtual[index] | dinheiro }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ativos: this.$store.state.papeis,
        };
    },
    computed: {
        calcValorCusto() {},

        calcPM() {},

        calcLP() {},

        /* ValAtual(index) {
          return this.ativos[index].qtde * this.ativos[index].pAtual
        }, */

        PatAtual() {
            return this.$store.getters.valorAtual
        }
    },
    methods: {
    },
};
</script>

<style lang="scss">
@import "@/variables/_variables.scss";

.container-card-geral {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .container-card {
        min-width: 475px;
        min-height: 200px;
        display: flex;
        border-radius: 10px;
        padding: 4px;
        background-color: gray;

        .leftSide-container {
            padding: 10px;
            /* width: 45%; */
            display: flex;
            flex-direction: column;
            background-color: $fundoCard;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;

            .leftSideTop-container {
                display: flex;
                flex: 1;

                .leftTopCard {
                    border-radius: 10px;

                    .logoCard {
                        :first-child {
                            border: 1px solid gray;
                        }
                        border-radius: 10px;
                        width: 64px;

                        img {
                            width: 100%;
                            border-radius: 10px;
                        }
                    }
                }

                .empresaInfo {
                    display: flex;
                    flex-direction: column;
                    span {
                        font-family: $fonteCard;
                        color: black;
                        font-size: 1.35rem;
                    }

                    p {
                        font-size: 1.25rem;
                        font-weight: 500;
                    }
                }
            }

            .leftSideBottom-container {
                flex: 1;
                display: flex;
                flex-direction: column;
                border-left: 5px solid $azul;

                .infosLP {
                    font-family: $fonteCard;
                    h2 {
                        font-size: 1.3rem;
                        color: $azul;
                    }
                }
            }
        }

        .rightSide-container {
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: $fundoCard;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            flex: 1;
            font-family: $fonteCard;

            .separar {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid gray;
            }
        }
    }
}
</style>
