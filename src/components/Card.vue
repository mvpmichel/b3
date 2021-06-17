<template>
    <div class="container-card-geral">
        <div class="container-card mt-5 mr-1">
            <div class="leftSide-container">
                <div class="leftSideTop-container">
                    <div class="leftTopCard">
                        <div class="logoCard">
                            <img :src="`img/${logo}`" alt="" />
                        </div>
                    </div>
                    <div class="empresaInfo ml-2">
                        <span>{{ ticker | tickerUp }}</span>
                        <p>{{ nome | firstUp }}</p>
                    </div>
                </div>
                <div class="leftSideBottom-container mt-6">
                    <div class="infosLP ml-2">
                        <h4>Lucro/Prejuízo</h4>
                        <span :class="getLucroPreju > 0 ? 'azul' : 'vermelho'">
                            {{ getLucroPreju | dinheiro }} ({{ getPorcentagem | duasCasas }}%)
                        </span>
                    </div>
                </div>
            </div>
            <div class="rightSide-container">
                <div style="width: 100%">
                    <div class="containerBtn">
                        <div class="closeBtn">
                            <i @click="excluir" class="fas fa-times-circle"></i>
                        </div>
                    </div>

                    <div class="qtde separar mt-2">
                        <span>Quantidade</span>
                        <span>{{ Number(qtde) }}</span>
                    </div>
                    <div class="pm separar mt-1">
                        <span>Preço Médio</span>
                        <span>{{ Number(pm) | dinheiro }}</span>
                    </div>
                    <div class="precoAtual separar mt-1">
                        <span>Preço Atual</span>
                        <span>{{ Number(IndiceReal) || 0 | dinheiro }}</span>
                    </div>
                    <div class="valorCusto separar mt-1">
                        <span>Valor de Custo</span>
                        <span>{{ getValorCusto | dinheiro }}</span>
                    </div>
                    <div class="valorAtual separar mt-1">
                        <span>Valor Atual</span>
                        <span>{{ Number(getValorTotal) || 0 | dinheiro }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ["logo", "nome", "ticker", "qtde", "pm", "id", "indRealTime", "accPT", "accCusto"],
    data() {
        return {
            IndiceReal: '',
        }
    },

    computed: {
        getValorCusto() {
            return this.pm * this.qtde;
        },
        getValorTotal() {
            return this.qtde * this.IndiceReal;
        },
        getLucroPreju(){
            return this.getValorTotal - this.getValorCusto
        },
        getPorcentagem() {
            return ((this.getValorTotal * 100)/this.getValorCusto)-100
        },
    },
    created() {
        axios.get(this.indRealTime, {
                headers: {
                    "x-rapidapi-key":
                        "64ca974f09msh9ae7f2bb0908e6fp171a55jsn7c2fe40ccb87",
                    "x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com",
                },
            })
            .then((res) => {
                    const dados = res.data;
                    this.IndiceReal = dados.quoteResponse.result[0].regularMarketPrice
                    this.accPT = this.accPT + (this.qtde * this.IndiceReal)
                    this.$emit('somaPat', this.accPT)
                    this.accCusto = this.accCusto + (this.qtde * this.pm)
                    this.$emit('somaCusto', this.accCusto)
            })
    },

    methods: {
        excluir() {
            if (confirm("Tem certeza que deseja excluir esse ativo?")) {
                this.$http.delete(`/data/${this.id}.json`).then(() => {
                    this.$http.get("data.json").then((res) => {
                        const papel = res.data;
                        this.$store.dispatch("addPapel", papel);
                    });
                });
            }
        },
    },
};
</script>

<style lang="scss">
.container-card-geral {
    .container-card {
        position: relative;
        min-width: 475px;
        min-height: 200px;
        display: flex;
        border-radius: 10px;
        padding: 4px;
        background-color: gray;

        .leftSide-container {
            padding: 10px;
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
                border-left: 4px solid gray;

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

            .closeBtn {
                position: absolute;
                top: 10px;
                right: 10px;

                i {
                    color: red;
                    cursor: pointer;
                }
            }

            .separar {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid gray;
            }
        }
    }

    .azul {
        color: $azul;
        font-weight: 500;
    }
    .vermelho {
        font-weight: 400;
        color: tomato;
    }
}
</style>
