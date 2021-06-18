<template>
    <section class="container-indices-geral">
        <div class="container-indices-title">
            <span>Índices</span>
            <i class="fas fa-chart-area ml-2"></i>
        </div>
        <div class="container-indices mt-5">
            <section v-for="papel in papeis" :key="papel.ticker">
                <div class="component-card-indice">
                    <CardIndices
                        :logo="papel.logo"
                        :ticker="papel.ticker"
                        :nome="papel.nome"
                        :indRealTime="papel.indRealTime"
                    >
                    </CardIndices>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import CardIndices from "@/components/CardIndices";

export default {
    components: { CardIndices },
    computed: {
        papeis() {
            return this.$store.state.papeis;
        },
    },
};
</script>

<style lang="scss" scoped>
.container-indices-geral {
    display: flex;
    flex-direction: column;

    .container-indices-title {
            font-size: 1.6rem;
            text-align: center;

            span {
                font-family: $fonteCard;
                &:first-child {
                    margin-right: 5px;
                }
            }
        }

    .container-indices {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: lightgray;


        .component-card-indice {
            display: flex;
            justify-content: center;
        }
    }
}
</style>
