<template>
    <div class="container-hb mt-5">
        <div class="container-hb-title">
            <span>Meus Ativos</span>
            <i class="fas fa-dollar-sign mr-2"></i>
        </div>
        <div>
            <Card />
        </div>
    </div>
</template>

<script>
import Card from "./Card";
export default {
    components: { Card },
};
</script>

<style lang="scss">
@import "@/variables/_variables.scss";

.container-hb {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .container-hb-title {
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
