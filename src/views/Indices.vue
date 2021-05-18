<template>
    <div class="container-indices mt-5">
        <div class="container-indices-title">
            <span>Índices</span>
            <i class="fas fa-chart-area ml-2"></i>
        </div>
        <div class="component-card-indice">
            <CardIndices />
        </div>
    </div>
</template>

<script>
import CardIndices from "@/components/CardIndices";

export default {
    components: { CardIndices },
};
</script>

<style lang="scss">
@import "@/variables/_variables.scss";

.container-indices {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    background-color: lightgray;

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

    .component-card-indice {
        display: flex;
        justify-content: center;
    }

}
</style>
