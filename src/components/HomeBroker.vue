<template>
    <div class="container-hb mt-5">
        <div class="container-hb-title">
            <span>Meus Ativos</span>
            <i class="fas fa-dollar-sign mr-2"></i>
        </div>
        <div class="ativos-hb">
            <Card :key="componentKey" />
        </div>
        <ModalAddAtivo />
    </div>
</template>

<script>
import Card from "./Card";
import ModalAddAtivo from "@/components/ModalAddAtivo";

export default {
    components: { Card, ModalAddAtivo },
    data(){
       return {
           componentKey: 0
       }
    },
}
</script>

<style lang="scss">
.container-hb {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

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
}
</style>
