<template>
    <div id="app">
        <NavHeader />

        <div class="menu">
            <b-button @click="abrirModal" class="is-info indBtn">Ativo <i class="fas fa-plus-circle"></i></b-button>

            <router-link to="/" noDeco>
                <b-button class="is-info indBtn">
                    <i class="fas fa-dollar-sign mr-2"></i>Meus Ativos
                </b-button>
            </router-link>

            <span class="mx-5" style="fontSize: 1.6rem">
                <i class="fas fa-chart-line"></i>
            </span>

            <router-link to="/Indices" noDeco>
                <b-button class="is-info indBtn">
                    Índices<i class="fas fa-chart-area ml-2"></i>
                </b-button>
            </router-link>

            <b-button class="is-info indBtn">IBOV 0%</b-button>
        </div>
        <transition
            mode="out-in"
            enter-active-class="animate__animated animate__zoomIn animate__faster"
            leave-active-class="animate__animated animate__zoomOut animate__faster"
        >
            <router-view />
        </transition>
        
    </div>
</template>

<script>
import NavHeader from "@/components/NavHeader";

export default {
    components: { NavHeader },
    data() {
        return {
        };
    },
    methods: {
        abrirModal() {
            return this.$store.dispatch("abrirFecharModal");
        }
    },
    created() {
            this.$http.get("data.json").then((res) => {
                const papel = res.data;
                this.$store.dispatch("addPapel", papel);
            })
    }
}

</script>

<style lang="scss">

body {
    background-color: black;
}
#app {
    margin: auto;
    background-color: lightgray;
    height: 100vh;

    .menu {
        display: flex;
        background-color: black;
        justify-content: center;
        align-items: center;
        color: white;

        a {
            margin: 5px;
            font-family: $fontePadrao;
            padding: 5px;
            border-radius: 10px;
        }

        .indBtn {
            margin: 5px 10px;
            font-family: $fontePadrao;
        }
    }
}
</style>
