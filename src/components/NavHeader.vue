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
                <div class="redes-items">
                    <a  
                        href="https://console.firebase.google.com/project/b3trader-c4393/database/b3trader-c4393-default-rtdb/data"
                        target="_blank"
                        ><i class="fas fa-database"></i
                    ></a>
                </div>
            </div>
        </template>

        <template #end>
            <b-navbar-item tag="div" class="cardValores mr-2 my-3">
                <div style="flex: 1">
                    Investimento Inicial
                </div>
                <div>
                    {{ caixa.investimento | dinheiro }}
                </div>
            </b-navbar-item>

            <b-navbar-item tag="div" class="cardValores mr-2 my-3">
                <div style="flex: 1">
                    Lucro/Prejuízo
                </div>
                <div>
                    <div :class="lucroPrejuizo > 0? 'azul': 'vermelho'" style="font-size: 1rem">
                        {{ lucroPrejuizo | dinheiro }}
                    </div>
                </div>
            </b-navbar-item>

            <b-navbar-item tag="div" class="cardValores mr-2 my-3">
                <div style="flex: 1">
                    Valor Atual
                </div>
                <div>
                    <div :class="lucroPrejuizo > 0? 'azul': 'vermelho'" style="font-size: 1rem">
                        {{ patrimonioAtual | dinheiro }}
                    </div>
                </div>
            </b-navbar-item>

            <b-navbar-item tag="div" class="cardValores mr-2 my-3">
                <div style="flex: 1">
                    Em Caixa
                </div>

                <div>
                    {{ sobrando | dinheiro }}
                </div>
            </b-navbar-item>

            <b-navbar-item tag="div" class="cardValores mr-2 my-3">
                <div style="flex: 1">
                    Patrimônio Total
                </div>
                <div style="font-size: 1rem">
                    {{ patrimonioTotal | dinheiro }}
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    computed: {
        caixa() {
            return this.$store.state.caixa;
        },
        sobrando() {
            return this.caixa.investimento - this.caixa.custo
        },
        patrimonioTotal() {
            return this.caixa.patrimonio + this.sobrando
        },
        lucroPrejuizo(){
            return this.patrimonioTotal - this.caixa.investimento
        },
        patrimonioAtual() {
            return this.caixa.patrimonio
        }

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
            a {
                &:visited {
                    color: inherit;
                }
            }
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
