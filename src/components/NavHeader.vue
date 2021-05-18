<template>
    <b-navbar class="container-nav" centered>
        <template #brand>
            <div class="redes ml-3">
                <div class="redes-items">
                    <i class="fab fa-twitter"></i>
                </div>
                <div class="redes-items">
                    <i class="fab fa-github"></i>
                </div>
                <div class="redes-items">
                    <i class="fab fa-whatsapp"></i>
                </div>
            </div>
        </template>

        <template #start>
            <div class="img-wrapper">
                <img src="@/assets/b3.png" />
            </div>
        </template>

        <template #end>
            <b-navbar-item tag="div" @click="hide = !hide" class="icone mr-2">
                <b-icon :icon="hide ? 'eye' : 'eye-off'" />
            </b-navbar-item>

            <b-navbar-item tag="div" class="cardValores mr-2 my-3">
                <div style="flex: 1">
                    Lucro/Prejuízo
                </div>
                <div>
                    <div
                        :class="verificaLP"
                        v-if="hide"
                        style="font-size: .9rem"
                    >
                        ?
                    </div>
                    <div v-else>
                        --------
                    </div>
                </div>
            </b-navbar-item>

            <b-navbar-item tag="div" class="cardValores mr-2 my-3">
                <div style="flex: 1">
                    Em Caixa
                </div>
                <div>
                    <div v-if="hide" style="font-size: .9rem">
                        {{ caixa.emCaixa | dinheiro }}
                    </div>
                    <div v-else>
                        --------
                    </div>
                </div>
            </b-navbar-item>

            <b-navbar-item tag="div" class="cardValores mr-2 my-3">
                <div style="flex: 1">
                    Patrimônio Total
                </div>
                <div>
                    <div
                        :class="verificaPat"
                        v-if="hide"
                        style="font-size: .9rem"
                    >
                        {{ calcPT | dinheiro }}
                    </div>

                    <div v-else>
                        -----
                    </div>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
            caixa: this.$store.state.caixa,
            hide: false,
        };
    },
    watch: {
        hide() {
            localStorage.setItem("hide", JSON.stringify(this.hide));
        },
    },
    created() {
        const json = localStorage.getItem("hide");
        this.hide = JSON.parse(json);
    },
    computed: {
        calcPT() {
            return this.caixa.emCaixa + this.somaTotPap;
        },
        verificaLP() {
            return this.lucroPreju >= 0 ? "azul" : "vermelho";
        },
        verificaPat() {
            return this.calcPT >= 0 ? "azul" : "vermelho";
        },

        somaTotPap() {
            return this.$store.getters.valorPatTotal;
        },

        papeis() {
            return this.$store.state.papeis;
        },
    },
};
</script>

<style lang="scss">
@import "@/variables/_variables.scss";

.container-nav {
    background: $degrade;

    .redes {
        display: flex;
        align-items: center;
        .redes-items {
            font-size: 1.6rem;
            color: white;
            padding: 5px;
            &:not(:last-child) {
                margin-right: 10px;
            }
        }
    }

    .icone {
        cursor: pointer;
        color: white;
    }
    .img-wrapper {
        display: flex;
        align-items: center;
        width: 80px;
        margin-left: 18.5rem;

        img {
            border-radius: 15px;
            width: 100%;
        }
    }

    .cardValores {
        color: white;
        font-family: $fontePadrao;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        background-color: #29292946;
        border-radius: 10px;
        min-width: 110px;
        min-height: 68px;
    }
}

.azul {
    font-weight: 500;
    color: $azul;
}
.vermelho {
    font-weight: 400;
    color: tomato;
}

@media (max-width: 1024px) {
    .burger {
        span {
            color: white;
        }
    }

    .navbar-start {
        background-color: black;
        .img-wrapper {
            margin: 0 auto;
        }
    }
    .navbar-end {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
    }
}
</style>
