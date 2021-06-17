<template>
    <div :class="lerModal ? 'modal is-active' : 'modal'">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head" tamModal>
                <p class="modal-card-title">
                    Inserir Ativo<i class="fas fa-pencil-alt ml-3"></i>
                </p>
                <button
                    @click="fecharModal"
                    class="delete"
                    aria-label="close"
                ></button>
            </header>
            <section class="modal-card-body" tamModal>
                <div class="modal-card-body-left-container">
                    <div class="field">
                        <label>Ticker</label>
                        <div class="control">
                            <input
                                class="input is-small"
                                type="text"
                                maxlength="5"
                                placeholder="Ticker"
                                v-model="ticker"
                                @keydown.tab="loadLogo"
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label>Nome</label>
                        <div class="control">
                            <input
                                class="input is-small"
                                type="text"
                                placeholder="Nome"
                                v-model="nome"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <label>PM</label>
                        <div class="control">
                            <input
                                class="input is-small"
                                type="text"
                                placeholder="PM"
                                v-model="pm"
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label>Quantidade</label>
                        <div class="control">
                            <input
                                class="input is-small"
                                type="number"
                                step="100"
                                placeholder="Quantidade"
                                v-model="qtde"
                            />
                        </div>
                    </div>
                </div>

                <div class="modal-card-body-right">
                    <img src="/img/B3SA3.png" alt="" v-if="logoPadrao" />
                    <img :src="'/img/' + logo" v-else />
                </div>
            </section>
            <footer class="modal-card-foot" tamModal>
                <button
                    @click="saveData"
                    class="button is-info"
                    :disabled="qtde <= 0"
                >
                    Salvar
                </button>
                <button @click="fecharModal" class="button">
                    Cancelar
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ticker: "",
            nome: "",
            qtde: 100,
            logo: "",
            indRealTime: "",
            pm: "",
            logoPadrao: true,
        };
    },
    computed: {
        lerModal() {
            return this.$store.getters.modalState;
        },
        papeis() {
            return this.$store.getters.getPapeis
        }
    },
    methods: {
        fecharModal() {
            this.$store.dispatch("abrirFecharModal");
            this.limparModal();
        },
        limparModal() {
            this.nome = "";
            this.ticker = "";
            this.qtde = 100;
            this.pm = "";
            this.logoPadrao = true;
        },
        saveData() {
            const papel = {
                ticker: this.ticker,
                nome: this.nome,
                qtde: this.qtde,
                logo: `${this.ticker}.png`,
                indRealTime: `https://yahoo-finance-low-latency.p.rapidapi.com/v6/finance/quote?symbols=${this.ticker}.SA`,
                pm: this.pm,
            };
            
            this.$http.post("data.json", papel).then(() => {
                this.$http.get("data.json").then((res) => {
                            const papel = res.data;
                            this.$store.dispatch("addPapel", papel);
                        });
            })
            this.fecharModal();
        },
        loadLogo() {
            this.logoPadrao = false;
            this.logo = this.ticker + ".png";
        },
    },
};
</script>

<style lang="scss">
[tamModal] {
    width: 75%;
}

.modal-card {
    .modal-card-head {
        background: $degrade;
        font-family: $fonteCard;
        border: 1px solid gray;

        p {
            color: white;
            font-weight: 100;
        }

        .delete {
            background: #000;
        }
    }
    .modal-card-body {
        display: flex;

        .modal-span {
            font-family: $fonteCard;
        }

        .modal-card-body-left-container {
            flex: 1;
            font-family: $fonteCard;

            .field {
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;

                .control {
                    margin-left: 10px;
                }
            }

            input {
                font-family: $fontePadrao;
                font-size: 0.8rem;
                width: 80%;
                border: none;
                border-radius: 10px;
                background-color: rgba(211, 211, 211, 0.322);
                text-align: start;
            }
        }

        .modal-card-body-right {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 4rem;

            img {
                border-radius: 10px;
            }
        }
    }

    .modal-card-foot {
        border: 1px solid gray;
        background-color: rgb(27, 27, 27);
        button {
            border: 1px solid white;
            font-family: $fonteCard;
        }
    }
}
</style>
