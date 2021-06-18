<template>
    <div class="container-indiceCard-geral">
        <div class="container-indice-card">
            <div class="indice-card-logo mt-5">
                <img :src="`img/${logo}`" />
            </div>
            <div class="indice-card-empresa">
                {{ nome | firstUp }}
            </div>
            <div class="indice-card-valor">
                <b> R$ </b>
                <p>{{ indice }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ['logo','ticker','nome','indRealTime'],
    data() {
        return {
            indice: '',
        };
    },
    computed: {
        ativos() {
            return this.$store.state.papeis;
        },
    },
    created() {
            
            axios.get(this.indRealTime, {
                headers: {
                    "x-rapidapi-key":
                        "64ca974f09msh9ae7f2bb0908e6fp171a55jsn7c2fe40ccb87",
                    "x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com",
                },
            })
            .then((res) => {
                console.log('dentro created cardindices')
                const dados = res.data;
                this.indice = dados.quoteResponse.result[0].regularMarketPrice
            });
    },
};
</script>

<style lang="scss">
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
        padding: 20px;
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
        font-size: 1.2rem

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
