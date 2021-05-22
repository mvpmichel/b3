<template>
    <div class="container-indiceCard-geral">
            <div
                class="container-indice-card"
                v-for="ativo in ativos"
                :key="ativo.ticker"
            >
                <div class="indice-card-logo mt-5">
                    <img :src="`img/${ativo.logo}`" />
                </div>
                <div class="indice-card-empresa">
                    {{ ativo.nome }}
                </div>
                <div class="indice-card-valor">
                    <b> R$ </b>
                    <input type="text" @keyup.enter="submit" v-model.trim="ativo.indAtual" />
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ativos: this.$store.state.papeis,
        };
    },
};
</script>

<style lang="scss">
@import "@/variables/_variables.scss";

.container-indiceCard-geral {
    border-radius: 10px;
    display: flex;

    .container-indice-card {
        display: flex;
        flex-direction: column;
        max-width: 200px;
        justify-content: space-between;
        align-items: center;
        margin: 5px;
        background-color: white;
        border-radius: 10px;
        border: 5px solid $cinzaFundo;
    }

    .indice-card-logo {
        width: 64px;

        img {
            border: 1px solid black;
            border-radius: 10px;
            width: 100%;
        }
    }

    .indice-card-empresa {
        font-family: $fonteCard;
        font-size: 1.6rem;
    }

    .indice-card-valor {
        margin: 5px 10px 15px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        font-family: $fonteSifrao;

        input {
            border: none;
            background-color: none;
            text-align: center;
            width: 35%;
            font-size: 1.5rem;
            font-family: $fonteCard;
        }
    }
}
@media (max-width: 1024px) {
        .container-indiceCard-geral {
            flex-direction: column;
        }
}
</style>
