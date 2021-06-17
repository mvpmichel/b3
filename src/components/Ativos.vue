<template>
    <div class="container-hb mt-5">
        <div class="container-hb-title">
            <span>Meus Ativos</span>
            <i class="fas fa-dollar-sign mr-2"></i>
        </div>
        <div class="container-hb-ativos">
            <section v-for="(papel, id) in papeis" :key="id">
                <Card
                    :nome="papel.nome"
                    :ticker="papel.ticker"
                    :qtde="papel.qtde"
                    :pm="papel.pm"
                    :logo="papel.logo"
                    :id="id"
                    :indRealTime="papel.indRealTime"
                    :accPT="accPT"
                    :accCusto="accCusto"
                    @somaPat="accPT = $event"
                    @somaCusto="accCusto = $event"
                ></Card>
            </section>
        </div>
        <ModalAddAtivo />
    </div>
</template>

<script>
import Card from "@/components/Card";
import ModalAddAtivo from "@/components/ModalAddAtivo";

export default {
    components: { Card, ModalAddAtivo },
    data() {
        return {
            accPT: 0,
            accCusto: 0

        }
    },

    computed: {
        papeis() {
            return this.$store.state.papeis;
        },        
    },
    updated() {
        this.$store.dispatch('valorPatrimonio', this.accPT)
        this.$store.dispatch('valorCusto', this.accCusto)
    }
};
</script>

<style lang="scss">
.container-hb {
    display: flex;
    flex-direction: column;

    .container-hb-title {
        text-align: center;
        font-size: 1.6rem;

        span {
            font-family: $fonteCard;
            &:first-child {
                margin-right: 5px;
            }
        }
    }

    .container-hb-ativos {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
}
</style>
