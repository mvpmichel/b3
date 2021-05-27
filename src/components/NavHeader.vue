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
            <b-navbar-item tag="div" @click="ocultar = !ocultar" class="icone mr-2">
                <b-icon :icon="ocultar ? 'eye' : 'eye-off'" />
            </b-navbar-item>

            <b-navbar-item tag="div" class="cardValores mr-2 my-3">
                <div style="flex: 1">
                    Lucro/Prejuízo
                </div>
                <div>
                    <div
                        :class="calcLP > 0 ? 'azul':'vermelho'"
                        v-if="ocultar"
                        style="font-size: 1rem"
                    >
                        {{ calcLP | dinheiro }}
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
                    <div v-if="ocultar" style="font-size: 1rem; fontFamily: 'Days One'">
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
                        :class="calcPT > 0 ? 'azul':'vermelho'"
                        v-if="ocultar"
                        style="font-size: 1rem"
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
            ocultar: false
        };
    },

    computed: {
        calcPT() {
            return this.caixa.emCaixa + this.somaTotPap;
        },

        somaTotPap() {
            return this.$store.getters.calcValorPatTotal;
        },

        papeis() {
            return this.$store.state.papeis;
        },
        calcLP() {
            const valorCusto = this.$store.getters.valorCusto.reduce((acc, total) => acc + total)
            return this.$store.getters.calcValorPatTotal - valorCusto
        },
    },
};
</script>

<style lang="scss">

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
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        background-color: #292929c4;
        border-radius: 10px;
        min-width: 110px;
        min-height: 68px;
        font-family: $fonteNav;
    }
}

.azul {
    font-family: $fonteNum;
    color: aqua;
}
.vermelho {
    font-family: $fonteNum;
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
